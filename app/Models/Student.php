<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $fillable=[
        'name',
        'surname',
        'birth',
        'location',
        'nationality',
        'sexe',
        'residence',
        'classe',
        'filiere',
        'previous_classe'

    ];
}
