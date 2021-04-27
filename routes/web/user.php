<?php

use Illuminate\Support\Facades\Route;

Route::get('/user/{user}', [App\Http\Controllers\UserController::class, 'show'])->name('user.show');
