import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Contact.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Karsten Koerner</title>
        <meta name="description" content="Full Stack Developer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.logoWrapper}>
              <Image
                src="/images/logo.png"
                alt="Karsten Koerner Portfolio Logo"
                className={styles.logo}
                width={200}
                height={200}
              />
            </div>
            <div className={styles.menuWrapper}>
              <div className={styles.menu}>
                <Link href="/" className={styles.menuBtn}>
                  Home
                </Link>
                <Link href="/portfolio" className={styles.menuBtn}>
                  Portfolio
                </Link>
                <Link href="/contact" className={styles.menuBtn}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.pageContent}>
            Email: <Link href="mailto:kgk1999@gmail.com">kgk1999@gmail.com</Link><br />
            Phone: <Link href="tel:4046956774">&#40;404&#41; 695-6774</Link>
          </div>
        </div>
      </main>
    </>
  )
}