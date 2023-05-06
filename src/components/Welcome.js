import Link from 'next/link'
import styles from '@/styles/Welcome.module.css'



export default function Welcome(props) {

    return (
        <div className={styles.welcome}>
            <div className={styles.titleWrapper}>
                <h2 className={styles.title}>
                    {props.title}
                </h2>
            </div>
            <div className={styles.content}>
                <p>
                    I have created all the websites below without the use of any No-Code software such as Wordpress. They are solely developed using Next.js and other libraries/frameworks.
                </p>
                <p>
                    You can contact me by email or phone anytime!
                </p>
                <p>
                    kgk1999@gmail.com
                </p>
                <Link href="tel:404-695-6774">
                    404-695-6774
                </Link>
            </div>
        </div>
    )
}