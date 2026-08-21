import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import SellerLogout from './SellerLogout';

const SellerLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            
            {/* Top Seller Header Bar */}
            <header className="flex items-center justify-between px-6 sm:px-12 py-3.5 border-b border-gray-200 bg-white sticky top-0 z-40">
                <Link to="/seller" className="flex items-center gap-2">
                    <img src={assets.logo} alt="GreenCart Logo" className="h-8 sm:h-9 object-contain" />
                    <span className="text-xl font-bold text-gray-800 tracking-tight">Green<span className="text-primary">Cart</span></span>
                </Link>

                <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-600">Hi! Admin</span>
                    <SellerLogout />
                </div>
            </header>

            <div className="flex flex-1">
                
                {/* Left Sidebar */}
                <aside className="w-56 sm:w-64 border-r border-gray-200 bg-white min-h-[calc(100vh-65px)] flex-shrink-0 pt-4">
                    <nav className="space-y-1">
                        
                        {/* Add Product Tab */}
                        <NavLink
                            to="/seller/add-product"
                            end
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-6 py-3.5 text-sm font-medium transition-all ${
                                    isActive
                                        ? 'bg-[#f0fdf4] text-primary border-r-4 border-primary font-semibold'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`
                            }
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Add Product</span>
                        </NavLink>

                        {/* Product List Tab */}
                        <NavLink
                            to="/seller/product-list"
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-6 py-3.5 text-sm font-medium transition-all ${
                                    isActive
                                        ? 'bg-[#f0fdf4] text-primary border-r-4 border-primary font-semibold'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`
                            }
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                            </svg>
                            <span>Product List</span>
                        </NavLink>

                        {/* Orders Tab */}
                        <NavLink
                            to="/seller/orders"
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-6 py-3.5 text-sm font-medium transition-all ${
                                    isActive
                                        ? 'bg-[#f0fdf4] text-primary border-r-4 border-primary font-semibold'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`
                            }
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Orders</span>
                        </NavLink>

                    </nav>
                </aside>

                {/* Main Dashboard Workspace Content */}
                <main className="flex-1 p-6 sm:p-10 bg-white overflow-y-auto">
                    {children}
                </main>

            </div>

        </div>
    );
};

export default SellerLayout;
