<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Gate::allows('accessAdmins')) {
            $admins = User::where('is_admin', 1)->get();
            return Inertia::render('Admin/Admins/Index', [
                'admins' => $admins,
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
     * @param  \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        if (Gate::allows('manageAdmins')) {
            return Inertia::render('Admin/Admins/Show', [
                'admin' => $user,
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
        if (Gate::allows('manageAdmins')) {
            $role = Role::where('name', $request->roles[0][0]['name'])->first();

            if ($role->name != 'user' && $user->is_admin = 1) {
                $user->roles()->sync($role);
            } elseif ($role->name = 'user' && $user->is_admin = 1) {
                $user->roles()->sync($role);
                $user->update(['is_admin' => 0]);
            }
            return redirect()->route('AdminControlPanel.admins.index');
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
}
