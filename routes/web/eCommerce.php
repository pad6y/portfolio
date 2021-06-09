<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\eCommerceController;

Route::name('eCommerce.')->group(function () {
  Route::get('/', [eCommerceController::class, 'index'])->name('index');
});
