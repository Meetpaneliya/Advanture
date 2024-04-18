import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { useState } from 'react';
import { Placecard } from '../components/Placecard';
import data from '../data';
import follow from '../assets/Screenshot_2024-04-16_202159-removebg-preview.png'
import logo from '../assets/logoimg-removebg-preview.png'

const Home = () => {

  const [selectedcheckin, setSelectedcheckin] = useState('');
  const [selectedcheckout, setSelectedcheckout] = useState('');
  const [location, setLocation] = useState('');

  const handlecheckin = (event) => {
    setSelectedcheckin(event.target.value);
  };
  
  const handlecheckout = (event) => {
    setSelectedcheckout(event.target.value);
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className='flex-col justify-center items-center mt-14'>

      <div className="text-center flex flex-col items-center">
        <h1 className='text-5xl font-extrabold'>Life's an <span className=' text-blue-900'>adventure</span>, live it!</h1>

        <div className='mt-5 font-semibold'>
          <p>We help travelers find accommodations, plan relaxing vacations, and embark on exciting adventures.</p>
          <p>Whether you're creating, checking off, or completing your list, we can help you find a vacation.</p>
        </div>

        <div className='flex bg-slate-500 p-3 my-6 gap-x-8 rounded-full max-w-max'>
          <div className='flex pl-1'>
            <IoLocationSharp className='h-8 w-8 mt-1' />

            <div className='flex-col'>
              <input
                type='text'
                className="bg-slate-500 text-center placeholder-black"
                placeholder='Location'
                onChange={handleLocationChange}
              />
              <p className='font-semibold mt-1'>
                {location ? `Destination: ${location}` : 'Choose destination'}
              </p>
            </div>
          </div>

          <div className='flex border-r-2'></div>

          <div className='flex pr-3 gap-3'>
            <IoCalendarOutline className='h-8 w-8 mt-1' />

            <div className='flex-col'>
              <input
                type='date'
                placeholder='Date'
                className="bg-slate-500"
                onChange={handlecheckin}
              />
              <p className='font-semibold mt-1 mr-8'>
                {selectedcheckin ? new Date(selectedcheckin).toDateString() : 'Check In'}
              </p>
            </div>
          </div>

          <div className='flex border-r-2'></div>
          
          <div className='flex pr-3 gap-3'>
            <IoCalendarOutline className='h-8 w-8 mt-1' />

            <div className='flex-col'>
              <input
                type='date'
                placeholder='Date'
                className="bg-slate-500"
                onChange={handlecheckout}
              />
              <p className='font-semibold mt-1 mr-8'>
                {selectedcheckout ? new Date(selectedcheckout).toDateString() : 'Check Out'}
              </p>
            </div>
          </div>
        </div>

      </div>

      <hr class="w-full mt-4 mb-4 border-dotted border-black"></hr>

      <div className='flex gap-10 mt-16'>
        {
          data.map(item => (
            <div key={item.id}>
              <Placecard item={item} />
            </div>
          ))
        }
      </div>

      <div className="flex items-center justify-between pl-16 pr-16 mt-5">
        <div>
          <img src={logo} alt="" className='w-36' />
        </div>
        <div className='flex items-center'>
          <p>Follow us:</p>
          <img src={follow} alt="" className='w-28 ml-2' />
        </div>
      </div>

    </div>
  );
};

export default Home;
