<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $users = User::where('is_admin', 0)->get();

        if (Gate::allows('accessUsers')) {
            return Inertia::render('Admin/Users/Index', [
                'users' => User::where('is_admin', 0)->when($request->term, function ($query, $term) {
                    $query->where('name', 'LIKE', '%' . $term . '%');
                })->get()
            ]);
        }
        return back();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        if (Gate::allows('accessUsers')) {
            return Inertia::render('Admin/Users/UserProfile', [
                'user' => $user,
                'allRoles' => Role::all()
            ]);
        }
        return back();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        if (Gate::allows('manageUsers')) {
            $role = Role::where('name', $request->roles[0][0]['name'])->first();

            if ($user->is_admin != 1 && $role->name != 'user') {
                $user->roles()->sync($role);
                $user->update(['is_admin' => 1]);
            }
            return redirect()->route('users.index');
        }
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function purchase(Request $request)
    {
        $user = User::firstOrCreate(
            [
                'email' => $request->input('email')
            ],
            [
                'password' => Hash::make(Str::random(12)),
                // 'name' => $request->input('name') . ' ' . $request->input('last_name'),
                // 'address' => $request->input('address'),
                // 'city' => $request->input('city'),
                // 'state' => $request->input('state'),
                // 'zip_code' => $request->input('zip_code')
            ]
        );

        try {
            $payment = $user->charge(
                $request->input('amount'),
                $request->input('payment_method_id')
            );

            $payment = $payment->asStripePaymentIntent();

            $order = $user->orders()
                ->create([
                    'transaction_id' => $payment->charges->data[0]->id,
                    'total' => $payment->charges->data[0]->amount
                ]);

            foreach (json_decode($request->input('cart'), true) as $item) {
                $order->products()
                    ->attach($item['id'], ['qty' => $item['qty']]);
            }

            $order->load('products');

            return Inertia::render('eCommerce/Summary', ['orderDetails' => $order]);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
