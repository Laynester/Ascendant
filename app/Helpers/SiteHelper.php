<?php
namespace App\Helpers;

class SiteHelper
{
    public static function cache() {
        if(env('APP_ENV') == 'local') {
            return 0;
        }
        return 900;
    }
}