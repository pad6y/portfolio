<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'title', 'post_image', 'body'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'created_at' => 'datetime:d-M-Y',
    ];


    // protected $appends = [
    //     'post_image_url',
    // ];

    public function getPostImageAttribute($value)
    {
        if ($value !== null) {

            if (strpos($value, 'https://') !== FALSE || strpos($value, 'http://') !== FALSE) {
                return $value;
            }

            return asset('storage/' . $value);
        }
    }
}
