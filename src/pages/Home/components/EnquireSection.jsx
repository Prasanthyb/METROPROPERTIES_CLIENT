import styles from './EnquireSection.module.css';
import classroom from '../../../assets/Home/classroom.png';
import { useState } from 'react';

import Login from '../../../common/Login/Login';

export default function EnquireSection() {
    // State for login modal
    const [modalOpenState, setModalOpenState] = useState(false);
    function closeModal() {
        setModalOpenState(false);
    }
    function openModal() {
        setModalOpenState(true);
        console.log(modalOpenState);
    }

    return (
        <div id={styles['enquireGrid']}>
            <Login modalOpenState={modalOpenState} openModal={openModal} closeModal={closeModal}></Login>
            <div id={styles['imageSection']}>
                <img alt='Classroom' src={classroom}></img>
            </div>
            <div id={styles['textAndButtons']}>
                <h2>What are you waiting for?</h2>
                <h3>Start teaching digital technologies today!</h3>
                <p>If you need more information we are happy to answer any questions you may have.</p>
                <div>
                    <button className={styles.blueButton}>Enquire Now</button>
                    <button className={styles.pinkButton} onClick={openModal}>Sign Up</button>
                </div>
            </div>
        </div>
    );
}