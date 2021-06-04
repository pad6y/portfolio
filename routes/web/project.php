<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;


Route::prefix('projects')->name('projects.')->group(function () {
  Route::get('/', [ProjectController::class, 'index'])->name('index');
  Route::get('/create', [ProjectController::class, 'create'])->name('create');
  Route::post('/create', [ProjectController::class, 'store'])->name('store');
  Route::get('/{project}', [ProjectController::class, 'show'])->name('show');
  Route::patch('/{project}', [ProjectController::class, 'update'])->name('update');
});
