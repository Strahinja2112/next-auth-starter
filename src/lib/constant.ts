import { env } from '@/env.mjs';
import * as m from '@/paraglide/messages';

export const siteConfig = {
  title: m.metaTitle,
  description: m.metaDescription,
  keywords: () => [
    m.metaKeywordNextjs(),
    m.metaKeywordReact(),
    m.metaKeywordNextjsStarter(),
    m.metaKeywordNextjsBoilerplate(),
    m.metaKeywordStarterTemplate(),
    m.metaKeywordTailwindcss(),
    m.metaKeywordTypescript(),
    m.metaKeywordShadcnUi(),
    m.metaKeywordNextAuth(),
    m.metaKeywordPrisma(),
  ],
  url: () => env.APP_URL,
  googleSiteVerificationId: () => env.GOOGLE_SITE_VERIFICATION_ID || '',
};
