<?php

namespace Shift\Http\Controllers;

use Auth;
use File;
use Storage;
use Carbon\Carbon;
use Shift\ArticleImage;
use Illuminate\Http\Request;

class ArticleImageController extends Controller
{
    public function index()
    {
        return ArticleImage::where('user_id', Auth::id())->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image'
        ]);

        $filePath = storage_path('public/user-images/' . Auth::id() . '/');

        if (! File::isDirectory($filePath)) {
            File::makeDirectory($filePath, 0777, true, true);
        }

        $pathToFile = Storage::put('public/user-images/' . Auth::id(), $request->file('image'));

        ArticleImage::create([
            'url'     => str_replace('public', '/storage', $pathToFile),
            'user_id' => Auth::id(),
        ]);

        return response()->json([
            'message' => 'Image uploaded successfully!',
        ]);
    }

    public function destroy(Request $request)
    {
        return $request;
    }
}
