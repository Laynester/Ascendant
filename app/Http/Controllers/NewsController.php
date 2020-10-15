<?php

namespace App\Http\Controllers;
use App\Models\cms_news;

class NewsController extends Controller
{
    public function __construct()
    {
        //
    }

    public function fetchMany($amount) 
    {
        $news = cms_news::take($amount)->orderBy('id','desc')->with('habbo')->get();
        return response()->json(['news' => $news], 201);
    }
}
