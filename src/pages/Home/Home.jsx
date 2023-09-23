import styles from './Home.module.css';
import HeroSection from './components/HeroSection';
import SlideShowScreen from './components/SlideShowScreen';
import SlideShowButtons from './components/SlideShowButtons';
import SlideShowDots from './components/SlideShowDots';
import ImageGallery from './components/ImageGallery';
import ListButtons from './components/ListButtons';
import { useState } from 'react';

export default function Home() {
    const [currentScreen, setCurrentScreen] = useState(0);

    function handleScreenChange(newScreen) {
        setCurrentScreen(newScreen);
    }

    return (
        <div id={styles['home']}>
            {/* I considered using grid or even a series of components with their own components inside but */}
            {/* decided instead on just using divs for simplicity since the home page has relatively */}
            {/* simple functionality. */}

            {/* Could do with a redesign as it makes the CSS inefficient. For example nearly every div is offset
            using margin-left: 10% when it could be applied to one containing div that doesn't affect the
            hero background image. */}

            {/* Would be best to split the top section into a grid containing nothing but empty space on the right
                currently every CSS issue is caused by just the background image in the top section needing to stretch
                the whole page */}

            {/* <Header></Header> */}

            {/* <--HERO IMAGE SECTION--> */}
            {/* Look who came crawling back to React */}
            <HeroSection></HeroSection>
            {/* <--SLIDESHOW SECTION--> */}
            {/* Using a grid for layout I can use individual components for the buttons, markers and screen.
            A useState in the Home component can track which picture should be visible on the screen. */}

            {/* On Reuben's advice, it makes more sense to contain the entire slideshow in one component and
                then use a CSS module to arrange the media queries and grid etc from within that component */}
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
                    <SlideShowDots currentScreen={currentScreen} handleScreenChange={handleScreenChange}></SlideShowDots>
                </div>              
            </div>

            {/* <-- IMAGES SECTION --> */}
            {/* Handling this in a React component so the CSS media queries are easier to read. So much for a series of divs */}
            {/* 23/09/23 wrapping in div to grid the home page */}
            <div id={styles['imageGallery']}>
                <ImageGallery></ImageGallery>
            </div>

            {/* LIST SECTION */}
            {/* Similar to Slide Show area, a div will contain the components to save on using subfolders*/}
            {/* Having  generic button components probably would have been useful by this point. Learning why React is good */}
            <div id={styles['listSection']}>
                <ListButtons></ListButtons>
            </div>

            {/* <Footer></Footer> */}
        </div>
    );
}