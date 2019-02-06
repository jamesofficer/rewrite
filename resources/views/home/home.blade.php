@extends('layouts.app')

@section('content')

    <div class="home-container">
        <nav>
            <img src="{{ asset('img/rewrite_logo_black.svg') }}" alt="Rewrite Logo" class="rewrite-nav-logo">

            <button class="login-button" data-micromodal-trigger="login-modal">login</button>
        </nav>

        <div class="hero-content">
            <div class="hero-text">
                <h1>Harness the power of modern  web technologies to enliven your next web project.</h1>
                <p>
                    The internet has revolutionised the way we consume news and media content. No longer are we tied to
                    fixed schedules and physical media. However, most online news articles today don't feel very
                    revolutionary. There are so many amazing web technologies out there, but so few of them can be
                    easily used by the general public.
                </p>

                <p>
                    That's where re:write comes in. With re:write, we aim to allow any journalist, blogger, writer of
                    any background to build and create beautiful, articles. Putting the power of modern web
                    technologies, in your hands.
                </p>

                <button class="sign-up-button" data-micromodal-trigger="register-modal">
                    sign up
                </button>
            </div>
        </div>
    </div>

    @include('auth.login-modal')
    @include('auth.register-modal')

@endsection