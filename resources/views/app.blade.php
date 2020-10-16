<!doctype html>
<html class="h-100">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
    <title>Vue and Lumen</title>
    <link rel="stylesheet" href="/dist/app.css" />
    <script>
    window.config={
        "theme": "{{$config[4]->value}}",
        "logo_small": "{{$config[1]->value}}",
        "logo_big": "{{$config[2]->value}}",
        "hotel_name": "{{$config[0]->value}}",
        "habbo_imager": "{{$config[3]->value}}",
        "uotw": "{{$config[5]->value}}",
        "uotw_message": "{{$config[6]->value}}"
        };
</script>
</head>
<body class="h-100" id="{{$config[4]->value}}">
    <div id="app"></div>
    <script src="/dist/app.js"></script>
    @if(config('app.env') == 'local')
        <script src="http://localhost:35729/livereload.js"></script>
    @endif
</body>
</html>