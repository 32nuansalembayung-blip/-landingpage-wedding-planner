<template>
  <section class="testimonials">
    <div class="container">
      <header class="section-header">
        <h2 class="title">Kata Mereka</h2>
        <p class="desc">Testimoni singkat yang membangun kepercayaan.</p>
      </header>
      <div class="grid">
        <figure class="tcard" v-for="(t, i) in data" :key="i">
          <img :src="t.photo" alt="" class="avatar" />
          <blockquote>“{{ t.quote }}”</blockquote>
          <figcaption>— {{ t.name }}</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup>
const data = [
  { name: 'Rani & Dion', quote: 'Semuanya lebih terkontrol dan hemat waktu!', photo: 'https://i.pravatar.cc/80?img=5' },
  { name: 'Ayu & Fajar', quote: 'Undangannya elegan, RSVP juga gampang.', photo: 'https://i.pravatar.cc/80?img=15' },
  { name: 'Nadia & Rio', quote: 'Budgetingnya bantu banget biar nggak over.', photo: 'https://i.pravatar.cc/80?img=25' },
]
</script>

<style scoped>
.testimonials { padding: 3.5rem 0; background:#ffffff; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 1.25rem; }
.section-header { text-align:center; margin-bottom: 1.5rem; }
.title { font-family: 'Playfair Display', serif; font-size: clamp(1.6rem, 4vw, 2.1rem); }
.desc { color:#4b5563; }
.grid { display:grid; grid-template-columns: repeat(3,1fr); gap: 1rem; }
.tcard { background:#fff; border:1px solid #e5e7eb; border-radius:16px; padding:1rem; text-align:center; box-shadow: 0 10px 30px rgba(17,24,39,.05); }
.avatar { width:64px; height:64px; border-radius:999px; object-fit:cover; margin-bottom:.5rem; }
blockquote { color:#111827; margin:0 0 .25rem; }
figcaption { color:#6b7280; font-size:.9rem; }
@media (max-width: 900px) { .grid { grid-template-columns: 1fr; } }
</style>
