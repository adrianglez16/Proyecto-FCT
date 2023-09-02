<?php

namespace App\Queries;

use App\Models\User;
use Illuminate\Http\Request;

class UsersQuery
{
    public function getAllUsers()
    {
        $query = User::all();

        return $query;
    }

    public function getUserById($id){
        
        $query = User::find($id);

        return $query;
    }
    
    public function deleteUser($id)
    {
        $query = User::find($id)->delete();

        return $query;
    }

        public function updateAvatar(Request $request, $user)
        {
            $carpeta = 'public/assets/img/';
            $imagen = $request->file('image');
            $nombre_imagen = $imagen->getClientOriginalName();
            $request->file('image')->storeAs($carpeta, $nombre_imagen);
        
            $result = User::where('id', $user->id)->first();
            $result->avatar = $nombre_imagen;
            $result->save();
            return $result;
        }

        //usuario hace varios comentarios
        public function getCommentsUser($id)
        {
            $query = User::find($id)->comments()->get();
            return $query;
        }
    }