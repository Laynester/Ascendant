<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Rennokki\QueryCache\Traits\QueryCacheable;

use App\Helpers\SiteHelper;

class cms_page extends Model
{
  use QueryCacheable;

  public $cacheFor;

  public $timestamps = false;

  protected $fillable = ['parent_id','name','route_name','navigation_title','icon','template'];

  public function __construct()
  {
    $this->cacheFor = SiteHelper::cache();
  }

  public function children() 
  {
    return $this->hasMany('App\Models\cms_page', 'parent_id', 'id');
  }
}