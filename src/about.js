import './style.css'
import './about.css'
import { initMobileNav } from './nav.js'

document.querySelector('#app').innerHTML = `
  <div class="page">
    <header class="nav">
      <a class="brand" href="/">
        <img src="/ZenPXLWordmark_OnBlack (1).png" alt="ZenPXL">
      </a>
      <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="site-menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav class="links" id="site-menu">
        <a href="/">Home</a>
        <a href="/explore.html">Explore the App</a>
        <a href="/about.html">About</a>
        <a href="/#pricing">Pricing</a>
      </nav>
    </header>

    <main class="about-page">
      <section class="about-hero">
        <div class="eyebrow">ABOUT</div>
        <h1>Why ZenPXL Exists</h1>
        <p>The idea for ZenPXL grew from a simple frustration: the things that inspire us are often the easiest things to forget.</p>
        <p>ZenPXL’s founder was always searching for ways to think differently and live a happier, more meaningful life — reading everything from the Bible and books on happiness, positivity, and personal growth to the writings of the Stoics.</p>
        <p>A passage could completely shift her perspective in the moment. But moments later, the book would be back on the shelf, life would get busy, and the lesson that had felt so meaningful would slowly fade with it.</p>
        <div class="about-diamond-row" aria-hidden="true">
          <img src="/ef5196.png" alt="">
          <img src="/70ccd4.png" alt="">
          <img src="/fad486.png" alt="">
        </div>
      </section>

      <section class="about-block">
        <div class="about-copy">
          <h2>Trying to Make Inspiration Stick</h2>
          <p>So she started finding ways to keep those ideas closer.</p>
          <p>She recorded messages and reminders in her own voice. She had cards printed with meaningful sayings and words she wanted to remember. She saved quotes, photos, thoughts, goals, and little pieces of wisdom that made her stop and think.</p>
          <p>But the voice recordings were forgotten about. The cards got misplaced, worn, or damaged. Photos lived in one place, notes in another, and inspiration became scattered across books, screenshots, recordings, and pieces of paper.</p>
          <p class="about-pull">Too often, out of sight meant out of mind.</p>
        </div>
        <div class="about-scatter" aria-hidden="true">
          <figure>
            <img src="/picture-dream-home.png" alt="">
          </figure>
          <figure>
            <img src="/picture-italy-vineyard.png" alt="">
          </figure>
          <figure>
            <img src="/picture-happiness-family.png" alt="">
          </figure>
          <figure>
            <img src="/picture-promotion-office.png" alt="">
          </figure>
          <img class="about-scatter-diamond about-scatter-diamond-pink" src="/ef5196.png" alt="">
          <img class="about-scatter-diamond about-scatter-diamond-gold" src="/fad486.png" alt="">
        </div>
      </section>

      <section class="about-block about-whatif-block">
        <div class="about-copy about-copy-wide">
          <h2>What If It Could All Live in One Place?</h2>
          <p class="about-whatif">What if the things that help shape your mindset and remind you of the life you want to live could all exist in one place — and instead of having to remember to go looking for them, they could find their way back to you?</p>
          <p class="about-whatif">What if a gentle notification could remind you to pause for ten seconds, smile, notice something good, remember what you’re grateful for, revisit words that matter to you, or do something kind for someone else?</p>
          <p>A place for your words. Your voice. Inspiration Photos. Gratitude. Goals. Dear Me messages. Future Me. Meaningful memories. Wisdom worth remembering. And small Actions that encourage you to take positivity beyond the screen and into your everyday life.</p>
          <ul class="about-place-list">
            <li><img src="/70ccd4.png" alt="">Your words</li>
            <li><img src="/ef5196.png" alt="">Your voice</li>
            <li><img src="/fad486.png" alt="">Inspiration Photos</li>
            <li><img src="/70ccd4.png" alt="">Gratitude</li>
            <li><img src="/ef5196.png" alt="">Goals</li>
            <li><img src="/fad486.png" alt="">Dear Me</li>
            <li><img src="/70ccd4.png" alt="">Future Me</li>
            <li><img src="/ef5196.png" alt="">Memories</li>
            <li><img src="/fad486.png" alt="">Wisdom</li>
            <li><img src="/70ccd4.png" alt="">Small Actions</li>
          </ul>
          <p class="about-pull">That idea became ZenPXL.</p>
        </div>
      </section>

      <section class="about-block about-finale">
        <div class="about-copy">
          <h2>Small Moments. Bigger Picture.</h2>
          <p>At the heart of ZenPXL is the belief that meaningful moments don’t have to take much time. We may want to meditate, journal, read, or spend time reflecting, but when life gets busy, even ten uninterrupted minutes can be difficult to find.</p>
          <p>ZenPXL starts smaller: just ten seconds to pause, smile, notice something good, think differently, or take one positive action.</p>
          <p>A thought that shifts your perspective. A reason to smile. A moment of gratitude. A reminder of something you love about your life. A kind act for someone else. A photo of something you’re working toward. Or words from yourself that arrive on a day when you need to hear them.</p>
          <p>Each is a small PXL.</p>
          <p>And just as thousands of tiny pixels come together to create a picture, the thoughts, choices, actions, memories, dreams, and moments that make up your life come together to create something much bigger.</p>
          <p class="about-masterpiece-word">Your Masterpiece.</p>
        </div>
        <div class="about-masterpiece">
          <img src="/masterpiece.jpg" alt="A Masterpiece forming from collected PXLs">
          <img class="about-scatter-diamond about-scatter-diamond-teal" src="/70ccd4.png" alt="">
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

initMobileNav()
