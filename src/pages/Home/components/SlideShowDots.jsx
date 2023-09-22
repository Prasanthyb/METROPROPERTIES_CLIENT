import Dot from './Dot';

export default function SlideShowDots(props) {

    return (
        <>
            {/* I can't directly handle onClick with the Dot component itself */}
            {/* There is probably a better way to handle this instead of wrapping components in a div. */}

            {/* Potential solutions to handle tracking active dot:
                1 - Hold the entire divs in a mapped array, use index as the value to pass to handleScreenChange and
                change the active class in its associated dot. 
                2 - Array of booleans to track each dot. Check it on each screen change and pass the active class
                down to the Dot component
                3 - useEffect? Side effect when SlideShowDots updates
                4 - Rig it with pure JS and an id for each Dot div. Most inefficient but known solution*/}

            <div onClick={() => props.handleScreenChange(0)}><Dot></Dot></div>
            <div onClick={() => props.handleScreenChange(1)}><Dot></Dot></div>
            <div onClick={() => props.handleScreenChange(2)}><Dot></Dot></div>
            <div onClick={() => props.handleScreenChange(3)}><Dot></Dot></div>
        </>
    );
}