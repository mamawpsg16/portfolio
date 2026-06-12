<script setup>
const TECH = {
  languages: [
    { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
    { name: 'TypeScript', slug: 'typescript', color: '3178C6' },
    { name: 'PHP', slug: 'php', color: '777BB4' },
    { name: 'Python', slug: 'python', color: '3776AB' },
    { name: 'C++', slug: 'cplusplus', color: '00599C' },
    { name: 'Java', slug: 'openjdk', color: 'EA8220' },
    { name: 'HTML5', slug: 'html5', color: 'E34F26' },
    { name: 'CSS', slug: 'css', color: '663399' },
    { name: 'MySQL', slug: 'mysql', color: '4479A1' },
    { name: 'Ajax', slug: null, color: null },
  ],
  frameworks: [
    { name: 'Laravel', slug: 'laravel', color: 'FF2D20' },
    { name: 'CodeIgniter', slug: 'codeigniter', color: 'EF4223' },
    { name: 'Vue.js', slug: 'vuedotjs', color: '4FC08D' },
    { name: 'Flutter', slug: 'flutter', color: '02569B' },
    { name: 'Dart', slug: 'dart', color: '0175C2' },
    { name: 'Bootstrap', slug: 'bootstrap', color: '7952B3' },
    { name: 'jQuery', slug: 'jquery', color: '0769AD' },
  ],
  tools: [
    { name: 'Git', slug: 'git', color: 'F05032' },
    { name: 'Docker', slug: 'docker', color: '2496ED' },
    { name: 'Nginx', slug: 'nginx', color: '009639' },
    { name: 'WinMerge', slug: null, color: null },
  ],
}

const groups = [
  { key: 'languages', label: 'Languages' },
  { key: 'frameworks', label: 'Frameworks & libraries' },
  { key: 'tools', label: 'Tools & workflow' },
]

const mono = (name) => (name.match(/[A-Za-z]/) || ['?'])[0].toUpperCase()
const logoSrc = (t) => `https://cdn.simpleicons.org/${t.slug}/${t.color}`

function onLogoError(e) {
  e.target.style.display = 'none'
  const sibling = e.target.nextElementSibling
  if (sibling) sibling.style.display = 'grid'
}
</script>

<template>
  <section class="section" id="skills">
    <div class="section__head reveal" v-reveal>
      <span class="eyebrow">Skills</span>
      <h2 class="h2">The toolkit I reach for.</h2>
    </div>
    <div class="skills">
      <div
        v-for="(group, i) in groups"
        :key="group.key"
        class="skills__group reveal"
        v-reveal="i * 80"
      >
        <h3 class="skills__label">{{ group.label }}</h3>
        <div class="tech-grid">
          <div v-for="t in TECH[group.key]" :key="t.name" class="tech">
            <img
              v-if="t.slug"
              class="tech__logo"
              :src="logoSrc(t)"
              alt=""
              referrerpolicy="no-referrer"
              width="24"
              height="24"
              @error="onLogoError"
            />
            <span
              class="tech__fallback"
              :style="{ display: t.slug ? 'none' : 'grid' }"
            >{{ mono(t.name) }}</span>
            <span class="tech__name">{{ t.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
