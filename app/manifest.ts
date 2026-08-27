import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dida',
    short_name: 'Dida',
    description:
      'A practical, mentor-led tech bootcamp shaped around real demand.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fcfbf8',
    theme_color: '#173fea',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
