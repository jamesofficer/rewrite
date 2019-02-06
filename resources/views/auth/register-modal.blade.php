<div class="modal micromodal-slide" id="register-modal" aria-hidden="true">
    <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="register-modal-title">

            <header class="modal__header">
                <h2 class="modal__title" id="modal-1-title">register</h2>

                <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
            </header>

            <form method="POST" action="{{ route('register') }}">
                <main class="modal__content" id="modal-1-content">
                    @csrf

                    {{-- Name Input --}}
                    <input id="name" type="text" placeholder="name"
                           class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name"
                           value="{{ old('name') }}" required autofocus>

                    @if ($errors->has('name'))
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $errors->first('name') }}</strong>
                        </span>
                    @endif

                    {{-- Email Input --}}
                    <input id="email" type="email" placeholder="email"
                           class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email"
                           value="{{ old('email') }}" required>

                    @if ($errors->has('email'))
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $errors->first('email') }}</strong>
                        </span>
                    @endif

                    {{-- Password Input --}}
                    <input id="password" type="password" placeholder="password"
                           class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password"
                           required>

                    @if ($errors->has('password'))
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $errors->first('password') }}</strong>
                        </span>
                    @endif

                    {{-- Password Confirmation Input --}}
                    <input id="password-confirm" type="password" placeholder="confirm password"
                           name="password_confirmation" required>

                </main>

                <footer class="modal__footer">
                    <button type="submit" class="modal__btn modal__btn-primary">register</button>
                </footer>
            </form>

        </div>
    </div>
</div>