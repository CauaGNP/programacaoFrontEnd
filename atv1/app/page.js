"use client";

import { useState } from "react";

function Text1(){
  return <h1>This is a Title</h1>  
}

function Text2(){
  return <p>This is a paragraph</p>
}

export default function Home() {
  const classroom = 1;
  const [hide, setHide] = useState(false);
  const [numA, setNumA] = useState(0);

//  function handleClick(){
//    hide ? setHide(false) : setHide(true);

      // if(hide){
      //   setHide(false);
      // }else{
      //   setHide(true)
      // }
//  }

  function generateNumber(){
    setNumA(Math.floor(Math.random() * (10)))
   
  }

  return (
    <>
      {!hide && (
        <>

        <Text1 />
        <Text2 />

        </>
      )}

      <p>This is {classroom} (first) class</p>

      <button 
        onClick = { () => hide ? setHide(false) : setHide(true) }>
        {hide ? "Show" : "Hide"}
      </button>

      <h1>Number:</h1>
      <p>{numA}</p>
      <button onClick = { generateNumber } >Generate Number</button>
    </>
  );
}
