<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
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

Route::put('/', [DashboardController::class, 'sendEmail'])->name('sendEmail');
// Route::middleware(['auth:sanctum', 'verified'])->group(function () {
//     Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
// });

Route::middleware(['auth:sanctum', 'verified', 'can:accessAdmins'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

Route::group(['middleware' => config('fortify.middleware', ['web'])], function () {

    $limiter = config('fortify.limiters.login');

    Route::post('/login', [AuthenticatedSessionController::class, 'store'])
        ->middleware(array_filter([
            'guest',
            $limiter ? 'throttle:' . $limiter : null,
        ]));
});
