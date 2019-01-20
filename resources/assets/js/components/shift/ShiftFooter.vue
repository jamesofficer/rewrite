<template>
    <div class="footer-logo-wrapper">
        <img src="/img/rewrite_logo_white.svg" alt="Rewrite Logo" class="footer-logo">
        <p class="version-text">v0.1.2 - Alpha Version</p>
        <h6 class="contact-text">Found a bug? Have a feature request?</h6>
        <h6 class="contact-text"><strong>rewriteapp@gmail.com</strong></h6>
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
}
</style>


