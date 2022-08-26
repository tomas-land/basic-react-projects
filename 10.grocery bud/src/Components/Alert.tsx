import React from 'react'

interface Props{
type:string,
msg:string
}
export enum Message {
  success = 'The list item added',
  danger = 'The list item removed',
}

const Alert = ({type,msg}:Props) => {
  // console.log(Message.success);
  return (
    <p className={`alert alert-${type}`}> {msg} </p>
  )
}

export default Alert