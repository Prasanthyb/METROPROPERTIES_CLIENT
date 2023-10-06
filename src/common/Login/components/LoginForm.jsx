import styles from './ModalForms.module.css';

export default function LoginForm(props) {
    return(
        <div>
            <form className={styles.modalForm}>
                <input type='email' placeholder='Email' name='email'></input>
                <input type='text' placeholder='Password' name='password'></input>
                {/* Really wish this pink button was a common CSS or something now */}
                <button type='submit' className={styles.pinkButton}>LOG IN</button>
            </form>
        </div>
    );
}