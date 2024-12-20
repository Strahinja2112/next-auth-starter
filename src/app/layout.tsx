import { LanguageProvider } from '@inlang/paraglide-next';
import { PropsWithChildren } from 'react';

import { Footer } from '@/components/footer';
import Header from '@/components/navbar/header';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { Toaster } from '@/components/ui/toaster';
import { siteConfig } from '@/lib/constant';
import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { languageTag } from '@/paraglide/runtime.js';

import '@/styles/globals.css';
import { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.url()),
    title: {
      default: siteConfig.title(),
      template: `%s | ${siteConfig.title()}`,
    },
    description: siteConfig.description(),
    keywords: siteConfig.keywords(),
    robots: { index: true, follow: true },
    icons: {
      icon: '/favicon/favicon.ico',
      shortcut: '/favicon/favicon-16x16.png',
      apple: '/favicon/apple-touch-icon.png',
    },
    verification: {
      google: siteConfig.googleSiteVerificationId(),
    },
    openGraph: {
      url: siteConfig.url(),
      title: siteConfig.title(),
      description: siteConfig.description(),
      siteName: siteConfig.title(),
      images: '/opengraph-image.png',
      type: 'website',
      locale: languageTag(),
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.title(),
      description: siteConfig.description(),
      images: '/opengraph-image.png',
    },
  };
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <LanguageProvider>
      <html lang={languageTag()} suppressHydrationWarning>
        <body className={cn('min-h-screen font-sans', fonts)}>
          <div className="dot-grid" />
          <ThemeProvider attribute="class">
            <Header />
            {children}
            <ThemeSwitcher className="absolute bottom-5 right-5 z-10" />
            <Footer />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </LanguageProvider>
  );
}
