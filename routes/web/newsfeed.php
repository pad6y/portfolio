<?php

use Illuminate\Support\Facades\Route;




Route::middleware('auth:sanctum')->group(function () {
  // Route::get('/newsfeed/posts', [App\Http\Controllers\PostController::class, 'index'])->name('newsfeed.index');
  Route::get('/newsfeed', [App\Http\Controllers\PostController::class, 'index'])->name('newsfeed.index');
  Route::get('/newsfeed/create', [App\Http\Controllers\PostController::class, 'create'])->name('newsfeed.create');
  Route::post('/newsfeed/create', [App\Http\Controllers\PostController::class, 'store'])->name('newsfeed.store');
  Route::get('/newsfeed/{post}', [App\Http\Controllers\PostController::class, 'show'])->name('newsfeed.show');

  Route::delete('/newsfeed/{post}/delete', [App\Http\Controllers\PostController::class, 'destroy'])->name('newsfeed.destroy');
});
