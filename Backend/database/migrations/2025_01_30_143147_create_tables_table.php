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
        Schema::create('tables', function (Blueprint $table) {
            $table->integer('table_num')->autoIncrement();
            $table->string('restaurent_id',20);
            $table->integer('nb_chaise')->nullable();
            $table->string('num_etage',5)->nullable();
            $table->timestamps();

            $table->foreign('restaurent_id')->references('restaurent_id')->on('restaurents')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tables');
    }
};
