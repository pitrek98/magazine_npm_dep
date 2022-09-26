<?php

use App\Http\Controllers\Categories\CategoriesController;
use App\Http\Controllers\Categories\CategoryController;
use Illuminate\Support\Facades\Route;

Route::get("list", [CategoriesController::class, 'list']);
Route::post("create", [CategoryController::class, 'create']);
Route::put("update/{id}", [CategoryController::class, 'update']);
Route::delete("destroy/{id}", [CategoryController::class, 'destroy']);
