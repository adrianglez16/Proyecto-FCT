<?php
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RemoveRoleFromUserController;
use App\Http\Controllers\RevokePermissionFromRoleController;
use App\Http\Controllers\RevokePermissionFromUserController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ScapeRoomController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Ruta main
Route::get('/', function () {
    return Inertia::render('Home');
});

// Ruta del home
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


/* Rutas para Usarios SIN loguear*/

// Rutas para log in y register
Route::get('/register', function () {
    return Inertia::render('Auth/Register');
});

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
});

// Rutas de About Us
Route::get('/about-us', function () {
    return Inertia::render('About_us');
});

// Rutas del Blog
Route::get('/blog', [PostController::class, 'view']);
Route::get('/blog/show/{post}', [PostController::class, 'show']);

// Rutas de Escape-rooms visibles
Route::get('/escape-rooms', [ScapeRoomController::class, 'index']);
Route::get('/escape-room/show/{scape_room}', [ScapeRoomController::class, 'show']);
Route::get('/juego', [ScapeRoomController::class, 'juego']);

// Rutas de Perfil visible
Route::get('/perfil/show/{profile}', [ProfileController::class, 'show']);

/* Rutas para Usuarios que SI esten autentifcados */
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/home', function () {
        return Inertia::render('Layouts/Authenticated');
    });
    // Rutas de Perfil
    Route::get('/perfil', [ProfileController::class, 'index']);
    Route::get('/perfil/edit', [ProfileController::class, 'edit']);
    Route::post('/perfil/edit', [ProfileController::class, 'update']);
    Route::get('/perfil/edit/update-password', [ProfileController::class, 'show_update_pswd']);
    Route::post('/perfil/edit/update-password', [ProfileController::class, 'update_pswd']);
    Route::get('/perfil/edit/delete', [ProfileController::class, 'show_destroy']);
    Route::post('/perfil/edit/delete', [ProfileController::class, 'destroy']);
    
    // Rutas de Relacionadas al Perfil
    Route::post('/my-scape-rooms', [ProfileController::class, 'my_index']);
    Route::post('/my-rewards', [ProfileController::class, 'reward']);
    Route::post('/my-comments', [CommentController::class, 'index']);
    
    // Rutas de Escape-Rooms con password
    Route::post('/escape-room/check', [ScapeRoomController::class, 'check']);
    Route::get('/escape-room/play/1', [ScapeRoomController::class, 'play']);
    Route::post('/escape-room/play/check', [ScapeRoomController::class, 'play_check']);
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy'); 
});

//Rutas de Admin

Route::group(['middleware' => ['role:admin']], function () {
    Route::resource('/users', UserController::class);
    Route::resource('/roles', RoleController::class);
    Route::resource('/permissions', PermissionController::class);
    Route::delete('/roles/{role}/permissions/{permission}', [RevokePermissionFromRoleController::class, '__invoke'])->name('roles.permissions.destroy');
    Route::delete('/users/{user}/permissions/{permission}', [RevokePermissionFromUserController::class, '__invoke'])->name('users.permissions.destroy');
    Route::delete('/users/{user}/roles/{role}', [RemoveRoleFromUserController::class, '__invoke'])->name('users.roles.destroy');
    Route::resource('/posts', PostController::class);
    Route::resource('/category', CategoryController::class);
});

//Rutas de Mod
Route::group(['middleware' => ['role:admin|mod']], function () {
    Route::resource('/users', UserController::class);
    Route::resource('/posts', PostController::class);
    Route::resource('/category', CategoryController::class);
});

require __DIR__.'/auth.php';
