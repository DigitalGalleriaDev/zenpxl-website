import './style.css'
import './explore.css'

document.querySelector('#app').innerHTML = `
  <div class="page">
    <header class="nav">
      <a class="brand" href="/">
        <img src="/ZenPXLWordmark_OnBlack (1).png" alt="ZenPXL">
      </a>
      <nav class="links">
        <a href="/">Home</a>
        <a href="/explore.html">Explore the App</a>
        <a href="/about.html">About</a>
        <a href="/#pricing">Pricing</a>
      </nav>
    </header>

    <main class="explore-page">
      <section class="explore-hero">
        <div class="eyebrow">A TOUR OF THE APP</div>
        <h1>Explore how ZenPXL gets to know you.</h1>
        <p class="explore-lead">From the first questions to the PXLs that find you — and the voices, pictures, and notes you add yourself. Small actions. A better day. Inspire a more meaningful life.</p>
      </section>

      <section class="explore-step">
        <div class="explore-step-copy">
          <div class="section-label">01 · ONBOARDING</div>
          <h2>It starts by getting to know you.</h2>
          <p>ZenPXL asks thoughtful questions — what makes you smile, what you love doing, how life feels right now, what you’d like more of. There are no right or wrong answers. Each one helps shape PXLs that feel like you.</p>
          <p class="explore-note">Why we ask: so the tone, timing, and types of encouragement can be personal — without needing your full birth date or anything you don’t want to share.</p>
        </div>
        <div class="tour-phone">
          <div class="app-screen">
            <div class="app-status"></div>
            <p class="app-kicker">Let’s get to know you.</p>
            <h3 class="app-title">What makes you smile?</h3>
            <p class="app-sub">Choose all that feel like you.</p>
            <div class="app-chips">
              <span class="is-on">Family</span>
              <span class="is-on">Friends</span>
              <span>Pets</span>
              <span class="is-on">Nature</span>
              <span>Music</span>
              <span>Travel</span>
              <span class="is-on">Laughter</span>
              <span>Quiet moments</span>
            </div>
            <p class="app-why">Why we ask</p>
            <p class="app-why-body">ZenPXL uses this to personalize the types of PXLs that may be most relevant to you.</p>
          </div>
        </div>
      </section>

      <section class="explore-step">
        <div class="explore-step-copy">
          <div class="section-label">02 · MORE QUESTIONS</div>
          <h2>The questions keep getting more you.</h2>
          <p>Colors you love. What you’d like more of. Thoughts you’re ready to leave behind. When you could use extra encouragement. Every answer is a small PXL toward an experience that feels like yours.</p>
        </div>
        <div class="tour-phone">
          <div class="app-screen">
            <div class="app-status"></div>
            <p class="app-kicker">Let’s make ZenPXL yours.</p>
            <h3 class="app-title">What would you love more of?</h3>
            <p class="app-sub">Choose up to 5.</p>
            <div class="app-chips">
              <span class="is-on">Peace</span>
              <span class="is-on">Energy</span>
              <span>Confidence</span>
              <span class="is-on">Joy</span>
              <span>Clarity</span>
              <span>Rest</span>
              <span class="is-on">Connection</span>
            </div>
            <p class="app-why">Why we ask</p>
            <p class="app-why-body">These choices help shape the PXLs and moments we offer you.</p>
          </div>
        </div>
      </section>

      <section class="explore-step">
        <div class="explore-step-copy">
          <div class="section-label">03 · REMINDERS</div>
          <h2>A nudge to smile — and come back to the moment.</h2>
          <p>You choose when you could use a little extra encouragement. ZenPXL can remind you in your local time: a PXL is waiting, take 10 seconds for you. Those small thoughts and actions are how a good day — and a good life — get built.</p>
          <p class="explore-note">You can change or turn reminders off anytime in Reminders &amp; Notifications.</p>
        </div>
        <div class="tour-phone">
          <div class="app-screen">
            <div class="app-status"></div>
            <p class="app-kicker">Reminders</p>
            <h3 class="app-title">Let ZenPXL remind you</h3>
            <p class="app-sub">A little extra encouragement, in your local time.</p>
            <div class="app-notice">
              <strong>ZenPXL</strong>
              <span>Take 10 seconds for you.</span>
            </div>
            <div class="app-notice">
              <strong>ZenPXL</strong>
              <span>A PXL is waiting for you.</span>
            </div>
            <p class="app-sub app-sub-tight">Hold a smile. One small thought. One kind action. That’s how a good day begins.</p>
          </div>
        </div>
      </section>

      <section class="explore-step">
        <div class="explore-step-copy">
          <div class="section-label">04 · YOUR PXL</div>
          <h2>Personalized PXLs, statement at the top.</h2>
          <p>When a PXL opens, the words sit high on the screen — a large, quiet statement written for you. Below it, the same smile row as in the app. Today’s PXLs, ones you write yourself, and “Give me a PXL” all use what ZenPXL already knows about you.</p>
        </div>
        <div class="tour-phone">
          <div class="app-screen app-screen-pxl">
            <img class="app-pxl-still" src="/masterpiece.jpg" alt="">
            <div class="app-pxl-veil"></div>
            <div class="app-pxl-top">
              <span>×</span>
              <span>♡</span>
            </div>
            <p class="app-pxl-statement">You do not have to solve the whole day. Just decide what the next ten minutes need.</p>
            <div class="app-pxl-smiles">
              <span>smile</span>
              <span>smile</span>
              <span>smile</span>
            </div>
            <div class="app-pxl-complete">
              <div class="app-pxl-ring" aria-hidden="true">
                <svg viewBox="0 0 56 56">
                  <circle class="ring-track" cx="28" cy="28" r="24"></circle>
                  <circle class="ring-fill" cx="28" cy="28" r="24"></circle>
                </svg>
                <span class="app-pxl-ring-dot"></span>
              </div>
              <div class="app-pxl-dots">
                <span class="is-lit"></span>
                <span class="is-lit"></span>
                <span class="is-lit"></span>
                <span class="is-lit"></span>
                <span class="is-lit"></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p class="app-pxl-earned">+1 PXL</p>
            </div>
          </div>
        </div>
      </section>

      <section class="explore-step">
        <div class="explore-step-copy">
          <div class="section-label">05 · VOICES</div>
          <h2>Your voice. Or someone you love.</h2>
          <p>Record your own voice, or import audio or video from someone whose encouragement matters. Hear it when you need it. Recordings stay private on your device.</p>
        </div>
        <div class="tour-phone">
          <div class="app-screen">
            <div class="app-status"></div>
            <p class="app-kicker">Personal Voices</p>
            <h3 class="app-title">Voices that encourage you.</h3>
            <p class="app-sub">Record your own voice, or import someone whose encouragement matters.</p>
            <div class="app-wave"></div>
            <button class="app-pill" type="button">Record My Voice</button>
            <button class="app-pill app-pill-ghost" type="button">Import Audio or Video</button>
            <p class="app-sub">Whose voice is this?</p>
            <div class="app-chips">
              <span class="is-on">Mine</span>
              <span>Family or friend</span>
              <span>Other</span>
            </div>
          </div>
        </div>
      </section>

      <section class="explore-step">
        <div class="explore-step-copy">
          <div class="section-label">06 · PICTURE IT</div>
          <h2>Keep your dreams in sight.</h2>
          <p>Your inspiration deserves more than a quick scroll. Save the images that represent your dreams, goals, experiences, and the life you want to create — from a dream house or bucket-list trip to a quote or photo that changes your perspective. Add your own note and make every image mean something to you.</p>
        </div>
        <div class="tour-phone">
          <div class="app-screen">
            <div class="app-status"></div>
            <p class="app-kicker">Picture It</p>
            <h3 class="app-title">Keep what inspires you in sight.</h3>
            <p class="app-picture-head">PICTURE THE LIFE YOU'RE BUILDING.</p>
            <div class="app-board">
              <figure>
                <img src="/picture-dream-home.png" alt="Dream home">
                <figcaption>Dream home</figcaption>
              </figure>
              <figure>
                <img src="/picture-italy-vineyard.png" alt="Italy trip">
                <figcaption>Italy trip</figcaption>
              </figure>
              <figure>
                <img src="/picture-happiness-family.png" alt="Happiness">
                <figcaption>Happiness</figcaption>
              </figure>
              <figure>
                <img src="/picture-promotion-office.png" alt="Promotion">
                <figcaption>Promotion</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section class="explore-step">
        <div class="explore-step-copy">
          <div class="section-label">07 · DEAR ME</div>
          <h2>A note just for you.</h2>
          <p>Dear Me is your space to write the words you want to remember. Create personal messages about who you are, what matters to you, and what you never want to forget. ZenPXL brings them back when you may need to hear them most.</p>
        </div>
        <div class="tour-phone">
          <div class="app-screen">
            <div class="app-status"></div>
            <p class="app-kicker">Dear Me,</p>
            <div class="app-letter">
              <p>Jennifer, you are so valued and loved.</p>
              <p>You give so much of yourself to others. You are an amazing nurse, a loving wife, and a wonderful mom.</p>
              <p>The care you give matters. The love you give matters. You matter, too.</p>
              <p>Remember to give some of that same kindness back to yourself.</p>
              <p>You deserve it. ❤️</p>
            </div>
          </div>
        </div>
      </section>

      <section class="explore-step">
        <div class="explore-step-copy">
          <div class="section-label">08 · AND MORE</div>
          <h2>Future Me, Let It Go, your Masterpiece.</h2>
          <p>ZenPXL brings the pieces of your life that inspire you into one place. Add your own words, inspiration photos, your voice, personal reminders, goals, gratitude, meaningful memories, and messages to your future self — alongside 10-second Mind Shifts and simple actions designed to inspire more confidence, kindness, joy, and purpose. It’s not just content you consume; it’s a space you make your own.</p>
        </div>
        <div class="tour-phone">
          <div class="app-screen app-screen-home">
            <div class="app-status"></div>
            <div class="home-greet">
              <p class="home-hello">Good morning, Jennifer</p>
              <p class="home-feel">Don’t just read your PXLs. Feel them.</p>
              <p class="home-now">Breathe it in. Be here now.</p>
            </div>
            <div class="home-today">
              <span>Today’s PXLs</span>
              <em>One small PXL can change the next moment.</em>
            </div>
            <div class="home-row">
              <div class="home-stack">
                <div class="home-tile home-tile-pink">
                  <strong>Personal PXLs</strong>
                  <small>Your words. Your reminders.</small>
                </div>
                <div class="home-tile home-tile-aqua">
                  <strong>Personal Voices</strong>
                  <small>Voices that encourage you.</small>
                </div>
              </div>
              <div class="home-master">
                <canvas class="home-master-canvas" aria-label="Masterpiece one third filled"></canvas>
                <span>Masterpiece</span>
              </div>
            </div>
            <div class="home-picture">Picture It</div>
            <div class="home-letters">
              <span>Dear Me</span>
              <span>Let It Go</span>
              <span>Future Me</span>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div>© 2026 ZenPXL</div>
      <div class="footer-links">
        <a href="/#privacy">Privacy Policy</a>
        <a href="/#terms">Terms of Use</a>
        <a href="/#contact">Support / Contact</a>
      </div>
    </footer>
  </div>
`

