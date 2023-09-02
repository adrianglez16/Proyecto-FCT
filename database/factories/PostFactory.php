<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => fake()->text(5),
            'content' => fake()->text(150),
            'summary' => fake()->text(50),
            // 'status' => fake()->randomElement(['draft', 'published']),
            'first_img' => fake()->imageUrl(),
            'user_id' => 2,
        ];
    }
}
