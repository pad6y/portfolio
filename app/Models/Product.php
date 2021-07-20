<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'product_name', 'product_image', 'product_description', 'product_code', 'product_price'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'created_at' => 'datetime:d-M-Y',
    ];

    public function getProductImageAttribute($value)
    {
        if ($value !== null) {

            if (strpos($value, 'https://') !== FALSE || strpos($value, 'http://') !== FALSE) {
                return $value;
            }

            return asset('storage/' . $value);
        }
    }

    public function orders()
    {
        return $this->belongsToMany(Order::class);
    }
}
