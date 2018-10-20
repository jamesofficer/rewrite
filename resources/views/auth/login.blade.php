@extends('layouts.app')

@section('content')
<div class="container py-5">
    <div class="row justify-content-center login-page-container">
        @include('layouts.home-page-blurb')        

        @include('auth.forms.login-form')
    </div>
</div>
@endsection
