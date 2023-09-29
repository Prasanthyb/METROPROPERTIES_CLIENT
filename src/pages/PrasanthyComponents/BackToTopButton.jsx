import React from 'react';
import {useState,useEffect} from 'react';

const BackToTopButton = () => {
    const [BackToTopButton, setBackToTopButton]=useState(false)
    useEffect(()=>{
window.addEventListener("scroll",()=>{

    if(window.scrollY>50){
        setBackToTopButton(true)
    }else{
        setBackToTopButton(false)
    }

})
    },[])


    const scrollUp=()=>{
        window.scrollTo({
            top:650,
            behaviour:"smooth"
        })
    }

  return (
    <div className="App">
    {BackToTopButton && (
        <button style={{
            left:"30px",
            backgroundColor: "yellow",
            right:"25px",
            height:"20px",
            width:"112px",
            fontSize:"15 px",
            cursor:"pointer",
            border: "1px solid black",
            borderRadius: "5px",
            color: "black",
            filter: 'drop-shadow(5px 8px 9px rgb(42, 116, 126))'
           

        }}
      
        onClick={scrollUp}
        >
        Back To Top
        </button>
    )}
      
    </div>
  );
}

export default BackToTopButton;
