<script setup>
defineProps({ isScrolled: Boolean })
</script>

<template>
  <nav class="nav" :class="{ 'is-scrolled': isScrolled }">
    <a class="nav__mark" href="#top" aria-label="Top">
      <img src="/assets/grova-mark.svg" alt="" />
    </a>
    <div class="nav__links">
      <a class="nav__link" href="#about">About</a>
      <a class="nav__link" href="#experience">Experience</a>
      <a class="nav__link" href="#skills">Skills</a>
      <a class="nav__link" href="#education">Education</a>
      <a class="nav__link" href="#contact">Contact</a>
    </div>
    <a class="nav__cv" href="/Kevin-Mensah-CV.pdf" download>Download CV</a>
  </nav>
</template>
