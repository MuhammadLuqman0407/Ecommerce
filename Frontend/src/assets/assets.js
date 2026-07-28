

import logo from './logo.png';
import main_banner_bg from './main_banner_bg.png';
import main_banner_bg_sm from './main_banner_bg_sm.png';
import organic_vegitable_image from './organic_vegitable_image.png';
import fresh_fruits_image from './fresh_fruits_image.png'
import bottles_image from './bottles_image.png';
import dairy_product_image from '../assets/dairy_product_image.png';
import bakery_image from '../assets/bakery_image.png';
import maggi_image from '../assets/maggi_image.png';
import grain_image from '../assets/grain_image.png'

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