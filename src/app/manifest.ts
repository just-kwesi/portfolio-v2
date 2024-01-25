import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Frederick Tetteh's Portfolio Site",
    short_name: 'just-kwesi',
    description: 'portfolio site for frederick tetteh',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/images/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/images/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    screenshots: [
      {
        src: '/screenshot5.jpg',
        type: 'image/jpeg',
        sizes: '2388x1696',
      },
      {
        src: '/screenshot6.jpg',
        type: 'image/jpeg',
        sizes: '2388x1696',
      },
      {
        src: '/screenshot1.jpg',
        type: 'image/jpeg',
        sizes: '856x1768',
      },
      {
        src: '/screenshot2.jpg',
        type: 'image/jpeg',
        sizes: '856x1768',
      },
    ],
  }
}
