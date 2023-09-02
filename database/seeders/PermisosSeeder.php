<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
//spatie
use Spatie\Permission\Models\Permission;

class PermisosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permisos = [
            //roles
            'viewRoles',
            'createRole',
            'updateRole',
            'deleteRole',
            //users
            'viewUsers',
            'createUser',
            'updateUser',
            'deleteUser',
            //posts
            'viewPosts',
            'createPost',
            'updatePost',
            'deletePost',
            //categories
            'viewCategorys',
            'createCategory',
            'updateCategory',
            'deleteCategory',
            //permissions
            'viewPermissions',
            'createPermission',
            'updatePermission',
            'deletePermission',
        ];

        foreach ($permisos as $permiso) {
            Permission::create(['name' => $permiso]);
        }
    }
}
