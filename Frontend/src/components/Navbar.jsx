import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets.js';
import { useAppContext } from '../context/AppContext.jsx';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const { user, setUser, setShowUserLogin, navigate } = useAppContext();

    const logout = async () => {
        setUser(null);
        navigate('/');
        setOpen(false);
    };

    const closeMenu = () => setOpen(false);

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
            {/* Logo with Text */}
            <NavLink to="/" onClick={closeMenu} className="flex-shrink-0 flex items-center gap-2">
                <img className="h-9" src={assets.logo} alt="logo" />
                <span className="hidden md:inline text-lg font-bold text-primary">NatureBite</span>
            </NavLink>

            {/* Mobile Menu Button - Visible on screens < lg (< 1024px) */}
            <button
                type="button"
                aria-label="Menu"
                aria-expanded={open}
                className="lg:hidden"
                onClick={() => setOpen((prev) => !prev)}
            >
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            {/* Mobile Menu - Visible on screens < lg (< 1024px) */}
            <div
                className={`lg:hidden absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex flex-col items-center gap-2 px-5 text-sm z-50 ${open ? 'flex' : 'hidden'}`}
            >
                <NavLink to="/" onClick={closeMenu} className="w-full py-2 text-center hover:text-primary">Home</NavLink>
                <NavLink to="/products" onClick={closeMenu} className="w-full py-2 text-center hover:text-primary">All Products</NavLink>
                <NavLink to="/contact" onClick={closeMenu} className="w-full py-2 text-center hover:text-primary">Contact</NavLink>

                {/* Show My Orders only if user is logged in */}
                {user && (
                    <NavLink to="/my-orders" onClick={closeMenu} className="w-full py-2 text-center hover:text-primary">My Orders</NavLink>
                )}

                {/* Mobile Search Bar */}
                <div className="w-full flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full my-2">
                    <input
                        className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
                        type="text"
                        placeholder="Search products"
                    />
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                            d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
                            stroke="#7A7B7D"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                {!user ? (
                    <button
                        type="button"
                        onClick={() => {
                            setOpen(false);
                            setShowUserLogin(true);
                        }}
                        className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm w-full"
                    >
                        Login
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={logout}
                        className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm w-full"
                    >
                        Logout
                    </button>
                )}
            </div>

            {/* Desktop Menu - Visible on screens >= lg (>= 1024px) */}
            <div className="hidden lg:flex items-center justify-center gap-8 flex-1">
                <NavLink to="/" className="hover:text-primary">Home</NavLink>
                <NavLink to="/products" className="hover:text-primary">All Products</NavLink>
                <NavLink to="/contact" className="hover:text-primary">Contact</NavLink>

                {/* Show My Orders only if user is logged in */}
                {user && (
                    <NavLink to="/my-orders" className="hover:text-primary">My Orders</NavLink>
                )}
            </div>

            {/* Right Side Items - Visible on screens >= lg (>= 1024px) */}
            <div className="hidden lg:flex items-center gap-6">
                {/* Search Bar */}
                <div className="flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input
                        className="py-1.5 w-32 bg-transparent outline-none placeholder-gray-500"
                        type="text"
                        placeholder="Search products"
                    />
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                            d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
                            stroke="#7A7B7D"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                {/* Cart Icon */}
                <div className="relative cursor-pointer">
                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <button type="button" className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full flex items-center justify-center">
                        9
                    </button>
                </div>

                {/* Auth Buttons */}
                {!user ? (
                    <button
                        type="button"
                        onClick={() => setShowUserLogin(true)}
                        className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full"
                    >
                        Login
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={logout}
                        className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full"
                    >
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;