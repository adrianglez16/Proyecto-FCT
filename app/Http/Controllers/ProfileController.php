<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use App\Queries\UsersQuery;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function index(User $user = null)
    {
        $user = Auth::user();

        return Inertia::render('Profile/Index', ['user' => $user]);
    }


    public function edit(Request $request)
    {
        // dump($request->user()->profile());
        $user = Auth::user();
        return Inertia::render('Profile/Edit', ['user' => $user]);
    }


    public function update(ProfileUpdateRequest $request)
    {
        $user = Auth::user();
        $query = new UsersQuery();

        if ($request->hasFile('image')) {
            // dd($request->hasFile('image')); die();
            if ($_FILES['image']['type'] == "image/jpeg" || $_FILES["image"]["type"] == "image/png" || $_FILES['image']['type'] == "image/jpg") {
                $query->updateAvatar($request, $user);
                Session::flash('message', 'Datos y Avatar actualizados correctamente');
            } else {
                Session::flash('errormessage', 'Archivo inválido');
                return back();
            }
        } else {
            $request->user()->fill($request->validated());

            if ($request->user()->isDirty('email')) {
                $request->user()->email_verified_at = null;
            }

            $request->user()->save();

            Session::flash('message', 'Tus datos se han actualizado correctamente');
        }

        return Inertia::render('Profile/Edit', ['user' => $user]);
    }

    public function avatar(Request $request)
    {
        $currentUser = Auth::user();
        $query = new UsersQuery();
        if ($_FILES['avatar']['type'] == "image/jpeg" || $_FILES["avatar"]["type"] == "image/png" || $_FILES['avatar']['type'] == "image/jpg") {
            $query->updateAvatar($request, $currentUser);
            Session::flash('message', 'Avatar actualizado!');
        } else {
            Session::flash('errormessage', 'Archivo inválido');
            return back();
        }
        return back();
    }



    public function show_update_pswd(Request $request)
    {
        $user = Auth::user();
        return Inertia::render('Profile/Update', ['user' => $user]);
    }


    public function update_pswd(Request $request)
    {
        # Validation
        $request->validate([
            'old_password' => 'required',
            'new_password' => 'required|confirmed',
        ]);


        #Match The Old Password
        if (!Hash::check($request->old_password, auth()->user()->password)) {
            return back()->with("errormessage", "Old Password Doesn't match!");
        }


        #Update the new Password
        User::whereId(auth()->user()->id)->update([
            'password' => Hash::make($request->new_password)
        ]);

        return back()->with(Session::flash('message', 'Tu contraseña se ha actualizado correctamente'));
    }


    public function show_destroy(Request $request)
    {
        $user = Auth::user();
        return Inertia::render('Profile/Delete', ['user' => $user]);
    }


    public function destroy(Request $request)
    {
        $request->validateWithBag('userDeletion', [
            'password' => ['required', 'current-password'],
        ]);

        $user = $request->user();

        // $real_user = User::where('user_id', $user->id)->get();


        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/')->with(Session::flash('errormessage', 'Tu usuario se ha borrado correctamente'));
    }


    public function show(User $profile)
    {
       
        $user_id = Auth::id();
        if ($profile->id == $user_id) {
            return redirect('/profile');
        }

        if ($profile == null) {
            return Inertia::render('Profile/Show');
        } else {
            return Inertia::render('Profile/Show', ['profile' => $profile]);
        }
    }
}
