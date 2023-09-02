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
        Schema::create('scape_rooms', function (Blueprint $table) {
            $table->id();
            $table->string('name',35);
            $table->string('description',50);
            $table->string('rules',150);
            $table->string('empresa',150)->nullable();
            $table->string('psw',30)->nullable();
            $table->time('max_time')->nullable();
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
        Schema::dropIfExists('scape_rooms');
    }
};
