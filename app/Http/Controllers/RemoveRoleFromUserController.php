<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Session;

class RemoveRoleFromUserController extends Controller
{
   
    public function __invoke(User $user, Role $role): RedirectResponse
    {
        $user->removeRole($role);
        Session::flash('message', ' Se ha borrado el rol del usuario');
        return back();
    }
}
