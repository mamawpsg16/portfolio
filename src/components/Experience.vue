<script setup>
const roles = [
  {
    date: 'Jan 2026 — Present',
    company: 'Firefly Electric & Lighting Corp.',
    loc: 'Manila City',
    role: 'Mid Software Engineer — Web Developer',
    current: true,
    bullets: [
      'Mentor junior developers through structured code reviews, architectural guidance, and hands-on debugging support, accelerating team skill development.',
      'Participate in technical decision-making for feature implementation, stack improvements, and system architecture enhancements.',
      'Collaborate with process owners and stakeholders to translate business requirements into scalable technical solutions, leading delivery from gathering through deployment.',
      'Develop and maintain in-house web applications with responsive front-end and back-end architecture for optimal performance and user experience.',
    ],
    stack: ['PHP', 'Laravel', 'Vue.js', 'CodeIgniter', 'JavaScript', 'jQuery', 'Docker', 'Python'],
  },
  {
    date: 'Oct 2022 — Jan 2026',
    company: 'Firefly Electric & Lighting Corp.',
    loc: 'Manila City',
    role: 'Junior Software Engineer — Web Developer',
    bullets: [
      'Developed and maintained multiple in-house web applications serving company-wide business operations, aligned with stakeholder requirements.',
      'Designed responsive front-end and back-end web architecture ensuring optimal performance and user experience.',
      "Proposed and led a technology upgrade initiative to modernize the company's web application stack in line with industry standards.",
      'Collaborated with cross-functional teams to gather requirements and deliver effective technical solutions.',
    ],
  },
  {
    date: 'Jun 2021 — Sep 2022',
    company: 'Career break',
    loc: 'Family caregiving & self-directed learning',
    role: 'Caregiving & continued learning',
    isBreak: true,
    bullets: [
      'Took a deliberate career break to serve as primary caregiver for an ill family member — demonstrating responsibility, resilience, and commitment.',
      'Used the time for self-directed learning, deepening my knowledge of web technologies and frameworks to stay current with industry developments.',
    ],
  },
  {
    date: 'Aug 2019 — May 2021',
    company: 'Ally Techno Grit Solutions Corp.',
    loc: 'Estrella, Makati City',
    role: 'Junior Software Developer',
    bullets: [
      'Contributed to a fast-paced startup environment (4-person team), rapidly building and maintaining web applications across multiple client projects simultaneously.',
      'Delivered technical support to end-users, diagnosing and resolving application issues to minimize downtime and maintain client satisfaction.',
      'Collaborated with senior developers to implement new features and improve existing functionality.',
      'Participated in code reviews and quality assurance processes.',
    ],
    stack: ['PHP', 'Laravel', 'CodeIgniter', 'Vue.js', 'jQuery', 'Bootstrap'],
  },
]
</script>

<template>
  <section class="section" id="experience">
    <div class="section__head reveal" v-reveal>
      <span class="eyebrow">Experience</span>
      <h2 class="h2">A path of growing scope and responsibility.</h2>
    </div>
    <div class="timeline">
      <article
        v-for="item in roles"
        :key="item.role + item.date"
        class="tl-item reveal"
        v-reveal
        :class="{ 'tl-item--now': item.current, 'tl-item--break': item.isBreak }"
      >
        <div class="tl-item__rail">
          <div class="tl-item__date">{{ item.date }}</div>
          <div class="tl-item__company">{{ item.company }}</div>
          <div class="tl-item__loc">{{ item.loc }}</div>
        </div>
        <div class="tl-card">
          <div class="tl-card__head">
            <h3 class="tl-card__role">{{ item.role }}</h3>
            <span v-if="item.current" class="tag-now">Current</span>
          </div>
          <ul>
            <li v-for="bullet in item.bullets" :key="bullet">{{ bullet }}</li>
          </ul>
          <div v-if="item.stack" class="tl-stack">
            <span v-for="tech in item.stack" :key="tech" class="chip">{{ tech }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
