<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="{{ asset('img/favicon.ico') }}">

    {{-- CSRF Token --}}
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 're:write') }}</title>

    {{-- Scripts --}}
    @if (str_contains(url()->current(), 'article/create'))
        <script src="{{ asset('js/app.js') }}" defer></script>
    @endif

    {{-- Fonts --}}
    <link href="{{ asset('fonts/inter_ui/inter-ui.css') }}" rel="stylesheet">

    {{-- Home Page Stylesheets and Scripts --}}
    @if (Route::currentRouteName() === 'home')
        <script src="https://unpkg.com/micromodal/dist/micromodal.min.js"></script>

        <link href="{{ asset('css/normalize.css') }}" rel="stylesheet">
        <link href="{{ asset('css/home.css') }}" rel="stylesheet">
    @endif

    {{-- Editor/App Stylesheets and Scripts --}}
    @if (Route::currentRouteName() !== 'home')
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/rewrite.css') }}" rel="stylesheet">
    @endif

    <script async defer src="https://www.instagram.com/embed.js"></script>
</head>
<body>
    <main style="height: 100%;">
        @yield('content')
    </main>

    {{-- Initialise MicroModal (for the home page only) --}}
    @if (Route::currentRouteName() === 'home')
        <script>
            MicroModal.init();
        </script>
    @endif
</body>
</html>
