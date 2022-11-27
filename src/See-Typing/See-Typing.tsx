import React, { useState } from 'react';

const SeeType = () => {
  const [typing, setTyping] = useState('');

  const type = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTyping(e.target.value);
    console.log(typing);
  };
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='m-auto'>
        <h1 className='mx-auto w-fit text-slate-400 my-2 text-xl'>
          See What You Type
        </h1>
        <input
          type='text'
          onChange={type}
          placeholder='Enter Text Here'
          className='border-2 border-white bg-transparent text-white placeholder-white rounded-md text-center p-3 font-bold font-mono'
        />
        <p className='text-white'>{typing}</p>
      </div>
    </div>
  );
};

export default SeeType;
