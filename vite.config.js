import { defineConfig } from 'vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))

function rewriteDeleteAccount(req, _res, next) {
  const path = req.url?.split('?')[0]
  if (path === '/delete-account' || path === '/delete-account/') {
    const query = req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : ''
    req.url = `/delete-account.html${query}`
  }
  next()
}

export default defineConfig({
  plugins: [
    {
      name: 'delete-account-path',
      configureServer(server) {
        server.middlewares.use(rewriteDeleteAccount)
      },
      configurePreviewServer(server) {
        server.middlewares.use(rewriteDeleteAccount)
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        explore: resolve(root, 'explore.html'),
        about: resolve(root, 'about.html'),
        deleteAccount: resolve(root, 'delete-account.html'),
      },
    },
  },
})
