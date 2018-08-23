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
Route::get('/article/create', 'ArticleController@create')->name('create-article');
Route::post('/article/store', 'ArticleController@store')->name('store-article');
Route::post('/article/check-exists', 'ArticleController@checkArticleExists')->name('check-article-exists');
