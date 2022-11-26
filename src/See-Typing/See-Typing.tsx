import React, { Fragment, useState } from 'react';

const SeeType = () => {
  const [typing, setTyping] = useState('')
  const type = () => {
    
  }
   return(
    <Fragment>
      <div>
        <input type="text" onChange={type} />
      </div>
    </Fragment>
   )
};

export default SeeType;