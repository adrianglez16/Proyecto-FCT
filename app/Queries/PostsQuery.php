<?php

namespace App\Queries;

use Illuminate\Support\Facades\DB;
use App\Models\Post;
use App\Models\User;
use App\Models\Comment;
use App\Models\Category;

class PostsQuery
{

    public function getAllPosts()
    {
        $query = DB::table("posts")->get();
        return $query;
    }

    // los comentarios pertenecen a un post
    public function getCommentsPost($id)
    {
        $query = DB::table("comments")->where("post_id", $id)->get();
        return $query;
    }

}
