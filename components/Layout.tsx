import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import type { ReactNode } from 'react';

type Props = { children: ReactNode; };

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ahc-stats</title>
        <meta name="description" content="ahc-stats" />
        <meta name="google-site-verification" content="_kLReeB5nmuUoJdyJkgjUbPwxR8cMkdqQ98997JO3Xw" />
      </Head>

      <main className={styles.main}>
        <header className={styles.title}>
          <a href="https://atcoder.jp/" target="_blank" rel="noopener noreferrer">AtCoder</a> Heuristic Contest Statistics (ahc-stats)
        </header>
        { children }
      </main>

      <footer className={styles.footer}>
        by <a href='https://twitter.com/ToastUz' target="_blank" rel="noopener noreferrer">ToastUz</a>
        , source code is at <a href='https://github.com/toast-uz/ahc-stats' target="_blank" rel="noopener noreferrer">GitHub</a>
      </footer>
    </div>
  )
};

export default Layout;
