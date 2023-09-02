<?php

namespace App\Queries;

use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesQuery
{
    public function getAllRoles()
    {
        $query = Role::all();

        return $query;
    }

    public function getAllPermissions()
    {
        $query = Permission::all();

        return $query;
    }

    public function getRoleById($id)
    {
        $query = Role::find($id);

        return $query;
    }

    public function getRolePermissions($id)
    {
        // recupera los permisos asignados al rol
        $query = DB::table("role_has_permissions")->where("role_has_permissions.role_id", $id)
            // recupera los valores de la columna permission_id y los asigna a la columna permission_id
            ->pluck('role_has_permissions.permission_id', 'role_has_permissions.permission_id')
            ->all();

        return $query;
    }

    public function deleteRole($id)
    {
        $query = DB::table("roles")->where('id', $id)->delete();

        return $query;
    }
}
