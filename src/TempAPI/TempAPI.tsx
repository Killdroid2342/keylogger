import React from 'react';

const TempAPI = () => {
    return (
        <>
            <h1 className='text-center text-3xl font-bold text-white mt-40'>Temperature App</h1>
            <div className='flex flex-col items-center justify-center mt-28 text-center'>
                <div className=' border-2 border-white flex flex-col rounded-md p-12 '>
                    <h2 className='pb-8 text-2xl text-white font-bold'>Location: London</h2>
                    <p className='text-l font-sans border-2 font-bold border-white p-4 rounded-md text-white'>Current Temperature Is 0°C</p>
                  
                </div>
            </div>
        </>
    );
};

export default TempAPI;