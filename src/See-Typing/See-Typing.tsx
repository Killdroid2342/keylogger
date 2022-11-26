import React, { Fragment, useState } from 'react';

const SeeType = () => {
  const [typing, setTyping] = useState('')
  const type = () => {

  }
   return(
    <Fragment>
      <div>
        <input type="text" onChange={type} placeholder="Enter Text Here" className='border-2 border-white bg-transparent text-white rounded-md p-2 font-bold font-mono'/>
      </div>
    </Fragment>
   )
};

export default SeeType;