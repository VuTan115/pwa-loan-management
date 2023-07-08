import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/icon.png'></link>
        {/* Meta tags */}
        <meta name='theme-color' content='#f69435' />
        <meta name='background-color' content='#f69435' />
        <meta name='display' content='standalone' />
        <meta name='scope' content='/' />
        <meta name='start_url' content='/' />
        <meta name='application-name' content='Quản lý nợ' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Quản lý nợ' />
        <meta name='description' content='Ứng dụng quản lý nợ của khách hàng' />

        {/* Link tags */}
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/icon-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='256x256'
          href='/icon-256x256.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='384x384'
          href='/icon-384x384.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='512x512'
          href='/icon-512x512.png'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
