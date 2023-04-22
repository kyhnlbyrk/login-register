import Head from 'next/head';
import Styles from '../styles/Home.module.scss';
import Card from '../components/atoms/Card';
import LoginForm from '../components/molecules/LoginForm';
import Tab from '../components/molecules/Tab';
import RegisterForm from '../components/molecules/RegisterForm';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Auth Page</title>
        <meta name="description" content="Login with auth page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={Styles['main']}>
        <Card>
          <Tab>
            <Tab.Panel title={t('LOGIN')}>
              <LoginForm />
            </Tab.Panel>
            <Tab.Panel title={t('REGISTER')}>
              <RegisterForm />
            </Tab.Panel>
          </Tab>
        </Card>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
