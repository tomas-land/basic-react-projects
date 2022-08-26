import React from 'react'


const TextsList = (props) => {
  return (
    <div>
        {props.texts.map((text,textIndex) => {
            return(
              <p key={textIndex}>{text}</p>
            ) 
        })}
    </div>
  )
}

export default TextsList