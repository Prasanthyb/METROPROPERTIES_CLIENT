import animScreen from '../../../assets/Home/laptop1.png';
import gameScreen from '../../../assets/Home/laptop2.png';
import chatScreen from '../../../assets/Home/laptop3.png';
import augScreen from '../../../assets/Home/laptop4.png';

import styles from './SlideShowScreen.module.css';

//I'll hold the images in an array and use a state from Home to manipulate which one to display

export default function SlideShowScreen(props) {
    const screens = [animScreen, gameScreen, chatScreen, augScreen];
    const screenToShow = screens[props.currentScreen];
    // console.log(screenToShow);

    return (
        <div id={styles['slideShowScreen']}>
            <img alt='Project Examples' src={screenToShow}></img>
        </div>
    );
}