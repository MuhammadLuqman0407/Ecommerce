import {createContext, useEffect} from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useContext } from "react";
import App from "../App";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {

    const currency = import.meta.env?.VITE_CURRENCY || '$';
    const navigate = useNavigate();
    const [user, setUser] = useState(true);
    const [isSeller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState({})

    const [searchQuery, setSearchQuery] = useState("")
    const [userAddress, setUserAddress] = useState(null)
    const [orders, setOrders] = useState([
        {
            _id: "67e2589a8f87e63366786400",
            paymentMethod: "Online",
            amount: 89,
            date: "3/25/2025",
            items: [
                {
                    _id: "veg_spinach",
                    name: "Spinach 500g",
                    category: "Vegetables",
                    qty: 2,
                    status: "Order Placed",
                    date: "3/25/2025",
                    amount: 30,
                    image: "spanish_image"
                }
            ]
        },
        {
            _id: "67e258798f87e633667863f2",
            paymentMethod: "COD",
            amount: 43,
            date: "3/25/2025",
            items: [
                {
                    _id: "veg_potato",
                    name: "Potato 500g",
                    category: "Vegetables",
                    qty: 1,
                    status: "Order Placed",
                    date: "3/25/2025",
                    amount: 20,
                    image: "potato_image"
                },
                {
                    _id: "veg_tomato",
                    name: "Tomato 1 kg",
                    category: "Vegetables",
                    qty: 1,
                    status: "Order Placed",
                    date: "3/25/2025",
                    amount: 35,
                    image: "tomato_image"
                }
            ]
        }
    ]);

    const placeOrder = (paymentMethod = 'COD') => {
        const cartData = Object.entries(cartItems)
            .map(([itemId, qty]) => {
                const product = products.find((p) => p._id === itemId);
                return product && qty > 0 ? { ...product, qty } : null;
            })
            .filter(Boolean);

        if (cartData.length === 0) return false;

        const subtotal = getCartAmount();
        const tax = Math.round((subtotal * 0.02) * 100) / 100;
        const totalAmount = Math.round((subtotal + tax) * 100) / 100;
        const dateStr = new Date().toLocaleDateString('en-US');
        const orderId = '67e' + Math.random().toString(16).substring(2, 10) + '8f87e' + Math.random().toString(16).substring(2, 8);

        const newOrder = {
            _id: orderId,
            paymentMethod: paymentMethod === 'Cash On Delivery' ? 'COD' : 'Online',
            amount: totalAmount,
            date: dateStr,
            items: cartData.map(item => ({
                _id: item._id,
                name: item.name,
                category: item.category,
                qty: item.qty,
                status: "Order Placed",
                date: dateStr,
                amount: item.offerPrice * item.qty,
                image: Array.isArray(item.image) ? item.image[0] : item.image
            }))
        };

        setOrders(prev => [newOrder, ...prev]);
        setCartItems({});
        return true;
    };

    const fetchProducts = async ()=> {
        setProducts(dummyProducts);
    }

    // add products to cart
    const addToCart = (itemId) => {
         let cartData = structuredClone(cartItems);

         if(cartData[itemId]){
            cartData[itemId] += 1;
         }
         else{
            cartData[itemId] = 1;
         }
         setCartItems(cartData);
         toast.success("Added to Cart");
    }

    const updateCartItem = (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        if (quantity <= 0) {
            delete cartData[itemId];
        } else {
            cartData[itemId] = quantity;
        }
        setCartItems(cartData);
        toast.success("Cart Updated");
    }

    const removeFromCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            cartData[itemId] -= 1;
            if(cartData[itemId] === 0){
                delete cartData[itemId];
            }
        }
        toast.success("Removed from Cart")
        setCartItems(cartData)
    }
    // get cart items count
    const getCartCount = () => {
        let totalCount = 0;
        for (const item in cartItems){
            totalCount += cartItems[item];
        }
        return totalCount;
    }

    // get cart total amount
    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product) => product._id === items);
            if(cartItems[items] > 0){
                totalAmount += itemInfo.offerPrice * cartItems[items];
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    }

    useEffect (() => {
        fetchProducts()
    }, [])

    const value = {navigate, user, setUser, setIsSeller, isSeller,
        showUserLogin, setShowUserLogin, products, currency, 
        addToCart, updateCartItem, removeFromCart, cartItems,
        searchQuery, setSearchQuery, getCartAmount, getCartCount,
        userAddress, setUserAddress, orders, setOrders, placeOrder
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
export const useAppContext = () => {
    return useContext(AppContext);
}