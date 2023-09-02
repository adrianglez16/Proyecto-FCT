<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Post;
use App\Models\Comment;
use App\Models\Scape_room;
use App\Models\PostsComment;
use App\Models\UsersComment;
use App\Models\Scape_roomComment;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(RoleSeeder::class); //llamamos al seeder de roles

        // $this->call(AdminSeeder::class); //llamamos al seeder de admin
        
        $this->call(PermisosSeeder::class); //llamamos al seeder de admin

        // $this->call(EscapeRoomSeeder::class); //llamamos al seeder de admi

        // Post::factory(4)->create();
        // Scape_room::factory(6)->create();
        // User::factory(5)->create();
        // Comment::factory(20)->create();
        // UsersComment::factory(20)->create();
        // PostsComment::factory(10)->create();
        // Scape_roomComment::factory(10)->create();

    }
}
