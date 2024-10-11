import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Halo Outer Space Travel Website',
    short_name: 'Halo Outer Space Travel',
    start_url: '/',
    display: 'fullscreen',
    orientation: 'any',
    theme_color: '#60A0FF',
    background_color: '#000000',
    description: 'Welcome to Halo Outer Space Travel.',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '1024x1024',
        type: 'image/png',
      },
    ],
  };

}