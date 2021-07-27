<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

Route::prefix('product')->name('product.')->group(function () {
  Route::get('/', [ProductController::class, 'index'])->name('index');
  Route::get('/create', [ProductController::class, 'create'])->name('create');
  Route::post('/create', [ProductController::class, 'store'])->name('store');
  Route::get('/{product}', [ProductController::class, 'show'])->name('show');
  Route::patch('/{product}', [ProductController::class, 'update'])->name('update');
});
