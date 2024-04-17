import React from 'react'
import follow from '../assets/Screenshot_2024-04-16_202159-removebg-preview.png'

export const Footer = () => {
    return (
        <div>
            <div className='h-10vh flex justify-between items-center pt-1 pl-3 pr-3'>
                <img  src="logo.png" alt="" />
                <p>Follow us:</p>  <img  src={follow} alt="" />

            </div>
        </div>
    )
}
