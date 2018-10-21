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

    /**
     * Stores an article in the database. Typically only an title and the json are stored.
     * If an article with a title already exists, the article will be overwritten.
     *
     * @return void
     */
    public function store(Request $request)
    {
        $existingArticle = Article::where('title', $request['title'])->first();

        if ($existingArticle) {
            $existingArticle->update([
                'title' => $request['title'],
                'article_json' => json_encode($request['article_json']),
            ]);
        } else {
            Article::create([
                'user_id' => Auth::id(),
                'title'   => $request['title'],
                'article_json' => json_encode($request['article_json']),
            ]);
        }
    }

    /**
     * When the user saves an article, we need to check if it already exists.
     * or not If it does we return true, otherwise we return false.
     *
     * @return boolean
     */
    public function checkArticleExists(Request $request)
    {
        $article = Article::where('user_id', Auth::id())
                                ->where('title', $request['title'])
                                ->get();

        if ($article->isEmpty()) {
            return response()->json(false);
        }

        return response()->json(true);
    }
}
