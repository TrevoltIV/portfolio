import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'


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
            <div className={styles.welcome}>
              <h3 className={styles.welcomeTitle}>
                Welcome to my portfolio!
              </h3>
              <p className={styles.welcomeText}>
                This is my &#40;very basic&#41; project portfolio website!<br />
                Let me introduce myself. My name is Karsten Koerner, I have been a computer nerd my entire life, but I didn't get into programming until about 2-3 years ago when I randomly decided to start learning HTML, not expecting to embark
                on such a long programming journey. I had always been interested in programming and computer science, but thought I was too dumb to ever be good at it. That is, until I actually started trying it out. I zoomed through HTML and CSS within
                more or less 2 weeks, after which I knew almost all there is to know about the two languages. That was when I started to realize I liked "programming", although I hadn't even learned any real programming languages yet. So, I began learning
                JavaScript, as one does. But old me, being ADHD, also started learning PHP to try and understand the backend while I was still learning JS. This, while still educational, resulted in an abomination of a project lol. After that, I understood
                more about how the backend interacts with the frontend to serve data and such, and I started to focus more on JavaScript because I had been getting ahead of myself. I learned a fair bit of JavaScript within the next month or so, and it was
                around this time that I met Colton, my good friend and coworker at WebDev Solutions LLC. who introduced me to React, and NextJS. I had heard a lot about React and other front end frameworks &#40;or libraries if you're that guy&#41;, but I
                hadn't tried it out yet. So I told Colton I would learn it to help him on his projects since he was giving me an oppurtunity. During my time with Colton, I have excelled further than I ever thought was possible. I am now a full stack developer
                and have worked with various modern technologies, but I also understand the underlying basics because I started off in vanilla PHP/JS. I haven't gotten any formal education in the field so far, but I am thinking about getting my Assoc. in Comp Sci
                in the future, mostly for fun. I am one of those autistic nerds that will just sit in my room all day programming random stuff just because I want to learn how to accomplish something. This mentality proves useful because I end up learning so much
                that the average person might not learn. I've found that exploring by myself seems to be a great way to learn about the field. I started in web development, as previously mentioned, but I have now learned Java as well. I built the website
                you're looking at right now with NextJS, and my own custom JSON small-project database library that you can find on NPM called "databased". I'm also a firm believer in Jesus Christ, if you were wondering what the cross logo is all about.
                Anyway, for the sad soul that is somehow still reading this messy paragraph that I whipped up in like 5 minutes, thanks for reading.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
