<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreatePostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Models\PostsComment;
use App\Models\Comment;
use App\Models\UsersComment;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Queries\PostsQuery;
use LengthException;

class PostController extends Controller
{
    public function index(): Response
    {
        $this->authorize('viewAny',Post::class);
        $query = new PostsQuery();
        $posts = $query->getAllPosts();

        return Inertia::render('Posts/Index', [
            'posts' => PostResource::collection($posts)
        ]);
    }

    public function create(): Response
    {
        $this->authorize('create',Post::class);
        return Inertia::render('Posts/Create');
    }

    public function store(CreatePostRequest $request): RedirectResponse
    {
        $this->authorize('create',Post::class);
        // Varios posts pueden ser publicados por un usuario
        $request->user()->posts()->create($request->validated());

        return to_route('posts.index');
    }

    public function edit(Post $post): Response
    {
        $this->authorize('update', $post);
        return Inertia::render('Posts/Edit', [
            'post' => new PostResource($post)
        ]);
    }

    public function show(Post $post): Response
    {
        // Consigo los id de los comentarios dentro del post
        $post_comments = PostsComment::where('posts_id', $post->id)->get();
        
        // Reviso que e Post tiene comemtarios, si los tiene continua y si no evita el intentar buscarlo
        $num_posts_comments = count($post_comments);

        if($num_posts_comments == 0){
            return Inertia::render('Blog/Show', ['post' => $post]);
        } else{
            // Consigo la informacion de los comentarios
            for ($i = 0; $i < $num_posts_comments; $i++) {
                // Busco el comentario con los ids que encontre antes
                $comment = Comment::where('id', $post_comments[$i]->comments_id)->get();

                // Guardo el primer dato del array que me devuelve el get en la variable
                $comments[] = $comment[0];
            }

            // Consigo los id de los usuarios que comentaron
            for ($i = 0; $i < $num_posts_comments; $i++) {
                // Busco el id del usuario con los ids que encontre antes en comments
                $user_id = UsersComment::where('comments_id', $comments[$i]->id)->get();
                
                // Guardo el primer dato del array que me devuelve el get en la variable
                $users_id[] = $user_id[0]->users_id;
            }
            
            // Consigo la informacion de los usuarios
            for ($i = 0; $i < $num_posts_comments; $i++) {
                // Busco el usuario con los ids que encontre antes
                // dd($users_id);
                $usuario = User::where('id', $users_id[$i])->get();
                
                // Guardo el primer dato del array que me devuelve el get en la variable
                $usuarios[] = $usuario[0];
            }   

            return Inertia::render('Blog/Show', ['post' => $post, 'comments' => $comments, 'usuarios' => $usuarios]);
        }
        
    }

    public function update(CreatePostRequest $request, Post $post): RedirectResponse
    {
        $this->authorize('update', $post);
        $post->update($request->validated());

        return to_route('posts.index');
    }

    public function destroy(Post $post): RedirectResponse
    {
        $this->authorize('delete', $post);
        $post->delete();
        return back();
    }
    
    public function view(Post $post): Response
    {
        $posts = Post::get();

        // dd($posts);

        return Inertia::render('Blog/Index', ['posts' => $posts]);
    }

}
