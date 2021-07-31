<?php

namespace App\Http\Controllers;


use Inertia\Inertia;
use App\Models\Product;
use App\Models\Order;
use App\Models\FooterLinks;
use Illuminate\Http\Request;

class eCommerceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $footerLinks = FooterLinks::get();

        $products = Product::when($request->term, function ($query, $term) {
            $query->where('product_name', 'LIKE', '%' . $term . '%')
                ->orWhere('gender', 'LIKE', '%' . $term . '%');
        })->orderBy('id', "DESC")->paginate(12);
        if ($request->wantsJson()) {
            return $products;
        }
        return Inertia::render('eCommerce/Index', ['products' => $products, 'footerLinks' => $footerLinks]);
    }

    /**
     * Display a form input page for products and url links.
     *
     * @return \Illuminate\Http\Response
     */
    public function adminPanel()
    {
        $footerLinks = FooterLinks::get();

        return Inertia::render('eCommerce/AdminPanel', ['footerLinks' => $footerLinks]);
    }



    /**
     * Show the checkout page.
     *
     * @return \Illuminate\Http\Response
     */
    public function checkout()
    {
        return Inertia::render('eCommerce/Checkout');
    }

    // /**
    //  * Show the summary page.
    //  *
    //  * @return \Illuminate\Http\Response
    //  */
    // public function summary()
    // {
    //     return Inertia::render('eCommerce/Summary');
    // }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'type' => 'required',
            'url' => 'required',

        ]);

        FooterLinks::create([
            'name' => $request->input('name'),
            'type' => $request->input('type'),
            'url' => $request->input('url'),

        ]);

        return back();
    }
}
