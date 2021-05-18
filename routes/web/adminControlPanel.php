<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AdminControlPanelController;

Route::name('AdminControlPanel.')->group(function () {

  Route::get('/controlpanel', [AdminControlPanelController::class, 'index'])->name('index');

  Route::resource('roles', RoleController::class)->except('edit');

  Route::resource('admins', AdminController::class)->parameters([
    'admins' => 'user'
  ])->only('index', 'show', 'update');

  // Route::prefix('admins')->name('admins.')->group(function () {
  //   Route::get('/', [AdminController::class, 'index'])->name('index');
  //   Route::get('/{user}', [AdminController::class, 'show'])->name('show');
  //   Route::patch('/{user}', [AdminController::class, 'update'])->name('update');
  // });

  // Route::prefix('roles')->name('roles.')->group(function () {
  //   Route::get('/', [RoleController::class, 'index'])->name('index');
  //   Route::post('/', [RoleController::class, 'store'])->name('store');
  //   Route::get('/create', [RoleController::class, 'create'])->name('create');
  //   Route::get('/{role}', [RoleController::class, 'show'])->name('show');
  //   Route::patch('/{role}', [RoleController::class, 'update'])->name('update');
  //   Route::delete('/{role}', [RoleController::class, 'destroy'])->name('destroy');
  // });
});
