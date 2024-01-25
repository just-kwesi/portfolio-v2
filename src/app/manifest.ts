import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Frederick Tetteh's Portfolio Site",
    short_name: 'just-kwesi',
<<<<<<< HEAD
    description: 'portfolio site for frederick tetteh',
=======
    description: 'portfolio site for frederick tetttehg',
>>>>>>> main
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
<<<<<<< HEAD
        src: '/images/icon-192.png',
=======
        src: '/android-chrome-192x192.png',
>>>>>>> main
        sizes: '192x192',
        type: 'image/png',
      },
      {
<<<<<<< HEAD
        src: '/images/icon-512.png',
=======
        src: '/android-chrome-512x512.png',
>>>>>>> main
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
