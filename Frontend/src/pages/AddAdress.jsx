import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const AddAdress = () => {
    const { setUserAddress, userAddress, navigate } = useAppContext();

    const [formData, setFormData] = useState({
        firstName: userAddress?.firstName || '',
        lastName: userAddress?.lastName || '',
        email: userAddress?.email || '',
        street: userAddress?.street || '',
        city: userAddress?.city || '',
        state: userAddress?.state || '',
        zipCode: userAddress?.zipCode || '',
        country: userAddress?.country || '',
        phone: userAddress?.phone || ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.firstName || !formData.street || !formData.city || !formData.zipCode || !formData.phone) {
            toast.error("Please fill in all required fields!");
            return;
        }

        setUserAddress(formData);
        toast.success("Shipping address saved successfully!");
        navigate('/cart');
    };

    return (
        <div className="py-10 max-w-6xl mx-auto min-h-[75vh] flex flex-col justify-center">
            
            {/* Header Title */}
            <h1 className="text-3xl font-bold text-gray-600 mb-8">
                Add Shipping <span className="text-primary font-bold">Address</span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* Left Side: Address Form */}
                <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
                    
                    {/* First & Last Name */}
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            required
                            className="w-full border border-gray-200 rounded-md px-3.5 py-2.5 text-sm outline-none focus:border-primary placeholder-gray-300 transition"
                        />
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            required
                            className="w-full border border-gray-200 rounded-md px-3.5 py-2.5 text-sm outline-none focus:border-primary placeholder-gray-300 transition"
                        />
                    </div>

                    {/* Email address */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email address"
                            required
                            className="w-full border border-gray-200 rounded-md px-3.5 py-2.5 text-sm outline-none focus:border-primary placeholder-gray-300 transition"
                        />
                    </div>

                    {/* Street */}
                    <div>
                        <input
                            type="text"
                            name="street"
                            value={formData.street}
                            onChange={handleChange}
                            placeholder="Street"
                            required
                            className="w-full border border-gray-200 rounded-md px-3.5 py-2.5 text-sm outline-none focus:border-primary placeholder-gray-300 transition"
                        />
                    </div>

                    {/* City & State */}
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="City"
                            required
                            className="w-full border border-gray-200 rounded-md px-3.5 py-2.5 text-sm outline-none focus:border-primary placeholder-gray-300 transition"
                        />
                        <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            placeholder="State"
                            required
                            className="w-full border border-gray-200 rounded-md px-3.5 py-2.5 text-sm outline-none focus:border-primary placeholder-gray-300 transition"
                        />
                    </div>

                    {/* Zip code & Country */}
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            placeholder="Zip code"
                            required
                            className="w-full border border-gray-200 rounded-md px-3.5 py-2.5 text-sm outline-none focus:border-primary placeholder-gray-300 transition"
                        />
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="Country"
                            required
                            className="w-full border border-gray-200 rounded-md px-3.5 py-2.5 text-sm outline-none focus:border-primary placeholder-gray-300 transition"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            required
                            className="w-full border border-gray-200 rounded-md px-3.5 py-2.5 text-sm outline-none focus:border-primary placeholder-gray-300 transition"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary-dull text-white py-3 rounded-md font-bold tracking-wider text-sm transition uppercase shadow-sm cursor-pointer"
                        >
                            SAVE ADDRESS
                        </button>
                    </div>

                </form>

                {/* Right Side: Map & Delivery Person Illustration */}
                <div className="hidden md:flex justify-center items-center p-6">
                    <svg
                        viewBox="0 0 500 400"
                        className="w-full max-w-md h-auto"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Floor Line */}
                        <line x1="100" y1="350" x2="450" y2="350" stroke="#E2E8F0" strokeWidth="2" />
                        
                        {/* Shadow under illustration */}
                        <ellipse cx="370" cy="350" rx="35" ry="8" fill="#EDF2F7" />

                        {/* Background Map Grid Circle */}
                        <g opacity="0.85">
                            <circle cx="250" cy="200" r="110" fill="#F7FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
                            {/* Map Roads / Grid Lines */}
                            <path d="M160 170 C 200 160, 240 190, 310 160" stroke="#CBD5E0" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                            <path d="M190 270 C 230 220, 270 240, 320 210" stroke="#CBD5E0" strokeWidth="2" fill="none" />
                            <path d="M220 100 C 230 150, 210 200, 250 300" stroke="#CBD5E0" strokeWidth="2" fill="none" />
                            <path d="M290 110 L 250 220 L 290 280" stroke="#CBD5E0" strokeWidth="1.5" fill="none" />
                            <rect x="235" y="145" width="25" height="25" fill="#EDF2F7" stroke="#CBD5E0" strokeWidth="1" rx="2" />
                            <polygon points="175,200 205,185 215,225" fill="#EDF2F7" stroke="#CBD5E0" strokeWidth="1" />
                        </g>

                        {/* Large Map Pin */}
                        <g transform="translate(190, 110)">
                            {/* Pin Shadow */}
                            <ellipse cx="40" cy="115" rx="14" ry="5" fill="#A0AEC0" opacity="0.4" />
                            
                            {/* Main Green Pin Body */}
                            <path
                                d="M40 10 C16.8 10 0 26.8 0 50 C0 80 40 120 40 120 C40 120 80 80 80 50 C80 26.8 63.2 10 40 10 Z"
                                fill="#40c088"
                            />
                            {/* White Inner Circle */}
                            <circle cx="40" cy="46" r="16" fill="white" />
                        </g>

                        {/* Small Green Target Circle */}
                        <circle cx="318" cy="242" r="8" fill="#40c088" opacity="0.75" />

                        {/* Delivery Person Figure */}
                        <g transform="translate(330, 210)">
                            {/* Legs & Pants */}
                            <path d="M25 70 L 15 135 L 25 135 L 30 75 Z" fill="#2D3748" />
                            <path d="M35 70 L 45 130 L 35 135 L 28 75 Z" fill="#1A202C" />
                            
                            {/* Shoes */}
                            <path d="M10 135 C 10 135 25 135 25 140 L 5 140 Z" fill="#2D3748" />
                            <path d="M35 135 C 35 135 50 135 50 140 L 30 140 Z" fill="#2D3748" />

                            {/* Torso & Green Shirt */}
                            <path d="M15 25 L 45 25 L 40 75 L 20 75 Z" fill="#40c088" />
                            <path d="M12 25 L 18 45 L 25 35 Z" fill="#38a169" />

                            {/* Head & Hair */}
                            <circle cx="30" cy="12" r="10" fill="#FBD38D" />
                            <path d="M20 10 C 20 2, 35 0, 38 8 C 40 5, 42 12, 38 16 L 22 15 Z" fill="#2D3748" />

                            {/* Arms holding box */}
                            <path d="M15 30 L -5 50 L 5 55 L 20 40 Z" fill="#FBD38D" />

                            {/* Parcel Package */}
                            <rect x="-35" y="40" width="45" height="30" rx="3" fill="#CBD5E0" stroke="#A0AEC0" strokeWidth="1.5" />
                            <circle cx="-12" cy="55" r="4" fill="#4A5568" />
                        </g>

                    </svg>
                </div>

            </div>
        </div>
    );
};

export default AddAdress;
