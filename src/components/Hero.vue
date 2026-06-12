<template>
  <header class="hero" id="top">
    <div class="hero__glow"></div>
    <div class="hero__inner">
      <span class="hero__status reveal" v-reveal><span class="dot"></span> Open to new opportunities</span>
      <h1 class="hero__title display reveal" v-reveal="60">
        Kevin <span class="amber">Mensah</span>
      </h1>
      <p class="hero__lede reveal" v-reveal="160">
        I'm a <strong>full-stack web developer</strong> who builds and maintains responsive
        web applications — modernizing legacy systems and exploring new technologies
        as the industry evolves.
      </p>
      <div class="hero__socials reveal" v-reveal="240">
        <a class="social" href="mailto:kevinmensah114@gmail.com" aria-label="Email">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </a>
        <a class="social" href="https://www.linkedin.com/in/kevin-mensah-461310201" target="_blank" rel="noopener" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>
        </a>
        <a class="social" href="https://github.com/mamawpsg16" target="_blank" rel="noopener" aria-label="GitHub">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.21 11.19.6.11.82-.25.82-.57 0-.28-.01-1.02-.02-2-3.34.71-4.04-1.58-4.04-1.58-.55-1.36-1.34-1.73-1.34-1.73-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.21 1.84 1.21 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.58-2.67-.3-5.47-1.31-5.47-5.83 0-1.29.47-2.34 1.24-3.17-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.21a11.5 11.5 0 0 1 3-.4c1.02 0 2.05.13 3.01.4 2.28-1.53 3.29-1.21 3.29-1.21.66 1.64.24 2.86.12 3.16.77.83 1.23 1.88 1.23 3.17 0 4.53-2.8 5.53-5.48 5.82.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.21.69.83.57A12.04 12.04 0 0 0 24 12.29C24 5.78 18.63.5 12 .5Z"/></svg>
        </a>
      </div>
    </div>
    <a class="hero__scroll reveal" href="#about" aria-label="Scroll to about" v-reveal="340">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    </a>
  </header>
</template>
