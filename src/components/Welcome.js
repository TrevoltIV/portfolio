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
            </div>
        </div>
    )
}