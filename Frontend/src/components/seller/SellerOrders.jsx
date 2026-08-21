import React from 'react';
import { useAppContext } from '../../context/AppContext';

const SellerOrders = () => {
    const { orders, currency } = useAppContext();

    // Default mock seller orders matching Screenshot 4 if orders list is empty
    const displayOrders = orders && orders.length > 0 ? orders : [
        {
            _id: "order_001",
            customerName: "Great Stack",
            address: "Street 123, Main City, New State, 123456, IN",
            phone: "1234567890",
            amount: 89,
            paymentMethod: "Online",
            date: "3/25/2025",
            paymentStatus: "Paid",
            items: [
                { name: "Spinach 500g", qty: 2 }
            ]
        },
        {
            _id: "order_002",
            customerName: "Great Stack",
            address: "Street 123, Main City, New State, 123456, IN",
            phone: "1234567890",
            amount: 43,
            paymentMethod: "COD",
            date: "3/25/2025",
            paymentStatus: "Pending",
            items: [
                { name: "Potato 500g", qty: 1 },
                { name: "Tomato 1 kg", qty: 1 }
            ]
        }
    ];

    return (
        <div className="max-w-4xl">
            <h1 className="text-xl font-bold text-gray-700 mb-6">Orders List</h1>

            <div className="space-y-4">
                {displayOrders.map((order) => (
                    <div
                        key={order._id}
                        className="bg-white border border-gray-200 rounded-xl p-5 grid grid-cols-1 md:grid-cols-4 gap-6 items-center shadow-sm hover:shadow-md transition-shadow"
                    >
                        
                        {/* Column 1: Items List with Icon */}
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-[#e6f4ea] rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <div className="space-y-1">
                                {order.items.map((item, idx) => (
                                    <p key={idx} className="font-semibold text-gray-800 text-sm">
                                        {item.name} <span className="text-gray-500 font-normal">x {item.qty}</span>
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Column 2: Customer Address */}
                        <div className="text-xs sm:text-sm text-gray-500 space-y-0.5">
                            <p className="font-bold text-gray-700">{order.customerName || 'Great Stack'}</p>
                            <p>{order.address || 'Street 123, Main City, New State, 123456, IN'}</p>
                            <p>{order.phone || '1234567890'}</p>
                        </div>

                        {/* Column 3: Amount */}
                        <div className="font-bold text-gray-800 text-base md:text-lg">
                            {currency}{order.amount}
                        </div>

                        {/* Column 4: Payment Details */}
                        <div className="text-xs sm:text-sm text-gray-500 space-y-1">
                            <p><span className="font-medium text-gray-500">Method: </span><span className="font-semibold text-gray-700">{order.paymentMethod}</span></p>
                            <p><span className="font-medium text-gray-500">Date: </span><span className="font-medium text-gray-600">{order.date}</span></p>
                            <p>
                                <span className="font-medium text-gray-500">Payment: </span>
                                <span className={`font-semibold ${order.paymentStatus === 'Paid' || order.paymentMethod === 'Online' ? 'text-gray-700' : 'text-gray-600'}`}>
                                    {order.paymentStatus || (order.paymentMethod === 'Online' ? 'Paid' : 'Pending')}
                                </span>
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default SellerOrders;
