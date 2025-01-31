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
        Schema::create('creers', function (Blueprint $table) {
            $table->integer('creer_num')->autoIncrement();
            $table->integer('menu_num')->nullable();
            $table->integer('stock_num');
            $table->float('quantite');
            $table->timestamps();

            $table->foreign('menu_num')->references('menu_num')->on('menus')->onDelete('set null');
            $table->foreign('stock_num')->references('stock_num')->on('stocks')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('creers');
    }
};
