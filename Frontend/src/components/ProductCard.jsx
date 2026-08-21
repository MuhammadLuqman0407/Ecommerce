
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const ProductCard = ({ product }) => {
    const { currency, addToCart, removeFromCart, cartItems } = useAppContext()
    const navigate = useNavigate()
    const productQty = product ? cartItems[product._id] || 0 : 0

    if (!product) return null

    return product && (
        <div
            onClick={() => { navigate(`/products/${product.category.toLowerCase()}/${product._id}`); scrollTo(0, 0); }}
            className="border border-gray-200 rounded-3xl bg-white w-full max-w-[260px] mx-auto overflow-hidden shadow-sm cursor-pointer">
            <div className="group flex items-center justify-center p-4">
                <img
                    className="h-32 md:h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    src={product.image[0]}
                    alt={product.name}
                />
                
            </div>

            <div className="px-4 pb-4">
                <p className="text-xs text-gray-400">{product.category}</p>
                <p className="mt-2 text-base md:text-lg font-semibold text-gray-800 truncate">{product.name}</p>

                <div className="mt-3 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <img
                                key={i}
                                src={assets.star}
                                alt="star"
                                className="w-4 h-4 md:w-5 md:h-5 object-contain"
                            />
                        ))}
                    </div>
                    <span className="text-xs text-gray-400">(4)</span>
                </div>

                <div className="mt-4 flex items-end justify-between gap-3">
                    <div>
                        <p className="text-indigo-600 font-semibold text-lg md:text-xl">
                            {currency}{product.offerPrice}
                        </p>
                        <p className="text-xs md:text-sm text-gray-400 line-through">
                            {currency}{product.price}
                        </p>
                    </div>
                        
                    {!productQty ? (
                        <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); addToCart(product._id); }}
                            className="flex items-center justify-center gap-2 bg-indigo-100 border border-indigo-200 text-indigo-700 rounded-2xl px-3 py-2 text-sm transition hover:bg-indigo-200"
                        >
                            <img src={assets.cart} alt="cart_icon" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
                            Add
                        </button>
                    ) : (
                        <div className="flex items-center justify-between gap-2 bg-indigo-50 rounded-2xl px-2 py-2 min-w-[100px]">
                            <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); removeFromCart(product._id); }}
                                className="w-8 h-8 flex items-center justify-center rounded-xl bg-white text-indigo-600 transition hover:bg-indigo-100"
                            >
                                -
                            </button>
                            <span className="text-sm font-medium text-gray-800">{productQty}</span>
                            <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); addToCart(product._id); }}
                                className="w-8 h-8 flex items-center justify-center rounded-xl bg-white text-indigo-600 transition hover:bg-indigo-100"
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductCard
