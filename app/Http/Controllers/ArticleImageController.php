<?php

namespace Rewrite\Http\Controllers;

use Auth;
use File;
use Storage;
use Carbon\Carbon;
use Rewrite\ArticleImage;
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

    /**
     * Deletes an image from the server.
     * 
     * @param $request - an array of image id's.
     */
    public function destroy(Request $request)
    {
        foreach ($request['images'] as $image) {
            $image = ArticleImage::find($image['id']);

            Storage::delete(str_replace('storage', 'public', $image->url));

            $image->delete();
        }

        return response()->json(['message' => 'Images deleted successfully'], 200);
    }
}
