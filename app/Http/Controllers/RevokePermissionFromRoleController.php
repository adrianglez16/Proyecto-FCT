<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Session;

class RevokePermissionFromRoleController extends Controller
{
   
    public function __invoke(Role $role, Permission $permission): RedirectResponse
    {
        $role->revokePermissionTo($permission);
        Session::flash('message', ' Se ha borrado el permiso del rol');
        return back();
    }
}