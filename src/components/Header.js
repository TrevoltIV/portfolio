import styles from '@/styles/Header.module.css'



export default function Header(props) {

    return (
        <div className={styles.header}>
            <h1 className={styles.title}>
                {props.title}
            </h1>
        </div>
    )
}