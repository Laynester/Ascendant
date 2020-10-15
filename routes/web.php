<?php

$router->group(['prefix' => 'api'], function ($router) {

    $router->group(['prefix' => 'authentication'], function ($router) {
        $router->post('login', 'AuthController@login');
        $router->post('register', 'AuthController@register');
        
    });

    $router->group(['prefix' => 'user'], function ($router) {
        $router->get('fetch/{username}', 'UserController@user');
    });

    $router->group(['prefix' => 'page'], function ($router) {
       $router->get('fetch/{name}', 'PageController@fetch');
       $router->get('all', 'PageController@fetchAll');
    });

    $router->group(['prefix' => 'news'], function ($router) {
        $router->get('list/{amount}', 'NewsController@fetchMany');
     });

});

$router->get('/{route:.*}/', function ()  {
    return view('app');
});
