import styles from './HeroSection.module.css';

export default function HeroSection() {
    return(
        <div id={styles['heroGrid']}>
            <div id={styles['heroBackground']}></div>
            <div id={styles['heroContent']}>
                <div id={styles['heroText']}>
                    <h1>Prepare young minds<br/>for a better <span id={styles['futureSpan']}>future.</span></h1>
                    <p>Let us help you advance students in Digital Technologies and other learning areas with our project-based learning program</p>
                </div>
                <div id={styles['heroButtons']}>
                    <button className={`${styles.heroButton} ${styles.blueButton}`}>Learn More</button>
                    <button className={`${styles.heroButton} ${styles.pinkButton}`}>Sign Up</button>
                </div>
                <div id={styles['freeSignUpText']}>
                    <p>*Basic subscription includes the first 15 projects free of charge</p>
                </div>
            </div>
            {/* Empty div that currently exists only for layout purposes */}
            <div id={styles['heroClearSpace']}></div>
        </div>
    );
}