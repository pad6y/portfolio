<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            RoleSeeder::class,
            UserSeeder::class
        ]);

        \App\Models\Role::factory()->hasUsers(100)->create();

        $this->call(PostSeeder::class);
        $this->call(ProductSeeder::class);
    }
}
