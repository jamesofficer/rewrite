<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="{{ asset('img/favicon.ico') }}">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 're:write') }}</title>

    <!-- Scripts -->
    @if (str_contains(url()->current(), 'article/create'))
        <script src="{{ asset('js/app.js') }}" defer></script>
    @endif

    <!-- Fonts -->
    <link href="{{ asset('fonts/inter_ui/inter-ui.css') }}" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/rewrite.css') }}" rel="stylesheet">

    <script async defer src="https://www.instagram.com/embed.js"></script>
</head>
<body>
    <main @if (Route::currentRouteName() === "login" || Route::currentRouteName() === "register" || Route::currentRouteName() === "password.request" || Route::currentRouteName() === "password.reset") class="login-page-bg" @endif>
        @if (Route::currentRouteName() === "login"||Route::currentRouteName() === "register" || Route::currentRouteName() === "password.request")
            <div class="login-page-bg-img"></div>
        @endif

        @yield('content')
    </main>
</body>
</html>
