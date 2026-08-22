

import logo from './logo.png';
import main_banner_bg from './main_banner_bg.png';
import main_banner_bg_sm from './main_banner_bg_sm.png';
import organic_vegitable_image from './organic_vegitable_image.png';
import fresh_fruits_image from './fresh_fruits_image.png'
import bottles_image from './bottles_image.png';
import dairy_product_image from './dairy_product_image.png';
import bakery_image from './bakery_image.png';
import maggi_image from './maggi_image.png';
import grain_image from './grain_image.png';
import tomato_image from './Tomato_image.png';
import potato_image from './Potato_image.png';
import onion_image from './Onion_image.png';
import carrot_image from './Carrot_image.png';
import spanish_image from './Spanish_image.png';
import cart from './Cart.png';
import star from './star.svg';
import bottom_banner_image from './bottom_banner_image.png';
import bottom_banner_image_sm from './bottom_banner_image_sm.png';
import coin_icon from './coin_icon.svg';
import leaf_icon from './leaf_icon.svg';
import delivery_truck from './delivery_truck_icon.svg';
import banana from './banana.png';
import barley from './barley.png';
import brown_rice from './brown_rice.png';
import butter_croissant from './butter_croissant.png';
import cheeze from './cheeze.png';
import coca_cola from './coca_cola.png';
import eggs from './eggs.png';
import fanta from './fanta.png';
import knoor_cup_soup from './knoor_cup_soup.png';
import grapes from './grapes.png';
import mango from './Mangos.png';
import orange from './orange.png';
import paneer from './paneer.png';
import sprite from './sprite.png';
import wheet_floor from './Wheet_floor.png';
import apples from './apples.png';
import sevenup from './7up.png';
import cocacola from './coca_cola.png';
import string from './string.png';
import panner from './paneer.png';
import egg from './eggs.png';
import milk from './amul_milk.png';
import cheese from './cheeze.png';
import organic from './organic_quinoa.png';
import basmati_rice from './basmati_rice.png';
import maggi from './maggi_image.png';
import bread from './brown_bread.png'; 

import vegetablesData from './data/vegetables.json';
import fruitsData from './data/fruits.json';
import drinksData from './data/drinks.json';
import dairyData from './data/dairy.json';
import grainsData from './data/grains.json';
import bakeryData from './data/bakery.json';
import instantData from './data/instant.json';


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
        path: "Bakery",
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
        path: "Grains",
        image: grain_image,
        bgColor: "#f7bcf3",
    }
]

const mapImages = (productsList) => {
    return productsList.map(product => ({
        ...product,
        image: product.image.map(imgName => assets[imgName] || imgName)
    }));
};

export const vegetablesProducts = mapImages(vegetablesData);
export const fruitsProducts = mapImages(fruitsData);
export const drinksProducts = mapImages(drinksData);
export const dairyProducts = mapImages(dairyData);
export const grainsProducts = mapImages(grainsData);
export const bakeryProducts = mapImages(bakeryData);
export const instantProducts = mapImages(instantData);

export const dummyProducts = [
    ...vegetablesProducts,
    ...fruitsProducts,
    ...drinksProducts,
    ...dairyProducts,
    ...grainsProducts,
    ...bakeryProducts,
    ...instantProducts
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