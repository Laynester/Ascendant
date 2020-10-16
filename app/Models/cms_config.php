<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Rennokki\QueryCache\Traits\QueryCacheable;

use App\Models\User;
use App\Helpers\SiteHelper;

class cms_config extends Model
{
    use QueryCacheable;

    public $cacheFor;

    public function __construct()
    {
        $this->cacheFor = SiteHelper::cache();
    }

    protected $table = 'cms_config';
    protected $fillable = ['key','value'];
}