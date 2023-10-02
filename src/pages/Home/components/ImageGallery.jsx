import styles from './ImageGallery.module.css';
import Group1 from '../../../assets/Home/Group 1.png';
import Group2 from '../../../assets/Home/Group 2.png';
import Group3 from '../../../assets/Home/Group 3.png';
import Group4 from '../../../assets/Home/Group 4.png';

export default function ImageGallery() {
    return (
        <div id={styles['imageGallery']}>
            <h3>Teaching kids programming is MORE than just writing code</h3>
            <div id={styles['imageBlock']}>
                <img alt='Group 1' src={Group1}></img>
                <img alt='Group 2' src={Group2}></img>
                <img alt='Group 3' src={Group3}></img>
                <img alt='Group 4' src={Group4}></img>
            </div>
        </div>
    );
}