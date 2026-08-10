

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
import banana from '../assets/banana.png';
import barley from '../assets/barley.png';
import brown_rice from '../assets/brown_rice.png';
import butter_croissant from '../assets/butter_croissant.png';
import cheeze from '../assets/cheeze.png';
import coca_cola from '../assets/coca_cola.png';
import eggs from '../assets/eggs.png';
import fanta from '../assets/fanta.png';
import knoor_cup_soup from '../assets/knoor_cup_soup.png';
import grapes from '../assets/grapes.png';
import mango from '../assets/Mangos.png';
import orange from '../assets/orange.png';
import paneer from '../assets/paneer.png';
import sprite from '../assets/sprite.png';
import wheet_floor from '../assets/Wheet_floor.png';
import apples from '../assets/apples.png';
import sevenup from '../assets/7up.png';
import cocacola from '../assets/coca_cola.png';
import string from '../assets/string.png';
import panner from '../assets/paneer.png';
import egg from '../assets/eggs.png';
import milk from '../assets/amul_milk.png';
import cheese from '../assets/cheeze.png';
import organic from '../assets/organic_quinoa.png';
import basmati_rice from '../assets/basmati_rice.png';
import maggi from '../assets/maggi_image.png';
import bread from '../assets/brown_bread.png'; 


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
    banana,
    barley,
    brown_rice,
    butter_croissant,
    cheeze,
    coca_cola,
    eggs,
    fanta,
    knoor_cup_soup,
    grapes,
    mango,
    orange,
    paneer,
    sprite,
    wheet_floor,
    apples,
    sevenup,
    cocacola,
    string,
    panner,
    egg,
    milk,
    cheese,
    organic,
    basmati_rice,
    maggi,
    bread,
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
  {
    _id: "fru001",
    name: "Apple 1kg",
    category: "Fruits",
    price: 50,
    offerPrice: 40,
    image: [apples],
    description: [
      "Fresh red apples",
      "Strong natural flavor",
      "Essential for daily cooking"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
   {
    _id: "fru002",
    name: "Mangoes 1kg",
    category: "Fruits",
    price: 50,
    offerPrice: 40,
    image: [mango],
    description: [
      "Fresh red apples",
      "Strong natural flavor",
      "Essential for daily cooking"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "fru003",
    name: "Banana ",
    category: "Fruits",
    price: 50,
    offerPrice: 40,
    image: [banana],
    description: [
      "Fresh red apples",
      "Strong natural flavor",
      "Essential for daily cooking"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "fru004",
    name: "Oranges ",
    category: "Fruits",
    price: 50,
    offerPrice: 40,
    image: [orange],
    description: [
      "Fresh red apples",
      "Strong natural flavor",
      "Essential for daily cooking"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "fru005",
    name: "Grapes 1kg ",
    category: "Fruits",
    price: 50,
    offerPrice: 40,
    image: [grapes],
    description: [
      "Fresh red apples",
      "Strong natural flavor",
      "Essential for daily cooking"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "drk001",
    name: "7 Up 1.5L ",
    category: "Drinks",
    price: 3,
    offerPrice: 2,
    image: [sevenup],
    description: [
      "Fresh red apples",
      "Strong natural flavor",
      "Essential for daily cooking"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "drk002",
    name: "Sprite 1.5L ",
    category: "Drinks",
    price: 3,
    offerPrice: 2,
    image: [sprite],
    description: [
      "Fresh red apples",
      "Strong natural flavor",
      "Essential for daily cooking"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
   {
    _id: "drk003",
    name: "Coca-Cola 1.5L ",
    category: "Drinks",
    price: 3,
    offerPrice: 2,
    image: [cocacola],
    description: [
      "Fresh red apples",
      "Strong natural flavor",
      "Essential for daily cooking"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "drk004",
    name: "fanta 1.5L ",
    category: "Drinks",
    price: 3,
    offerPrice: 2,
    image: [fanta],
    description: [
      "Fresh red apples",
      "Strong natural flavor",
      "Essential for daily cooking"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
   {
    _id: "drk005",
    name: "String 1L ",
    category: "Drinks",
    price: 5,
    offerPrice: 3.5,
    image: [string],
    description: [
      "Fresh red apples",
      "Strong natural flavor",
      "Essential for daily cooking"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
   {
    _id: "dry001",
    name: "Paneer 200g ",
    category: "Dairy",
    price: 35,
    offerPrice: 30,
    image: [panner],
    description: [
      "Fresh red apples",
      "Strong natural flavor",
      "Essential for daily cooking"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "dry002",
    name: "Eggs 12pcs ",
    category: "Dairy",
    price: 35,
    offerPrice: 30,
    image: [eggs],
    description: [
      "Fresh red apples",
      "Strong natural flavor",
      "Essential for daily cooking"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "dry003",
    name: "Amul Milk 1L ",
    category: "Dairy",
    price: 35,
    offerPrice: 30,
    image: [milk],
    description: [
      "Fresh red apples",
      "Strong natural flavor",
      "Essential for daily cooking"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "dry004",
    name: "Cheese 200g ",
    category: "Dairy",
    price: 35,
    offerPrice: 30,
    image: [cheese],
    description: [
      "Fresh red apples",
      "Strong natural flavor",
      "Essential for daily cooking"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
   {
    _id: "grn001",
    name: "Organic Quinoa 500g ",
    category: "Grains",
    price: 145,
    offerPrice: 135,
    image: [organic],
    description: [
      "Fresh red apples",
      "Strong natural flavor",
      "Essential for daily cooking"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
   {
    _id: "grn002",
    name: "Wheat Flour 1kg ",
    category: "Grains",
    price: 230,
    offerPrice: 200,
    image: [wheet_floor],
    description: [
      "Fresh red apples",
      "Strong natural flavor",
      "Essential for daily cooking"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
   {
    _id: "grn003",
    name: "Brown Rice 1kg ",
    category: "Grains",
    price: 110,
    offerPrice: 100,
    image: [brown_rice],
    description: [
      "Fresh red apples",
      "Strong natural flavor",
      "Essential for daily cooking"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "grn004",
    name: "Bismati Rice 1kg ",
    category: "Grains",
    price: 250,
    offerPrice: 220,
    image: [basmati_rice],
    description: [
      "Fresh red apples",
      "Strong natural flavor",
      "Essential for daily cooking"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "bky001",
    name: "Butter Croissant 100g ",
    category: "Bakery",
    price: 100,
    offerPrice: 90,
    image: [butter_croissant],
    description: [
      "Fresh red apples",
      "Strong natural flavor",
      "Essential for daily cooking"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
   {
    _id: "bky002",
    name: "Brown Bread ",
    category: "Bakery",
    price: 100,
    offerPrice: 90,
    image: [bread],
    description: [
      "Fresh red apples",
      "Strong natural flavor",
      "Essential for daily cooking"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
   {
    _id: "ist001",
    name: "Knoor Cup Soup 50g ",
    category: "Instant",
    price: 100,
    offerPrice: 90,
    image: [knoor_cup_soup],
    description: [
      "Fresh red apples",
      "Strong natural flavor",
      "Essential for daily cooking"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
   {
    _id: "ist001",
    name: "Maggi Noodles 70g ",
    category: "Instant",
    price: 30,
    offerPrice: 25,
    image: [maggi],
    description: [
      "Fresh red apples",
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