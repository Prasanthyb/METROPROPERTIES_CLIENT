import styles from './SlideShowButtons.module.css';
import animButton from '../../../assets/Home/animation.png';
import gamesButton from '../../../assets/Home/games.png';
import chatButton from '../../../assets/Home/chatbots.png';
import augButton from '../../../assets/Home/augreality.png';

export default function SlideShowButtons(props) {
    return (
        <div id={styles['slideShowButtons']}>
            <img alt='Animation' src={animButton} className={styles.slideButton} onClick={() => props.handleScreenChange(0)}></img>
            <img alt='Games' src={gamesButton} className={styles.slideButton} onClick={() => props.handleScreenChange(1)}></img>
            <img alt='Chatbots' src={chatButton} className={styles.slideButton} onClick={() => props.handleScreenChange(2)}></img>
            <img alt='Augmented Reality' src={augButton} className={styles.slideButton} onClick={() => props.handleScreenChange(3)}></img>
        </div>
    );
}