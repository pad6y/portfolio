<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use App\Models\FooterLinks;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $footerLinks = FooterLinks::get();
        $products = Product::get();

        return Inertia::render('eCommerce/ManageProducts', ['products' => $products, 'footerLinks' => $footerLinks]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'product_name' => 'required|min:8|max:124',
            'gender' => 'required|min:4|max:6',
            'product_code' => 'required|min:8|max:10',
            'product_price' => 'required|numeric',
            'product_description' => 'required|min:8|max:255',
            'product_image' => ['required', 'image']
        ]);

        Product::create([
            'user_id' => Auth::id(),
            'product_name' => $request->input('product_name'),
            'gender' => $request->input('gender'),
            'product_code' => $request->input('product_code'),
            'product_price' => $request->input('product_price'),
            'product_description' => $request->input('product_description'),
            'product_image' => $request->file('product_image') ? $request->file('product_image')->store('images/product', 'public') : null
        ]);

        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return Inertia::render('eCommerce/EditShow/ShowProduct', ['product' => $product]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        return Inertia::render('eCommerce/EditShow/EditProduct', ['product' => $product]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $product = Product::findOrFail($product->id);

        if ($product->product_image != null) {
            $image = DB::table('products')->where('id', $product->id)->first();
            $file = $image->product_image;

            $filename = public_path() . '/storage' . $file;
            File::delete($filename);
        }

        $request->validate([
            'product_name' => 'required|min:8|max:124',
            'gender' => 'required|min:4|max:6',
            'product_code' => 'required|min:8|max:10',
            'product_price' => 'required|numeric',
            'product_description' => 'required|min:8|max:255',
            'product_image' => ['nullable', 'URL']
        ]);

        $product->update([
            'user_id' => Auth::id(),
            'product_name' => $request->input('product_name'),
            'gender' => $request->input('gender'),
            'product_code' => $request->input('product_code'),
            'product_price' => $request->input('product_price'),
            'product_description' => $request->input('product_description'),
            'product_image' => $request->file('product_image') ? $request->file('product_image')->store('images/product', 'public') : $product->product_image
        ]);

        return redirect()->route('product.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return back();
    }
}
