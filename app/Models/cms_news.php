<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class cms_news extends Model
{
    public $timestamps = false;
    protected $fillable = ['caption','desc','body','image','author','date'];
    public function habbo()
    {
        return $this->belongsTo(User::class, 'author');
    }
}