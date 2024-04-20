import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

export const Placecard = ({ item }) => {

  let image = item.image;
  let name = item.name;
  let price = item.price;
  let km = item.km;
  let star = item.star;
  let point = item.point;

  const [showForm, setShowForm] = useState(false);
  const [formsubmitted, setformsubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    checkin: '',
    checkout: ''
  });

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setformsubmitted(true);
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }
    const options = {
      key: "rzp_test_mpl4mEFOrxfsxU",
      currency: "INR",
      amount: amount * 100,
      name: "SheStay",
      description: "Thanks for Booking",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment Successfully");
        toggleForm();
        setFormData({
          email: '',
          username: '',
          checkin: '',
          checkout: ''
        });
      },
      prefill: {
        name: "pay with SheStay",
      },
      modal: {
        ondismiss: function () {
          alert('Payment window closed');
        },
        escape: true,
        width: Math.min(window.innerWidth - 60, 400),
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    const service_id = 'service_ofpkqxm';
    const template_id = 'template_zzznf2q';
    const publicKey = 'WY3vuzq7SgXRPvWeV';

    const message = `
    Subject: Booking Confirmation: Your Stay at Our Serene Retreat

    Dear ${formData.username},
    
    We're delighted to confirm your booking at our serene retreat! Your reservation spans from ${formData.checkin} to ${formData.checkout}. Get ready for an unforgettable getaway filled with relaxation, adventure, and top-notch hospitality.
    
    Accommodation:
    You'll be staying in our luxurious room, meticulously designed for comfort and elegance, ensuring a rejuvenating experience amidst stunning surroundings.
    
    Facilities:
    Enjoy our comprehensive facilities:
    
    Sparkling Swimming Pool
    Exquisite Dining Options
    Spa and Wellness Center
    Fitness Center
    Recreational Activities
    Kids' Club
    Security:
    Your safety is our top priority. Our resort is equipped with 24/7 surveillance and trained personnel to ensure a worry-free stay.
    
    Excursions:
    Explore the local culture with our curated excursions and sightseeing tours.
    
    We're committed to making your stay seamless and delightful. For any special requests, our concierge team is here to assist.
    
    We can't wait to welcome you and create lasting memories together at our serene retreat.
    
    Best regards,
    SheStay
      
    `;

    const templateParams = {
      from_name: "SheStay",
      from_email: "SheStay01@gmail.com",
      to_email: formData.email,
      message: message
    };

    emailjs.send(service_id, template_id, templateParams, publicKey)
      .then((response) => {
        console.log('email sent successfully!', response);
      })
      .catch((error) => {
        console.log('error sending email:', error);
      });
  };

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

          <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-3 rounded mt-2 " onClick={toggleForm}>Book Now</button>
        </div>
      </div>

      {showForm && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md relative">
            <button className="absolute top-0 right-0 mr-2 mt-2" onClick={toggleForm}>
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-xl font-semibold mb-4">Booking Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  name="username"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  name="email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="checkin">
                  Check-in Date:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="checkin"
                  type="date"
                  placeholder="Select check-in date"
                  value={formData.checkin}
                  onChange={handleChange}
                  required
                  name="checkin"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="checkout">
                  Check-out Date:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="checkout"
                  type="date"
                  placeholder="Select check-out date"
                  value={formData.checkout}
                  onChange={handleChange}
                  required
                  name="checkout"
                />
              </div>
              <div className="flex justify-end gap-x-9">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Book
                </button>

                {formsubmitted && (<button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => displayRazorpay(2000)}
                >
                  Pay Now
                </button>)}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
