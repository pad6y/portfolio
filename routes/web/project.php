<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;


Route::prefix('projects')->name('projects.')->group(function () {
  Route::get('/', [ProjectController::class, 'index'])->name('index');
  Route::get('/create', [ProjectController::class, 'create'])->name('create');
  Route::post('/create', [ProjectController::class, 'store'])->name('store');
});
