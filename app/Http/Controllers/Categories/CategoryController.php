<?php

namespace App\Http\Controllers\Categories;

use App\Http\Controllers\Controller;
use App\Models\Items\Category;
use App\Services\Categories\CategoryService;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public CategoryService $categoryService;

    public function __construct(CategoryService $categoryService)
    {
        $this->categoryService = $categoryService;
    }

    public function update($id, Request $request)
    {
        $newCategory = $request->get("category");
        $this->categoryService->update($id, $newCategory);
    }

    public function create(Request $request)
    {
        $category = $request->get("category");
        $this->categoryService->create($category);
    }

    public function destroy($id)
    {
        $this->categoryService->destroy($id);
    }
}
