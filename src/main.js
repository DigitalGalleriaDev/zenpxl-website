 import './style.css'
import { initMobileNav } from './nav.js'

document.querySelector('#app').innerHTML = `
  <div class="page">
    <header class="nav"> 
      <div class="brand">
  <img src="/ZenPXLWordmark_OnBlack (1).png" alt="ZenPXL">
</div>

      <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="site-menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="links" id="site-menu">
        <a href="/">Home</a>
        <a href="/explore.html">Explore the App</a>
        <a href="/about.html">About</a>
        <a href="#pricing">Pricing</a>
      </nav>
    </header>

    <main>
     <section class="hero">
     <div class="hero-message-side">
  <div class="eyebrow">A SMALL RESET FOR A BUSY MIND</div>
  <h1>One small PXL can change the next moment.</h1>
  <p class="hero-pxl-def">A PXL (pronounced “pixel”) is a bite-sized visual reminder designed to shift your thoughts, mood, or focus.</p>
</div>
  <div class="hero-video-side">
     

    <div class="hero-video-wrap">
      <video class="hero-video" autoplay muted loop playsinline>
        <source src="/home screen video 2.mp4" type="video/mp4">
      </video>
    </div>
  </div>

  <div class="hero-action-side">
    <p class="hero-text">
      ZenPXL delivers short, meaningful prompts designed to help you pause,
      reframe, refocus, and move forward.
    </p>

    <div class="diamond-actions">
      <a class="diamond-action" href="#try">
        <img src="/ef5196.png" alt="">
        <span>Try a PXL</span>
      </a>

      <a class="diamond-action" href="/explore.html">
        <img src="/70ccd4.png" alt="">
        <span>Explore the App</span>
      </a>

      <a class="diamond-action" href="#download">
        <img src="/fad486.png" alt="">
        <span>Download the App</span>
      </a>
    </div>
  </div>
</section>

      <section class="try-section" id="try">
        <p class="try-intro">In just 10 seconds, a PXL can inspire you to think differently, notice the good, choose kindness, take action, or simply smile — little moments that can come together to inspire a life filled with more joy, meaning, and positivity.</p>
        <div class="section-label">TRY A PXL</div>
        <p class="try-lead">ZenPXL sends you bite-sized thoughts, prompts, and actions throughout the day. Each takes about 10 seconds—try it in the moment, or save it to revisit at the end of your day.</p>

        <div class="pxl-card" id="pxlExperience">
          <div class="pxl-live" id="pxlLive">
            <p class="pxl-category" id="pxlCategory"></p>
            <p class="pxl-hold" id="pxlHold">Hold for 10 seconds.</p>
            <p class="pxl-quote" id="pxlQuote" aria-live="polite"></p>
            <div class="pxl-smile-row" aria-hidden="true">
              <span>smile</span>
              <span>smile</span>
              <span>smile</span>
            </div>
            <div class="pxl-progress" id="pxlProgress" aria-hidden="true">
              <span class="pxl-progress-bar"></span>
            </div>
          </div>

          <div class="pxl-complete" id="pxlComplete" hidden>
            <img class="pxl-earned-mark" src="/ef5196.png" alt="">
            <p class="pxl-complete-title">You did it!</p>
            <p class="pxl-complete-reward">You earned 1 PXL toward your Masterpiece.</p>
          </div>
        </div>

        <div class="pxl-create">
          <p class="pxl-create-own">Your goals are personal. Your perspective is personal. Your PXLs can be, too. Write what you want to remember, and ZenPXL will bring those words back to you.</p>
          <div class="pxl-create-examples">
            <figure class="pxl-own-card pxl-own-card-art">
              <span>Personal PXL</span>
              <blockquote>My art is appreciated and loved by the perfect customers for me.</blockquote>
            </figure>
            <figure class="pxl-own-card pxl-own-card-body">
              <span>Personal PXL</span>
              <blockquote>I’m building a body that is healthy, strong, and becoming what I see for myself.</blockquote>
            </figure>
            <figure class="pxl-own-card pxl-own-card-value">
              <span>Personal PXL</span>
              <blockquote>My experience has value. Every conversation is a chance to help someone see what’s possible, and every person I help is another step toward the business I’m building.</blockquote>
            </figure>
          </div>
        </div>

        <div class="pxl-masterpiece">
          <div class="pxl-masterpiece-copy-wrap">
            <p class="pxl-masterpiece-title">What's a Masterpiece?</p>
            <p class="pxl-masterpiece-copy">Your Masterpiece is built from the PXLs you collect by actually doing them. Each small action adds another PXL — and over time, those tiny moments build something bigger.</p>
          </div>
          <div class="masterpiece-stage" id="masterpieceStage">
            <canvas id="masterpieceCanvas" aria-label="A Masterpiece forming from PXLs"></canvas>
          </div>
        </div>
      </section>

      <section class="how-section" id="how">
        <div class="how-intro">
          <h2>Sometimes the action comes first.</h2>
          <p>You don’t always have to feel happy before you smile. Research suggests that the simple physical act of smiling may have a small influence on how we feel. ZenPXL turns ideas like this into tiny reminders you can actually use — smile bigger, move your body, notice something good, brighten someone else’s day, or even laugh out loud. Yes, actually out loud. (Or in your head if you’re in a room full of people who will look at you funny.) Sometimes ten slightly silly seconds might be exactly the little shift your day needs.</p>
        </div>

        <div class="three-up">
          <div class="feature">
            <img class="feature-diamond" src="/ef5196.png" alt="">
            <div class="feature-number">01 — SMILE</div>
            <h3>Smile — even if you don’t feel like it.</h3>
            <p>Sometimes the smallest physical shift can nudge a moment in a more positive direction.</p>
          </div>

          <div class="feature">
            <img class="feature-diamond" src="/70ccd4.png" alt="">
            <div class="feature-number">02 — SHARE</div>
            <h3>Let someone else catch it.</h3>
            <p>Smile at a stranger. Give a compliment. Hold the door. Tiny actions can add a little more kindness to an ordinary day.</p>
          </div>

          <div class="feature">
            <img class="feature-diamond" src="/fad486.png" alt="">
            <div class="feature-number">03 — REPEAT</div>
            <h3>Small moments add up.</h3>
            <p>ZenPXL brings you little reminders to pause, smile, notice the good, and take positive action — again and again.</p>
          </div>
        </div>
      </section>

      <section class="about" id="about">
        <div>
          <div class="section-label">ABOUT ZENPXL</div>
          <h2>Small thoughts. Real shifts.</h2>
        </div>

        <p>
          ZenPXL is built around the idea that change does not always start with a
          huge breakthrough. Sometimes it starts with one sentence, one question,
          or one small action at the right time.
        </p>
      </section>
    </main>

    <section class="contact" id="contact">
      <div>
        <h2>Support &amp; Contact</h2>
      </div>
      <div>
        <p>Need help with ZenPXL? We’re happy to help.</p>
        <p>For questions about your account, the ZenPXL app, billing, privacy, or technical issues, contact us at <a class="contact-email" href="mailto:support@zenpxl.com">support@zenpxl.com</a>.</p>
        <p>We’ll get back to you as soon as we can.</p>
      </div>
    </section>

    <footer>
      <div>© 2026 ZenPXL</div>

      <div class="footer-links">
        <a href="https://www.iubenda.com/privacy-policy/17417543" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        <a href="https://www.iubenda.com/privacy-policy/17417543/cookie-policy" target="_blank" rel="noopener noreferrer">Cookie Policy</a>
        <a href="https://www.iubenda.com/terms-and-conditions/17417543" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a>
        <a href="#contact">Support / Contact</a>
      </div>
    </footer>
  </div>
`

