import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const Cart = () => {
    const {
        cartItems,
        products,
        currency,
        updateCartItem,
        removeFromCart,
        getCartAmount,
        getCartCount,
        navigate,
        user,
        userAddress,
        placeOrder
    } = useAppContext();

    const [paymentMethod, setPaymentMethod] = useState('Cash On Delivery');

    const formattedAddress = userAddress
        ? typeof userAddress === 'string'
            ? userAddress
            : `${userAddress.street}, ${userAddress.city}, ${userAddress.state} ${userAddress.zipCode}, ${userAddress.country}`
        : null;

    // Build array of products in cart with details & quantity
    const cartData = Object.entries(cartItems)
        .map(([itemId, qty]) => {
            const product = products.find((p) => p._id === itemId);
            return product && qty > 0 ? { ...product, qty } : null;
        })
        .filter(Boolean);

    const subtotal = getCartAmount();
    const tax = Math.round((subtotal * 0.02) * 100) / 100;
    const totalAmount = Math.round((subtotal + tax) * 100) / 100;
    const totalItems = getCartCount();

    const handlePlaceOrder = () => {
        if (cartData.length === 0) {
            toast.error("Your cart is empty!");
            return;
        }
        const success = placeOrder(paymentMethod);
        if (success) {
            toast.success("Order Placed Successfully!");
            navigate('/my-orders');
        }
    };

    if (cartData.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center py-12 px-4 text-center">
                <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-4 text-emerald-600">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Cart is Empty</h2>
                <p className="text-gray-500 mb-6 max-w-md">Looks like you haven't added anything to your cart yet. Explore our fresh products and start shopping!</p>
                <Link
                    to="/products"
                    className="px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-dull transition shadow-sm"
                >
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="py-8 min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                
                {/* Left Column: Cart Items List */}
                <div className="lg:col-span-2 space-y-6">
                    
                    {/* Header */}
                    <div className="flex items-baseline gap-2 border-b border-gray-100 pb-4">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Shopping Cart</h1>
                        <span className="text-primary font-medium text-sm sm:text-base">
                            {totalItems} {totalItems === 1 ? 'Item' : 'Items'}
                        </span>
                    </div>

                    {/* Table Headers */}
                    <div className="hidden sm:grid grid-cols-6 gap-4 text-sm font-semibold text-gray-500 pb-2 border-b border-gray-200">
                        <div className="col-span-3">Product Details</div>
                        <div className="col-span-2 text-center">Subtotal</div>
                        <div className="col-span-1 text-right">Action</div>
                    </div>

                    {/* Products List */}
                    <div className="divide-y divide-gray-200">
                        {cartData.map((item) => (
                            <div key={item._id} className="py-4 grid grid-cols-1 sm:grid-cols-6 gap-4 items-center">
                                
                                {/* Product Image & Info */}
                                <div className="sm:col-span-3 flex items-center gap-4">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white border border-gray-200 rounded-xl p-2 flex-shrink-0 flex items-center justify-center">
                                        <img
                                            src={Array.isArray(item.image) ? item.image[0] : item.image}
                                            alt={item.name}
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{item.name}</h3>
                                        <p className="text-xs sm:text-sm text-gray-400">Weight: {item.weight || 'N/A'}</p>
                                        
                                        {/* Qty Dropdown */}
                                        <div className="flex items-center gap-1.5 pt-1">
                                            <span className="text-xs sm:text-sm text-gray-500 font-medium">Qty:</span>
                                            <select
                                                value={item.qty}
                                                onChange={(e) => updateCartItem(item._id, Number(e.target.value))}
                                                className="border border-gray-300 rounded px-2 py-0.5 text-xs sm:text-sm bg-white outline-none cursor-pointer hover:border-gray-400"
                                            >
                                                {[...Array(10).keys()].map((n) => (
                                                    <option key={n + 1} value={n + 1}>
                                                        {n + 1}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Subtotal */}
                                <div className="sm:col-span-2 flex sm:justify-center items-center justify-between font-semibold text-gray-800 text-sm sm:text-base">
                                    <span className="sm:hidden text-gray-500 font-normal">Subtotal:</span>
                                    <span>{currency}{item.offerPrice * item.qty}</span>
                                </div>

                                {/* Action (Remove Button) */}
                                <div className="sm:col-span-1 flex justify-end">
                                    <button
                                        type="button"
                                        onClick={() => updateCartItem(item._id, 0)}
                                        className="text-red-500 hover:text-red-600 transition-colors p-1"
                                        title="Remove item"
                                    >
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* Continue Shopping Link */}
                    <div className="pt-4 border-t border-gray-100">
                        <Link
                            to="/products"
                            className="inline-flex items-center gap-2 text-primary font-medium hover:underline text-sm sm:text-base"
                        >
                            <span>←</span>
                            <span>Continue Shopping</span>
                        </Link>
                    </div>

                </div>

                {/* Right Column: Order Summary */}
                <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-200/80 space-y-6">
                    <h2 className="text-xl font-bold text-gray-800 border-b border-gray-200 pb-3">Order Summary</h2>

                    {/* Delivery Address */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Delivery Address</span>
                            <button
                                type="button"
                                onClick={() => navigate('/add-address')}
                                className="text-xs font-semibold text-primary hover:underline cursor-pointer"
                            >
                                Change
                            </button>
                        </div>

                        <p className="text-sm text-gray-600">
                            {formattedAddress || 'No address found'}
                        </p>
                    </div>

                    {/* Payment Method */}
                    <div className="space-y-2">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Payment Method</span>
                        <select
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white outline-none focus:border-primary cursor-pointer text-gray-700 font-medium"
                        >
                            <option value="Cash On Delivery">Cash On Delivery</option>
                            <option value="Online Payment">Online Payment</option>
                        </select>
                    </div>

                    {/* Financial Summary Breakdown */}
                    <div className="space-y-3 pt-3 border-t border-gray-200 text-sm">
                        <div className="flex justify-between text-gray-600">
                            <span>Price</span>
                            <span>{currency}{subtotal}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Shipping Fee</span>
                            <span className="text-primary font-medium">Free</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Tax (2%)</span>
                            <span>{currency}{tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-gray-900 font-bold text-base pt-2 border-t border-gray-200">
                            <span>Total Amount:</span>
                            <span>{currency}{totalAmount.toFixed(2)}</span>
                        </div>
                    </div>

                    {/* Place Order Button */}
                    <button
                        type="button"
                        onClick={handlePlaceOrder}
                        className="w-full bg-primary hover:bg-primary-dull text-white font-semibold py-3 rounded-xl transition-all shadow-md active:scale-[0.99] text-base"
                    >
                        Place Order
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Cart;
