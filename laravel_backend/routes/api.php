<?php


use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');



Route::get('/', function(){
    return 'API';
});


Route::post('register', [UserController::class, 'register'])
->name('register');

Route::post('login', [UserController::class, 'login'])
->name('login');

Route::post('logout', [UserController::class, 'logout'])
->middleware(['auth:sanctum'])->name('logout');


