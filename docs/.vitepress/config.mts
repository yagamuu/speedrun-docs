import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "yagamuu's speedrun documents",
  description: "yagamuuのRTA関連のドキュメント集",
  lang: 'ja-JP',
  base: '/speedrun-docs/',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  appearance: 'dark',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.jpg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Arc1', link: './arc1' },
      {
        text: 'Arc2',
        items: [
          { text: 'JP Defeat Gallarno', link: './arc2_jp_defeat_gallarno' },
          { text: 'JP Any Glitchless(NFC)', link: './arc2_jp_any_glitchless_no_file_convert' },
          { text: 'NMG File Conversion', link: './arc2_jp_nmg_file_convert' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yagamuu/speedrun-docs' },
      { icon: 'x', link: 'https://twitter.com/yagamuu' },
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UCxvEdzzelLeqSNDmWj-1IHA' },
    ]
  }
})
