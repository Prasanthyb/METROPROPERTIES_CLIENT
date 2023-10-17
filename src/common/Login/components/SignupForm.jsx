import styles from './ModalForms.module.css';

export default function SignupForm(props) {
    return(
        <div>
            <form className={styles.modalForm}>
                <input type='text' placeholder='Full Name' name='fullName'></input>
                <input type='email' placeholder='Email' name='email'></input>
                <input type='text' placeholder='Password' name='password'></input>
                <input type='text' placeholder='Confirm Password' name='confirmPassword'></input>
                {/* Really wish this pink button was a common CSS or something now */}
                <button type='submit' className={styles.pinkButton}>LOG IN</button>
            </form>
        </div>
    );
}