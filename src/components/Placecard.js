import React from 'react'


export const Placecard = ({ item }) => {

  let image = item.image;
  let name = item.name;
  let price = item.price;
  let km = item.km;
  let star = item.star;
  let point = item.point;

  return (

    <div>
      <div class="flex-col items-center justify-between border border-gray-300 rounded-lg p-4 shadow-md w-60 bg-slate-700 max-h-max">
        <div>
          <img src={image} alt='' />
          <p className="text-lg font-semibold ml-3 text-gray-300">{name}</p>
        </div>
        <div class="flex-grow ml-3 mt-3">
          <p className='text-gray-300 font-semibold'>{km}km away</p>
          <div className='flex gap-3'>
            <p class="text-blue-600 font-bold">₹{price}</p>
            <p className='text-gray-300'>{star}⭐ {point}</p>
          </div>

        </div>
      </div>

      
    </div>


  )
}
