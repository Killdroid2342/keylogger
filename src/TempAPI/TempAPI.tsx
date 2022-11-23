import React from 'react';

const TempAPI = () => {
    return (
        <div className='flex flex-col items-center justify-center my-auto h-screen text-center'>

        
        <div className=' border-2 border-white flex flex-col rounded-md p-12 '>
          <h1 className='pb-8 text-2xl text-white'>Current Tempreture</h1>
        <div>
            <p className='text-l font-sans'>current tempreture is 0</p>
        </div>
         
        </div>
      </div>
    );
};

export default TempAPI;