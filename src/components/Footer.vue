<template>
  <footer class="footer" id="contact">
    <div class="wave" aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,64L80,58.7C160,53,320,43,480,64C640,85,800,139,960,149.3C1120,160,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" fill="url(#waveGrad)" fill-opacity="0.5"></path>
        <defs>
          <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#ffe4e6"></stop>
            <stop offset="50%" stop-color="#ffffff"></stop>
            <stop offset="100%" stop-color="#e0f2fe"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="container inner">
      <div class="brand">Wedding Planner</div>
      <nav class="nav">
        <a href="#about">Tentang</a>
        <a href="#features">Fitur</a>
        <a href="#contact">Hubungi</a>
        <a href="#">Privacy Policy</a>
      </nav>
      <div class="socials">
        <a href="#" aria-label="Instagram">IG</a>
        <a href="#" aria-label="Twitter">TW</a>
        <a href="#" aria-label="Tiktok">TT</a>
      </div>
      <div class="copy">© {{ new Date().getFullYear() }} Wedding Planner</div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer { position: relative; background: #111827; color:#e5e7eb; padding-top:2rem; }
.wave { position:absolute; left:0; right:0; top:-1px; }
.container { max-width:1100px; margin:0 auto; padding: 0 1.25rem; }
.inner { padding: 2.25rem 0; display:grid; gap:1rem; justify-items:center; }
.brand { font-family:'Playfair Display', serif; font-size:1.4rem; color:#fff; }
.nav { display:flex; gap:1rem; }
.nav a { color:#e5e7eb; text-decoration:none; }
.nav a:hover { color:#fff; }
.socials { display:flex; gap:.75rem; }
.socials a { color:#e5e7eb; text-decoration:none; }
.copy { font-size:.9rem; color:#9ca3af; }
</style>
