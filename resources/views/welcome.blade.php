@extends('layouts.app')

@section('content')
    <div class="container py-5">
        <div class="row">
            <div class="col pb-3">
                <h3 class="text-center">Welcome to Shift</h3>
            </div>
        </div>

        @include('auth.login')
    </div>
@endsection

