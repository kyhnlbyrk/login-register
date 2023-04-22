import '../styles/globals.scss';
import { useTranslation, appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

function App({ Component, pageProps }: AppProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n]);
  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
