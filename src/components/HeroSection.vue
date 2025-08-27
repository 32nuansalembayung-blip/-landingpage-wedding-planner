<template>
  <section class="hero" id="home">
    <div class="hero-bg" aria-hidden="true"></div>
    <motion :initial="{opacity:0, y:20}" :animate="{opacity:1, y:0}" :transition="{duration:0.7}">
      <div class="container hero-inner">
        <div class="hero-copy">
          <h1 class="heading">
            Plan Your Dream Wedding, Stress-Free
          </h1>
          <p class="subheading">
            Atur budget, undangan online, dan semua persiapan hanya dari satu aplikasi.
          </p>
          <div class="cta-group">
            <a href="#signup" class="btn btn-primary">Mulai Gratis</a>
            <a href="#calculator" class="btn btn-ghost">Coba Kalkulator Budget</a>
          </div>
          <div class="hero-badges">
            <span class="badge">Elegan</span>
            <span class="dot"/> 
            <span class="badge">Mudah</span>
            <span class="dot"/> 
            <span class="badge">Terorganisir</span>
          </div>
        </div>
        <div class="hero-visual">
          <div class="illustration">
            <!-- Minimal outline illustration using SVG -->
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="rings">
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#f9a8d4"/>
                  <stop offset="100%" stop-color="#bfdbfe"/>
                </linearGradient>
              </defs>
              <circle cx="80" cy="100" r="40" fill="none" stroke="url(#grad)" stroke-width="6"/>
              <circle cx="120" cy="100" r="40" fill="none" stroke="url(#grad)" stroke-width="6"/>
              <path d="M95 55 l12 -18 l12 18" fill="none" stroke="#f5a" stroke-linecap="round" stroke-width="4"/>
            </svg>
          </div>
        </div>
      </div>
    </motion>
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
  </section>
</template>

<script setup>
import { Motion as motion } from '@motionone/vue'
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg, #ffe4e6, #ffffff 50%, #e0f2fe);
  padding: 6rem 0 4rem;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(800px 400px at 10% 20%, rgba(255,192,203,0.25), transparent),
              radial-gradient(600px 300px at 90% 10%, rgba(190,227,248,0.25), transparent);
  pointer-events: none;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.25rem;
}
.hero-inner {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2rem;
  align-items: center;
}
.heading {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 5vw, 3.25rem);
  line-height: 1.1;
  color: #1f2937;
  margin: 0 0 1rem 0;
}
.subheading {
  font-size: 1.125rem;
  color: #374151;
  margin-bottom: 1.5rem;
}
.cta-group { display: flex; gap: .75rem; flex-wrap: wrap; }
.btn {
  display: inline-block;
  padding: .75rem 1.1rem;
  border-radius: 999px;
  text-decoration: none;
  transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease, color .2s ease;
  font-weight: 600;
}
.btn-primary {
  background: linear-gradient(135deg, #f9a8d4, #93c5fd);
  color: white;
  box-shadow: 0 8px 24px rgba(249, 168, 212, .35);
}
.btn-primary:hover { transform: translateY(-2px) scale(1.02); box-shadow: 0 10px 28px rgba(147, 197, 253, .35); }
.btn-ghost { background: rgba(255,255,255,.8); border: 1px solid #e5e7eb; color: #374151; backdrop-filter: blur(6px); }
.btn-ghost:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,.06); }
.hero-badges { display:flex; align-items:center; gap:.5rem; margin-top:1rem; color:#6b7280; }
.badge { padding:.35rem .6rem; border-radius:999px; background:#fff; border:1px solid #f1f5f9; font-size:.85rem; }
.dot { width:4px; height:4px; border-radius:999px; background:#cbd5e1; display:inline-block; }
.hero-visual { display:flex; justify-content:center; align-items:center; }
.illustration { width: 100%; max-width: 360px; aspect-ratio: 1/1; background: rgba(255,255,255,.7); border: 1px solid #e5e7eb; border-radius: 24px; display:flex; align-items:center; justify-content:center; box-shadow: 0 20px 60px rgba(31,41,55,.08); }
.rings { width: 70%; height: auto; }
.wave { position: absolute; left:0; right:0; bottom:-1px; }
@media (max-width: 900px) {
  .hero { padding-top: 5rem; }
  .hero-inner { grid-template-columns: 1fr; }
  .hero-visual { order: -1; }
}
</style>
