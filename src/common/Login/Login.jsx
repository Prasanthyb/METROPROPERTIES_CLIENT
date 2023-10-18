import styles from './Login.module.css';

// Import forms
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

//Import MUI components
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

//Import images
import esc from '../../assets/LoginSignup/esc.png';
import studentImg from '../../assets/LoginSignup/students.png';
import teacherImg from '../../assets/LoginSignup/teachers.png';

import { useState } from 'react';

export default function Login(props) {
    //su = "sign up"
    //We'll handle the active class on the login/signup buttons by just tracking if "sign up" is selected
    //If it isn't, we assume log in is.
    const [suSelected, setSuSelected] = useState(false);

    function handleSuChange(newSuState) {
        setSuSelected(newSuState);
    }

    //For testing purposes. Need to import useEffect to add this back
    // useEffect(()=>console.log(suSelected));

    return (
        <Modal open={props.modalOpenState} onClose={props.closeModal}>
            <Box id={styles['loginBox']}>
                <div id={styles['closeButton']}>
                    <img alt='Close' src={esc} onClick={props.closeModal}></img>
                </div>
                <div id={styles['loginContainer']}>
                    <div id={styles['studentLoginDiv']}>
                        <img alt='Students' src={studentImg}></img>
                        {/* Going to use repeated divs here instead of components since it might end up causing more
                            problems than it solves. */}
                        <h1>Students</h1>
                        <div className={`${styles.lsButtonContainer}`}>
                            {/* Using h3 mostly because I am lazy and it has the text styling I'm after.
                                All it does is swap out the forms so no big deal probably */}
                            <h3 onClick={()=>handleSuChange(false)} className={`${styles.loginButton} ${styles.lsButton} ${suSelected? null : styles.active}`}>LOG IN</h3>
                            <h3 onClick={()=>handleSuChange(true)} className={`${styles.signupButton} ${styles.lsButton} ${suSelected? styles.active : null}`}>SIGN UP</h3>
                        </div>
                        {/* Using a "calledFrom" property that tells the form if it was called from the student or teacher side. */}
                        {!suSelected && (<LoginForm currentUser={props.currentUser} updateCurrentUser={props.updateCurrentUser} calledFrom='student'></LoginForm>)}
                        {suSelected && (<SignupForm currentUser={props.currentUser} updateCurrentUser={props.updateCurrentUser} calledFrom='student'></SignupForm>)}
                    </div>
                    <div id={styles['teacherLoginDiv']}>
                        <img alt='Teachers' src={teacherImg}></img>
                        <h1>Teachers</h1>
                        <div className={`${styles.lsButtonContainer}`}>
                            <h3 onClick={()=>handleSuChange(false)} className={`${styles.loginButton} ${styles.lsButton} ${suSelected? null : styles.active}`}>LOG IN</h3>
                            <h3 onClick={()=>handleSuChange(true)} className={`${styles.signupButton} ${styles.lsButton} ${suSelected? styles.active : null}`}>SIGN UP</h3>
                        </div>
                        {!suSelected && (<LoginForm currentUser={props.currentUser} updateCurrentUser={props.updateCurrentUser} calledFrom='teacher'></LoginForm>)}
                        {suSelected && (<SignupForm currentUser={props.currentUser} updateCurrentUser={props.updateCurrentUser} calledFrom='teacher'></SignupForm>)}
                    </div>
                </div>
            </Box>
        </Modal>
    );
}