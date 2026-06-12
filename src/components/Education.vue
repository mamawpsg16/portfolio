<script setup>
const certs = [
  { name: 'SQL', level: 'Basic · Intermediate' },
  { name: 'JavaScript', level: 'Basic · Intermediate' },
  { name: 'Python', level: 'Certified' },
]
</script>

<template>
  <section class="section" id="education">
    <div class="section__head reveal" v-reveal>
      <span class="eyebrow">Education &amp; certifications</span>
      <h2 class="h2">Foundations &amp; credentials.</h2>
    </div>
    <div class="edu__grid">
      <div class="card edu-card reveal" v-reveal>
        <div>
          <div class="edu-card__deg">BS in Information Technology</div>
          <div class="edu-card__school">Dr. Yanga's Colleges Inc.</div>
        </div>
        <div class="edu-card__year">Graduated 2019</div>
      </div>
      <div class="card edu-card reveal" v-reveal="100">
        <div class="cert-list">
          <div v-for="cert in certs" :key="cert.name" class="cert-row">
            <span class="cert-row__check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
            </span>
            <span class="cert-row__name">{{ cert.name }}</span>
            <span class="cert-row__lvl">{{ cert.level }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
