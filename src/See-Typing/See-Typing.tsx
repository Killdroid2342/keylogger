import React, { useState } from 'react';

const SeeType = () => {
  const [typing, setTyping] = useState('')
  const type = () => {
    
  }
   return(
    <div className='flex flex-col items-center justify-center'>
      <h1 className=''>See What You Type</h1>
      <input type="text" onChange={type} placeholder="Enter Text Here" className='border-2 border-white bg-transparent text-white rounded-md text-center p-3 font-bold font-mono'/>
      <p>{typing}asdda</p>
    </div>

   )
};

export default SeeType;