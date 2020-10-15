<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class cms_config extends Model
{
    protected $table = 'cms_config';
    protected $fillable = ['key','value'];
}