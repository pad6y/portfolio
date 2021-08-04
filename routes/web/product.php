<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

Route::prefix('product')->name('product.')->group(function () {
  Route::get('/', [ProductController::class, 'index'])->name('index');
  Route::post('/create', [ProductController::class, 'store'])->name('store');
  Route::get('/{product}/show', [ProductController::class, 'show'])->name('show');
  Route::get('/{product}', [ProductController::class, 'edit'])->name('edit');
  Route::put('/{product}/update', [ProductController::class, 'update'])->name('update');
  Route::delete('/{product}/delete', [ProductController::class, 'destroy'])->name('destroy');
});
