import styles from './SlideShowDots.module.css';

export default function SlideShowDots(props) {
    const dots = [0, 1, 2, 3];

    return (
        <>
            {/* The fastest fix to this mess I created that I can think of is to remove the Dot component and just handle this
                with HTML/JS. Refactoring these three sections into one component will be somewhat time consuming and
                having to pass a state/props down to a grandchild component is getting complicated. */}
            
            {/* I'll map divs to set active using an array matched to the screen id passed down */}

            {/* After all the pain I went through with these dots it turned out I was just forgetting how to properly
                access styles within the ternary operator... */}
                {/* className={`${styles.dot} ${props.currentScreen===dot? "active" : ""}`} */}
            
            {dots.map(function(dot) {
                console.log(`${dot}, ${props.currentScreen}, ${props.currentScreen===dot}`)
                return (
                <div
                    key={dot}
                    className={`${styles.dot} ${props.currentScreen===dot? styles.active : styles.inactive}`} 
                    onClick={() => props.handleScreenChange(dot)}
                ></div>
                );
            })}
        </>
    );
}