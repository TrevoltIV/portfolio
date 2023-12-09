import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import styles from '@/styles/Portfolio.module.css'




export async function getServerSideProps() {
  const { getCollection } = require('databased')

  const projects = await getCollection('db', 'projects')

  return {
    props: {
      projects,
    },
  }
}


export default function Home({ projects }) {
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
            <div className={styles.projects}>
                {projects.map((project, index) => {
                    return (
                        <div key={index} className={styles.projectWrapper}>
                          {project.image ? (
                            <div className={styles.projectImageWrapper}>
                              <Image
                                src={project.image}
                                alt="Image"
                                className={styles.projectImage}
                                width={project.image_size.width}
                                height={project.image_size.height}
                              />
                            </div>
                          ) : (
                            <div className={styles.projectImage}>
                              No image
                            </div>
                          )}
                          <div className={styles.project}>
                            <h3 className={styles.title}>
                              {project.title}
                            </h3>
                            <p className={styles.desc}>
                              {project.description}
                            </p>
                            <p className={styles.date}>
                              Date started: {project.date_started}
                            </p>
                            <p className={styles.date}>
                              Date completed: {project.date_completed}
                            </p>
                            <p className={styles.github}>
                              GitHub: <Link href={project.github_link}>
                                {project.github_link}
                              </Link>
                            </p>
                          </div>
                        </div>
                    )
                })}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}