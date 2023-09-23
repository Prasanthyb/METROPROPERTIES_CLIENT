import styles from './ListButtons.module.css';
import { useState } from 'react';

export default function ListButtons() {
    const [contentVisible, setContentVisible] = useState(0);
    //0 = Learning Pathways
    //1 = Digital Technologies
    //2 = Key Competencies
    //3 = IR4
    //Using a case for simplicity. Number for the same reason. Could have used a string for readability.

    function handleChangeContent(newContent) {
        setContentVisible(newContent);  
    }


    return (
        <div id={styles['listHeader']}>
            <h2>How our programme helps teachers and schools</h2>
            <div id={styles['listButtons']}>
                <button onClick={()=>handleChangeContent(0)}>Learning Pathways</button>
                <button onClick={()=>handleChangeContent(1)}>Digital Technologies</button>
                <button onClick={()=>handleChangeContent(2)}>Key Competencies</button>
                <button onClick={()=>handleChangeContent(3)}>IR4.0</button>
            </div>
            <div id={styles['listContent']}>
                {/* Considered using mapped array of list items but I think the quickest solution here is
                    just to conditionally render each list. Also done this style before using JS in M2*/}

                {contentVisible === 0 && (
                    <div>
                        <h3>Interlinking Pathways</h3>
                        <p>This programme gives us 5 important interlinking Learning Pathways.</p>
                    </div>
                )}

                {contentVisible === 1 && (
                    <div>
                        DIGITAL TECHNOLOGIES
                    </div>
                )}

                {contentVisible === 2 && (
                    <div>
                        KEY COMP
                    </div>
                )}

                {contentVisible === 3 && (
                    <div>
                        IR 4
                    </div>
                )}

            </div>
        </div>
    );
}