<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function __construct()
    {
        //
    }

    public function user($username) 
    {
        $user = User::where('username',$username)->first();

        if(!$user) return response()->json(['error' => 'No user'], 401);

        return response()->json(['user' => $user], 201);
    }
    
    public function me() {
        return response()->json(['user' => Auth::user()], 200);
    }
}
