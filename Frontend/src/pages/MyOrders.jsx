import React from 'react';
import { useAppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const { orders, currency } = useAppContext();

    // Helper function to resolve product image from assets or URL
    const getImageSource = (img) => {
        if (!img) return assets.logo;
        if (typeof img === 'string' && assets[img]) {
            return assets[img];
        }
        if (Array.isArray(img)) {
            const firstImg = img[0];
            return assets[firstImg] || firstImg;
        }
        return img;
    };

    if (!orders || orders.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center py-12 px-4 text-center">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-4 text-primary">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">No Orders Found</h2>
                <p className="text-gray-500 mb-6 max-w-md">You haven't placed any orders yet. Check out our fresh grocery items and place your first order!</p>
                <Link
                    to="/products"
                    className="px-6 py-2.5 bg-primary text-white font-medium rounded-full hover:bg-primary-dull transition shadow-sm text-sm"
                >
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="py-8 max-w-5xl mx-auto min-h-screen">
            
            {/* Title */}
            <div className="mb-8">
                <h1 className="text-xl font-bold text-gray-700 tracking-wider uppercase inline-block relative pb-1">
                    MY ORDERS
                    <span className="absolute bottom-0 left-0 w-12 h-[3px] bg-primary rounded-full"></span>
                </h1>
            </div>

            {/* Orders List */}
            <div className="space-y-6">
                {orders.map((order) => (
                    <div
                        key={order._id}
                        className="bg-white border border-gray-200/90 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                        {/* Order Card Header */}
                        <div className="flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm text-gray-500 pb-4 border-b border-gray-100">
                            <div>
                                <span className="font-medium text-gray-500">OrderId : </span>
                                <span className="font-medium text-gray-600">{order._id}</span>
                            </div>
                            <div>
                                <span className="font-medium text-gray-500">Payment : </span>
                                <span className="font-medium text-gray-700">{order.paymentMethod}</span>
                            </div>
                            <div>
                                <span className="font-medium text-gray-500">Total Amount : </span>
                                <span className="font-semibold text-gray-800">{currency}{order.amount}</span>
                            </div>
                        </div>

                        {/* Order Items */}
                        <div className="divide-y divide-gray-100">
                            {order.items.map((item, index) => (
                                <div
                                    key={item._id || index}
                                    className="py-4 first:pt-4 last:pb-0 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center"
                                >
                                    {/* Item Image & Title */}
                                    <div className="sm:col-span-5 flex items-center gap-4">
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#f4f9f5] rounded-xl p-2 flex-shrink-0 flex items-center justify-center">
                                            <img
                                                src={getImageSource(item.image)}
                                                alt={item.name}
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-800 text-base sm:text-lg">{item.name}</h3>
                                            <p className="text-xs sm:text-sm text-gray-400 mt-0.5">Category: {item.category}</p>
                                        </div>
                                    </div>

                                    {/* Item Status & Info */}
                                    <div className="sm:col-span-4 space-y-1 text-xs sm:text-sm text-gray-400">
                                        <p><span className="text-gray-400">Quantity: </span><span className="text-gray-500 font-medium">{item.qty}</span></p>
                                        <p><span className="text-gray-400">Status: </span><span className="text-gray-500 font-medium">{item.status || 'Order Placed'}</span></p>
                                        <p><span className="text-gray-400">Date: </span><span className="text-gray-500 font-medium">{item.date}</span></p>
                                    </div>

                                    {/* Item Amount */}
                                    <div className="sm:col-span-3 flex sm:justify-end items-center">
                                        <p className="text-base sm:text-lg font-bold text-primary">
                                            Amount: {currency}{item.amount}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default MyOrders;
