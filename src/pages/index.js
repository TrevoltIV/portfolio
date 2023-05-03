import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import Welcome from '@/components/Welcome'
import List from '@/components/List'
import styles from '@/styles/home.module.css'



export default function Home() {
  return (
    <>
      <Head>
        <title>Karsten Koerner | Portfolio</title>
        <meta name="description" content="Karsten Koerner Web Developer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Header title="My Portfolio" />
        <div className={styles.content}>
          <Welcome title="Welcome to my portfolio!" />
          <List />
        </div>
      </div>
    </>
  )
}
