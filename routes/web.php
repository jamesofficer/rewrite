<?php

Route::get('/', function () {
    return view('home/home');
})->name('home');

Route::get('/home', function () {
    return redirect(route('create-article'));
});

Auth::routes();

Route::get('/articles', 'ArticleController@index')->name('users-articles');

Route::middleware('auth')->prefix('article')->group(function () {
    $this->get('create', 'ArticleController@create')->name('create-article');
    $this->post('store', 'ArticleController@store')->name('store-article');
    $this->post('destroy', 'ArticleController@destroy')->name('destroy-article');
    $this->post('check-exists', 'ArticleController@checkArticleExists')->name('check-article-exists');
});

/**
 * API Routes. A ghetto version of them at least, who needs an auth token anyway?
 */
Route::prefix('api')->group(function () {
    $this->get('images', 'ArticleImageController@index');
    $this->post('images/store', 'ArticleImageController@store');
    $this->post('images/destroy', 'ArticleImageController@destroy');
});

