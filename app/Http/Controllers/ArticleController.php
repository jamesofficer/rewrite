<?php

namespace Shift\Http\Controllers;

use Auth;
use Session;
use Shift\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return Article::where('user_id', Auth::id())->get();
    }

    public function create()
    {
        return view('article.create');
    }

    public function store(Request $request)
    {
        $articleJson = json_encode($request['article_json']);

        $article = Article::create([
            'user_id' => Auth::id(),
            'title'   => 'Some Article name.',
            'article_json' => $articleJson,
        ]);

        Session::flash('success', 'Article saved successfully!');
    }
}
