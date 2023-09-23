import React from 'react';
import {useState,useEffect} from 'react';

const BackToTopButton = () => {
    const [backToTopButton, setBackToTopButton]=useState(false)
    useEffect(()=>{
window.addEventListener("scroll",()=>{

    if(window.scrollY>100){
        setBackToTopButton(true)
    }else{
        setBackToTopButton(false)
    }

})
    },[])


    const scrollUp=()=>{
        window.scrollTo({
            top:0,
            behaviour:"smooth"
        })
    }

  return (
    <div className="App">
    {BackToTopButton && (
        <button style={{
            position:"fixed",
            bottom:"50px",
            right:"50px",
            height:"50px",
            width:"50px",
            fontSize:"50px",

        }}
        onClick={scrollUp}
        >
        ^
        </button>
    )}
      
    </div>
  );
}

export default BackToTopButton;
