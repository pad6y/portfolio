<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\eCommerceController;

Route::name('eCommerce.')->group(function () {
  Route::get('/', [eCommerceController::class, 'index'])->name('index');
  Route::get('/admins', [eCommerceController::class, 'adminPanel'])->name('adminPanel');
  Route::post('/admins/create', [ProductController::class, 'store'])->name('product.store');
});
