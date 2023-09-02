import { defineConfig, searchForWorkspaceRoot } from 'vite'

export default defineConfig({
    base: 'local-tile-craft', // for github pages: https://ja.vitejs.dev/guide/static-deploy.html#github-pages
    server: {
    fs: {
      allow: [
        // search up for workspace root
        searchForWorkspaceRoot(process.cwd()),
        '../style',
      ],
    },
  },
})
