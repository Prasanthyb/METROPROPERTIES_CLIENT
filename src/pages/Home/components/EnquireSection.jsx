import styles from './EnquireSection.module.css';
import classroom from '../../../assets/Home/classroom.png';

export default function EnquireSection() {
    return (
        <div id={styles['enquireGrid']}>
            <div id={styles['imageSection']}>
                <img alt='Classroom' src={classroom}></img>
            </div>
            <div id={styles['textAndButtons']}>
                <h2>What are you waiting for?</h2>
                <h3>Start teaching digital technologies today!</h3>
                <p>If you need more information we are happy to answer any questions you may have.</p>
                <div>
                    <button className={styles.blueButton}>Enquire Now</button>
                    <button className={styles.pinkButton}>Sign Up</button>
                </div>
            </div>
        </div>
    );
}