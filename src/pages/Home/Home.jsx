import styles from './Home.module.css';
import HeroSection from './components/HeroSection';
import SlideShowScreen from './components/SlideShowScreen';
import SlideShowButtons from './components/SlideShowButtons';
import SlideShowDots from './components/SlideShowDots';
import ImageGallery from './components/ImageGallery';
import ListButtons from './components/ListButtons';
import EnquireSection from './components/EnquireSection';
// ^^^ STYLES AND CHILD COMPONENTS ^^^

import Footer from '../../common/Footer';
import Header from '../../common/Header/Header';

//^^^ COMMON COMPONENTS ^^^

import { useState } from 'react';

export default function Home(props) {
    const [currentScreen, setCurrentScreen] = useState(0);

    function handleScreenChange(newScreen) {
        setCurrentScreen(newScreen);
    }

    // ^^^ STATES/LOGIC USED TO HANDLE THE SCREEN SLIDESHOW ^^^

    return (
        <div id={styles['home']}>
            <div id={styles['headerDiv']}>
                {/* Wrapped so it can be fixed to the top of the screen */}
                <Header currentUser={props.currentUser} updateCurrentUser={props.updateCurrentUser}></Header>
            </div>

            {/* <--HERO IMAGE SECTION--> */}
            {/* Look who came crawling back to React */}

            <HeroSection currentUser={props.currentUser} updateCurrentUser={props.updateCurrentUser}></HeroSection>

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
            {/* Changed back from grid but keeps code cleaner anyway */}
            <div id={styles['imageGallery']}>
                <ImageGallery></ImageGallery>
            </div>

            {/* LIST SECTION */}
            {/* Similar to Slide Show area, a div will contain the components to save on using subfolders*/}
            {/* Having  generic button components probably would have been useful by this point. Learning why React is good */}
            <div id={styles['listSection']}>
                <ListButtons></ListButtons>
            </div>

            <div id={styles['enquireSection']}>
                <EnquireSection currentUser={props.currentUser} updateCurrentUser={props.updateCurrentUser}></EnquireSection>
            </div>

            <Footer></Footer>
        </div>
    );
}