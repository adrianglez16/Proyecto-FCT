<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Scape_room extends Model
{
    use HasFactory;

    // Varios escape rooms serán jugados por varios usuarios
    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    // Varios escape rooms tendrán varios comentarios
    public function comments()
    {
        return $this->belongsToMany(Comment::class);
    }
}
