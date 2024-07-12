import localFont from 'next/font/local';

export const oswald = localFont({
  src: [
    {
      path: './Oswald-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-oswald',
});

export const sfPro = localFont({
  src: [
    {
      path: './SFProDisplay-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './SFProDisplay-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './SFProDisplay-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sfpro',
});
