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
        Schema::create('clients', function (Blueprint $table) {
            $table->bigInteger('client_num')->autoIncrement();
            $table->integer('table_num');
            $table->integer('serveur_num');
            $table->timestamps();

            $table->foreign('table_num')->references('table_num')->on('tables')->onDelete('set null');
            $table->foreign('serveur_num')->references('serveur_num')->on('serveurs')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};
