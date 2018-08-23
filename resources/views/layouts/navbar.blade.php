<nav class="navbar navbar-expand-md navbar-light navbar-laravel">
    <div class="container-fluid">
        <a class="navbar-brand" href="{{ url('/') }}">
            <img src="../img/shift_logo_white.png" class="header-logo">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Left Side Of Navbar -->
            <ul class="navbar-nav mr-auto">

            </ul>

            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav ml-auto">
                <!-- Authentication Links -->
                @guest
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('register') }}">
                            <button class="btn btn-outline-light">Register</button>
                        </a>
                    </li>
                @else
                    {{-- When creating articles --}}
                    @if (request()->route()->getName() !== 'create-article')
                        <li class="nav-item">
                            <a href="{{ route('create-article') }}" class="nav-link">
                                <button class="btn btn-outline-light">Create New Article</button>
                            </a>
                        </li>
                    @endif

                    <li class="nav-item">
                        <a href="{{ route('logout') }}" class="nav-link" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                            <button class="btn btn-outline-light">Logout</button>
                        </a>

                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            @csrf
                        </form>
                    </li>
                @endguest
            </ul>
        </div>
    </div>
</nav>