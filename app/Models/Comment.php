<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    // Varios comentarios están dentro de un post
    public function post()
    {
        return  $this->belongsTo(Post::class);
    }

    // Varios comentarios están hechos por un usuario
    public function userComment()
    {
        return  $this->belongsToMany(User::class);
    }

    // comentarios de scape rooms
    public function scape_room()
    {
        return  $this->belongsToMany(Scape_room::class);
    }
}
