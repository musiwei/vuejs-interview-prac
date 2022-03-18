<?php

namespace App\Http\Controllers;

use App\Services\ProductService;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;

class ProductController extends Controller
{
    protected $productService;

    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    public function index(){
        try {
            $records = $this->productService->listAll();
        } catch (QueryException $e) {
            abort(500, 'Failed to load client groups. ');
        }

        return Inertia::render('Product/List', ['products' => $records]);
    }

        /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductRequest $request)
    {
        $validated = $request->validated();

        $this->productService->add($validated);

        return redirect()->route('product.index')->with('success', "New product '{$validated['name']}' added.");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductRequest $request, $id)
    {
        $validated = $request->validated();

        try {
            $this->productService->update($id, $validated);
        } catch (ModelNotFoundException $e) {
            return redirect()->route('product.index')->with('error', $e->getMessage());
        }

        return redirect()->route('product.index')->with('success', "Product updated.");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $this->productService->delete($id);
        } catch (QueryException $e) {
            return redirect()->route('product.index')->with('warning', "Unable to find this product. ");
        }

        return redirect()->route('product.index')->with('success', "Product deleted.");
    }
}
