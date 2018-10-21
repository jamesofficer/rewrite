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
     * Deletes an article from the database.
     * 
     * @return void
     */
    public function destroy(Request $request)
    {
        $article = Article::find($request['article_id']);

        if (is_null($article)) {
            return response()->json([
                'message' => 'Sorry, could not delete that article as we couldn\'t find it.',
            ], 404);
        }

        $article->delete();

        return response()->json([
            'message' => 'Article deleted successfully.',
        ], 200);
    }
}
