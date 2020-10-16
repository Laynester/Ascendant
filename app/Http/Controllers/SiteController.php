<?php

namespace App\Http\Controllers;

class SiteController extends Controller
{
    public function __construct()
    {
    }

    public function app() {
        $config = \App\Models\cms_config::get();
        return view('app',['config'=>$config]);
    }
}
