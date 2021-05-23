<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::resource('users', UserController::class)->only(['index', 'show', 'update']);
// Route::prefix('users')->name('users.')->group(function () {
//   Route::get('/', [UserController::class, 'index'])->name('index');
//   Route::get('/{user}', [UserController::class, 'show'])->name('show');
//   Route::patch('/{user}', [UserController::class, 'update'])->name('update');
// });
