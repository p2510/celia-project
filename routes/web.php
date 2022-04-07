<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;

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
    
    return view("Home");
})->name("home");
Route::get('/à-propos', function () {
   
    return view("About");
})->name("about");
Route::get('/nos-formations', function () {
    return view("Formation");
})->name("formation");
Route::get('/Inscription', function () {
    return view("Register");
})->name("register");


Route::post('/Inscription-eleve', [RegisterController::class, 'store'])->name('register.store');

