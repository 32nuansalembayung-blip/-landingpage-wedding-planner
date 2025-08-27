<template>
  <section class="pricing" id="signup">
    <div class="container">
      <header class="section-header">
        <h2 class="title">Mulai Gratis</h2>
        <p class="desc">Semua fitur dasar tanpa biaya. Upgrade nanti saat dibutuhkan.</p>
      </header>
      <div class="card">
        <div class="price">Rp 0</div>
        <ul class="list">
          <li>Budget Planner</li>
          <li>Undangan Digital</li>
          <li>RSVP Tracking</li>
        </ul>
        <a href="#" class="btn-primary">Daftar Gratis</a>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.pricing { padding: 3.5rem 0; background: linear-gradient(90deg, #ffe4e6, #ffffff 50%, #e0f2fe); }
.container { max-width: 1100px; margin: 0 auto; padding: 0 1.25rem; text-align:center; }
.card { display:inline-block; background:#fff; border:1px solid #e5e7eb; border-radius:16px; padding:1.5rem 1.25rem; box-shadow: 0 10px 30px rgba(17,24,39,.06); }
.price { font-family:'Playfair Display', serif; font-size: 2.4rem; margin-bottom:.5rem; }
.list { list-style: none; padding: 0; margin: 0 0 1rem; color:#374151; }
.list li { margin: .2rem 0; }
.btn-primary { display:inline-block; padding: .75rem 1.1rem; border-radius: 999px; text-decoration:none; background:#111827; color:#fff; }
.btn-primary:hover { filter: brightness(1.05); }
</style>
