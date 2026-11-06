import './style.css'
import './delete-account.css'
import { initMobileNav } from './nav.js'

const deletionMail =
  'mailto:support@zenpxl.com?subject=ZenPXL%20account%20deletion%20request&body=Please%20delete%20the%20ZenPXL%20account%20for%20this%20email%20address.%0A%0AAccount%20email%3A%20'

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

    <main class="delete-page">
      <p class="company-line">ZenPXL is developed and operated by Digital Galleria Designs, Ltd., based in Pella, Iowa.</p>
      <h1>Delete your ZenPXL account</h1>
      <p>You can delete your ZenPXL account in the app.</p>

      <h2>In the app</h2>
      <ol>
        <li>Open ZenPXL and tap Profile.</li>
        <li>Tap Account.</li>
        <li>Tap Delete Account / Delete My Data.</li>
        <li>If that screen shows Password, enter it, then tap Delete Account / Delete My Data. If you use Google, tap Continue with Google.</li>
        <li>Tap Cancel to leave without deleting.</li>
      </ol>
      <p>Sign Out does not delete your account or your saved data.</p>

      <h2>What is deleted</h2>
      <p>When deletion succeeds, ZenPXL deletes the account and the cloud data stored for it. That includes Picture It photos, Personal Voices, Dear Me, Future Me, and Masterpiece images.</p>
      <p>It also removes private ZenPXL content stored on the device used for that deletion, including Personal Voices, Picture It images, Dear Me, and Future Me.</p>
      <p>A copy already kept by your phone’s own backup is not deleted.</p>

      <h2>What can remain</h2>
      <p>A keepsake purchase record can remain so that store purchase cannot be claimed again. It does not keep your photos, letters, recordings, or Masterpiece.</p>
      <p>A store event record can remain so a repeated store notice is not treated as a new purchase, and so that notice stays tied to the deleted account. Those records do not include your photos, letters, recordings, or Masterpiece.</p>
      <p>ZenPXL does not set a date for removing those purchase records.</p>
      <p>The shared PXL library and I Need Help resources stay in the app.</p>

      <h2>Subscriptions</h2>
      <p>Deleting your account does not cancel a Google Play or Apple subscription.</p>
      <p>To stop renewal in the app, tap Profile, then tap Manage or cancel subscription. That opens the Google Play or Apple subscription page. You can cancel anytime through Google Play or Apple subscriptions. Canceling stops renewal. Access continues until the current period ends. Opening that page does not by itself cancel the subscription.</p>

      <h2>Delete individual items and keep your account</h2>
      <p>You can delete one item and stay signed in. These controls do not delete your ZenPXL account. Delete Account / Delete My Data, above, is the control that deletes the account.</p>
      <ul>
        <li>Dear Me: open the letter, tap the trash icon, then tap Delete.</li>
        <li>Future Me: open the message, tap the trash icon, then tap Delete.</li>
        <li>Picture It: on the board, choose Delete Photo. Or open the photo, tap the trash icon, then confirm.</li>
        <li>Personal Voices: on the recording or video, tap Delete, then confirm Delete. The Personal PXL wording stays.</li>
        <li>Personal PXLs: tap Profile, tap Personal PXLs, tap Delete, then confirm Delete. This removes it from the phone and the account right away. It does not go to Recently Deleted.</li>
      </ul>
      <p>A backed-up letter, photo, recording, or video normally stays recoverable in Recently Deleted for 30 days. A daily cleanup then removes it. If the phone is offline, the cloud copy stays until sync records the deletion. The cleanup that runs 90 days after Plus ends can remove that copy sooner.</p>
      <p>After ZenPXL Plus ends, cloud copies are removed after 90 days. A letter deleted after Plus ends may stay in the cloud until that cleanup, because letter deletion is not uploaded once Plus expires.</p>

      <h2>Without the app</h2>
      <p>If you cannot open the app, email <a href="${deletionMail}">support@zenpxl.com</a> and ask Digital Galleria Designs, Ltd. to delete the account. Use the email address on the ZenPXL account. Do not send a password.</p>
    </main>

    <footer>
      <div class="footer-company">
        <p class="company-line">ZenPXL is developed and operated by Digital Galleria Designs, Ltd., based in Pella, Iowa.</p>
        <a class="footer-contact" href="mailto:support@zenpxl.com">Contact Us</a>
      </div>
      <div class="footer-bar">
        <div>© 2026 ZenPXL</div>
        <div class="footer-links">
          <a href="https://www.iubenda.com/privacy-policy/17417543" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="https://www.iubenda.com/privacy-policy/17417543/cookie-policy" target="_blank" rel="noopener noreferrer">Cookie Policy</a>
          <a href="https://www.iubenda.com/terms-and-conditions/17417543" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a>
          <a href="/#contact">Support / Contact</a>
          <a href="/delete-account">Delete account</a>
        </div>
      </div>
    </footer>
  </div>
`

initMobileNav()
