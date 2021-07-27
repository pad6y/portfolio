<?php

use Illuminate\Support\Facades\Route;




Route::name('newsfeed.')->group(function () {
  // Route::get('/newsfeed/posts', [App\Http\Controllers\PostController::class, 'index'])->name('newsfeed.index');
  Route::get('/newsfeed', [App\Http\Controllers\PostController::class, 'index'])->name('index');
  Route::get('/newsfeed/create', [App\Http\Controllers\PostController::class, 'create'])->name('create');
  Route::post('/newsfeed/create', [App\Http\Controllers\PostController::class, 'store'])->name('store');
  Route::get('/newsfeed/{post}', [App\Http\Controllers\PostController::class, 'show'])->name('show');

  Route::put('/newsfeed/{post}/update', [App\Http\Controllers\PostController::class, 'update'])->name('update');
  Route::get('/newsfeed/{post}/edit', [App\Http\Controllers\PostController::class, 'edit'])->name('edit');


  Route::delete('/newsfeed/{id}/delete', [App\Http\Controllers\PostController::class, 'destroy'])->name('destroy');
});
