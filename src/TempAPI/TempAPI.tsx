import axios from 'axios';
import React, { Fragment, useState } from 'react';

const TempAPI = () => {
    const [weather, setWeather] = useState([])
    const getWeather = async () => {
        axios
          .get(
            'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={6281aa4868ce6489c8799b5111a227c8}'
            )
          .then((res) => {
            console.log(res);
            setWeather(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    return (
        <Fragment>
            <h1 className='text-center text-3xl font-bold text-white mt-40'>Temperature App</h1>
            <div className='flex flex-col items-center justify-center mt-28 text-center'>
                <div className=' border-2 border-white flex flex-col rounded-md p-12 '>
                    <h2 className='pb-8 text-2xl text-white font-bold'>Location: London</h2>
                    <p className='text-l font-sans border-2 font-bold border-white p-4 rounded-md text-white'>Current Temperature Is 0°C {weather}</p>
                    <button className='border-2 border-white p-3 rounded-md text-l font-bold text-white mt-8' onClick={getWeather}>Check Temperature In Your Location</button>
                </div>
            </div>
        </Fragment>
    );
};

export default TempAPI;