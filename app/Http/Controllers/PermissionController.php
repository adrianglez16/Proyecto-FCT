<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreatePermissionRequest;
use App\Http\Resources\PermissionResource;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{

    public function index(): Response
    {
        // $this->authorize('viewAny', Permission::class);
        return Inertia::render('Permissions/Index', [
            'permissions' => PermissionResource::collection(Permission::all())
        ]);
    }
    public function create(): Response
    {
      //   $this->authorize('create', Permission::class);
        return Inertia::render('Permissions/Create');
    }


    public function store(CreatePermissionRequest $request): RedirectResponse
    {
      //   $this->authorize('create', Permission::class);
        Permission::create($request->validated());

        return to_route('permissions.index');
    }


    public function show($id)
    {
        //
    }


    public function edit(Permission $permission): Response
    {
       //  $this->authorize('update', $permission);
        return Inertia::render('Permissions/Edit', [
            'permission' => new PermissionResource($permission)
        ]);

      
    }


    public function update(CreatePermissionRequest $request, Permission $permission): RedirectResponse
    {
       //  $this->authorize('update', $permission);
        $permission->update($request->validated());

        return to_route('permissions.index');
    }


    public function destroy(Permission $permission): RedirectResponse
    {
      //   $this->authorize('delete', $permission);
        $permission->delete();

        return back();
    }
}
