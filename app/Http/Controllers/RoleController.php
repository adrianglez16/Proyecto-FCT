<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateRoleRequest;
use App\Http\Resources\PermissionResource;
use App\Http\Resources\RoleResource;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        // $this->authorize('viewAny', Role::class);
        return Inertia::render('Roles/Index', [
            'roles' => RoleResource::collection(Role::all())
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        //   $this->authorize('create', Role::class);
        return Inertia::render('Roles/Create', [
            'permissions' => PermissionResource::collection(Permission::all())
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateRoleRequest $request)
    {
        //  $this->authorize('create', Role::class);
        $role = Role::create(['name' => $request->name]);

        // si el request tiene permisos
        if ($request->has('permissions')) {
            // sincronizar los permisos
            $role->syncPermissions($request->input('permissions.*.name'));
        }
        return redirect()->route('roles.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //    $this->authorize('update', Role::class);
        $role = Role::findById($id);
        $role->load('permissions');
        // devuelvo la vista con el rol y los permisos que tiene
        return Inertia::render('Roles/Edit', [
            'role' => new RoleResource($role),
            'permissions' => PermissionResource::collection(Permission::all())
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CreateRoleRequest $request, string $id)
    {
        //   $this->authorize('update', Role::class);
        $role = Role::findById($id);
        $role->update([
            'name' => $request->name
        ]);
        $role->syncPermissions($request->input('permissions.*.name'));
        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //   $this->authorize('delete', Role::class);
        $role = Role::findById($id);
        $role->delete();
        return back();
    }
}
