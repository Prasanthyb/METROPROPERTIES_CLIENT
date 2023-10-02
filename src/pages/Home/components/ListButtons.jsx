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
            <div id={styles['listDisplay']}>
                {/* Considered using mapped array of list items but I think the quickest solution here is
                    just to conditionally render each list. Also done this style before using JS in M2*/}

                {contentVisible === 0 && (
                    <div className={styles.listContent}>
                        <h3>Interlinking Pathways</h3>
                        <p>This programme gives us 5 important interlinking Learning Pathways.</p>
                        <ul>
                            <li>
                                <h4>COMPUTATIONAL THINKING</h4>
                                <p>Within the programme the students are enabled to express problems and form solutions that will be designed so a computer can be used to create diverse and encapsulating applications</p>
                            </li>
                            <li>
                                <h4>DEVELOPING DIGITAL OUTCOMES</h4>
                                <p>This programme is designed to strengthen the outcomes of each students personally to form strong applications.</p>
                            </li>
                            <li>
                                <h4>DESIGNING PROCESSED OUTCOMES</h4>
                                <p>Students will be taught the ways of how outcomes are processed, thought about, and produced.</p>
                            </li>
                            <li>
                                <h4>DEVELOP VISUAL AND SOCIAL COMMUNICATIONS</h4>
                                <p>Students will learn to design visually pleasing applications used to both keep the user aware of what is happening on the screen.</p>
                            </li>
                            <li>
                                <h4>STRONG TECHNOLOGICAL PRACTICES</h4>
                                <p>The programme will show students the best practices to think and solve the problems brought on by using technology.</p>
                            </li>
                        </ul>
                    </div>
                )}

                {contentVisible === 1 && (
                <div className={styles.listContent}>
                    <h3>Expands Digital Knowledge Base</h3>
                    <p>This programme gives you the 5 major capabilities to be confident in Digital Technologies.</p>
                    <ul>
                        <li>
                            <h4>PROBLEM SOLVING</h4>
                            <p>The programme challenges are designed to think around multiple issues and challenges the way students interact with computers and other related technology.</p>
                        </li>
                        <li>
                            <h4>DECISION-MAKING</h4>
                            <p>The programme uses technology to make the lives of many people happier through the decisions made when creating digital applications.</p>
                        </li>
                        <li>
                            <h4>CONFIDENCE</h4>
                            <p>When having the skills to manipulate the applications and learning to use it brings self-confidence into your life.</p>
                        </li>
                        <li>
                            <h4>HIGHER SELF-EXPECTATIONS</h4>
                            <p>This programme develops students to think the best of themselves to bring higher expectations to their learning and lives as young adults.</p>
                        </li>
                        <li>
                            <h4>COHERENCE</h4>
                            <p>This programme offers all students a broader education that makes links within and across learning areas.</p>
                        </li>
                    </ul>
                </div>
                )}

                {contentVisible === 2 && (
                <div className={styles.listContent}>
                    <h3>Enhance Key Competencies</h3>
                    <p>The programme enhances capabilities of students in the 5 Key Competencies identified in the New Zealand Curriculum:</p>
                    <ul>
                        <li>
                            <h4>THINKING</h4>
                            <p>In particular the programme focused on problem solving, design thinking and computational thinking.</p>
                        </li>
                        <li>
                            <h4>DISCERNING CODES</h4>
                            <p>Analysing language, symbols, and texts in order to understand and make sense of the codes in which knowledge is expressed.</p>
                        </li>
                        <li>
                            <h4>SELF-MANAGEMENT</h4>
                            <p>Projects and challenges are designed to motivate students to explore and experiment with self-motivation.</p>
                        </li>
                        <li>
                            <h4>RELATIONSHIPS WITH PEERS</h4>
                            <p>The programme is designed with unplugged sessions where students interact in a range of different situations, including things like being able to listen well, recognise different points of view, and share ideas.</p>
                        </li>
                        <li>
                            <h4>PARTICIPATION AND COLLABORATION</h4>
                            <p>The programme encourages students to be involved in communities, such as family, whanau, school, and contribute and make connections with other people.</p>
                        </li>
                    </ul>
                </div>
                )}

                {contentVisible === 3 && (
                <div className={styles.listContent}>
                   <h3>IR4.0</h3>
                    <p>Designed with IT industry experts, the programme develops the students to find applicable jobs and careers in the Fourth Industrial Revolution. (IR4.0)</p>
                    <ul>
                        <li>
                            <h4>LEARNING TO LEARN</h4>
                            <p>The programme will set challenges at the end of every project to encourage students to explore and learn how to learn.</p>
                        </li>
                        <li>
                            <h4>COMMUNITY ENGAGEMENT</h4>
                            <p>The programme encourages students to be involved in the communities, such as family, friends, and in school, to contribute and make connections with other people.</p>
                        </li>
                        <li>
                            <h4>CULTURAL DIVERSITY</h4>
                            <p>This programme is designed in New Zealand and reflects NZ's cultural diversity.</p>
                        </li>
                        <li>
                            <h4>INCLUSION</h4>
                            <p>In particular the programme is designed with acknowledgement to the student's identities and talents, allowing them to be creative to their personal ability.</p>
                        </li>
                        <li>
                            <h4>FUTURE FOCUS</h4>
                            <p>The programme leads students to explore future themes such as artificial intelligence and augmented reality.</p>
                        </li>
                    </ul>
               </div>
                )}

            </div>
        </div>
    );
}