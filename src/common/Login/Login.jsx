import styles from './Login.module.css';

//Import MUI components
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


export default function Login(props) {

    return (
        <Modal open={props.modalOpenState} onClose={props.closeModal}>
            <Box id={styles['loginBox']}>
                <div id={styles['closeButton']}></div>
                <div id={styles['loginContainer']}>
                    <p>Test Text</p>
                </div>
            </Box>
        </Modal>
    );
}