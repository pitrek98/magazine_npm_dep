<?php

use App\Http\Controllers\Categories\CategoriesController;
use App\Http\Controllers\Categories\CategoryController;
use App\Http\Controllers\Items\ItemController;
use App\Http\Controllers\Items\ItemsController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

Route::get('/{any}', function () {
    return view('welcome');
})->where("any", ".*");

Route::get('/oskarkoks', function () {
    return response()->json(['message' => "Wiadomość"]);
});

Route::get("categories/list", [CategoriesController::class, 'list']);

Route::post("categories/create", [CategoryController::class, 'create']);

Route::get("categories/get/{id}", [CategoryController::class, 'get']);
Route::delete("categories/destroy/{id}", [CategoryController::class, 'destroy']);
Route::put("categories/update/{id}", [CategoryController::class, 'update']);

Route::get("items/list", [ItemsController::class, 'list']);
Route::post("items/create", [ItemController::class, 'create']);
Route::get("items/get/{id}", [ItemController::class, 'get']);
Route::delete("items/destroy/{id}", [ItemController::class, 'destroy']);
Route::put("items/update/{id}", [ItemController::class, 'update']);

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
