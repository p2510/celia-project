<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->string('surname', 100);
            $table->date('birth');
            $table->string('location', 100);
            $table->string('nationality', 100);
            $table->string('sexe', 100);
            $table->string('residence', 100);
            $table->string('classe', 100);
            $table->string('filiere', 100);
            $table->string('previous_classe', 100);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('students');
    }
};
