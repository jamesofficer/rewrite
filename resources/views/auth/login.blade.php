@extends('layouts.app')

@section('content')
<div class="container py-5">
    <div class="row justify-content-center py-5 login-page-container">
        <div class="col-md-6">
            <img src="{{ asset('img/shift_logo_white.png') }}" alt="Shift Logo" class="login-page-logo">

            <p class="text-white">
                The internet has revolutionised the way we consume news and media content. No longer are we tied to fixed schedules and physical media.
                However, most online news articles today don't feel very revolutionary. There are so many amazing web technologies out there, but so
                few of them can be easily used by our journalists.
            </p>
            <p class="text-white">
                That's where Shift comes in. With Shift, we aim to allow any journalist of any background to build and create beautiful, interactive articles.
                Putting the power of modern web technologies, in your hands.
            </p>
        </div>

        <div class="col-md-6 login-page-form">
            <div class="card">
                <div class="card-header text-lowercase">Login</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="form-group row">
                            <div class="col">
                                <input id="email" type="email" placeholder="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">

                            <div class="col">
                                <input id="password" type="password" placeholder="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col">
                                <button type="submit" class="btn btn-secondary text-lowercase">
                                    Login
                                </button>

                                <a class="btn btn-link float-right text-lowercase text-white" href="{{ route('password.request') }}">
                                    Forgot Your Password?
                                </a>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col">
                                <div class="form-check remember-me-label">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label text-lowercase" for="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
