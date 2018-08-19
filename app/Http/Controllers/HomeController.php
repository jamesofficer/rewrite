<?php

namespace Shift\Http\Controllers;

use Auth;
use Shift\Article;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articles = Article::where('user_id', Auth::id())->get();

        return view('home', compact('articles'));
    }
}
