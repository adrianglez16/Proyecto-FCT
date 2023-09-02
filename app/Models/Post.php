<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'summary',
        'status',
        'user_id'
    ];

    // Varios posts pueden ser publicados por un usuario
    public function user()
    {
        return  $this->belongsTo(User::class);
    }

    // Un post contiene varios comentarios
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    // Varios posts tendrán ninguna o varias categorias
    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
}
