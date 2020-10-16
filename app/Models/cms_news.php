<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Rennokki\QueryCache\Traits\QueryCacheable;

use App\Models\User;
use App\Helpers\SiteHelper;

class cms_news extends Model
{

    use QueryCacheable;

    public $cacheFor;

    public $timestamps = false;
    
    protected $fillable = ['caption','desc','body','image','author','date'];

    public function __construct()
    {
        $this->cacheFor = SiteHelper::cache();
    }

    public function habbo()
    {
        return $this->belongsTo(User::class, 'author');
    }
}