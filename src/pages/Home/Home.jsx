import styles from './Home.module.css';
import SlideShowScreen from './components/SlideShowScreen';
import SlideShowButtons from './components/SlideShowButtons';
import SlideShowDots from './components/SlideShowDots';
import { useState } from 'react';

export default function Home() {
    const [currentScreen, setCurrentScreen] = useState(0);

    function handleScreenChange(newScreen) {
        setCurrentScreen(newScreen);
    }

    return (
        <div>
            {/* I considered using grid or even a series of components with their own components inside but */}
            {/* decided instead on just using divs for simplicity since the home page has relatively */}
            {/* simple functionality. */}

            {/* Could do with a redesign as it makes the CSS inefficient. For example nearly every div is offset
            using margin-left: 10% when it could be applied to one containing div that doesn't affect the
            hero background image. */}

            {/* <Header></Header> */}

            {/* <--HERO IMAGE SECTION--> */}
            <div id={styles['heroBackground']}>
                <div id={styles['heroText']}>
                    <h1>Prepare young minds<br/>for a better <span id={styles['futureSpan']}>future.</span></h1>
                    <p>Let us help you advance students in Digital Technologies and other learning areas with our project-based learning program</p>
                </div>
                <div id={styles['heroButtons']}>
                    <button className={styles.heroButton} id={styles['learnMoreButton']}>Learn More</button>
                    <button className={styles.heroButton} id={styles['signUpButton']}>Sign Up</button>
                </div>
                <div id={styles['freeSignUpText']}>
                    <p>*Basic subscription includes the first 15 projects free of charge</p>
                </div>
            </div>

            {/* <--SLIDESHOW SECTION--> */}
            {/* Using a grid for layout I can use individual components for the buttons, markers and screen.
            A useState in the Home component can track which picture should be visible on the screen. */}
            <div id={styles['slideShowDiv']}>
                <div id={styles['slideShowText']}>
                    <h2>What we offer</h2>
                    <p>The Creative Problem Solving programme is a series of digital creation projects aimed to encourage self-motivation and student agency, designed by New Zealand's leading IT industry experts and schools.</p>
                    <br/>
                    <h3>What will students create?</h3>
                </div>
                <div id={styles['slideShowScreen']}>
                    <SlideShowScreen currentScreen={currentScreen}></SlideShowScreen>
                </div>
                <div id={styles['slideShowButtons']}>
                    <SlideShowButtons handleScreenChange={handleScreenChange}></SlideShowButtons>
                </div>
                <div id={styles['slideShowDots']}>
                    <SlideShowDots></SlideShowDots>
                </div>
                
            </div>

            {/* <Footer></Footer> */}
        </div>
    );
}