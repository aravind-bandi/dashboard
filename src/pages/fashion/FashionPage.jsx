import React, { useState, useEffect, useRef } from 'react';
import './FashionPage.css';
import Footer from '../footer/Footer';

const FashionStore = () => {
  const [activeCategory, setActiveCategory] = useState('women');
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(0);
  const bannerInterval = useRef(null);

  // Product Data
 const products = {
    women: [
      {
        id: 1,
        title: "Floral Summer Dress",
        brand: "Zara",
        price: 1299,
        originalPrice: 1999,
        discount: 35,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz8A7Atv3qDW8VxfIHi2LxCtmqz5QJdLgrGw&s",
        rating: 4.2,
        sizes: ['S', 'M', 'L'],
        description: "Lightweight floral dress perfect for summer outings. Comfortable and stylish for all occasions."
      },
      {
        id: 2,
        title: "Denim Jacket",
        brand: "H&M",
        price: 1999,
        originalPrice: 2999,
        discount: 33,
        imageUrl: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/20163718/2022/9/26/9c5b496f-7a58-43d6-92c4-bc90ff22b2681664167748680Linedborg-collareddenimjacket1.jpg",
        rating: 4.5,
        sizes: ['XS', 'S', 'M', 'L'],
        description: "Classic blue denim jacket with a modern fit. Great for layering in all seasons."
      },
      {
        id: 3,
        title: "Striped T-Shirt",
        brand: "Puma",
        price: 599,
        originalPrice: 899,
        discount: 33,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTedIAH5j-VgCvYr0Eg86du_vdwkuhxc93fhw&s",
        rating: 4.0,
        sizes: ['S', 'M', 'L'],
        description: "Soft cotton t-shirt with trendy stripes. Perfect for casual wear and easy to pair."
      },
      {
        id: 4,
        title: "Skinny Jeans",
        brand: "Levi's",
        price: 1599,
        originalPrice: 1999,
        discount: 20,
        imageUrl: "https://assets.woolworthsstatic.co.za/Mid-Rise-Super-Skinny-Jeans-LIGHT-BLUE-507621236.jpg?V=O%40P4&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIzLTA5LTI2LzUwNzYyMTIzNl9MSUdIVEJMVUVfaGVyby5qcGcifQ&q=75",
        rating: 4.3,
        sizes: ['28', '30', '32'],
        description: "Stretch skinny jeans for a flattering fit. Durable and comfortable for daily use."
      },
      {
        id: 5,
        title: "Casual Sneakers",
        brand: "Nike",
        price: 2499,
        originalPrice: 3499,
        discount: 29,
        imageUrl: "https://i.pinimg.com/1200x/74/f3/05/74f305ff18e3f9c2205b90edff632a2a.jpg",
        rating: 4.6,
        sizes: ['6', '7', '8'],
        description: "Trendy Nike sneakers with cushioned sole. Ideal for walking, running, and casual wear."
      },
      {
        id: 16,
        title: "Wrap Blouse",
        brand: "Mango",
        price: 899,
        originalPrice: 1299,
        discount: 31,
        imageUrl: "https://images.asos-media.com/products/mango-ruffle-wrap-blouse-in-black/200604413-1-black?$XXL$",
        rating: 4.0,
        sizes: ['XS', 'S', 'M']
      },
      {
        id: 17,
        title: "Pleated Skirt",
        brand: "Forever 21",
        price: 699,
        originalPrice: 999,
        discount: 30,
        imageUrl: "https://u-mercari-images.mercdn.net/photos/m51828682259_1.jpg",
        rating: 4.1,
        sizes: ['S', 'M', 'L']
      },
      {
        id: 18,
        title: "Wool Coat",
        brand: "Max",
        price: 2999,
        originalPrice: 4999,
        discount: 40,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyh5l7Kz07y1XCYWzh4aiqoPCDnYqUi-Tx1Q&s",
        rating: 4.4,
        sizes: ['S', 'M', 'L', 'XL']
      },
      {
        id: 19,
        title: "High Heels",
        brand: "H&M",
        price: 1599,
        originalPrice: 2299,
        discount: 30,
        imageUrl: "https://image.hm.com/assets/hm/ff/10/ff10efdf3f5e9cc75aeba75c1ad6a8c5f773498b.jpg?imwidth=2160",
        rating: 4.2,
        sizes: ['5', '6', '7']
      },
      {
        id: 20,
        title: "Printed Scarf",
        brand: "Zara",
        price: 399,
        originalPrice: 599,
        discount: 33,
        imageUrl: "https://static.zara.net/assets/public/478a/5e7a/766a49668281/cba1da5f316d/04758012745-p/04758012745-p.jpg?ts=1741196992632&w=744&f=auto",
        rating: 4.3,
        sizes: ['One Size']
      },
      {
        id: 21,
        title: "Linen Jumpsuit",
        brand: "H&M",
        price: 1299,
        originalPrice: 1999,
        discount: 35,
        imageUrl: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/10385945/2019/8/22/b70677c2-2461-4811-a314-3be94f7523881566474763466-HM-Women-Brown-Linen-Blend-Jumpsuit-9121566474762850-1.jpg",
        rating: 4.1,
        sizes: ['S', 'M', 'L']
      },
      {
        id: 22,
        title: "Cropped Sweater",
        brand: "Puma",
        price: 799,
        originalPrice: 1199,
        discount: 33,
        imageUrl: "https://images-static.nykaa.com/media/catalog/product/f/9/f94940762140904_1.jpg?tr=w-500",
        rating: 4.0,
        sizes: ['XS', 'S', 'M']
      },
      {
        id: 23,
        title: "Leather Handbag",
        brand: "Michael Kors",
        price: 3499,
        originalPrice: 4999,
        discount: 30,
        imageUrl: "https://www.linvelles.com/cdn/shop/articles/62125f480532f62c4bc2164bd435c378.jpg?v=1644605238",
        rating: 4.5,
        sizes: ['One Size']
      },
      {
        id: 24,
        title: "Silk Nightdress",
        brand: "Victoria's Secret",
        price: 1499,
        originalPrice: 1999,
        discount: 25,
        imageUrl: "https://www.victoriassecret.in/dw/image/v2/BGSC_PRD/on/demandware.static/-/Sites-vsfa-Library/default/dw246e039b/Images/Robes.jpg?sfrm=png",
        rating: 4.2,
        sizes: ['S', 'M', 'L']
      },
      {
        id: 25,
        title: "Athleisure Set",
        brand: "Nike",
        price: 1999,
        originalPrice: 2999,
        discount: 33,
        imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bdee7797-b78e-4317-9144-d4d81f6bac0f/W+NP+SCULPT+DFHR7%2F8PKTTIGHT.png",
        rating: 4.3,
        sizes: ['S', 'M', 'L']
      }
    ],
    men: [
      {
        id: 6,
        title: "Slim Fit Shirt",
        brand: "Arrow",
        price: 999,
        originalPrice: 1499,
        discount: 33,
        imageUrl: "https://m.media-amazon.com/images/I/61XDeOOr0VL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.1,
        sizes: ['M', 'L', 'XL']
      },
      {
        id: 7,
        title: "Chino Pants",
        brand: "Levi's",
        price: 1599,
        originalPrice: 1999,
        discount: 20,
        imageUrl: "https://m.media-amazon.com/images/I/81hNLO+UQVL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.3,
        sizes: ['30', '32', '34', '36']
      },
      {
        id: 8,
        title: "Sports T-Shirt",
        brand: "Adidas",
        price: 699,
        originalPrice: 999,
        discount: 30,
        imageUrl: "https://example.com/men-tshirt.jpg",
        rating: 4.2,
        sizes: ['S', 'M', 'L', 'XL']
      },
      {
        id: 9,
        title: "Formal Blazer",
        brand: "Raymond",
        price: 3499,
        originalPrice: 4999,
        discount: 30,
        imageUrl: "https://example.com/men-blazer.jpg",
        rating: 4.4,
        sizes: ['38', '40', '42']
      },
      {
        id: 10,
        title: "Running Shoes",
        brand: "Puma",
        price: 1999,
        originalPrice: 2999,
        discount: 33,
        imageUrl: "https://example.com/men-shoes.jpg",
        rating: 4.5,
        sizes: ['8', '9', '10']
      },
      {
        id: 26,
        title: "Cargo Shorts",
        brand: "US Polo",
        price: 899,
        originalPrice: 1299,
        discount: 31,
        imageUrl: "https://example.com/men-shorts.jpg",
        rating: 4.0,
        sizes: ['30', '32', '34']
      },
      {
        id: 27,
        title: "Denim Jeans",
        brand: "Wrangler",
        price: 1499,
        originalPrice: 1999,
        discount: 25,
        imageUrl: "https://example.com/men-jeans.jpg",
        rating: 4.2,
        sizes: ['30', '32', '34']
      },
      {
        id: 28,
        title: "Polo T-Shirt",
        brand: "Lacoste",
        price: 1299,
        originalPrice: 1999,
        discount: 35,
        imageUrl: "https://example.com/men-polo.jpg",
        rating: 4.3,
        sizes: ['S', 'M', 'L', 'XL']
      },
      {
        id: 29,
        title: "Winter Jacket",
        brand: "The North Face",
        price: 3999,
        originalPrice: 4999,
        discount: 20,
        imageUrl: "https://example.com/men-jacket.jpg",
        rating: 4.5,
        sizes: ['M', 'L', 'XL']
      },
      {
        id: 30,
        title: "Casual Loafers",
        brand: "Hush Puppies",
        price: 1799,
        originalPrice: 2599,
        discount: 31,
        imageUrl: "https://example.com/men-loafers.jpg",
        rating: 4.4,
        sizes: ['8', '9', '10']
      },
      {
        id: 31,
        title: "Formal Suit",
        brand: "Van Heusen",
        price: 4999,
        originalPrice: 6999,
        discount: 29,
        imageUrl: "https://example.com/men-suit.jpg",
        rating: 4.6,
        sizes: ['38', '40', '42']
      },
      {
        id: 32,
        title: "Sports Shorts",
        brand: "Nike",
        price: 799,
        originalPrice: 1199,
        discount: 33,
        imageUrl: "https://example.com/men-sportshorts.jpg",
        rating: 4.1,
        sizes: ['S', 'M', 'L']
      },
      {
        id: 33,
        title: "Leather Belt",
        brand: "Allen Solly",
        price: 599,
        originalPrice: 899,
        discount: 33,
        imageUrl: "https://example.com/men-belt.jpg",
        rating: 4.2,
        sizes: ['32', '34', '36']
      },
      {
        id: 34,
        title: "Sunglasses",
        brand: "Ray-Ban",
        price: 1999,
        originalPrice: 2999,
        discount: 33,
        imageUrl: "https://example.com/men-sunglasses.jpg",
        rating: 4.5,
        sizes: ['One Size']
      },
      {
        id: 35,
        title: "Swim Trunks",
        brand: "Speedo",
        price: 699,
        originalPrice: 999,
        discount: 30,
        imageUrl: "https://example.com/men-swimwear.jpg",
        rating: 4.0,
        sizes: ['S', 'M', 'L']
      },
      {
        id: 36,
        title: "Hooded Sweatshirt",
        brand: "Puma",
        price: 1299,
        originalPrice: 1999,
        discount: 35,
        imageUrl: "https://example.com/men-hoodie.jpg",
        rating: 4.3,
        sizes: ['S', 'M', 'L', 'XL']
      },
      {
        id: 37,
        title: "Cargo Pants",
        brand: "Adidas",
        price: 1499,
        originalPrice: 1999,
        discount: 25,
        imageUrl: "https://example.com/men-cargo.jpg",
        rating: 4.2,
        sizes: ['30', '32', '34']
      },
      {
        id: 38,
        title: "Leather Wallet",
        brand: "Tommy Hilfiger",
        price: 999,
        originalPrice: 1499,
        discount: 33,
        imageUrl: "https://example.com/men-wallet.jpg",
        rating: 4.4,
        sizes: ['One Size']
      },
      {
        id: 39,
        title: "Athletic Shoes",
        brand: "Reebok",
        price: 2299,
        originalPrice: 3299,
        discount: 30,
        imageUrl: "https://example.com/men-athleticshoes.jpg",
        rating: 4.5,
        sizes: ['8', '9', '10']
      },
      {
        id: 40,
        title: "Trench Coat",
        brand: "Zara",
        price: 2999,
        originalPrice: 3999,
        discount: 25,
        imageUrl: "https://example.com/men-trenchcoat.jpg",
        rating: 4.3,
        sizes: ['M', 'L', 'XL']
      },
      {
        id: 41,
        title: "Cotton Vest",
        brand: "Jack & Jones",
        price: 799,
        originalPrice: 1199,
        discount: 33,
        imageUrl: "https://example.com/men-vest.jpg",
        rating: 4.1,
        sizes: ['S', 'M', 'L']
      },
      {
        id: 42,
        title: "Formal Tie",
        brand: "Arrow",
        price: 499,
        originalPrice: 799,
        discount: 38,
        imageUrl: "https://example.com/men-tie.jpg",
        rating: 4.0,
        sizes: ['One Size']
      },
      {
        id: 43,
        title: "Winter Gloves",
        brand: "The North Face",
        price: 599,
        originalPrice: 899,
        discount: 33,
        imageUrl: "https://example.com/men-gloves.jpg",
        rating: 4.2,
        sizes: ['M', 'L']
      },
      {
        id: 44,
        title: "Casual Backpack",
        brand: "American Tourister",
        price: 1299,
        originalPrice: 1999,
        discount: 35,
        imageUrl: "https://example.com/men-backpack.jpg",
        rating: 4.3,
        sizes: ['One Size']
      },
      {
        id: 45,
        title: "Printed Boxers",
        brand: "Calvin Klein",
        price: 399,
        originalPrice: 599,
        discount: 33,
        imageUrl: "https://example.com/men-boxers.jpg",
        rating: 4.4,
        sizes: ['S', 'M', 'L']
      }
    ],
    kids: [
      {
        id: 11,
        title: "Cartoon Printed T-Shirt",
        brand: "Disney",
        price: 499,
        originalPrice: 799,
        discount: 38,
        imageUrl: "https://m.media-amazon.com/images/I/61P1Q+QyRVL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.4,
        sizes: ['2-3Y', '4-5Y', '6-7Y']
      },
      {
        id: 12,
        title: "Denim Overalls",
        brand: "Carter's",
        price: 899,
        originalPrice: 1299,
        discount: 31,
        imageUrl: "https://m.media-amazon.com/images/I/71QTxY+3wIL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.0,
        sizes: ['3-4Y', '5-6Y']
      },
      {
        id: 13,
        title: "Cotton Frocks",
        brand: "FirstCry",
        price: 599,
        originalPrice: 899,
        discount: 33,
        imageUrl: "https://example.com/kids-frock.jpg",
        rating: 4.1,
        sizes: ['1-2Y', '2-3Y']
      },
      {
        id: 14,
        title: "School Shoes",
        brand: "Bata",
        price: 799,
        originalPrice: 1199,
        discount: 33,
        imageUrl: "https://example.com/kids-shoes.jpg",
        rating: 4.3,
        sizes: ['10', '11', '12']
      },
      {
        id: 15,
        title: "Winter Jacket",
        brand: "Gini & Jony",
        price: 1299,
        originalPrice: 1999,
        discount: 35,
        imageUrl: "https://example.com/kids-jacket.jpg",
        rating: 4.2,
        sizes: ['4-5Y', '6-7Y']
      },
      {
        id: 46,
        title: "Track Pants Set",
        brand: "Puma",
        price: 999,
        originalPrice: 1499,
        discount: 33,
        imageUrl: "https://example.com/kids-trackpants.jpg",
        rating: 4.1,
        sizes: ['3-4Y', '5-6Y']
      },
      {
        id: 47,
        title: "Princess Dress",
        brand: "Disney",
        price: 1199,
        originalPrice: 1799,
        discount: 33,
        imageUrl: "https://example.com/kids-dress.jpg",
        rating: 4.3,
        sizes: ['2-3Y', '4-5Y']
      },
      {
        id: 48,
        title: "Sports Shoes",
        brand: "Nike",
        price: 1299,
        originalPrice: 1999,
        discount: 35,
        imageUrl: "https://example.com/kids-sportsshoes.jpg",
        rating: 4.4,
        sizes: ['10', '11', '12']
      },
      {
        id: 49,
        title: "Cotton Pyjamas",
        brand: "Mothercare",
        price: 599,
        originalPrice: 899,
        discount: 33,
        imageUrl: "https://example.com/kids-pyjamas.jpg",
        rating: 4.0,
        sizes: ['3-4Y', '5-6Y']
      },
      {
        id: 50,
        title: "Raincoat",
        brand: "Puma",
        price: 899,
        originalPrice: 1299,
        discount: 31,
        imageUrl: "https://example.com/kids-raincoat.jpg",
        rating: 4.2,
        sizes: ['2-3Y', '4-5Y']
      },
      {
        id: 51,
        title: "Denim Jeans",
        brand: "US Polo",
        price: 799,
        originalPrice: 1199,
        discount: 33,
        imageUrl: "https://example.com/kids-jeans.jpg",
        rating: 4.1,
        sizes: ['4-5Y', '6-7Y']
      },
      {
        id: 52,
        title: "Fleece Jacket",
        brand: "Gap",
        price: 999,
        originalPrice: 1499,
        discount: 33,
        imageUrl: "https://example.com/kids-fleece.jpg",
        rating: 4.3,
        sizes: ['3-4Y', '5-6Y']
      },
      {
        id: 53,
        title: "Cotton Socks Pack",
        brand: "H&M",
        price: 299,
        originalPrice: 499,
        discount: 40,
        imageUrl: "https://example.com/kids-socks.jpg",
        rating: 4.2,
        sizes: ['2-4Y', '5-7Y']
      },
      {
        id: 54,
        title: "Swim Shorts",
        brand: "Speedo",
        price: 499,
        originalPrice: 799,
        discount: 38,
        imageUrl: "https://example.com/kids-swimshorts.jpg",
        rating: 4.0,
        sizes: ['3-4Y', '5-6Y']
      },
      {
        id: 55,
        title: "Hooded Sweatshirt",
        brand: "Adidas",
        price: 799,
        originalPrice: 1199,
        discount: 33,
        imageUrl: "https://example.com/kids-hoodie.jpg",
        rating: 4.1,
        sizes: ['4-5Y', '6-7Y']
      },
      {
        id: 56,
        title: "School Backpack",
        brand: "Skybags",
        price: 699,
        originalPrice: 999,
        discount: 30,
        imageUrl: "https://example.com/kids-backpack.jpg",
        rating: 4.3,
        sizes: ['One Size']
      },
      {
        id: 57,
        title: "Cotton Cap",
        brand: "Nike",
        price: 399,
        originalPrice: 599,
        discount: 33,
        imageUrl: "https://example.com/kids-cap.jpg",
        rating: 4.0,
        sizes: ['One Size']
      },
      {
        id: 58,
        title: "Party Dress",
        brand: "Zara Kids",
        price: 1499,
        originalPrice: 1999,
        discount: 25,
        imageUrl: "https://example.com/kids-partydress.jpg",
        rating: 4.4,
        sizes: ['2-3Y', '4-5Y']
      },
      {
        id: 59,
        title: "Canvas Shoes",
        brand: "Bata",
        price: 599,
        originalPrice: 899,
        discount: 33,
        imageUrl: "https://example.com/kids-canvas.jpg",
        rating: 4.2,
        sizes: ['10', '11', '12']
      },
      {
        id: 60,
        title: "Thermal Set",
        brand: "FirstCry",
        price: 899,
        originalPrice: 1299,
        discount: 31,
        imageUrl: "https://example.com/kids-thermal.jpg",
        rating: 4.1,
        sizes: ['2-3Y', '4-5Y']
      }
    ]
  };

  // Banner Data
  const banners = [
    {
      id: 1,
      image: "https://img.freepik.com/free-psd/summer-sale-up-50-percent-off-social-media-post-template_47987-14194.jpg",
      alt: "Summer Sale - Up to 50% Off",
      category: "women"
    },
    {
      id: 2,
      image: "https://img.freepik.com/free-vector/gradient-new-arrival-background_52683-68017.jpg?semt=ais_hybrid&w=740",
      alt: "New Arrivals - Trending Styles",
      category: "men"
    },
    {
      id: 3,
      image: "https://img.freepik.com/premium-vector/back-school-sale-vector-banner-design-back-school-sale-text-with-special-offer-discount_572293-2262.jpg",
      alt: "Back to School - Special Offers",
      category: "kids"
    }
  ];

  // Auto-scrolling banners
  useEffect(() => {
    bannerInterval.current = setInterval(() => {
      setCurrentBanner(prev => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(bannerInterval.current);
  }, []);

  // Add to Cart Function
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setShowCart(true);
  };

  // Remove from Cart Function
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  // Calculate Total
  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="fashion-store">
      {/* Header */}
      <header className="fashion-header">
        <h1 className="fashion-logo">FashionHub</h1>
        <nav className="fashion-nav">
          <button 
            className={`fashion-nav-btn ${activeCategory === 'women' ? 'active' : ''}`}
            onClick={() => setActiveCategory('women')}
          >
            Women
          </button>
          <button 
            className={`fashion-nav-btn ${activeCategory === 'men' ? 'active' : ''}`}
            onClick={() => setActiveCategory('men')}
          >
            Men
          </button>
          <button 
            className={`fashion-nav-btn ${activeCategory === 'kids' ? 'active' : ''}`}
            onClick={() => setActiveCategory('kids')}
          >
            Kids
          </button>
        </nav>
        <button className="fashion-cart-btn" onClick={() => setShowCart(!showCart)}>
          🛒 Cart ({cartItems.length})
        </button>
      </header>

      {/* Main Content */}
      <main className="fashion-main">
        {/* Auto-scrolling Banner Carousel */}
        <div className="fashion-banner-carousel">
          <div 
            className="fashion-banner-wrapper"
            style={{ transform: `translateX(-${currentBanner * 100}%)` }}
          >
            {banners.map((banner, index) => (
              <div 
                key={banner.id} 
                className="fashion-banner-slide"
                onClick={() => setActiveCategory(banner.category)}
              >
                <img 
                  src={banner.image} 
                  alt={banner.alt} 
                  className="fashion-banner-img" 
                />
              </div>
            ))}
          </div>
          <div className="fashion-banner-dots">
            {banners.map((_, index) => (
              <button
                key={index}
                className={`fashion-banner-dot ${index === currentBanner ? 'active' : ''}`}
                onClick={() => {
                  setCurrentBanner(index);
                  clearInterval(bannerInterval.current);
                  bannerInterval.current = setInterval(() => {
                    setCurrentBanner(prev => (prev + 1) % banners.length);
                  }, 5000);
                }}
              />
            ))}
          </div>
        </div>

        {/* Category Title */}
        <h2 className="fashion-category-title">
          {activeCategory === 'women' ? "Women's Fashion" :
           activeCategory === 'men' ? "Men's Fashion" : "Kids' Fashion"}
        </h2>

        {/* Products Grid */}
        <div className="fashion-products-grid">
          {products[activeCategory].map(product => (
            <div key={product.id} className="fashion-product-card">
              <div className="fashion-product-img-container">
                <img src={product.imageUrl} alt={product.title} className="fashion-product-img" />
                {product.discount > 0 && (
                  <span className="fashion-product-discount">{product.discount}% OFF</span>
                )}
                <button 
                  className="fashion-add-to-cart"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
              <div className="fashion-product-details">
                <h4 className="fashion-product-brand">{product.brand}</h4>
                <p className="fashion-product-title">{product.title}</p>
                <div className="fashion-product-description">{product.description}</div>
                <div className="fashion-product-pricing">
                  <span className="fashion-product-price">₹{product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="fashion-product-original-price">₹{product.originalPrice}</span>
                  )}
                </div>
                <div className="fashion-product-rating">
                  <span className="fashion-rating-stars">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  </span>
                  <span className="fashion-rating-value">{product.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Shopping Cart Sidebar */}
      {showCart && (
        <div className="fashion-cart-sidebar">
          <div className="fashion-cart-header">
            <h3>Your Cart ({cartItems.length})</h3>
            <button 
              className="fashion-cart-close" 
              onClick={() => setShowCart(false)}
            >
              ×
            </button>
          </div>
          {cartItems.length === 0 ? (
            <div className="fashion-cart-empty">
              <p>Your cart is empty</p>
              <button 
                className="fashion-continue-shopping"
                onClick={() => setShowCart(false)}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="fashion-cart-items">
                {cartItems.map(item => (
                  <div key={item.id} className="fashion-cart-item">
                    <img src={item.imageUrl} alt={item.title} className="fashion-cart-item-img" />
                    <div className="fashion-cart-item-details">
                      <h4>{item.brand}</h4>
                      <p>{item.title}</p>
                      <div className="fashion-cart-item-price">₹{item.price}</div>
                    </div>
                    <button 
                      className="fashion-cart-item-remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <div className="fashion-cart-summary">
                <div className="fashion-cart-total">
                  <span>Total:</span>
                  <span>₹{cartTotal}</span>
                </div>
                <button className="fashion-checkout-btn">Proceed to Checkout</button>
              </div>
            </>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default FashionStore;