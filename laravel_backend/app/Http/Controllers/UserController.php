<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    
public function register(Request $request){

    $validator = Validator::make($request->all(), [
        'name' => 'required|min:3|max:225',
        'email' => 'required|email|unique:users,email',
        'password' => 'required|min:3|confirmed'

    ]);
    
if($validator->fails()){
    return response()->json([
        'message' => $validator->errors()
    ],422);
}

$field = $validator->validated();

$user = User::create($field);


    $token = $user->createToken($request->name)->plainTextToken;

    return response()->json([
        'token' => $token,
        'user' => $user
    ]);
}





public function login(Request $request){

    $validator = Validator::make($request->all(), [
      
        'email' => 'required|email|exists:users,email',
        'password' => 'required|min:3|'

    ]);
    
if($validator->fails()){
    return response()->json([
        'message' => $validator->errors()
    ],422);
}



$user = User::where('email', $request->email)->first();



if(!$user || !Hash::check( $request->password, $user->password)){

    return response()->json([
        'message' => 'Credentials not Found'
    ],400);

}


    $token = $user->createToken($user->name)->plainTextToken;

    return response()->json([
        'token' => $token,
        'user' => $user
    ],200);
   
}

public function logout(Request $request){

    if (!$request->user()) {
        return response()->json([
            'message' => 'Unauthorized'
        ], 401);
    }

    $request->user()->tokens()->delete();

    return response()->json([
        'message' => 'logged out successful'
    ],200);

}



}
