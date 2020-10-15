<?php

namespace App\Http\Controllers;
use App\Models\cms_page;

class PageController extends Controller
{
    public function __construct()
    {
        
    }

    public function fetch($name) {
        $page = cms_page::where('name',$name)->with('children')->first();
        if(!$page) return response()->json(['message' => 'No Page'], 409);
        return response()->json(['page' => $page], 201);
    }

    public function fetchAll() {
        $page = cms_page::where('parent_id','-1')->with('children')->get();
        return response()->json(['pages' => $page], 201);
    }
}
