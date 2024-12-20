import { JetBrains_Mono, Outfit } from 'next/font/google';

const font = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  fallback: ['system-ui', 'arial'],
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  fallback: ['system-ui', 'arial'],
});

export const fonts = [font.variable, fontMono.variable];
