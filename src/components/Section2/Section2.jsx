import React from 'react'
import Navbar2 from './Navbar2'
import Page2Content from './Page2Content'

const Section2 = (props) => {
  return (
    <div className='h-screen w-screen'>
      <Navbar2/>
      <Page2Content items={props.items}/>
    </div>
  )
}

export default Section2