<script setup>
import { reactive, ref } from 'vue'

const year = new Date().getFullYear()

// Get a free key at https://web3forms.com — paste it here. Form is inert until set.
const WEB3FORMS_KEY = '50676c0c-af4f-4d7b-8596-c30894b51816'

const form = reactive({ name: '', email: '', message: '', botcheck: '' })
const status = ref('idle') // idle | sending | success | error
const errorMsg = ref('')

async function submit() {
  if (status.value === 'sending') return
  status.value = 'sending'
  errorMsg.value = ''
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        name: form.name,
        email: form.email,
        message: form.message,
        botcheck: form.botcheck,
        subject: 'New message from portfolio',
        from_name: 'Portfolio Contact',
      }),
    })
    const data = await res.json()
    if (data.success) {
      status.value = 'success'
      form.name = form.email = form.message = ''
    } else {
      status.value = 'error'
      errorMsg.value = data.message || 'Something went wrong. Please email me directly.'
    }
  } catch {
    status.value = 'error'
    errorMsg.value = 'Network error. Please email me directly.'
  }
}
</script>

<template>
  <section class="contact" id="contact">
    <div class="contact__inner">
      <span class="eyebrow reveal" v-reveal style="justify-content:center">Contact</span>
      <h2 class="contact__title display reveal" v-reveal="80">
        Let's build something <span class="amber">solid.</span>
      </h2>
      <p class="contact__sub reveal" v-reveal="160">
        Open to new opportunities and collaborations. The fastest way to reach me is email —
        I usually reply within a day.
      </p>
      <form class="contact__form reveal" v-reveal="240" @submit.prevent="submit">
        <input
          type="checkbox"
          v-model="form.botcheck"
          class="contact__hp"
          tabindex="-1"
          autocomplete="off"
          aria-hidden="true"
        />
        <div class="contact__row">
          <label class="contact__field">
            <span class="contact__label">Name</span>
            <input v-model="form.name" type="text" name="name" required placeholder="Your name" />
          </label>
          <label class="contact__field">
            <span class="contact__label">Email</span>
            <input v-model="form.email" type="email" name="email" required placeholder="you@example.com" />
          </label>
        </div>
        <label class="contact__field">
          <span class="contact__label">Message</span>
          <textarea v-model="form.message" name="message" rows="5" required placeholder="Tell me about your project…"></textarea>
        </label>
        <div class="contact__actions">
          <button type="submit" class="contact__send" :disabled="status === 'sending'">
            {{ status === 'sending' ? 'Sending…' : 'Send message' }}
          </button>
          <p v-if="status === 'success'" class="contact__note contact__note--ok">
            Thanks — message sent. I'll reply within a day.
          </p>
          <p v-else-if="status === 'error'" class="contact__note contact__note--err">
            {{ errorMsg }}
          </p>
        </div>
      </form>

      <p class="contact__or reveal" v-reveal="320">Or reach me directly</p>
      <div class="contact__links reveal" v-reveal="360">
        <a class="contact__card" href="mailto:kevinmensah114@gmail.com">
          <span class="contact__card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </span>
          <span class="contact__card__v">kevinmensah114@gmail.com</span>
        </a>
        <a class="contact__card" href="tel:+639765004654">
          <span class="contact__card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
          </span>
          <span class="contact__card__v">+63 976 500 4654</span>
        </a>
      </div>
    </div>
    <div class="footer">
      <div class="footer__inner">
        <span class="footer__brand">
          <img src="/assets/grova-mark.svg" alt="" />
          Kevin Mensah
        </span>
        <span>© {{ year }} — Designed &amp; built with care.</span>
      </div>
    </div>
  </section>
</template>
