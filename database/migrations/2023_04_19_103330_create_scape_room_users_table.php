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
        Schema::create('scape_room_users', function (Blueprint $table) {
            $table->unsignedBigInteger('scape_rooms_id');
            $table->unsignedBigInteger('users_id');
            $table->tinyInteger('progress')->default(0);
            $table->string('reward',30)->nullable();
        
            $table->foreign('scape_rooms_id')->references('id')->on('scape_rooms');
            $table->foreign('users_id')->references('id')->on('users');            
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
        Schema::dropIfExists('scape_room_users');
    }
};
