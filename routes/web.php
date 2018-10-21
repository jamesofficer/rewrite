<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('login');
});

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
});