initMobileNav()

const experienceCard = document.querySelector('#pxlExperience')
const categoryEl = document.querySelector('#pxlCategory')
const quoteEl = document.querySelector('#pxlQuote')
const progressEl = document.querySelector('#pxlProgress')
const liveEl = document.querySelector('#pxlLive')
const completeEl = document.querySelector('#pxlComplete')

const pxls = [
  {
    category: 'Happiness',
    text: 'Your happiness becomes fragile when you place it in the hands of things outside your control. — Inspired by Epictetus'
  },
  {
    category: 'Action',
    text: 'Text someone just to tell them you appreciate them.'
  },
  {
    category: 'Business',
    text: 'You don’t need to compete. You need to be YOU. Your perspective, personality, and creativity are what make what you’re building different.'
  },
  {
    category: 'Peace',
    text: 'Anxiety weighs us down; encouragement lifts us. — Inspired by Proverbs 12:25'
  }
]

const pxlInterval = 10000
let started = false
let pxlIndex = 0

function restartProgress() {
  progressEl.classList.remove('is-running')
  void progressEl.offsetWidth
  progressEl.classList.add('is-running')
}

function showQuote(pxl, immediate) {
  const apply = () => {
    categoryEl.textContent = pxl.category
    categoryEl.dataset.category = pxl.category.toLowerCase()
    quoteEl.textContent = pxl.text
    categoryEl.classList.add('is-visible')
    quoteEl.classList.add('is-visible')
    quoteEl.classList.remove('is-leaving')
    categoryEl.classList.remove('is-leaving')
    restartProgress()
  }

  if (immediate || !quoteEl.textContent) {
    apply()
    return
  }

  quoteEl.classList.add('is-leaving')
  categoryEl.classList.add('is-leaving')

  window.setTimeout(apply, 220)
}

function startExperience() {
  if (started) return
  started = true

  pxlIndex = 0
  showQuote(pxls[0], true)

  window.setInterval(() => {
    pxlIndex = (pxlIndex + 1) % pxls.length
    showQuote(pxls[pxlIndex])
  }, pxlInterval)
}

const observer = new IntersectionObserver((entries) => {
  if (entries.some((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.45)) {
    startExperience()
    observer.disconnect()
  }
}, { threshold: [0.45, 0.6, 0.8] })

observer.observe(experienceCard)

document.querySelectorAll('a[href="#try"]').forEach((link) => {
  link.addEventListener('click', () => {
    window.setTimeout(startExperience, 650)
  })
})

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#try') {
    window.setTimeout(startExperience, 650)
  }
})

