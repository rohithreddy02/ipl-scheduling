import React from 'react'
import ipllogo from "../assets/ipllogo.webp"

function Title() {
  return (
    <>
    <img src={ipllogo} className='ipl' />
    <div className='title'>
      <h1 className='h1'> IPL SCHEDULING</h1>
    </div>
    </>
  )
}

export default Title
