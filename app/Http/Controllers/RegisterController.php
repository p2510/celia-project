<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Redirect;

class RegisterController extends Controller
{
      public function store(Request $Request)
      {
          $data=$Request->validate([
              "name"=>["required","min:2","alpha"],
              "surname"=>["required","min:2","alpha"],
              "birth"=>["required","date","before:tomorrow"],
              "location"=>["required","alpha"],
              "nationality"=>["required","alpha"],
              "sexe"=>["required","min:1","alpha",Rule::in(['f', 'h'])],
              "residence"=>["required","max:10","alpha",Rule::in(['parent', 'tuteur'])],
              "classe"=>["required","string"],
              "filiere"=>["required","string"],
              "previous_classe"=>["required","string"],
          ]);
          Student::create($data);

          return redirect()->back()->with([
              "successRegister"=>"Votre inscription a été éffectué avec succès "
          ]);
      }
}
