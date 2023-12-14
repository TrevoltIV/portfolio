import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Skills.module.css'







export default function Home() {
  return (
    <>
      <Head>
        <title>Skills | Karsten Koerner</title>
        <meta name="description" content="My software development skills" />
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
                <Link href="/skills" className={styles.menuBtn}>
                  Skills
                </Link>
                <Link href="/portfolio" className={styles.menuBtn}>
                  Portfolio
                </Link>
                <Link href="/freelance" className={styles.menuBtn}>
                  Freelance
                </Link>
                <Link href="/contact" className={styles.menuBtn}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.pageContent}>
            <div className={styles.skills}>
                <div className={styles.skill}>
                    <h2 className={styles.skillTitle}>
                        Front End Web Development
                    </h2>
                    <h4 className={styles.subSkillTitle}>
                        React.js/Next.js
                    </h4>
                    <h4 className={styles.subSkillTitle}>
                        HTML/CSS
                    </h4>
                    <h4 className={styles.subSkillTitle}>
                        Responsive Design &#40;mobile-friendly&#41;
                    </h4>
                    <h4 className={styles.subSkillTitle}>
                        Layout site-mapping
                    </h4>
                    <h4 className={styles.subSkillTitle}>
                        UI/UX design
                    </h4>
                    <h4 className={styles.subSkillTitle}>
                        Figma prototype
                    </h4>
                    <h4 className={styles.subSkillTitle}>
                        User flow
                    </h4>
                    <h4 className={styles.subSkillTitle}>
                        SEO &#40;search engine optimization&#41;
                    </h4>
                </div>
                <div className={styles.skill}>
                    <h2 className={styles.skillTitle}>
                        Back End Web Development
                    </h2>
                    <h4 className={styles.subSkillTitle}>
                        HTTP Networking
                    </h4>
                    <h4 className={styles.subSkillTitle}>
                        Node.js environment
                    </h4>
                    <h4 className={styles.subSkillTitle}>
                        Express.js
                    </h4>
                    <h4 className={styles.subSkillTitle}>
                        PHP
                    </h4>
                    <h4 className={styles.subSkillTitle}>
                        Java
                    </h4>
                    <h4 className={styles.subSkillTitle}>
                        SQL
                    </h4>
                    <h4 className={styles.subSkillTitle}>
                        Relational databases
                    </h4>
                    <h4 className={styles.subSkillTitle}>
                        NoSQL databases &#40;such as MongoDB or Firebase&#41;
                    </h4>
                </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}