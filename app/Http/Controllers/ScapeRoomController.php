<?php

namespace App\Http\Controllers;

use App\Models\Scape_room;
use App\Models\Scape_roomComment;
use App\Models\Comment;
use App\Models\UsersComment;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ScapeRoomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $SRs = Scape_room::get();

        // dd($SRs);

        return Inertia::render('EscapeRoom/Index', ['SRs' => $SRs]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Scape_room  $scape_room
     * @return \Illuminate\Http\Response
     */
    public function show(Scape_room $scape_room)
    {
        // Consigo los id de los comentarios dentro del scaperoom
        $sr_comments = Scape_roomComment::where('scape_rooms_id', $scape_room->id)->get();
        
        // Reviso que e SR tiene comemtarios, si los tiene continua y si no evita el intentar buscarlo
        $num_sr_comments = count($sr_comments);

        if($num_sr_comments == 0){
            return Inertia::render('Blog/Show', ['SR' => $scape_room]);
        } else{
            // Consigo la informacion de los comentarios
            for ($i = 0; $i < $num_sr_comments; $i++) {
                // Busco el comentario con los ids que encontre antes
                $comment = Comment::where('id', $sr_comments[$i]->comments_id)->get();

                // Guardo el primer dato del array que me devuelve el get en la variable
                $comments[] = $comment[0];
            }

            // Consigo los id de los usuarios que comentaron
            for ($i = 0; $i < $num_sr_comments; $i++) {
                // Busco el id del usuario con los ids que encontre antes en comments
                $user_id = UsersComment::where('comments_id', $comments[$i]->id)->get();
                
                // Guardo el primer dato del array que me devuelve el get en la variable
                $users_id[] = $user_id[0]->users_id;
            }
            
            // Consigo la informacion de los usuarios
            for ($i = 0; $i < $num_sr_comments; $i++) {
                // Busco el usuario con los ids que encontre antes
                // dd($users_id);
                $usuario = User::where('id', $users_id[$i])->get();
                
                // Guardo el primer dato del array que me devuelve el get en la variable
                $usuarios[] = $usuario[0];
            }   
        }
        
        return Inertia::render('EscapeRoom/Show', ['SR' => $scape_room, 'comments' => $comments, 'usuarios' => $usuarios]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Scape_room  $scape_room
     * @return \Illuminate\Http\Response
     */
    public function edit(Scape_room $scape_room)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Scape_room  $scape_room
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Scape_room $scape_room)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Scape_room  $scape_room
     * @return \Illuminate\Http\Response
     */
    public function destroy(Scape_room $scape_room)
    {
        //
    }

    public function play(Scape_room $scape_room)
    {
        return Inertia::render('EscapeRoom/Play');
    }
    
    public function check(Request $request)
    {
        # Validation
        $request->validate([
            'password' => 'required',
            'sr_id' => 'required',
        ]);

        $sr = Scape_room::where('id', $request->sr_id)->get();
        $sr_password = $sr[0]->psw;

        if($request->password != $sr_password){
            return Redirect::back()->with(Session::flash('errormessage', 'La contraseña es incorrecta'));
        } else {
            return Redirect::to('/escape-room/play/1');
        }
    }

    public function play_check(Request $request)
    {
        # Validation
        $request->validate([
            'reward' => 'required',
        ]);

        $user = Auth::user();

        $user = User::find($user->id);

        if($request->reward != true){
            return Redirect::back()->with(Session::flash('errormessage', 'Ha ocurrido un error'));
        } else {
            $user->points = $user->points + 50;
            $user->save();
            // dd($user->points);
            return Redirect::back()->with(Session::flash('message', 'FELICIDADES! Has completado el EscapeRoom'));
        }
    }

    public function juego()
    {
        return Inertia::render('EscapeRoom/Juego');
    }
}
