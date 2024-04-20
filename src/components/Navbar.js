import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import logo from "../assets/logoimg-removebg-preview.png"
import { Link } from "react-router-dom"

const Navbar = () => {

    const [showForm, setShowForm] = useState(false);
    const [showUpdateform, setshowUpdateform] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        contactNumber: '',
        email: ''
    });
    const [profileCreated, setProfileCreated] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const toggleUpdateForm = () => {
        setshowUpdateform(!showUpdateform);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

    };

    const createProfile = () => {
        console.log('Profile created:', formData);
        // setupdateformData(formData);
        setProfileCreated(true);
      
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createProfile(); 
    };

    const handleUpdate = () => {

        setIsUpdating(true);
        setDisabled(false); 
    };

    const handleSave = () => {
        
        console.log('Profile updated:', formData);
        setshowUpdateform(false); 
        setIsUpdating(false); 
        setDisabled(true);
    };

    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

            <Link to="/">
                <img src={logo} alt="Logo" width={260} height={132} loading="lazy" />
            </Link>

            <nav>
                <ul className=' flex gap-x-6'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className='flex items-center gap-x-4'>
                <Link to="/login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log in
                    </button>
                </Link>

                <div>
                    {!profileCreated ? (<FaUserCircle className="h-10 w-10"
                        onClick={toggleForm} />) : (<FaUserEdit className="h-10 w-10" onClick={toggleUpdateForm} />)}

                    {showForm && !profileCreated && (
                        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
                            <div className="bg-white p-8 rounded-lg shadow-md relative bottom-20 left-1/3">
                                <button className="absolute top-0 right-0 mr-2 mt-2" onClick={toggleForm}>
                                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <h2 className="text-xl font-semibold mb-4">Create Profile</h2>
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
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
                                            Contact Number:
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="contactNumber"
                                            type="tel"
                                            placeholder="Enter your number"
                                            value={formData.contactNumber}
                                            onChange={handleChange}
                                            required
                                            name="contactNumber"
                                        />
                                    </div>

                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Create Profile
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                    {showUpdateform && profileCreated && (
                        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
                            <div className="bg-white p-8 rounded-lg shadow-md relative bottom-20 left-1/3">
                                <button className="absolute top-0 right-0 mr-2 mt-2" onClick={toggleUpdateForm}>
                                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <h2 className="text-xl font-semibold mb-4">Welcome to you'r Profile !!</h2>
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
                                            disabled={disabled}
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
                                            disabled={disabled}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
                                            Contact Number:
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="contactNumber"
                                            type="tel"
                                            placeholder="Enter your number"
                                            value={formData.contactNumber}
                                            onChange={handleChange}
                                            required
                                            name="contactNumber"
                                            disabled={disabled}
                                        />
                                    </div>

                                    { !isUpdating ? (<button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="button"  onClick={handleUpdate}
                                    >
                                        Update
                                    </button>) : (<button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="button"  onClick={handleSave}
                                    >
                                        save
                                    </button>)

                                    }
                                    
                                </form>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Navbar;

