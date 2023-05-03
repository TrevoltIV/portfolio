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
                <p className={styles.text}>
                    My name is Karsten Koerner. I am a web developer based out of Atlanta, GA. I have been programming for about 2 years now. I never expected to get sucked in to web development, it just sort of happened. I had an idea for a website I
                    wanted to make, so I started learning HTML, thinking it would be a weekend task &#40;lol&#41;, but I ended up going on a 6 month long journey, at the end of which I had good knowledge of PHP, JavaScript, and of course HTML and CSS.
                    But then I discovered React, and my whole world changed. I am now fluent in Next.js, SQL/NoSQL databases, Chrome extension development, and more!
                </p>
                <p className={styles.text}>
                    This page is a simple portfolio, as you can see it isn't particularly creative. Below is a list of example websites I've built, so you can see some designs I can build with ease. Keep in mind that these are basic templates, and I am not
                    a designer, so if you have a web designer, I'm sure we will make a great team.
                </p>
            </div>
        </div>
    )
}