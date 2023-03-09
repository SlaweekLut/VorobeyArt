export default [
  { UserAgent: '*' },
  { Allow: '/' },
  { Disallow: '/404/' },
  { BlankLine: true },

  // TODO заменить на свой хост
  { Sitemap: 'https://zhigulskiy.ru/sitemap.xml' },
];
