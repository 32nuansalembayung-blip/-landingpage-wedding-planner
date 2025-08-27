<template>
  <section class="section" id="features">
    <div class="container">
      <header class="section-header">
        <h2 class="title">Fitur Utama</h2>
        <p class="desc">Atur semua persiapan pernikahan tanpa ribet – dari budget sampai undangan digital.</p>
      </header>
      <div class="grid">
        <article class="card">
          <div class="icon"><BanknotesIcon class="i"/></div>
          <h3 class="card-title">Budget Planner</h3>
          <p class="card-text">Kalkulator interaktif sederhana untuk merencanakan dan memonitor pengeluaran.</p>
          <div class="mockup">
            <div class="row"><span>Venue</span><span>Rp 20.000.000</span></div>
            <div class="row"><span>Dekorasi</span><span>Rp 8.000.000</span></div>
            <div class="row total"><span>Total</span><span>Rp 28.000.000</span></div>
          </div>
        </article>
        <article class="card">
          <div class="icon"><EnvelopeIcon class="i"/></div>
          <h3 class="card-title">Online Invitation</h3>
          <p class="card-text">Contoh undangan digital elegan, siap dibagikan ke tamu secara instan.</p>
          <div class="invite-preview">
            <div class="invite-card">
              <div class="names">A & B</div>
              <div class="date">Sabtu, 12 Okt 2025</div>
              <div class="cta-mini">Lihat Undangan</div>
            </div>
          </div>
        </article>
        <article class="card">
          <div class="icon"><CheckCircleIcon class="i"/></div>
          <h3 class="card-title">RSVP Tracking</h3>
          <p class="card-text">Mudah memantau konfirmasi kehadiran tamu dan kebutuhan kursi.</p>
          <div class="rsvp">
            <div class="pill success">Hadir 120</div>
            <div class="pill warn">Belum 45</div>
            <div class="pill muted">Tidak 10</div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { BanknotesIcon, EnvelopeIcon, CheckCircleIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>
.section { padding: 4rem 0; background: #ffffff; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 1.25rem; }
.section-header { text-align: center; margin-bottom: 2rem; }
.title { font-family: 'Playfair Display', serif; font-size: clamp(1.6rem, 4vw, 2.2rem); color: #111827; margin: 0; }
.desc { color: #4b5563; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
.card { background: #fff; border: 1px solid #e5e7eb; border-radius: 16px; padding: 1.25rem; box-shadow: 0 10px 30px rgba(31,41,55,.05); transition: transform .2s ease, box-shadow .2s ease; }
.card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(31,41,55,.07); }
.icon { width: 44px; height: 44px; display: grid; place-items: center; border-radius: 10px; background: linear-gradient(135deg, #fde7f1, #e7f0ff); margin-bottom: .75rem; }
.i { width: 24px; height: 24px; color: #6b7280; }
.card-title { margin: 0 0 .25rem; font-weight: 700; color: #111827; }
.card-text { margin: 0 0 .75rem; color: #4b5563; }
.mockup { border: 1px dashed #e5e7eb; border-radius: 12px; padding: .75rem; background: #fafafa; }
.row { display: flex; justify-content: space-between; padding: .3rem 0; color: #374151; }
.total { font-weight: bold; color: #111827; }
.invite-preview { display:flex; justify-content:center; }
.invite-card { width: 180px; aspect-ratio: 3/4; border: 1px solid #e5e7eb; border-radius: 14px; padding: .9rem; text-align:center; background: linear-gradient(180deg, #fff, #f7f9ff); box-shadow: 0 10px 30px rgba(17,24,39,.05); }
.names { font-family: 'Playfair Display', serif; font-size: 2rem; color: #111827; }
.date { color: #6b7280; margin:.35rem 0 .6rem; }
.cta-mini { display:inline-block; padding: .35rem .6rem; border-radius: 999px; background:#111827; color: #fff; font-size:.8rem; }
.rsvp { display:flex; gap:.5rem; flex-wrap: wrap; }
.pill { padding: .4rem .6rem; border-radius: 999px; font-size: .85rem; }
.pill.success { background:#dcfce7; color:#065f46; }
.pill.warn { background:#fff7ed; color:#9a3412; }
.pill.muted { background:#f3f4f6; color:#374151; }
@media (max-width: 900px) { .grid { grid-template-columns: 1fr; } }
</style>
