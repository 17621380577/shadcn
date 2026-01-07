import ConfigInject from '@/components/Layout/ConfigInject';
import { StoreProvider } from '@/store';
import '@/styles/animation.css';
import '@/styles/globals.css';
import dayjs from 'dayjs';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Script from 'next/script';
/**
 * @author 龙保江
 * @date 2024-09-11 14:45:47
 * @desc 配置网站元数据，如标题、描述、关键词等。
 */
export const metadata: Metadata = {
  title: 'Tiny Invoice',
  other: {
    // 用于描述打包时间
    buildtime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    // 用于描述版本信息
    appVersion: process.env.APP_VERSION || '1.0.0',
  },
};

/**
 * @author 龙保江
 * @date 2024-09-11 14:45:39
 * @desc 包含了视口相关的设置，如宽度、初始缩放等。
 */
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" sizes="any" type="image/png" />
      <head>
        {/* <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" /> */}
      </head>

      <body className="min-w-screen min-h-screen w-screen h-screen transition-all font-['IBM_Plex_Sans_Condensed']">
        <Script
          id="show-banner"
          dangerouslySetInnerHTML={{
            __html: `var _iub = _iub || [];
            _iub.csConfiguration = {
              askConsentAtCookiePolicyUpdate: true,
              countryDetection: true,
              enableFadp: true,
              enableLgpd: true,
              enableUspr: true,
              floatingPreferencesButtonDisplay: "bottom-right",
              lang: "en",
              perPurposeConsent: true,
              siteId: 1835226,
              whitelabel: false,
              cookiePolicyId: 94169408,
              storage: { useSiteId: true },
              floatingPreferencesButtonCaption: true,
              banner: {
                acceptButtonDisplay: true,
                backgroundOverlay: true,
                closeButtonDisplay: false,
                customizeButtonDisplay: true,
                explicitWithdrawal: true,
                fontSizeBody: "18px",
                listPurposes: true,
                logo: null,
                ownerName: "tinyinvoice.app",
                position: "bottom",
                rejectButtonDisplay: true,
                showPurposesToggles: true,
                showTitle: false,
                showTotalNumberOfProviders: true,
              },
            };`,
          }}
        />
        <Script
          id="1835226-script"
          src="https://cs.iubenda.com/autoblocking/1835226.js"
          type="text/javascript"
        />
        <Script
          id="stub-script"
          src="https://cdn.iubenda.com/cs/gpp/stub.js"
          type="text/javascript"
        />
        <Script
          id="iubenda_cs-script"
          src="https://cdn.iubenda.com/cs/iubenda_cs.js"
          type="text/javascript"
          async
        />
        <StoreProvider>
          <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        </StoreProvider>
        <ConfigInject />
      </body>
    </html>
  );
}
