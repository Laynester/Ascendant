<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class cms_page extends Model
{
  public $timestamps = false;

  protected $fillable = ['parent_id','name','route_name','navigation_title','icon','template'];

  public function children() 
  {
    return $this->hasMany('App\Models\cms_page', 'parent_id', 'id');
  }
}