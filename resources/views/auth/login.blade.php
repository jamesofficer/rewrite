@extends('layouts.app')

@section('content')
<div class="container py-5">
    <div class="row">
        <div class="col text-center">
            <h1>Welcome to Shift</h1>
        </div>
    </div>

    <br>
    <hr>

    <div class="row justify-content-center py-5">
        <div class="col-md-6">
            <h4 class="pt-2">What is Shift?</h4>

            <p>
                The internet has revolutionised the way we consume news and media content. No longer are we tied to fixed schedules and physical media.
                However, most online news articles today don't feel very revolutionary. There are so many amazing web technologies out there, but so
                few of them can be easily used by our journalists.
            </p>
            <p>
                That's where Shift comes in. With Shift, we aim to allow any journalist of any background to build and create beautiful, interactive articles.
                Putting the power of modern web technologies, in your hands.
            </p>
        </div>

        <div class="col-md-6">
            <div class="card">
                <div class="card-header">Login</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}" aria-label="Login">
                        @csrf

                        <div class="form-group row">
                            <label for="email" class="col-sm-4 col-form-label text-md-right">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Login
                                </button>

                                <a class="btn btn-link" href="{{ route('password.request') }}">
                                    Forgot Your Password?
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
