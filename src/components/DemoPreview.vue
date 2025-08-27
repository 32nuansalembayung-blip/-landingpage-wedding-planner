<template>
  <section class="demo" id="calculator">
    <div class="container">
      <header class="section-header">
        <h2 class="title">Demo Singkat</h2>
        <p class="desc">Lihat bagaimana Budget Planner, Undangan, dan RSVP bekerja.</p>
      </header>
      <div class="grid">
        <div class="panel">
          <h3>Budget Planner</h3>
          <div class="calc">
            <div class="line" v-for="(item,i) in items" :key="i">
              <input v-model="item.name" placeholder="Item" />
              <input v-model.number="item.cost" type="number" min="0" placeholder="0" />
              <button class="remove" @click="remove(i)">×</button>
            </div>
            <button class="add" @click="add">+ Tambah</button>
            <div class="total">Total: Rp {{ total.toLocaleString('id-ID') }}</div>
          </div>
        </div>
        <div class="panel">
          <h3>Online Invitation</h3>
          <div class="invite-card">
            <div class="names">A & B</div>
            <div class="date">Sabtu, 12 Okt 2025</div>
            <a class="cta-mini" href="#">Buka Undangan</a>
          </div>
        </div>
        <div class="panel">
          <h3>RSVP</h3>
          <div class="rsvp">
            <button @click="yes++" class="pill success">Hadir {{ yes }}</button>
            <button @click="pending++" class="pill warn">Belum {{ pending }}</button>
            <button @click="no++" class="pill muted">Tidak {{ no }}</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
const items = ref([
  { name: 'Venue', cost: 20000000 },
  { name: 'Dekorasi', cost: 8000000 },
])
const add = () => items.value.push({ name: '', cost: 0 })
const remove = (i) => items.value.splice(i,1)
const total = computed(() => items.value.reduce((s, x) => s + (Number(x.cost)||0), 0))
const yes = ref(120); const pending = ref(45); const no = ref(10)
</script>

<style scoped>
.demo { padding: 3.5rem 0; background: #fafafa; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 1.25rem; }
.section-header { text-align:center; margin-bottom: 1.5rem; }
.title { font-family: 'Playfair Display', serif; font-size: clamp(1.6rem, 4vw, 2.1rem); }
.desc { color:#4b5563 }
.grid { display:grid; grid-template-columns: repeat(3,1fr); gap: 1rem; }
.panel { background:#fff; border:1px solid #e5e7eb; border-radius: 16px; padding: 1rem; box-shadow: 0 10px 30px rgba(17,24,39,.05); }
.calc .line { display:flex; gap:.5rem; align-items:center; margin-bottom:.5rem; }
.calc input { flex: 1; padding:.5rem .6rem; border:1px solid #e5e7eb; border-radius: 10px; }
.calc .remove { padding: .4rem .6rem; border-radius: 10px; border:1px solid #fca5a5; background:#fee2e2; color:#991b1b; }
.calc .add { padding: .5rem .8rem; border-radius: 10px; border:1px solid #e5e7eb; background:#f3f4f6; }
.total { margin-top:.5rem; font-weight:700; }
.invite-card { width: 100%; max-width: 240px; aspect-ratio: 3/4; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 14px; padding: 1rem; text-align:center; background: linear-gradient(180deg, #fff, #f7f9ff); }
.names { font-family:'Playfair Display', serif; font-size: 2.2rem; }
.date { color:#6b7280; margin:.35rem 0 .6rem; }
.cta-mini { display:inline-block; padding:.5rem .9rem; border-radius:999px; background:#111827; color:#fff; text-decoration:none; }
.rsvp { display:flex; gap:.5rem; flex-wrap:wrap; }
.pill { padding: .5rem .7rem; border-radius: 999px; font-size:.9rem; border:1px solid #e5e7eb; }
.pill.success { background:#dcfce7; color:#065f46; border-color:#86efac; }
.pill.warn { background:#fff7ed; color:#9a3412; border-color:#fed7aa; }
.pill.muted { background:#f3f4f6; color:#374151; }
@media (max-width: 900px) { .grid { grid-template-columns: 1fr; } }
</style>
