const U = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const PHOTOS = {
  hero: {
    src: U('photo-1522071820081-009f0129c71c', 1400),
    alt: 'A small team working together around a table with laptops',
  },
  cohort: {
    src: U('photo-1517048676732-d65bc937f952', 1600),
    alt: 'Three people collaborating over a laptop in a bright studio',
  },
} as const;
