import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'cmyk',
    text: '🖨 Light'
  },
  {
    name: 'dracula',
    text: '🧛 Dark'
  },
  {
    name: 'valentine',
    text: '🌸 Valentine'
  },
  {
    name: 'aqua',
    text: '💦 Aqua'
  },
  {
    name: 'synthwave',
    text: '🌃 Synthwave'
  },
  {
    name: 'night',
    text: '🌃 Night'
  },
  {
    name: 'lofi',
    text: '🎶 Lo-Fi'
  },
  {
    name: 'lemonade',
    text: '🍋 Lemonade'
  },
  {
    name: 'cupcake',
    text: '🧁 Cupcake'
  },
  {
    name: 'garden',
    text: '🏡 Garden'
  },
  {
    name: 'retro',
    text: '🌇 Retro'
  },
  {
    name: 'black',
    text: '🖤 Black'
  }
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  nav: [
    {
      text: 'Posts',
      link: '/posts/the-dust-box-presents'
    },
    {
      text: 'More',
      link: '/more-art'
    }
  ]
}

export const footer: FooterConfig = {
  nav: [
    {
      text: 'FC Geißlingen',
      link: 'https://fc-geisslingen.de/'
    },
    {
      text: 'Impressum',
      link: '/impressum'
    },
    {
      text: 'FSB',
      link: '/'
    }
  ]
}

export const date: DateConfig = {
  locales: 'en-US',
  options: {
    year: '2-digit',
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  }
}

export const feed: FeedConfig = {}
