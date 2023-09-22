import styles from './ListButtons.module.css';

export default function ListButtons() {
    return (
        <div id={styles['listHeader']}>
            <h2>How our programme helps teachers and schools</h2>
            <div id={styles['listButtons']}>
                <button>Learning Pathways</button>
                <button>Digital Technologies</button>
                <button>Key Competencies</button>
                <button>IR4.0</button>
            </div>
        </div>
    );
}