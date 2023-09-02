<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCategoryRequest;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{

    public function index()
    {
        // $this->authorize('viewAny', Category::class);
        $category = Category::all();

        return Inertia::render('Category/Index', [
            'category' => $category
        ]);
    }


    public function create()
    {
        //$this->authorize('create', Category::class);
        return Inertia::render('Category/Create');
    }


    public function store(CreateCategoryRequest $request)
    {
       // $this->authorize('create', Category::class);
        Category::create($request->validated());

        return to_route('category.index');
    }


    public function edit(Category $category)
    {
       // $this->authorize('update', $category);
        return Inertia::render('Category/Edit', [
            'category' => $category
        ]);
    }


    public function update(CreateCategoryRequest $request, Category $category)
    {
      //  $this->authorize('update', $category);
        $category->update($request->validated());

        return to_route('category.index');
    }


    public function destroy(Category $category)
    {
      //  $this->authorize('delete', $category);
        $category->delete();
        return back();
    }
}
