import React, { useState } from 'react';

const SeeType = () => {
  const [keys, setKeys] = useState('');

  const type = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeys(e.target.value);
  };
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='m-auto'>
        <h1 className='mx-auto font-serif font-bold w-fit text-white mb-10 my-2 text-2xl'>
          Log Your Keys
        </h1>
        <input
          type='text'
          onChange={(e) => type(e)}
          placeholder='Enter Text Here'
          className='border-2 border-white bg-transparent text-white w-fit placeholder-white rounded-md text-center p-3 font-bold font-mono'
        />
        <p className='text-white font-bold mt-10 fixed p-2'>{keys}</p>
      </div>
    </div>
  );
};

export default SeeType;
