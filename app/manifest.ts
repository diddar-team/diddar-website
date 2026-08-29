import type { MetadataRoute } from 'next';
import { APP_NAME } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: APP_NAME,
    short_name: APP_NAME,
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
