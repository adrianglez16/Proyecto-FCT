<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class Scape_roomFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->text(20),
            'description' => fake()->text(40),
            'rules' => fake()->text(50),
            'empresa' => fake()->randomElement(['Empresa X', null]),
            'psw' => null,
            'max_time' => null,
        ];
    }
}
