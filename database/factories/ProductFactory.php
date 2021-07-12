<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => 1,
            'product_name' => $this->faker->name,
            'product_image' => $this->faker->imageUrl('320', '410'),
            'product_description' => $this->faker->text(100),
            'product_code' => $this->faker->ean8(),
            'product_price' => $this->faker->randomFloat(2, 10.99, 500.99)
        ];
    }
}
