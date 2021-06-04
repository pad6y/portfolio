<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Projects/Index', [
            'projects' => Project::get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Projects/Create');
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
            'project_name' => 'required|min:4|max:25',
            'project_type' => 'required|min:8|max:25',
            'description' => 'required|min:8|max:255',
            'url_link' => 'url',

        ]);

        Project::create([
            'project_name' => $request->input('project_name'),
            'project_type' => $request->input('project_type'),
            'description' => $request->input('description'),
            'url_link' => $request->input('url_link'),

        ]);

        return redirect()->route('projects.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        return Inertia::render('Admin/Projects/Edit', ['project' => $project]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project)
    {
        $request->validate([
            'project_name' => 'required|min:4|max:25',
            'project_type' => 'required|min:8|max:25',
            'description' => 'required|min:8|max:255',
            'url_link' => 'url',

        ]);

        $project->update([
            'project_name' => $request->input('project_name'),
            'project_type' => $request->input('project_type'),
            'description' => $request->input('description'),
            'url_link' => $request->input('url_link'),

        ]);

        return redirect()->route('projects.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        //
    }
}
