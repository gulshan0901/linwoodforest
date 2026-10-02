import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Linwood Forest Insurance Group',
    short_name: 'Linwood Forest',
    description: 'Independent insurance agency serving Whitehall, PA and the Lehigh Valley.',
    start_url: '/en',
    display: 'standalone',
    background_color: '#f7f9fa',
    theme_color: '#225443',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
