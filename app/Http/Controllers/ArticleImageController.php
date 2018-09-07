<?php

namespace Shift\Http\Controllers;

use Auth;
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

        $image    = $request->file('image');
        $fileName = Carbon::now()->timestamp . '_' . uniqid() . '.' . $image->getClientOriginalExtension();
        $filePath = storage_path('/images/' . Auth::id() . '/');

        if (! File::isDirectory($filePath)) {
            File::makeDirectory($filePath, 0777, true, true);
        }

        Image::make($request->get('image'))->save($filePath . $fileName);

        ArticleImage::create([
            'url'     => $filePath  . $fileName,
            'user_id' => Auth::id(),
        ]);

        return 'Uploaded successfully.';

        // If there is no folder for this user. Create one first.


        // Store the image.


    }
}
