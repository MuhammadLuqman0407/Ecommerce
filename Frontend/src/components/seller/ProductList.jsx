import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';
import toast from 'react-hot-toast';

const ProductList = () => {
    const { products, toggleStock, currency } = useAppContext();

    const getProductImage = (img) => {
        if (!img) return assets.logo;
        if (Array.isArray(img)) {
            const first = img[0];
            return assets[first] || first;
        }
        return assets[img] || img;
    };

    return (
        <div className="max-w-4xl">
            <h1 className="text-xl font-bold text-gray-700 mb-6">All Product</h1>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 items-center px-6 py-3.5 border-b border-gray-200 bg-gray-50/50 text-sm font-bold text-gray-700">
                    <div className="col-span-5">Product</div>
                    <div className="col-span-3">Category</div>
                    <div className="col-span-2">Selling Price</div>
                    <div className="col-span-2 text-center">In Stock</div>
                </div>

                {/* Table Body Rows */}
                <div className="divide-y divide-gray-100">
                    {products.map((product) => (
                        <div key={product._id} className="grid grid-cols-12 gap-4 items-center px-6 py-3.5 text-sm">
                            
                            {/* Product Image & Name */}
                            <div className="col-span-5 flex items-center gap-4">
                                <div className="w-14 h-14 bg-white border border-gray-200 rounded-lg p-1.5 flex items-center justify-center flex-shrink-0">
                                    <img
                                        src={getProductImage(product.image)}
                                        alt={product.name}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                                <span className="font-semibold text-gray-800 text-sm">{product.name}</span>
                            </div>

                            {/* Category */}
                            <div className="col-span-3 text-gray-500 font-medium">
                                {product.category}
                            </div>

                            {/* Selling Price */}
                            <div className="col-span-2 font-semibold text-gray-700">
                                {currency}{product.offerPrice ?? product.price}
                            </div>

                            {/* In Stock Toggle Switch */}
                            <div className="col-span-2 flex justify-center">
                                <button
                                    type="button"
                                    onClick={() => toggleStock(product._id)}
                                    title={product.inStock !== false ? 'Click to disable stock' : 'Click to enable stock'}
                                    className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                                        product.inStock !== false ? 'bg-primary' : 'bg-gray-300'
                                    }`}
                                >
                                    <div
                                        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                                            product.inStock !== false ? 'translate-x-6' : 'translate-x-0'
                                        }`}
                                    />
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ProductList;
