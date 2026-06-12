<template>
  <section class="section" id="about">
    <div class="section__head reveal" v-reveal>
      <span class="eyebrow">About</span>
      <h2 class="h2">Translating business needs into solutions that scale.</h2>
    </div>
    <div class="about__grid">
      <div class="about__body reveal" v-reveal>
        <p class="lead-emph">
          I'm a mid-level full-stack web developer with <em>5+ years</em> of experience building
          and maintaining responsive web applications using PHP, Laravel, Vue.js and JavaScript.
        </p>
        <p>
          I have a proven track record in leading feature delivery, mentoring junior developers,
          and modernizing legacy systems. I'm at my best translating business requirements into
          scalable, high-performance solutions — and I thrive in fast-paced, collaborative
          environments.
        </p>
        <div class="about__stats">
          <div class="stat">
            <div class="stat__num">5<span class="amber">+</span></div>
            <div class="stat__label">Years of experience</div>
          </div>
          <div class="stat">
            <div class="stat__num">3</div>
            <div class="stat__label">Companies &amp; teams</div>
          </div>
          <div class="stat">
            <div class="stat__num">10<span class="amber">+</span></div>
            <div class="stat__label">Languages &amp; frameworks</div>
          </div>
        </div>
      </div>
      <div class="about__aside reveal" v-reveal="120">
        <div class="factline">
          <span class="factline__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          </span>
          <div>
            <div class="factline__k">Based in</div>
            <div class="factline__v">San Rafael, Bulacan, PH</div>
          </div>
        </div>
        <div class="factline">
          <span class="factline__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          </span>
          <div>
            <div class="factline__k">Currently</div>
            <div class="factline__v">Mid Software Engineer</div>
          </div>
        </div>
        <div class="factline">
          <span class="factline__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/></svg>
          </span>
          <div>
            <div class="factline__k">Focus</div>
            <div class="factline__v">Web apps · Laravel · Vue.js</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
