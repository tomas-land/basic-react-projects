import { ReactPropTypes } from "react";
import React from "react";
import { useState } from "react";
import { ChangeEvent } from 'react';

interface Props{
  generateTexts: Function

}

const InputHolder = ({generateTexts}:Props) => {
  const [paragraph, setParagraph] = useState("");
  const [word, setWord] = useState("");
  const submitForm = (e:React.SyntheticEvent) => {
    e.preventDefault();
    // if(!paragraph){
    //   alert('enter number')
    // }
    generateTexts(paragraph,word)

  };

  return (
    <form className="inputs-container" onSubmit={submitForm}>
      <div className="input-group">
        <label htmlFor="input-words" className="input-label">
          How many words:
        </label>
        <input type="text" id="input-words" className="input"  value={word}
          onChange={(e) => setWord(e.target.value)}/>
      </div>
      <div className="input-group">
        <label htmlFor="input-paragraph" className="input-label">
          How many paragraphs:
        </label>
        <input
          type="text"
          id="input-paragraph"
          className="input"
          value={paragraph}
          onChange={(e) => setParagraph(e.target.value)}
        />
      </div>
      <button type="submit" className="generate-btn">
        GENERATE
      </button>
    </form>
  );
};

export default InputHolder;
