import styles from './Home.module.css';

export default function Home() {
    return (
        <div>
            {/* I considered using grid or even a series of components with their own components inside but */}
            {/* decided instead on just using divs for simplicity since the home page has relatively */}
            {/* simple functionality. */}

            {/* <Header></Header> */}
            <div id={styles['heroBackground']}>
                <div id={styles['heroText']}>
                    <h1>Prepare young minds<br/>for a better <span id={styles['futureSpan']}>future.</span></h1>
                    <p>Let us help you advance students in Digital Technologies and other learning areas with our project-based learning program</p>
                </div>
                <div id={styles['heroButtons']}>
                    <button className={styles.heroButton} id={styles['learnMoreButton']}>Learn More</button>
                    <button className={styles.heroButton} id={styles['signUpButton']}>Sign Up</button>
                </div>
                <div id={styles['freeSignUpText']}>
                    <p>*Basic subscription includes the first 15 projects free of charge</p>
                </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
}