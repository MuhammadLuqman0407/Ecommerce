import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import ProductCard from '../components/ProductCard'

const ProductDetail = () => {
    const { id, category } = useParams()
    const { products, currency, addToCart, removeFromCart, cartItems, navigate } = useAppContext()

    const [product, setProduct] = useState(null)
    const [selectedImage, setSelectedImage] = useState(0)
    const [relatedProducts, setRelatedProducts] = useState([])

    useEffect(() => {
        const found = products.find(p => p._id === id)
        if (found) {
            setProduct(found)
            setSelectedImage(0)
            // Get related products from same category (excluding current product)
            const related = products.filter(
                p => p.category.toLowerCase() === found.category.toLowerCase()
                    && p._id !== found._id
                    && p.inStock
            )
            setRelatedProducts(related.slice(0, 4))
        }
    }, [id, products])

    if (!product) {
        return (
            <div className="mt-20 flex items-center justify-center min-h-[50vh]">
                <div className="animate-spin w-10 h-10 border-4 border-primary border-t-transparent rounded-full"></div>
            </div>
        )
    }

    const productQty = cartItems[product._id] || 0

    return (
        <div className="mt-16 px-2 sm:px-0">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
                <span>/</span>
                <Link
                    to={`/products/${product.category.toLowerCase()}`}
                    className="hover:text-primary transition-colors"
                >
                    {product.category}
                </Link>
                <span>/</span>
                <span className="text-primary font-medium">{product.name}</span>
            </div>

            {/* Product Section */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                {/* Image Gallery */}
                <div className="flex gap-3 sm:gap-4 flex-row-reverse lg:flex-row-reverse w-full lg:w-[45%]">
                    {/* Main Image */}
                    <div className="flex-1 border border-gray-200 rounded-2xl bg-white flex items-center justify-center p-6 min-h-[280px] sm:min-h-[360px]">
                        <img
                            src={product.image[selectedImage]}
                            alt={product.name}
                            className="max-h-[260px] sm:max-h-[320px] w-auto object-contain transition-all duration-300"
                        />
                    </div>

                    {/* Thumbnails */}
                    <div className="flex flex-col gap-3">
                        {product.image.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`w-16 h-16 sm:w-20 sm:h-20 border-2 rounded-xl p-2 bg-white flex items-center justify-center transition-all duration-200 cursor-pointer ${selectedImage === index
                                    ? 'border-primary shadow-md'
                                    : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <img
                                    src={img}
                                    alt={`${product.name} ${index + 1}`}
                                    className="w-full h-full object-contain"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="flex-1">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {product.name}
                    </h1>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mt-3">
                        <div className="flex items-center gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <img
                                    key={i}
                                    src={assets.star}
                                    alt="star"
                                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                                />
                            ))}
                        </div>
                        <span className="text-sm text-gray-400">(4)</span>
                    </div>

                    {/* Price */}
                    <div className="mt-5">
                        <p className="text-sm text-gray-400 line-through">
                            MRP: {currency}${product.price}
                        </p>
                        <p className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
                            MRP: {currency}${product.offerPrice}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">(inclusive of all taxes)</p>
                    </div>

                    {/* Description */}
                    <div className="mt-6">
                        <h3 className="text-base font-semibold text-gray-800">About Product</h3>
                        <ul className="mt-2 space-y-1.5">
                            {product.description.map((desc, index) => (
                                <li key={index} className="text-sm text-gray-500 flex items-start gap-2">
                                    <span className="text-primary mt-1 text-xs">•</span>
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                        {/* Add to Cart / Quantity */}
                        {!productQty ? (
                            <button
                                onClick={() => addToCart(product._id)}
                                className="flex-1 py-3 px-6 border-2 border-gray-200 rounded-lg text-gray-700 font-medium text-sm sm:text-base hover:border-primary hover:text-primary transition-all duration-200 cursor-pointer"
                            >
                                Add to Cart
                            </button>
                        ) : (
                            <div className="flex-1 flex items-center justify-center gap-6 py-3 px-6 border-2 border-primary rounded-lg bg-primary/5">
                                <button
                                    onClick={() => removeFromCart(product._id)}
                                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-white text-primary border border-primary/30 hover:bg-primary hover:text-white transition-all duration-200 font-bold text-lg cursor-pointer"
                                >
                                    −
                                </button>
                                <span className="text-lg font-semibold text-gray-800 min-w-[24px] text-center">
                                    {productQty}
                                </span>
                                <button
                                    onClick={() => addToCart(product._id)}
                                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-white text-primary border border-primary/30 hover:bg-primary hover:text-white transition-all duration-200 font-bold text-lg cursor-pointer"
                                >
                                    +
                                </button>
                            </div>
                        )}

                        {/* Buy Now */}
                        <button
                            onClick={() => {
                                if (!productQty) addToCart(product._id)
                                navigate('/cart')
                            }}
                            className="flex-1 py-3 px-6 bg-primary text-white rounded-lg font-medium text-sm sm:text-base hover:bg-primary-dull transition-all duration-200 cursor-pointer"
                        >
                            Buy now
                        </button>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="my-14 border-t border-gray-100"></div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <div className="mb-16">
                    <div className="flex flex-col  mb-8 justify-center items-center w-max mx-auto">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 flex justify-center items-center">
                            Related Products
                        </h2>
                        <div className="w-45 h-1 bg-primary rounded-full mt-1"></div>
                    </div>

                    <div className="w-full lg:w-[70%] mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-6 lg:gap-4">
                        {relatedProducts.map((relProduct, index) => (
                            <ProductCard key={index} product={relProduct} />
                        ))}
                    </div>
                    </div>

                    {/* See More Link */}
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={() => {
                                navigate(`/products/${product.category.toLowerCase()}`)
                                scrollTo(0, 0)
                            }}
                            className="px-8 py-2.5 border-2 border-gray-200 rounded-lg text-gray-600 text-sm font-medium hover:border-primary hover:text-primary transition-all duration-200 cursor-pointer"
                        >
                            See more
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetail
