import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const { products, setProducts, currency } = useAppContext();

    const [imagePreviews, setImagePreviews] = useState([null, null, null, null]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(0);
    const [offerPrice, setOfferPrice] = useState(0);

    const handleImageChange = (index, event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            const newPreviews = [...imagePreviews];
            newPreviews[index] = imageUrl;
            setImagePreviews(newPreviews);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !description || !category || !price) {
            toast.error("Please fill in product name, description, category, and price!");
            return;
        }

        // Selected images or fallback image
        const selectedImages = imagePreviews.filter(Boolean);
        const finalImage = selectedImages.length > 0 ? selectedImages : ["potato_image"];

        const newProduct = {
            _id: 'prod_' + Date.now(),
            name,
            category,
            price: Number(price),
            offerPrice: Number(offerPrice) || Number(price),
            image: finalImage,
            description: description.split('\n').filter(Boolean),
            inStock: true,
            createdAt: new Date().toISOString()
        };

        setProducts([newProduct, ...products]);
        toast.success("Product added successfully!");

        // Reset form
        setName('');
        setDescription('');
        setCategory('');
        setPrice(0);
        setOfferPrice(0);
        setImagePreviews([null, null, null, null]);
    };

    return (
        <div className="max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Product Image Section */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">Product Image</label>
                    <div className="flex flex-wrap gap-4">
                        {[0, 1, 2, 3].map((index) => (
                            <label
                                key={index}
                                className="w-24 h-24 bg-gray-50 border border-gray-200 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition overflow-hidden relative"
                            >
                                {imagePreviews[index] ? (
                                    <img
                                        src={imagePreviews[index]}
                                        alt={`Preview ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <>
                                        <svg className="w-6 h-6 text-gray-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>
                                        <span className="text-xs text-gray-400 font-medium">Upload</span>
                                    </>
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange(index, e)}
                                    className="hidden"
                                />
                            </label>
                        ))}
                    </div>
                </div>

                {/* Product Name */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Product Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Type here"
                        required
                        className="w-full border border-gray-200 rounded-md px-3.5 py-2.5 text-sm outline-none focus:border-primary placeholder-gray-400"
                    />
                </div>

                {/* Product Description */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Product Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Type here"
                        rows={4}
                        required
                        className="w-full border border-gray-200 rounded-md px-3.5 py-2.5 text-sm outline-none focus:border-primary placeholder-gray-400"
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                        className="w-full border border-gray-200 rounded-md px-3.5 py-2.5 text-sm outline-none focus:border-primary bg-white text-gray-700 cursor-pointer"
                    >
                        <option value="">Select Category</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Fruits">Fruits</option>
                        <option value="Drinks">Drinks</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Grains">Grains</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Instant">Instant</option>
                    </select>
                </div>

                {/* Product Price & Offer Price */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Product Price</label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            min="0"
                            required
                            className="w-full border border-gray-200 rounded-md px-3.5 py-2.5 text-sm outline-none focus:border-primary"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Offer Price</label>
                        <input
                            type="number"
                            value={offerPrice}
                            onChange={(e) => setOfferPrice(e.target.value)}
                            min="0"
                            className="w-full border border-gray-200 rounded-md px-3.5 py-2.5 text-sm outline-none focus:border-primary"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                    <button
                        type="submit"
                        className="bg-primary hover:bg-primary-dull text-white px-10 py-2.5 rounded-lg font-semibold text-sm transition shadow-sm cursor-pointer"
                    >
                        ADD
                    </button>
                </div>

            </form>
        </div>
    );
};

export default AddProduct;