const masterpieceCard = document.querySelector('.home-master-canvas')

if (masterpieceCard) {
  const image = new Image()
  image.src = '/masterpiece.jpg'
  image.onload = () => {
    const card = masterpieceCard.parentElement
    const width = card.clientWidth
    const height = card.clientHeight
    const dpr = window.devicePixelRatio || 1
    masterpieceCard.width = Math.round(width * dpr)
    masterpieceCard.height = Math.round(height * dpr)
    const ctx = masterpieceCard.getContext('2d')
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = '#0c0b12'
    ctx.fillRect(0, 0, width, height)

    const cols = 18
    const rows = Math.max(22, Math.round(cols * (height / width)))
    const tileW = width / cols
    const tileH = height / rows
    const total = cols * rows
    const filled = Math.round(total / 3)
    const order = Array.from({ length: total }, (_, i) => i)

    for (let i = order.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1))
      const current = order[i]
      order[i] = order[j]
      order[j] = current
    }

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

    ctx.shadowColor = 'rgba(255, 214, 150, 0.9)'
    ctx.shadowBlur = 3

    for (let i = 0; i < filled; i += 1) {
      const index = order[i]
      const col = index % cols
      const row = Math.floor(index / cols)
      const padX = tileW * 0.18
      const padY = tileH * 0.18
      ctx.drawImage(
        image,
        sx + (col / cols) * sw,
        sy + (row / rows) * sh,
        sw / cols,
        sh / rows,
        col * tileW + padX,
        row * tileH + padY,
        Math.max(1, tileW - padX * 2),
        Math.max(1, tileH - padY * 2)
      )
    }
  }
}
