import Link from 'next/link'
import styles from '@/styles/List.module.css'



export default function List(props) {

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                Example Websites:
            </h3>
            <Link className={styles.link} href="https://pressure-washers.vercel.app">
                FRESH Pressure Washers
            </Link>
            <Link className={styles.link} href="/">
                Coming soon...
            </Link>
            <Link className={styles.link} href="/">
                Coming soon...
            </Link>
            <Link className={styles.link} href="/">
                Coming soon...
            </Link>
            <Link className={styles.link} href="/">
                Coming soon...
            </Link>
            <Link className={styles.link} href="/">
                Coming soon...
            </Link>
            <Link className={styles.link} href="/">
                Coming soon...
            </Link>
        </div>
    )
}