//Could have potentially been in a subfolder, but this should be fine
import styles from './Dot.module.css';

export default function Dot(props) {
    return(
        <div id={styles['dot']} className={`${props.isActive? "active" : ""}`}>
        </div>
    );
}