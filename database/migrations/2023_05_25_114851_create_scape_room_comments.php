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
        Schema::create('scape_room_comments', function (Blueprint $table) {
            $table->unsignedBigInteger('scape_rooms_id');
            $table->unsignedBigInteger('comments_id');
        
            $table->foreign('scape_rooms_id')->references('id')->on('scape_rooms');
            $table->foreign('comments_id')->references('id')->on('comments');            
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
            Schema::dropIfExists('scape_room_comments');
    }
};
