<template>
  <section class="benefits" id="benefits">
    <div class="container">
      <header class="section-header">
        <h2 class="title">Kenapa Calon Mempelai Suka</h2>
        <p class="desc">Fokus pada hal penting, biar aplikasi kami yang merapikan detailnya.</p>
      </header>
      <div class="grid">
        <article class="bcard">
          <h3>Hemat waktu</h3>
          <p>Semua alat disatukan, dari perencanaan hingga monitoring.</p>
        </article>
        <article class="bcard">
          <h3>Terhindar dari overbudget</h3>
          <p>Anggaran terkendali dengan kalkulator dan tracking realtime.</p>
        </article>
        <article class="bcard">
          <h3>Terorganisir</h3>
          <p>Checklist, undangan, dan RSVP dalam satu tempat rapi.</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.benefits { padding: 3.5rem 0; background: linear-gradient(180deg, #fafafa, #ffffff); }
.container { max-width: 1100px; margin: 0 auto; padding: 0 1.25rem; }
.section-header { text-align: center; margin-bottom: 2rem; }
.title { font-family: 'Playfair Display', serif; font-size: clamp(1.6rem, 4vw, 2.1rem); color: #111827; margin: 0; }
.desc { color: #4b5563; }
.grid { display:grid; grid-template-columns: repeat(3,1fr); gap: 1rem; }
.bcard { background: #fff; border: 1px solid #e5e7eb; border-radius: 16px; padding: 1.25rem; box-shadow: 0 10px 30px rgba(31,41,55,.05); transition: transform .2s ease, box-shadow .2s ease; }
.bcard:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(31,41,55,.07); }
.bcard h3 { margin: 0 0 .4rem; color:#111827; }
.bcard p { margin: 0; color:#4b5563; }
@media (max-width: 900px) { .grid { grid-template-columns: 1fr; } }
</style>
