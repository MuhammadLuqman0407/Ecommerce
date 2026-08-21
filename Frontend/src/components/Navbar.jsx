import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets.js';
import { useAppContext } from '../context/AppContext.jsx';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const [showProfileMenu, setShowProfileMenu] = React.useState(false);
    const profileMenuRef = React.useRef(null);
    const { user, setUser, setShowUserLogin, navigate, setSearchQuery, searchQuery, getCartCount } = useAppContext();

    const cartCount = getCartCount();

    const profileName = user?.name || user?.email?.split('@')[0] || 'User';
    const profileInitial = profileName.charAt(0).toUpperCase();
    const profileImage = user?.avatar || user?.image || null;

    const logout = async () => {
        setUser(null);
        setShowProfileMenu(false);
        setOpen(false);
        navigate('/');
    };

    const closeMenu = () => {
        setOpen(false);
        setShowProfileMenu(false);
        setSearchQuery('');
    };

    const handleLogin = () => {
        setOpen(false);
        setShowUserLogin(true);
    };

    const toggleProfileMenu = () => {
        setShowProfileMenu((prev) => !prev);
    };

    const goToMyOrders = () => {
        setShowProfileMenu(false);
        setOpen(false);
        navigate('/my-orders');
    };

    useEffect(() => {
        if(searchQuery.length > 0){
            navigate('/products');
        }
    },[searchQuery]);

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
                setShowProfileMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
            <NavLink to="/" onClick={closeMenu} className="flex-shrink-0 flex items-center gap-2">
                <img className="h-9" src={assets.logo} alt="logo" />
                <span className="hidden md:inline text-lg font-bold text-primary">NatureBite</span>
            </NavLink>

            <div className="flex items-center gap-4 lg:hidden">
                <button
                    type="button"
                    onClick={() => navigate('/cart')}
                    className="relative cursor-pointer"
                >
                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full flex items-center justify-center">
                        {cartCount}
                    </span>
                </button>
                <button
                    type="button"
                    aria-label="Menu"
                    aria-expanded={open}
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="21" height="1.5" rx=".75" fill="#426287" />
                        <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                        <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                    </svg>
                </button>
            </div>

            <div
                className={`lg:hidden absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex flex-col items-center gap-2 px-5 text-sm z-50 ${open ? 'flex' : 'hidden'}`}
            >
                <NavLink to="/" onClick={closeMenu} className="w-full py-2 text-center hover:text-primary">Home</NavLink>
                <NavLink to="/products" onClick={closeMenu} className="w-full py-2 text-center hover:text-primary">All Products</NavLink>
                <NavLink to="/contact" onClick={closeMenu} className="w-full py-2 text-center hover:text-primary">Contact</NavLink>

                {user && (
                    <NavLink to="/my-orders" onClick={closeMenu} className="w-full py-2 text-center hover:text-primary">My Orders</NavLink>
                )}

                <div className="w-full flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full my-2">
                    <input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
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

                <button
                    type="button"
                    onClick={() => {
                        setOpen(false);
                        navigate('/cart');
                    }}
                    className="w-full flex items-center justify-between px-4 py-2 rounded-full border border-gray-300 text-sm hover:border-primary transition cursor-pointer"
                >
                    <span>Cart</span>
                    <span className="bg-primary text-white rounded-full px-2.5 py-0.5">{cartCount}</span>
                </button>

                {!user ? (
                    <button
                        type="button"
                        onClick={handleLogin}
                        className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm w-full"
                    >
                        Login
                    </button>
                ) : (
                    <div ref={profileMenuRef} className="w-full">
                        <button
                            type="button"
                            onClick={toggleProfileMenu}
                            className="flex items-center justify-center gap-2 w-full py-2"
                        >
                            {profileImage ? (
                                <img src={profileImage} alt="profile" className="w-9 h-9 rounded-full object-cover border border-gray-300" />
                            ) : (
                                <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                                    {profileInitial}
                                </div>
                            )}
                            <span className="text-sm font-medium">{profileName}</span>
                        </button>

                        {showProfileMenu && (
                            <div className="mt-2 w-full rounded-xl border border-gray-200 bg-white shadow-md">
                                <button
                                    type="button"
                                    onClick={goToMyOrders}
                                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                >
                                    My Orders
                                </button>
                                <button
                                    type="button"
                                    onClick={logout}
                                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="hidden lg:flex items-center justify-center gap-8 flex-1">
                <NavLink to="/seller" className="border border-gray-300 rounded-full px-4 py-1 text-xs hover:bg-gray-50 text-gray-600 transition">
                    Seller Dashboard
                </NavLink>
                <NavLink to="/" onClick={() => setSearchQuery('')} className="hover:text-primary">Home</NavLink>
                <NavLink to="/products" onClick={() => setSearchQuery('')} className="hover:text-primary">All Products</NavLink>
                <NavLink to="/contact" onClick={() => setSearchQuery('')} className="hover:text-primary">Contact</NavLink>

                {user && (
                    <NavLink to="/my-orders" className="hover:text-primary">My Orders</NavLink>
                )}
            </div>

            <div className="hidden lg:flex items-center gap-6">
                <div className="flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
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

                <button
                    type="button"
                    onClick={() => navigate('/cart')}
                    className="relative cursor-pointer"
                >
                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full flex items-center justify-center">
                        {cartCount}
                    </span>
                </button>

                {!user ? (
                    <button
                        type="button"
                        onClick={handleLogin}
                        className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full"
                    >
                        Login
                    </button>
                ) : (
                    <div ref={profileMenuRef} className="relative">
                        <button
                            type="button"
                            onClick={toggleProfileMenu}
                            className="flex items-center gap-2"
                        >
                            {profileImage ? (
                                <img src={profileImage} alt="profile" className="w-9 h-9 rounded-full object-cover border border-gray-300" />
                            ) : (
                                <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                                    {profileInitial}
                                </div>
                            )}
                            <span className="text-sm font-medium text-gray-700">{profileName}</span>
                        </button>

                        {showProfileMenu && (
                            <div className="absolute right-0 mt-3 w-44 rounded-xl border border-gray-200 bg-white shadow-xl z-50">
                                <button
                                    type="button"
                                    onClick={goToMyOrders}
                                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                >
                                    My Orders
                                </button>
                                <button
                                    type="button"
                                    onClick={logout}
                                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;