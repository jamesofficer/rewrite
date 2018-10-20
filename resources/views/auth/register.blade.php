@extends('layouts.app')

@section('content')
<div class="container py-5">
    <div class="row justify-content-center py-5 login-page-container">
        @include('layouts.home-page-blurb')

        @include('auth.forms.register-form')
    </div>
</div>
@endsection
