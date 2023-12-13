import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Drupal Book",
  description: "Drupal at your Fingertips: A developers quick reference for Drupal 9 and 10",
  base: '/d9book',
  srcDir: './book',
  outDir: './dist',
  cleanUrls: true,
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/d9book/favicon.ico' }]],
  rewrites: {
    'nodes_n_fields.md': 'nodes-and-fields.md',
    'off_the_island.md': 'off-island.md',
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Attribution', link: '/attribution' }
    ],

    outline: {
      level: [2, 3],
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/selwynpolit/d9book/edit/gh-pages/book/:path',
      text: 'Edit this page on GitHub'
    },

    sidebar: [],

    socialLinks: [
      { icon: 'x', link: '//twitter.com/selwynpolit' },
      { icon: 'github', link: '//github.com/selwynpolit' }
    ],

    footer: {
      message:
          '<span>\n' +
          '  <a property="dct:title" rel="cc:attributionURL" href="//selwynpolit.github.io/d9book">Drupal at your fingertips</a>\n' +
          '  by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="//drupal.org/u/selwynpolit">Selwyn Polit</a>\n' +
          '  is licensed under <a href="//creativecommons.org/licenses/by/4.0/" target="_blank" rel="license noopener noreferrer">CC BY 4.0\n' +
          '  </a></span>',
    }
  }
})
