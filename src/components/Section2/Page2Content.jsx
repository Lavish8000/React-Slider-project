import React from 'react';
import Left2Content from './Left2Content';
import Right2Content from './Right2Content';



const Page2Content = (props) => {
  return (
    <div className='py -10 h-[90vh] px-16 flex gap-10'>
      <Left2Content/>
      <Right2Content items={props.items}/>
    </div>
  )
}

export default Page2Content;