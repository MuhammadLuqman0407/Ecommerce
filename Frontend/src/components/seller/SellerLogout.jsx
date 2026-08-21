import React from 'react';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const SellerLogout = () => {
    const { setIsSeller, navigate } = useAppContext();

    const handleLogout = () => {
        setIsSeller(false);
        toast.success("Logged out successfully!");
        navigate('/');
    };

    return (
        <button
            type="button"
            onClick={handleLogout}
            className="border border-gray-300 rounded-full px-5 py-1 text-sm text-gray-700 hover:bg-gray-100 transition cursor-pointer font-medium"
        >
            Logout
        </button>
    );
};

export default SellerLogout;