if (window.location.hash === '#try') {
  startExperience()
  observer.disconnect()
}

function shuffle(list) {
  const items = list.slice()
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    const current = items[i]
    items[i] = items[j]
    items[j] = current
  }
  return items
}

function startMasterpieceMotion() {
  const canvas = document.querySelector('#masterpieceCanvas')
  const stage = document.querySelector('#masterpieceStage')
  if (!canvas || !stage) return

  const image = new Image()
  image.src = '/masterpiece.jpg'

  image.onload = () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = window.devicePixelRatio || 1

    const sizeCanvas = () => {
      const width = stage.clientWidth
      const height = stage.clientHeight
      canvas.width = Math.max(1, Math.round(width * dpr))
      canvas.height = Math.max(1, Math.round(height * dpr))
      const ctx = canvas.getContext('2d')
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      return { ctx, width, height }
    }

    const sourceRect = (width, height) => {
      const imageRatio = image.naturalWidth / image.naturalHeight
      const canvasRatio = width / height
      let sx = 0
      let sy = 0
      let sw = image.naturalWidth
      let sh = image.naturalHeight

      if (imageRatio > canvasRatio) {
        sw = image.naturalHeight * canvasRatio
        sx = (image.naturalWidth - sw) / 2
      } else {
        sh = image.naturalWidth / canvasRatio
        sy = (image.naturalHeight - sh) / 2
      }

      return { sx, sy, sw, sh }
    }

    const drawFull = (ctx, width, height) => {
      const source = sourceRect(width, height)
      ctx.drawImage(image, source.sx, source.sy, source.sw, source.sh, 0, 0, width, height)
    }

    if (reduced) {
      const { ctx, width, height } = sizeCanvas()
      drawFull(ctx, width, height)
      return
    }

    const play = () => {
      const { ctx, width, height } = sizeCanvas()
      const targetTiles = 3500
      const ratio = height / width
      const cols = Math.max(40, Math.round(Math.sqrt(targetTiles / ratio)))
      const rows = Math.max(40, Math.round(targetTiles / cols))
      const tileW = width / cols
      const tileH = height / rows
      const total = cols * rows
      const tiles = shuffle(Array.from({ length: total }, (_, index) => index))
      const firstCount = Math.round(total * 0.22)
      const startedAt = performance.now()
      const source = sourceRect(width, height)
      const buffer = document.createElement('canvas')
      buffer.width = canvas.width
      buffer.height = canvas.height
      const bufferCtx = buffer.getContext('2d')
      bufferCtx.setTransform(dpr, 0, 0, dpr, 0, 0)
      bufferCtx.fillStyle = '#0c0b12'
      bufferCtx.fillRect(0, 0, width, height)
      bufferCtx.shadowColor = 'rgba(255, 214, 150, 0.95)'
      bufferCtx.shadowBlur = 5
      let drawn = 0

      const ease = (t) => t * t * (3 - 2 * t)

      const drawTile = (index) => {
        const col = index % cols
        const row = Math.floor(index / cols)
        const sx = source.sx + (col / cols) * source.sw
        const sy = source.sy + (row / rows) * source.sh
        const sw = source.sw / cols
        const sh = source.sh / rows
        const padX = tileW * 0.16
        const padY = tileH * 0.16
        bufferCtx.drawImage(
          image,
          sx,
          sy,
          sw,
          sh,
          col * tileW + padX,
          row * tileH + padY,
          Math.max(1, tileW - padX * 2),
          Math.max(1, tileH - padY * 2)
        )
      }

      const visibleCount = (elapsed) => {
        if (elapsed < 3000) {
          return Math.max(1, Math.floor(firstCount * ease(elapsed / 3000)))
        }

        if (elapsed < 11000) {
          return firstCount + Math.floor(
            (total - firstCount) * ease((elapsed - 3000) / 8000)
          )
        }

        return total
      }

      const frame = (now) => {
        const elapsed = now - startedAt

        if (elapsed >= 15000) {
          play()
          return
        }

        if (elapsed >= 14200) {
          drawFull(ctx, width, height)
          ctx.fillStyle = `rgba(12, 11, 18, ${(elapsed - 14200) / 800})`
          ctx.fillRect(0, 0, width, height)
          window.requestAnimationFrame(frame)
          return
        }

        if (elapsed >= 11000) {
          drawFull(ctx, width, height)
          window.requestAnimationFrame(frame)
          return
        }

        const count = visibleCount(elapsed)
        while (drawn < count) {
          drawTile(tiles[drawn])
          drawn += 1
        }

        ctx.fillStyle = '#0c0b12'
        ctx.fillRect(0, 0, width, height)
        ctx.drawImage(buffer, 0, 0, width, height)
        window.requestAnimationFrame(frame)
      }

      window.requestAnimationFrame(frame)
    }

    play()
  }
}

startMasterpieceMotion()