import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const SellerSignUp = () => {
    const { setIsSeller, navigate } = useAppContext();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            toast.error("Please fill in all fields!");
            return;
        }
        setIsSeller(true);
        toast.success("Seller Account Created Successfully!");
        navigate('/seller');
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 bg-gray-50/50">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 sm:p-10 w-full max-w-md shadow-xl transition-all">
                
                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-700 mb-8">
                    <span className="text-primary">Seller</span> Sign Up
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-2">Store / Admin Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Store Name"
                            required
                            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-primary transition placeholder-gray-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seller@store.com"
                            required
                            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-primary transition placeholder-gray-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-primary transition placeholder-gray-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary-dull text-white py-3 rounded-xl font-semibold text-base transition shadow-md cursor-pointer active:scale-[0.99]"
                    >
                        Sign Up
                    </button>

                    <div className="text-center pt-2">
                        <p className="text-sm text-gray-500">
                            Already have a seller account?{' '}
                            <Link to="/seller/login" className="text-primary font-semibold hover:underline">
                                Login
                            </Link>
                        </p>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default SellerSignUp;
