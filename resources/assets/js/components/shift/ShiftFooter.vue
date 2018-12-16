<template>
    <div class="footer-logo-wrapper">
        <img src="/img/shift_logo_white.png" alt="Shift Logo" class="footer-logo">
        <p class="version-text">v0.1.1 - Alpha Version</p>
        <p class="contact-text">Found a bug? Have a feature request?</p>
        <p class="contact-text"><strong>writewithshift@gmail.com</strong></p>
    </div>
</template>

<script>
export default {
    name: "ShiftFooter",
}
</script>

<style scoped>
.footer-logo-wrapper {
    padding: 50px 0;
    text-align: center;
}

.footer-logo {
    filter: brightness(80%);
    width: 150px;
    margin: 0 auto;
}

.version-text {
    color: #bbb;
    margin-top: 20px;
    margin-bottom: 20px;
}

.contact-text {
    color: #bbb;
    font-size: 0.8em;
    margin: 0;
    padding: 0;
}
</style>


