<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $posts = Post::with('user')->orderBy("created_at", "DESC")->paginate(20);
        if ($request->wantsJson()) {
            return $posts;
        }

        return Inertia::render('NewsfeedLayout', ['posts' => $posts]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Newsfeed/create');
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
            'title' => 'required|min:8|max:255',
            'body' => 'required|min:8|max:255',
            'post_image' => ['nullable', 'image']
        ]);

        Post::create([
            'user_id' => Auth::id(),
            'title' => $request->input('title'),
            'body' => $request->input('body'),
            'post_image' => $request->file('post_image') ? $request->file('post_image')->store('images/post', 'public') : null
        ]);

        return redirect()->route('newsfeed.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        //can do it this way but inertia unnecesary
        $user = User::find($post->user_id);
        $username = $user->name;
        return Inertia::render('Newsfeed/Article', ['post' => $post, 'username' => $username]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        return Inertia::render('Newsfeed/edit', ['post' => $post]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {

        //retrieve post
        $post = Post::findOrFail($post->id);

        if ($post->post_image != null) {
            //retrieve image with out attributes
            $image = DB::table('posts')->where('id', $post->id)->first();
            $file = $image->post_image;

            //identify image location and delete 
            $filename = public_path() . '/storage/' . $file;
            File::delete($filename);
        }


        $request->validate([
            'title' => 'required|min:8|max:255',
            'body' => 'required',
            'post_image' => ['nullable', 'image']
        ]);

        $post->update([
            'user_id' => $post->user_id,
            'title' => $request->input('title'),
            'body' => $request->input('body'),
            'post_image' => $request->file('post_image') ? $request->file('post_image')->store('images/post', 'public') : $post->post_image
        ]);

        // $this->authorize('update', $post);

        return redirect()->route('newsfeed.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        //retrieve post
        $post = Post::findOrFail($id);

        //retrieve image with out attributes
        $image = DB::table('posts')->where('id', $id)->first();
        $file = $image->post_image;

        //identify image location and delete 
        $filename = public_path() . '/storage/' . $file;
        File::delete($filename);

        //delete the post
        $post->delete();


        return back();
    }
}
