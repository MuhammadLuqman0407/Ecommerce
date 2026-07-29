

import logo from './logo.png';
import main_banner_bg from './main_banner_bg.png';
import main_banner_bg_sm from './main_banner_bg_sm.png';
import organic_vegitable_image from './organic_vegitable_image.png';
import fresh_fruits_image from './fresh_fruits_image.png'
import bottles_image from './bottles_image.png';
import dairy_product_image from '../assets/dairy_product_image.png';
import bakery_image from '../assets/bakery_image.png';
import maggi_image from '../assets/maggi_image.png';
import grain_image from '../assets/grain_image.png';
import tomato_image from '../assets/Tomato_image.png';
import potato_image from '../assets/Potato_image.png';
import onion_image from '../assets/Onion_image.png';
import carrot_image from '../assets/carrot_image.png';
import spanish_image from '../assets/Spanish_image.png';
import cart from '../assets/Cart.png';
import star from '../assets/star.svg';
import bottom_banner_image from '../assets/bottom_banner_image.png';
import bottom_banner_image_sm from '../assets/bottom_banner_image_sm.png';
import coin_icon from '../assets/coin_icon.svg';
import leaf_icon from '../assets/leaf_icon.svg';
import delivery_truck from '../assets/delivery_truck_icon.svg';


export const assets = {
    logo,
    main_banner_bg,
    main_banner_bg_sm,
    organic_vegitable_image,
    fresh_fruits_image,
    bottles_image,
    dairy_product_image,
    bakery_image,
    maggi_image,
    grain_image,
    tomato_image,
    potato_image,
    onion_image,
    carrot_image,
    spanish_image,
    cart,
    star,
    bottom_banner_image,
    bottom_banner_image_sm,
    leaf_icon,
    coin_icon,
    delivery_truck,

}


export const categories = [
    {
        text: "Organic veggies",
        path: "Vegetables",
        image: organic_vegitable_image,
        bgColor: "#FEF6DA",
    },
    {
        text: "Fresh Fruits",
        path: "Fruits",
        image: fresh_fruits_image,
        bgColor: "#FEE0E0",  
    },
    {
        text: "Cold Drinks",
        path: "Drinks",
        image: bottles_image,
        bgColor: "#f7ffc4",
    },
    {
        text: "Dairy Products",
        path: "Dairy",
        image: dairy_product_image,
        bgColor: "#a4ebd9",
    },
    {
        text: "Bakkery & Breads",
        path: "Bakkery",
        image: bakery_image,
        bgColor: "#f0dbce",
    },
    {
        text: "Instant Food",
        path: "Instant",
        image: maggi_image,
        bgColor: "#decef0",
    },
    {
        text: "Grain & Cereals",
        path: "Grain",
        image: grain_image,
        bgColor: "#f7bcf3",
    }
]

export const dummyProducts = [
  // Vegetables

  {
    _id: "veg001",
    name: "Potato 500g",
    category: "Vegetables",
    price: 40,
    offerPrice: 35,
    image: [potato_image],
    description: [
      "Fresh and organic",
      "Rich in carbohydrates",
      "Ideal for curries and fries"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  {
    _id: "veg002",
    name: "Tomato 1kg",
    category: "Vegetables",
    price: 30,
    offerPrice: 28,
    image: [tomato_image],
    description: [
      "Farm fresh tomatoes",
      "Rich in Vitamin C",
      "Perfect for salads and cooking"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  {
    _id: "veg003",
    name: "Carrot 500g",
    category: "Vegetables",
    price: 50,
    offerPrice: 44,
    image: [carrot_image],
    description: [
      "Fresh organic carrots",
      "High in Vitamin A",
      "Sweet and crunchy"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  {
    _id: "veg004",
    name: "Spinach 500g",
    category: "Vegetables",
    price: 25,
    offerPrice: 20,
    image: [spanish_image],
    description: [
      "Fresh green leaves",
      "Rich in iron and calcium",
      "Ideal for healthy meals"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  {
    _id: "veg005",
    name: "Onion 500g",
    category: "Vegetables",
    price: 35,
    offerPrice: 30,
    image: [onion_image],
    description: [
      "Fresh red onions",
      "Strong natural flavor",
      "Essential for daily cooking"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
];


export const features = [
  {
    icon: delivery_truck,
    title: "Fastest Delivery",
    description: "Groceries delivered in under 30 minutes.",
  },
  {
    icon: leaf_icon,
    title: "Freshness Guaranteed",
    description: "Fresh produce straight from the source.",
  },
  {
    icon: coin_icon,
    title: "Affordablle Prices",
    description: "Quality groceries at unbeatable prices.",
  }
]