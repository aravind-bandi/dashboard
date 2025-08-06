import React, { useState, useRef, useEffect } from 'react';
import { 
  FiShoppingCart, 
  FiHeart, 
  FiChevronRight, 
  FiStar, 
  FiFilter,
  FiChevronDown,
  FiChevronUp,
  FiX,
  FiCheck
} from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import './MobilesPage.css';
import Footer from '../footer/Footer';

const MobilesPage = () => {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortOption, setSortOption] = useState('featured');

  // Mobile data with 50 phones (5 models for each of 10 brands)
  const mobiles = [
    // Apple (5 models)
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      brand: 'Apple',
      price: '1199.00',
      discount: '1099.00',
      image: 'https://m.media-amazon.com/images/I/81SigpJN1KL._SL1500_.jpg',
      specs: { ram: 8, storage: 256, camera: '48MP+12MP+12MP', display: '6.7-inch', battery: '4422mAh', processor: 'A17 Pro' },
      rating: '4.8',
      reviews: 4285,
      colors: ['Black Titanium', 'White Titanium', 'Blue Titanium'],
      offers: ['No Cost EMI', 'Exchange Offer'],
      inStock: true,
      description: 'Apple iPhone 15 Pro Max with A17 Pro chip, 48MP triple camera, 6.7-inch display, and premium titanium design.'
    },
    {
      id: 2,
      name: 'iPhone 15 Pro',
      brand: 'Apple',
      price: '999.00',
      discount: '949.00',
      image: 'https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '48MP+12MP+12MP', display: '6.1-inch', battery: '3274mAh', processor: 'A17 Pro' },
      rating: '4.7',
      reviews: 3852,
      colors: ['Black Titanium', 'White Titanium', 'Natural Titanium'],
      offers: ['Bank Offer', 'Exchange Offer'],
      inStock: true,
      description: 'Compact and powerful iPhone 15 Pro with A17 Pro chip, 48MP camera, and 6.1-inch Super Retina display.'
    },
    {
      id: 3,
      name: 'iPhone 15 Plus',
      brand: 'Apple',
      price: '899.00',
      discount: '849.00',
      image: 'https://inspireonline.in/cdn/shop/files/iPhone_15_Plus_Black_PDP_Image_Position-1__en-IN_202af6ec-8d5d-4fcf-932c-60507087d91a.jpg?v=1694607061&width=1445',
      specs: { ram: 6, storage: 128, camera: '48MP+12MP', display: '6.7-inch', battery: '4383mAh', processor: 'A16 Bionic' },
      rating: '4.6',
      reviews: 3210,
      colors: ['Black', 'Blue', 'Green', 'Pink'],
      offers: ['Instant Discount', 'No Cost EMI'],
      inStock: true,
      description: 'iPhone 15 Plus with large 6.7-inch display, A16 Bionic chip, and dual 48MP+12MP camera system.'
    },
    {
      id: 4,
      name: 'iPhone 15 Standard',
      brand: 'Apple',
      price: '799.00',
      discount: '749.00',
      image: 'https://m.media-amazon.com/images/I/81-fFXQdPTL._SL1500_.jpg',
      specs: { ram: 6, storage: 128, camera: '48MP+12MP', display: '6.1-inch', battery: '3349mAh', processor: 'A16 Bionic' },
      rating: '4.5',
      reviews: 2987,
      colors: ['Black', 'Blue', 'Green', 'Yellow', 'Pink'],
      offers: ['Free Case', 'Exchange Bonus'],
      inStock: true,
      description: 'Standard iPhone 15 with 6.1-inch display, A16 Bionic, and advanced dual camera setup.'
    },
    {
      id: 5,
      name: 'iPhone 14',
      brand: 'Apple',
      price: '699.00',
      discount: '649.00',
      image: 'https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg',
      specs: { ram: 6, storage: 128, camera: '12MP+12MP', display: '6.1-inch', battery: '3279mAh', processor: 'A15 Bionic' },
      rating: '4.4',
      reviews: 2456,
      colors: ['Midnight', 'Blue', 'Purple', 'Starlight'],
      offers: ['Bank Offer', 'No Cost EMI'],
      inStock: true,
      description: 'iPhone 14 with 6.1-inch display, A15 Bionic chip, and reliable dual 12MP camera.'
    },

    // Samsung (5 models)
    {
      id: 6,
      name: 'Galaxy S23 Ultra',
      brand: 'Samsung',
      price: '1199.00',
      discount: '1099.00',
      image: 'https://www.designinfo.in/wp-content/uploads/2023/10/Samsung-Galaxy-S23-Ultra-5G256GB-Green-1.webp',
      specs: { ram: 12, storage: 256, camera: '200MP+12MP+10MP+10MP', display: '6.8-inch', battery: '5000mAh', processor: 'Snapdragon 8 Gen 2' },
      rating: '4.8',
      reviews: 4123,
      colors: ['Phantom Black', 'Cream', 'Green', 'Lavender'],
      offers: ['Instant Discount', 'No Cost EMI'],
      inStock: true
    },
    {
      id: 7,
      name: 'Galaxy S23+',
      brand: 'Samsung',
      price: '999.00',
      discount: '899.00',
      image: 'https://m.media-amazon.com/images/I/61mSOsisDAL._UF1000,1000_QL80_.jpg',
      specs: { ram: 8, storage: 256, camera: '50MP+12MP+10MP', display: '6.6-inch', battery: '4700mAh', processor: 'Snapdragon 8 Gen 2' },
      rating: '4.7',
      reviews: 3210,
      colors: ['Phantom Black', 'Cream', 'Green', 'Lavender'],
      offers: ['Free Buds2 Pro', 'Exchange Offer'],
      inStock: true
    },
    {
      id: 8,
      name: 'Galaxy Z Fold 5',
      brand: 'Samsung',
      price: '1799.00',
      discount: '1699.00',
      image: 'https://m.media-amazon.com/images/I/61YVqHdFRxL._SL1500_.jpg',
      specs: { ram: 12, storage: 512, camera: '50MP+12MP+10MP', display: '7.6-inch', battery: '4400mAh', processor: 'Snapdragon 8 Gen 2' },
      rating: '4.6',
      reviews: 2876,
      colors: ['Icy Blue', 'Phantom Black', 'Cream'],
      offers: ['Free Case', 'Exchange Bonus'],
      inStock: true
    },
    {
      id: 9,
      name: 'Galaxy Z Flip 5',
      brand: 'Samsung',
      price: '999.00',
      discount: '899.00',
      image: 'https://m.media-amazon.com/images/I/71KCwNV6MuL._SL1500_.jpg',
      specs: { ram: 8, storage: 256, camera: '12MP+12MP', display: '6.7-inch', battery: '3700mAh', processor: 'Snapdragon 8 Gen 2' },
      rating: '4.5',
      reviews: 2543,
      colors: ['Mint', 'Graphite', 'Cream', 'Lavender'],
      offers: ['No Cost EMI', 'Bank Discount'],
      inStock: true
    },
    {
      id: 10,
      name: 'Galaxy A54 5G',
      brand: 'Samsung',
      price: '449.00',
      discount: '399.00',
      image: 'https://images-cdn.ubuy.co.in/65f6847799a71b026c6cdd10-samsung-galaxy-a54-5g-android.jpg',
      specs: { ram: 8, storage: 128, camera: '50MP+12MP+5MP', display: '6.4-inch', battery: '5000mAh', processor: 'Exynos 1380' },
      rating: '4.3',
      reviews: 1987,
      colors: ['Awesome Black', 'Awesome White', 'Awesome Violet'],
      offers: ['Bank Offer', 'Exchange Offer'],
      inStock: true
    },

    // Google (5 models)
    {
      id: 11,
      name: 'Pixel 8 Pro',
      brand: 'Google',
      price: '999.00',
      discount: '899.00',
      image: 'https://in.static.webuy.com/product_images/Phones/Phones%20Android/SGOOPIX8P256GBUNLB_l.jpg',
      specs: { ram: 12, storage: 128, camera: '50MP+48MP+48MP', display: '6.7-inch', battery: '5050mAh', processor: 'Tensor G3' },
      rating: '4.7',
      reviews: 3210,
      colors: ['Obsidian', 'Porcelain', 'Bay'],
      offers: ['Free Pixel Buds', 'Google One Offer'],
      inStock: true
    },
    {
      id: 12,
      name: 'Pixel 8',
      brand: 'Google',
      price: '699.00',
      discount: '649.00',
      image: 'https://kirtisales.in/wp-content/uploads/2024/04/GOOGLE-PIXEL-8.jpg',
      specs: { ram: 8, storage: 128, camera: '50MP+12MP', display: '6.2-inch', battery: '4575mAh', processor: 'Tensor G3' },
      rating: '4.6',
      reviews: 2876,
      colors: ['Obsidian', 'Hazel', 'Rose'],
      offers: ['No Cost EMI', 'Bank Discount'],
      inStock: true
    },
    {
      id: 13,
      name: 'Pixel 7a',
      brand: 'Google',
      price: '499.00',
      discount: '449.00',
      image: 'https://images-cdn.ubuy.co.in/64cb065291eb2804bf200934-google-pixel-7a-unlocked-android-cell.jpg',
      specs: { ram: 8, storage: 128, camera: '64MP+13MP', display: '6.1-inch', battery: '4385mAh', processor: 'Tensor G2' },
      rating: '4.5',
      reviews: 2456,
      colors: ['Charcoal', 'Sea', 'Snow', 'Coral'],
      offers: ['Instant Discount', 'Exchange Offer'],
      inStock: true
    },
    {
      id: 14,
      name: 'Pixel 7 Pro',
      brand: 'Google',
      price: '899.00',
      discount: '799.00',
      image: 'https://m.media-amazon.com/images/I/51f4A6Tr8zL.jpg',
      specs: { ram: 12, storage: 128, camera: '50MP+48MP+12MP', display: '6.7-inch', battery: '5000mAh', processor: 'Tensor G2' },
      rating: '4.4',
      reviews: 2134,
      colors: ['Obsidian', 'Hazel', 'Snow'],
      offers: ['Free Case', 'Google One Offer'],
      inStock: true
    },
    {
      id: 15,
      name: 'Pixel 7',
      brand: 'Google',
      price: '599.00',
      discount: '549.00',
      image: 'https://m.media-amazon.com/images/I/71WDKqGrH2L._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '50MP+12MP', display: '6.3-inch', battery: '4355mAh', processor: 'Tensor G2' },
      rating: '4.3',
      reviews: 1876,
      colors: ['Lemongrass', 'Obsidian', 'Snow'],
      offers: ['Bank Offer', 'No Cost EMI'],
      inStock: true
    },

    // OnePlus (5 models)
    {
      id: 16,
      name: 'OnePlus 11 5G',
      brand: 'OnePlus',
      price: '699.00',
      discount: '649.00',
      image: 'https://m.media-amazon.com/images/I/61mIUCd-3GL._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '50MP+48MP+32MP', display: '6.7-inch', battery: '5000mAh', processor: 'Snapdragon 8 Gen 2' },
      rating: '4.6',
      reviews: 2987,
      colors: ['Titan Black', 'Eternal Green'],
      offers: ['Instant Discount', 'Exchange Offer'],
      inStock: true
    },
    {
      id: 17,
      name: 'OnePlus 11R 5G',
      brand: 'OnePlus',
      price: '499.00',
      discount: '449.00',
      image: 'https://m.media-amazon.com/images/I/61Iw7XcDwxL._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '50MP+8MP+2MP', display: '6.74-inch', battery: '5000mAh', processor: 'Snapdragon 8+ Gen 1' },
      rating: '4.4',
      reviews: 2310,
      colors: ['Sonic Black', 'Galactic Silver'],
      offers: ['Bank Offer', 'No Cost EMI'],
      inStock: true
    },
    {
      id: 18,
      name: 'OnePlus Nord 3 5G',
      brand: 'OnePlus',
      price: '399.00',
      discount: '349.00',
      image: 'https://m.media-amazon.com/images/I/71V--WZVUIL._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '50MP+8MP+2MP', display: '6.74-inch', battery: '5000mAh', processor: 'Dimensity 9000' },
      rating: '4.3',
      reviews: 1876,
      colors: ['Misty Green', 'Tempest Gray'],
      offers: ['Exchange Offer', 'Bank Discount'],
      inStock: true
    },
    {
      id: 19,
      name: 'OnePlus Nord CE 3 Lite',
      brand: 'OnePlus',
      price: '349.00',
      discount: '299.00',
      image: 'https://m.media-amazon.com/images/I/71V--WZVUIL._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '50MP+8MP+2MP', display: '6.7-inch', battery: '5000mAh', processor: 'Snapdragon 782G' },
      rating: '4.2',
      reviews: 1543,
      colors: ['Aqua Surge', 'Gray Shimmer'],
      offers: ['No Cost EMI', 'Instant Discount'],
      inStock: true
    },
    {
      id: 20,
      name: 'OnePlus 10 Pro 5G',
      brand: 'OnePlus',
      price: '599.00',
      discount: '549.00',
      image: 'https://m.media-amazon.com/images/I/61mIUCd-3GL._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '48MP+50MP+8MP', display: '6.7-inch', battery: '5000mAh', processor: 'Snapdragon 8 Gen 1' },
      rating: '4.1',
      reviews: 1321,
      colors: ['Volcanic Black', 'Emerald Forest'],
      offers: ['Free Buds Z2', 'Exchange Offer'],
      inStock: true
    },

    // Xiaomi (5 models)
    {
      id: 21,
      name: 'Xiaomi 13 Pro',
      brand: 'Xiaomi',
      price: '999.00',
      discount: '899.00',
      image: 'https://m.media-amazon.com/images/I/61mIUCd-3GL._SL1500_.jpg',
      specs: { ram: 12, storage: 256, camera: '50MP+50MP+50MP', display: '6.73-inch', battery: '4820mAh', processor: 'Snapdragon 8 Gen 2' },
      rating: '4.4',
      reviews: 2134,
      colors: ['Ceramic Black', 'Ceramic White'],
      offers: ['Instant Discount', 'Exchange Offer'],
      inStock: true
    },
    {
      id: 22,
      name: 'Xiaomi 13',
      brand: 'Xiaomi',
      price: '799.00',
      discount: '749.00',
      image: 'https://m.media-amazon.com/images/I/61Iw7XcDwxL._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '50MP+12MP+10MP', display: '6.36-inch', battery: '4500mAh', processor: 'Snapdragon 8 Gen 2' },
      rating: '4.3',
      reviews: 1876,
      colors: ['Black', 'White', 'Green'],
      offers: ['Bank Offer', 'No Cost EMI'],
      inStock: true
    },
    {
      id: 23,
      name: 'Xiaomi 12 Pro',
      brand: 'Xiaomi',
      price: '699.00',
      discount: '649.00',
      image: 'https://m.media-amazon.com/images/I/61mIUCd-3GL._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '50MP+50MP+50MP', display: '6.73-inch', battery: '4600mAh', processor: 'Snapdragon 8 Gen 1' },
      rating: '4.2',
      reviews: 1543,
      colors: ['Gray', 'Purple', 'Blue'],
      offers: ['Exchange Offer', 'Bank Discount'],
      inStock: true
    },
    {
      id: 24,
      name: 'Xiaomi 12',
      brand: 'Xiaomi',
      price: '599.00',
      discount: '549.00',
      image: 'https://m.media-amazon.com/images/I/71V--WZVUIL._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '50MP+13MP+5MP', display: '6.28-inch', battery: '4500mAh', processor: 'Snapdragon 8 Gen 1' },
      rating: '4.1',
      reviews: 1321,
      colors: ['Black', 'Blue', 'Green'],
      offers: ['No Cost EMI', 'Instant Discount'],
      inStock: true
    },
    {
      id: 25,
      name: 'Xiaomi 11i HyperCharge',
      brand: 'Xiaomi',
      price: '399.00',
      discount: '349.00',
      image: 'https://m.media-amazon.com/images/I/61mIUCd-3GL._SL1500_.jpg',
      specs: { ram: 6, storage: 128, camera: '108MP+8MP+2MP', display: '6.67-inch', battery: '4500mAh', processor: 'Dimensity 920' },
      rating: '4.0',
      reviews: 1098,
      colors: ['Pacific Pearl', 'Stealth Black'],
      offers: ['Free Case', 'Exchange Offer'],
      inStock: true
    },

    // Realme (5 models)
    {
      id: 26,
      name: 'Realme GT 3',
      brand: 'Realme',
      price: '499.00',
      discount: '449.00',
      image: 'https://m.media-amazon.com/images/I/61mIUCd-3GL._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '50MP+8MP+2MP', display: '6.74-inch', battery: '4600mAh', processor: 'Snapdragon 8+ Gen 1' },
      rating: '4.3',
      reviews: 1876,
      colors: ['Pulse White', 'Booster Black'],
      offers: ['Bank Offer', 'No Cost EMI'],
      inStock: true
    },
    {
      id: 27,
      name: 'Realme GT Neo 5',
      brand: 'Realme',
      price: '399.00',
      discount: '349.00',
      image: 'https://m.media-amazon.com/images/I/61Iw7XcDwxL._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '50MP+8MP+2MP', display: '6.74-inch', battery: '5000mAh', processor: 'Snapdragon 8+ Gen 1' },
      rating: '4.2',
      reviews: 1543,
      colors: ['Black', 'White', 'Purple'],
      offers: ['Exchange Offer', 'Bank Discount'],
      inStock: true
    },
    {
      id: 28,
      name: 'Realme GT 2 Pro',
      brand: 'Realme',
      price: '599.00',
      discount: '549.00',
      image: 'https://m.media-amazon.com/images/I/61mIUCd-3GL._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '50MP+50MP+2MP', display: '6.7-inch', battery: '5000mAh', processor: 'Snapdragon 8 Gen 1' },
      rating: '4.1',
      reviews: 1321,
      colors: ['Steel Black', 'Paper White'],
      offers: ['No Cost EMI', 'Instant Discount'],
      inStock: true
    },
    {
      id: 29,
      name: 'Realme GT 2',
      brand: 'Realme',
      price: '449.00',
      discount: '399.00',
      image: 'https://m.media-amazon.com/images/I/61Iw7XcDwxL._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '50MP+8MP+2MP', display: '6.62-inch', battery: '5000mAh', processor: 'Snapdragon 888' },
      rating: '4.0',
      reviews: 1098,
      colors: ['Black', 'Blue', 'White'],
      offers: ['Free Case', 'Exchange Offer'],
      inStock: true
    },
    {
      id: 30,
      name: 'Realme GT Master Edition',
      brand: 'Realme',
      price: '349.00',
      discount: '299.00',
      image: 'https://m.media-amazon.com/images/I/61mIUCd-3GL._SL1500_.jpg',
      specs: { ram: 6, storage: 128, camera: '64MP+8MP+2MP', display: '6.43-inch', battery: '4300mAh', processor: 'Snapdragon 778G' },
      rating: '3.9',
      reviews: 876,
      colors: ['Gray', 'White', 'Blue'],
      offers: ['Bank Offer', 'No Cost EMI'],
      inStock: true
    },

    // Vivo (5 models)
    {
      id: 31,
      name: 'Vivo X90 Pro',
      brand: 'Vivo',
      price: '1099.00',
      discount: '999.00',
      image: 'https://m.media-amazon.com/images/I/61mIUCd-3GL._SL1500_.jpg',
      specs: { ram: 12, storage: 256, camera: '50MP+50MP+12MP', display: '6.78-inch', battery: '4870mAh', processor: 'Dimensity 9200' },
      rating: '4.5',
      reviews: 2310,
      colors: ['Legendary Black', 'Red'],
      offers: ['Instant Discount', 'Exchange Offer'],
      inStock: true
    },
    {
      id: 32,
      name: 'Vivo X90',
      brand: 'Vivo',
      price: '899.00',
      discount: '849.00',
      image: 'https://m.media-amazon.com/images/I/61Iw7XcDwxL._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '50MP+12MP+12MP', display: '6.78-inch', battery: '4810mAh', processor: 'Dimensity 9200' },
      rating: '4.4',
      reviews: 1987,
      colors: ['Black', 'Blue'],
      offers: ['Bank Offer', 'No Cost EMI'],
      inStock: true
    },
    {
      id: 33,
      name: 'Vivo V29 Pro',
      brand: 'Vivo',
      price: '599.00',
      discount: '549.00',
      image: 'https://m.media-amazon.com/images/I/61mIUCd-3GL._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '50MP+8MP+2MP', display: '6.78-inch', battery: '4600mAh', processor: 'Dimensity 8200' },
      rating: '4.3',
      reviews: 1654,
      colors: ['Black', 'Gold'],
      offers: ['Exchange Offer', 'Bank Discount'],
      inStock: true
    },
    {
      id: 34,
      name: 'Vivo V29',
      brand: 'Vivo',
      price: '499.00',
      discount: '449.00',
      image: 'https://m.media-amazon.com/images/I/81Y5WuARqpL._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '50MP+8MP+2MP', display: '6.78-inch', battery: '4600mAh', processor: 'Snapdragon 778G' },
      rating: '4.2',
      reviews: 1432,
      colors: ['Blue', 'Purple'],
      offers: ['No Cost EMI', 'Instant Discount'],
      inStock: true
    },
    {
      id: 35,
      name: 'Vivo V27 Pro',
      brand: 'Vivo',
      price: '449.00',
      discount: '399.00',
      image: 'https://m.media-amazon.com/images/I/61mIUCd-3GL._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '50MP+8MP+2MP', display: '6.78-inch', battery: '4600mAh', processor: 'Dimensity 8200' },
      rating: '4.1',
      reviews: 1210,
      colors: ['Black', 'Blue'],
      offers: ['Free Case', 'Exchange Offer'],
      inStock: true
    },

    // Oppo (5 models)
    {
      id: 36,
      name: 'Oppo Find X6 Pro',
      brand: 'Oppo',
      price: '1199.00',
      discount: '1099.00',
      image: 'https://m.media-amazon.com/images/I/61mIUCd-3GL._SL1500_.jpg',
      specs: { ram: 12, storage: 256, camera: '50MP+50MP+50MP', display: '6.82-inch', battery: '5000mAh', processor: 'Snapdragon 8 Gen 2' },
      rating: '4.6',
      reviews: 2543,
      colors: ['Black', 'Green'],
      offers: ['Instant Discount', 'Exchange Offer'],
      inStock: true
    },
    {
      id: 37,
      name: 'Oppo Find X6',
      brand: 'Oppo',
      price: '899.00',
      discount: '849.00',
      image: 'https://m.media-amazon.com/images/I/61Iw7XcDwxL._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '50MP+50MP+32MP', display: '6.74-inch', battery: '4800mAh', processor: 'Dimensity 9200' },
      rating: '4.5',
      reviews: 2210,
      colors: ['Black', 'Blue'],
      offers: ['Bank Offer', 'No Cost EMI'],
      inStock: true
    },
    {
      id: 38,
      name: 'Oppo Reno 10 Pro+',
      brand: 'Oppo',
      price: '699.00',
      discount: '649.00',
      image: 'https://m.media-amazon.com/images/I/61mIUCd-3GL._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '50MP+8MP+32MP', display: '6.74-inch', battery: '4700mAh', processor: 'Snapdragon 8+ Gen 1' },
      rating: '4.4',
      reviews: 1876,
      colors: ['Black', 'Purple'],
      offers: ['Exchange Offer', 'Bank Discount'],
      inStock: true
    },
    {
      id: 39,
      name: 'Oppo Reno 10 Pro',
      brand: 'Oppo',
      price: '599.00',
      discount: '549.00',
      image: 'https://m.media-amazon.com/images/I/61Iw7XcDwxL._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '50MP+8MP+32MP', display: '6.7-inch', battery: '4600mAh', processor: 'Dimensity 8200' },
      rating: '4.3',
      reviews: 1654,
      colors: ['Black', 'Blue'],
      offers: ['No Cost EMI', 'Instant Discount'],
      inStock: true
    },
    {
      id: 40,
      name: 'Oppo Reno 10',
      brand: 'Oppo',
      price: '499.00',
      discount: '449.00',
      image: 'https://m.media-amazon.com/images/I/61mIUCd-3GL._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '64MP+8MP+2MP', display: '6.7-inch', battery: '4600mAh', processor: 'Snapdragon 778G' },
      rating: '4.2',
      reviews: 1432,
      colors: ['Black', 'Blue'],
      offers: ['Free Case', 'Exchange Offer'],
      inStock: true
    },

    // Nothing (5 models)
    {
      id: 41,
      name: 'Nothing Phone 2',
      brand: 'Nothing',
      price: '599.00',
      discount: '549.00',
      image: 'https://m.media-amazon.com/images/I/61Iw7XcDwxL._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '50MP+50MP', display: '6.7-inch', battery: '4700mAh', processor: 'Snapdragon 8+ Gen 1' },
      rating: '4.4',
      reviews: 1876,
      colors: ['White', 'Black'],
      offers: ['Bank Offer', 'No Cost EMI'],
      inStock: true
    },
    {
      id: 42,
      name: 'Nothing Phone 1',
      brand: 'Nothing',
      price: '499.00',
      discount: '449.00',
      image: 'https://m.media-amazon.com/images/I/61mIUCd-3GL._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '50MP+50MP', display: '6.55-inch', battery: '4500mAh', processor: 'Snapdragon 778G+' },
      rating: '4.3',
      reviews: 1654,
      colors: ['White', 'Black'],
      offers: ['Exchange Offer', 'Bank Discount'],
      inStock: true
    },
    {
      id: 43,
      name: 'Nothing Phone 2a',
      brand: 'Nothing',
      price: '399.00',
      discount: '349.00',
      image: 'https://m.media-amazon.com/images/I/61Iw7XcDwxL._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '50MP+50MP', display: '6.7-inch', battery: '5000mAh', processor: 'Dimensity 7200' },
      rating: '4.2',
      reviews: 1432,
      colors: ['White', 'Black'],
      offers: ['No Cost EMI', 'Instant Discount'],
      inStock: true
    },
    {
      id: 44,
      name: 'Nothing Phone 1a',
      brand: 'Nothing',
      price: '349.00',
      discount: '299.00',
      image: 'https://m.media-amazon.com/images/I/61mIUCd-3GL._SL1500_.jpg',
      specs: { ram: 6, storage: 128, camera: '50MP', display: '6.5-inch', battery: '5000mAh', processor: 'Dimensity 6100+' },
      rating: '4.1',
      reviews: 1210,
      colors: ['White', 'Black'],
      offers: ['Free Case', 'Exchange Offer'],
      inStock: true
    },
    {
      id: 45,
      name: 'Nothing Ear 2',
      brand: 'Nothing',
      price: '149.00',
      discount: '129.00',
      image: 'https://m.media-amazon.com/images/I/61Iw7XcDwxL._SL1500_.jpg',
      specs: { ram: 0, storage: 0, camera: 'None', display: 'None', battery: '36h', processor: 'None' },
      rating: '4.0',
      reviews: 1098,
      colors: ['White', 'Black'],
      offers: ['Bank Offer', 'No Cost EMI'],
      inStock: true
    },

    // Asus (5 models)
    {
      id: 46,
      name: 'Asus ROG Phone 7',
      brand: 'Asus',
      price: '999.00',
      discount: '899.00',
      image: 'https://m.media-amazon.com/images/I/61Iw7XcDwxL._SL1500_.jpg',
      specs: { ram: 16, storage: 256, camera: '50MP+13MP+5MP', display: '6.78-inch', battery: '6000mAh', processor: 'Snapdragon 8 Gen 2' },
      rating: '4.5',
      reviews: 2210,
      colors: ['Phantom Black', 'Storm White'],
      offers: ['Instant Discount', 'Exchange Offer'],
      inStock: true
    },
    {
      id: 47,
      name: 'Asus ROG Phone 6',
      brand: 'Asus',
      price: '799.00',
      discount: '749.00',
      image: 'https://m.media-amazon.com/images/I/61mIUCd-3GL._SL1500_.jpg',
      specs: { ram: 12, storage: 128, camera: '50MP+13MP+5MP', display: '6.78-inch', battery: '6000mAh', processor: 'Snapdragon 8+ Gen 1' },
      rating: '4.4',
      reviews: 1987,
      colors: ['Phantom Black', 'Storm White'],
      offers: ['Bank Offer', 'No Cost EMI'],
      inStock: true
    },
    {
      id: 48,
      name: 'Asus Zenfone 10',
      brand: 'Asus',
      price: '699.00',
      discount: '649.00',
      image: 'https://m.media-amazon.com/images/I/61Iw7XcDwxL._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '50MP+13MP', display: '5.9-inch', battery: '4300mAh', processor: 'Snapdragon 8 Gen 2' },
      rating: '4.3',
      reviews: 1654,
      colors: ['Black', 'White', 'Green'],
      offers: ['Exchange Offer', 'Bank Discount'],
      inStock: true
    },
    {
      id: 49,
      name: 'Asus Zenfone 9',
      brand: 'Asus',
      price: '599.00',
      discount: '549.00',
      image: 'https://m.media-amazon.com/images/I/61mIUCd-3GL._SL1500_.jpg',
      specs: { ram: 8, storage: 128, camera: '50MP+12MP', display: '5.9-inch', battery: '4300mAh', processor: 'Snapdragon 8+ Gen 1' },
      rating: '4.2',
      reviews: 1432,
      colors: ['Black', 'White', 'Blue'],
      offers: ['No Cost EMI', 'Instant Discount'],
      inStock: true
    },
    {
      id: 50,
      name: 'Asus ROG Phone 5',
      brand: 'Asus',
      price: '699.00',
      discount: '649.00',
      image: 'https://m.media-amazon.com/images/I/61Iw7XcDwxL._SL1500_.jpg',
      specs: { ram: 12, storage: 128, camera: '64MP+13MP+5MP', display: '6.78-inch', battery: '6000mAh', processor: 'Snapdragon 888' },
      rating: '4.1',
      reviews: 1210,
      colors: ['Phantom Black', 'Storm White'],
      offers: ['Free Case', 'Exchange Offer'],
      inStock: true
    }
  ];

  const brands = [...new Set(mobiles.map(mobile => mobile.brand))];

  const toggleWishlist = (id) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const addToCart = (mobile) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === mobile.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === mobile.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...mobile, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand) 
        : [...prev, brand]
    );
  };

  const handlePriceChange = (e, index) => {
    const newValue = parseInt(e.target.value);
    const newRange = [...priceRange];
    newRange[index] = newValue;
    setPriceRange(newRange);
  };

  const filteredMobiles = mobiles.filter(mobile => {
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(mobile.brand);
    const priceMatch = mobile.discount >= priceRange[0] && mobile.discount <= priceRange[1];
    return brandMatch && priceMatch;
  });

  const sortedMobiles = [...filteredMobiles].sort((a, b) => {
    switch(sortOption) {
      case 'price-low':
        return parseFloat(a.discount) - parseFloat(b.discount);
      case 'price-high':
        return parseFloat(b.discount) - parseFloat(a.discount);
      case 'rating':
        return parseFloat(b.rating) - parseFloat(a.rating);
      default:
        return 0;
    }
  });

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (parseFloat(item.discount) * item.quantity), 0).toFixed(2);
  };

  const navigateToProduct = (id) => {
    navigate(`/mobile/${id}`);
  };

  // Offer images for the top scrollable section (Flipkart-like banners)
  const offerImages = [
    'https://gphome.gumlet.io/gpcdn/promotions/Diwali-mobile-offers-and-sale-today-gopaisa.jpg?w=400&dpr=2.6',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlTUiDzmXV-mL4iGoCHuG97gvGzxs0rzqkQm3k9rjSIo_koyzQy9oypQfcUsWQ65GJeCA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwuIhiPEBSrnrFhITxoaHKd44CfAO4GpsOyg&s',
    'https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/8d4150cc4f3f967d.jpg?q=50',
    'https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/685712c6cefb3c82.jpg?q=50',
    'https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/8d4150cc4f3f967d.jpg?q=50'
  ];

  // Ref for scrollable offers
  const offersScrollRef = useRef(null);
  const autoScrollInterval = useRef(null);

  // Manual scroll handler
  const scrollOffers = (direction) => {
    const container = offersScrollRef.current;
    if (!container) return;
    const scrollAmount = container.offsetWidth; // Scroll by one full width
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Auto-scroll logic
  useEffect(() => {
    const container = offersScrollRef.current;
    if (!container) return;
    
    function startAutoScroll() {
      if (autoScrollInterval.current) return;
      autoScrollInterval.current = setInterval(() => {
        if (!container) return;
        // If at end, scroll back to start
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: container.offsetWidth, behavior: 'smooth' });
        }
      }, 3000);
    }
    
    function stopAutoScroll() {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
        autoScrollInterval.current = null;
      }
    }
    
    startAutoScroll();
    // Pause on hover
    container.addEventListener('mouseenter', stopAutoScroll);
    container.addEventListener('mouseleave', startAutoScroll);
    return () => {
      stopAutoScroll();
      container.removeEventListener('mouseenter', stopAutoScroll);
      container.removeEventListener('mouseleave', startAutoScroll);
    };
  }, []);

  return (
  <div className={`mobiles-page ${showCart ? 'mobiles-cart-open' : ''}`}>
      {/* Offers Scrollable Banner */}
  <div className="mobiles-offers-scroll-banner" style={{position: 'relative'}}>
  <button className="mobiles-offers-scroll-btn mobiles-left" onClick={() => scrollOffers('left')} aria-label="Scroll Left">&#8592;</button>
  <div className="mobiles-offers-scroll-inner" ref={offersScrollRef}>
          {offerImages.map((img, idx) => (
            <div key={idx} className="mobiles-offer-slide">
              <img src={img} alt={`Offer ${idx+1}`} className="mobiles-offer-banner-img" />
            </div>
          ))}
        </div>
  <button className="mobiles-offers-scroll-btn mobiles-right" onClick={() => scrollOffers('right')} aria-label="Scroll Right">&#8594;</button>
      </div>

      <div className="mobiles-category-header">
        <div className="mobiles-header-content">
          <div className="mobiles-breadcrumb">
            <Link to="/">Home</Link> <FiChevronRight /> <span>Mobiles</span>
          </div>
        </div>
      </div>

      <div className="mobiles-main-content">
        <div className="mobiles-sort-section" style={{marginBottom: '18px'}}>
          <span>Sort by:</span>
          <select 
            value={sortOption} 
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Customer Rating</option>
          </select>
        </div>

        <div className="mobiles-filters-panel mobiles-open">
          <div className="mobiles-filter-section">
            <h3>Brands</h3>
            <div className="mobiles-filter-options">
              {brands.map(brand => (
                <button
                  key={brand}
                  className={selectedBrands.includes(brand) ? 'mobiles-active' : ''}
                  onClick={() => toggleBrand(brand)}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mobiles-products-container">
          <div className="mobiles-products-count">
            {filteredMobiles.length} {filteredMobiles.length === 1 ? 'item' : 'items'} found
          </div>

          <div className="mobiles-products-grid">
            {sortedMobiles.map(mobile => (
              <div key={mobile.id} className="mobiles-product-card">
                <div className="mobiles-card-top-section">
                  <div className="mobiles-card-badges">
                    {mobile.inStock ? (
                      <span className="mobiles-stock-badge mobiles-in-stock">In Stock</span>
                    ) : (
                      <span className="mobiles-stock-badge mobiles-out-of-stock">Out of Stock</span>
                    )}
                  </div>
                  <button 
                    className={`mobiles-wishlist-btn ${wishlist.includes(mobile.id) ? 'mobiles-active' : ''}`}
                    onClick={() => toggleWishlist(mobile.id)}
                  >
                    <FiHeart />
                  </button>
                </div>
                <div 
                  className="mobiles-product-image-container"
                  onClick={() => navigateToProduct(mobile.id)}
                >
                  <img src={mobile.image} alt={mobile.name} className="mobiles-product-image" />
                </div>
                <div className="mobiles-product-info">
                  <span className="mobiles-brand">{mobile.brand}</span>
                  <h3 onClick={() => navigateToProduct(mobile.id)}>
                    {mobile.name}
                    {parseFloat(mobile.discount) < parseFloat(mobile.price) && (
                      <span className="mobiles-discount-badge">
                        {Math.round((1 - mobile.discount/mobile.price) * 100)}% off
                      </span>
                    )}
                  </h3>
                  <div className="mobiles-product-description">{mobile.description}</div>
                  <div className="mobiles-specs">
                    <span>{mobile.specs.ram}GB RAM</span>
                    <span>{mobile.specs.storage}GB</span>
                    <span>{mobile.specs.display}</span>
                  </div>
                  <div className="mobiles-rating-reviews">
                    <div className="mobiles-rating">
                      <div className="mobiles-stars">
                        {Array(Math.floor(parseFloat(mobile.rating))).fill().map((_, i) => (
                          <FiStar key={i} className="mobiles-filled" />
                        ))}
                        {Array(5 - Math.floor(parseFloat(mobile.rating))).fill().map((_, i) => (
                          <FiStar key={i} className="mobiles-empty" />
                        ))}
                      </div>
                      <span>({mobile.reviews})</span>
                    </div>
                  </div>
                  <div className="mobiles-price-section">
                    <div className="mobiles-price">
                      <span className="mobiles-current">${mobile.discount}</span>
                      {parseFloat(mobile.discount) < parseFloat(mobile.price) && (
                        <span className="mobiles-original">${mobile.price}</span>
                      )}
                    </div>
                  </div>
                  <div className="mobiles-offers">
                    {mobile.offers.slice(0, 2).map((offer, i) => (
                      <span key={i} className="mobiles-offer">{offer}</span>
                    ))}
                    {mobile.offers.length > 2 && (
                      <span className="mobiles-more-offers">+{mobile.offers.length - 2} more</span>
                    )}
                  </div>
                  {mobile.inStock ? (
                    <button 
                      className="mobiles-add-to-cart"
                      onClick={() => addToCart(mobile)}
                    >
                      <FiShoppingCart /> Add to Cart
                    </button>
                  ) : (
                    <button className="mobiles-notify-me">Notify Me</button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mobiles-pagination-container">
            <div className="mobiles-pagination">
              <button className="mobiles-active">1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <span>...</span>
              <button>10</button>
              <button className="mobiles-next-btn">Next →</button>
            </div>
          </div>
        </div>

        <div className="mobiles-cart-icon" onClick={() => setShowCart(true)}>
          <FiShoppingCart />
          {cart.length > 0 && <span className="mobiles-cart-count">{cart.length}</span>}
        </div>

        {showCart && (
          <div className="mobiles-cart-overlay" onClick={() => setShowCart(false)}>
            <div className="mobiles-cart-sidebar" onClick={(e) => e.stopPropagation()}>
              <div className="mobiles-cart-header">
                <h3>Your Cart ({cart.reduce((total, item) => total + item.quantity, 0)})</h3>
                <button className="mobiles-close-cart" onClick={() => setShowCart(false)}>
                  <FiX />
                </button>
              </div>
              <div className="mobiles-cart-items">
                {cart.length === 0 ? (
                  <div className="mobiles-empty-cart">
                    <p>Your cart is empty</p>
                    <button 
                      className="mobiles-continue-shopping"
                      onClick={() => setShowCart(false)}
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <>
                    {cart.map(item => (
                      <div key={item.id} className="mobiles-cart-item">
                        <img src={item.image} alt={item.name} className="mobiles-cart-item-image" />
                        <div className="mobiles-item-details">
                          <h4>{item.name}</h4>
                          <div className="mobiles-item-price">
                            ${item.discount} × {item.quantity} = 
                            <span> ${(item.discount * item.quantity).toFixed(2)}</span>
                          </div>
                          <div className="mobiles-item-actions">
                            <div className="mobiles-quantity-control">
                              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                              <span>{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                            </div>
                            <button 
                              className="mobiles-remove-item"
                              onClick={() => removeFromCart(item.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
              {cart.length > 0 && (
                <div className="mobiles-cart-summary">
                  <div className="mobiles-summary-row">
                    <span>Subtotal:</span>
                    <span>${calculateTotal()}</span>
                  </div>
                  <div className="mobiles-summary-row">
                    <span>Delivery:</span>
                    <span>Free</span>
                  </div>
                  <div className="mobiles-summary-row mobiles-total">
                    <span>Total:</span>
                    <span>${calculateTotal()}</span>
                  </div>
                  <div className="mobiles-cart-buttons">
                    <button className="mobiles-checkout-btn">Proceed to Checkout</button>
                    <button 
                      className="mobiles-continue-shopping" 
                      onClick={() => setShowCart(false)}
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MobilesPage;