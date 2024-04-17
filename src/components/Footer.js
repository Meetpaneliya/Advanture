import React from 'react'


export const Footer = () => {
    return (
        <div className='flex flex-col '>
            <hr class="w-full mt-4 mb-4 border-dotted border-black"></hr>

            <div class='flex justify-between items-start pl-16 pr-16'>
                <div>
                    <p class="underline underline-black underline-offset-8 mb-2 font-semibold mt-0">She Share</p>
                    <ul class="flex flex-col">
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <p class="underline underline-black underline-offset-8 mb-2 font-semibold mt-0">Support</p>
                    <ul class="flex flex-col">
                        <li>FAQs</li>
                        <li>Cancellation Policy</li>
                    </ul>
                </div>
                <div>
                    <p class="underline underline-black underline-offset-8 mb-2 font-semibold mt-0">Become A Host</p>
                    <ul class="flex flex-col">
                        <li>Hosting Resources</li>
                        <li>Hosting responsibility</li>
                        <li>Share a room</li>
                        <li>Pets</li>
                    </ul>
                </div>
                <div>
                    <p class="underline underline-black underline-offset-8 mb-2 font-semibold mt-0">Term & Policy</p>
                    <ul class="flex flex-col">
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>


            <div className='h-12 bg-blue-400 mt-4 text-center'>
                <p className='mt-3'>Copyright © 2020 - 2024 SheStay®. All rights reserved.</p>
            </div>
        </div>

    )
}

export default Footer;
