<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\DashboardController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('landing');

Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Route::get('/newsfeed', [App\Http\Controllers\PostController::class, 'index'])->name('newsfeed.index');

    // Route::get('/newsfeed', function () {
    //     return Inertia::render('NewsfeedLayout');
    // })->name('newsfeed');
});

// Route::middleware('auth:sanctum')->group(function () {
//     // Route::get('/newsfeed/posts', [App\Http\Controllers\PostController::class, 'index'])->name('newsfeed.index');

//     Route::get('/newsfeed/create', [App\Http\Controllers\PostController::class, 'create'])->name('newsfeed.create');
//     Route::post('/newsfeed/create', [App\Http\Controllers\PostController::class, 'store'])->name('newsfeed.store');
//     Route::get('/newsfeed/{post}', [App\Http\Controllers\PostController::class, 'show'])->name('newsfeed.show');
// });
