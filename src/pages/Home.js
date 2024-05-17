import click from './click.svg';
import React, { useState } from 'react';

function Home() {

  const textList = [
    "Under construction.",
    "Clicking that does nothing, sorry!",
    "Still nothing...",
    "Maybe try again?",
    "Sorry, that was mean.",
    "It was a joke.",
    "Really though, no need to click.",
    "It's a loop.",
    "Maybe I was unclear, that's my fault!"
  ];

  const [text, setText] = useState(textList[0]);
  const [textNumber, setTextNumber] = useState(0);
  
  const updateText = (index) => {
    if(index>textList.length-2){
      setTextNumber(0);
      console.log("true");
    }else{
      setTextNumber(textNumber+1);
      console.log("false");
    }
    console.log(textNumber);
    setText(textList[textNumber]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {text}
        </p>
        <button 
          className="click"
          onClick={() => {
            updateText(textNumber);
          }}
        >
        
        {/* <img src={click} className="clickImg" alt="clickImg" /> */}
        </button>
      </header>
      <footer className="App-footer">Jack OLeary McNeice <br /> <p className="footerText"><span className="emphasis">jolmcn</span> at <span className="emphasis">gmail</span> dot <span className="emphasis">com</span></p></footer>
    </div>
  );
}

export default Home;
