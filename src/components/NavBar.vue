<script setup>
import { ref } from 'vue'
defineProps({ isScrolled: Boolean })
const open = ref(false)
const close = () => { open.value = false }
</script>

<template>
  <nav class="nav" :class="{ 'is-scrolled': isScrolled, 'is-open': open }">
    <a class="nav__mark" href="#top" aria-label="Top" @click="close">
      <img src="/assets/grova-mark.svg" alt="" />
    </a>

    <button
      class="nav__toggle"
      :aria-expanded="open"
      aria-label="Menu"
      @click="open = !open"
    >
      <svg v-if="!open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
    </button>

    <div class="nav__menu" :class="{ 'is-open': open }">
      <div class="nav__links">
        <a class="nav__link" href="#about" @click="close">About</a>
        <a class="nav__link" href="#experience" @click="close">Experience</a>
        <a class="nav__link" href="#skills" @click="close">Skills</a>
        <a class="nav__link" href="#education" @click="close">Education</a>
        <a class="nav__link" href="#contact" @click="close">Contact</a>
      </div>
      <a class="nav__cv" href="/Kevin-Mensah-CV.pdf" download @click="close">Download CV</a>
    </div>
  </nav>
</template>
