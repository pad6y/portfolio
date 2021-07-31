<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\eCommerceController;

Route::name('eCommerce.')->group(function () {
  Route::get('/', [eCommerceController::class, 'index'])->name('index');
  Route::get('/admins', [eCommerceController::class, 'adminPanel'])->name('adminPanel');
  Route::post('/admins/create', [ProductController::class, 'store'])->name('product.store');
  Route::post('/admins/footer_links', [eCommerceController::class, 'store'])->name('footerLink.store');
  Route::get('/checkout', [eCommerceController::class, 'checkout'])->name('checkout');
  Route::get('/orders', [OrderController::class, 'index'])->name('orders');
  Route::post('/checkout', [UserController::class, 'purchase'])->name('purchase');

  // Route::get('/summary', [eCommerceController::class, 'summary'])->name('summary');
});
