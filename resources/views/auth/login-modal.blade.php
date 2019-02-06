<div class="modal micromodal-slide" id="login-modal" aria-hidden="true">
    <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="login-modal-title">

            <header class="modal__header">
                <h2 class="modal__title" id="modal-1-title">login</h2>

                <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
            </header>

            <form method="POST" action="{{ route('login') }}">
                <main class="modal__content" id="modal-1-content">
                    @csrf

                    {{-- Email Input --}}
                    <div class="login-form-control">
                        <input id="email" type="email" placeholder="email"
                               class="{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email"
                               value="{{ old('email') }}" required autofocus>

                        @if ($errors->has('email'))
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $errors->first('email') }}</strong>
                            </span>
                        @endif
                    </div>

                    {{-- Password Input --}}
                    <div class="login-form-control">
                        <input id="password" type="password" placeholder="password"
                               class="{{ $errors->has('password') ? ' is-invalid' : '' }}"
                               name="password" required>

                        @if ($errors->has('password'))
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $errors->first('password') }}</strong>
                            </span>
                        @endif
                    </div>

                    <div class="login-form-control">
                        <input type="checkbox" name="remember"  id="remember" {{ old('remember') ? 'checked' : '' }}>
                        <label for="remember">remember me</label>
                    </div>
                </main>

                <footer class="modal__footer">
                    <button type="submit" class="modal__btn modal__btn-primary">login</button>

                    <a class="modal__btn" href="{{ route('password.request') }}">
                        forgot your password?
                    </a>
                </footer>
            </form>

        </div>
    </div>
</div>