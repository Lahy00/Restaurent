<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('commandes', function (Blueprint $table) {
            $table->integer('commande_num')->autoIncrement();
            $table->bigInteger('client_num');
            $table->integer('menu_num')->nullable();
            $table->timestamps();

            $table->foreign('client_num')->references('client_num')->on('clients')->onDelete('cascade');
            $table->foreign('menu_num')->references('menu_num')->on('menus')->onDelete('set null');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('commandes');
    }
};
