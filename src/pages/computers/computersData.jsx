  export const computers = [
    // Apple
    {
      id: 1,
      name: 'Apple MacBook Pro M2 Pro (16-inch)',
      brand: 'Apple',
      type: 'Laptop',
      price: '239900',
      discount: '224900',
      image: 'https://m.media-amazon.com/images/I/61aUBxqc5PL._SL1500_.jpg',
      specs: {
        cpu: 'Apple M2 Pro (12-core)',
        gpu: '19-core GPU',
        ram: '16GB',
        storage: '1TB SSD',
        display: '16.2-inch Liquid Retina XDR',
        os: 'macOS',
        weight: '2.15 kg'
      },
      rating: '4.8',
      reviews: 1245,
      colors: ['Space Gray', 'Silver'],
      offers: ['No Cost EMI', 'Exchange Offer', 'Extra ₹5000 off'],
      inStock: true
    },
    {
      id: 2,
      name: 'Apple MacBook Air M2 (13-inch)',
      brand: 'Apple',
      type: 'Laptop',
      price: '119900',
      discount: '104900',
      image: 'https://m.media-amazon.com/images/I/71f5Eu5lJSL._SL1500_.jpg',
      specs: {
        cpu: 'Apple M2 (8-core)',
        gpu: '10-core GPU',
        ram: '8GB',
        storage: '256GB SSD',
        display: '13.6-inch Liquid Retina',
        os: 'macOS',
        weight: '1.24 kg'
      },
      rating: '4.7',
      reviews: 982,
      colors: ['Midnight', 'Starlight', 'Space Gray', 'Silver'],
      offers: ['No Cost EMI', 'Bank Discount'],
      inStock: true
    },

    // Dell
    {
      id: 3,
      name: 'Dell XPS 15 9520 (2022)',
      brand: 'Dell',
      type: 'Laptop',
      price: '189990',
      discount: '169990',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETeVOQ3h-JTvYCjsucGVA2L_8BE9-_ufHtA&s',
      specs: {
        cpu: 'Intel Core i9-12900HK',
        gpu: 'NVIDIA RTX 3050 Ti',
        ram: '32GB',
        storage: '1TB SSD',
        display: '15.6-inch 4K UHD+',
        os: 'Windows 11',
        weight: '2.05 kg'
      },
      rating: '4.6',
      reviews: 876,
      colors: ['Platinum Silver'],
      offers: ['Extra ₹10000 off', 'Exchange Bonus'],
      inStock: true
    },
    {
      id: 4,
      name: 'Dell Alienware x14 R1',
      brand: 'Dell',
      type: 'Laptop',
      price: '219990',
      discount: '199990',
      image: 'https://www.themobileindian.com/wp-content/uploads/2023/05/Dell-alienware-x14-r2.jpg',
      specs: {
        cpu: 'Intel Core i7-12700H',
        gpu: 'NVIDIA RTX 3060',
        ram: '16GB',
        storage: '1TB SSD',
        display: '14-inch QHD 165Hz',
        os: 'Windows 11',
        weight: '1.84 kg'
      },
      rating: '4.5',
      reviews: 654,
      colors: ['Dark Side of the Moon'],
      offers: ['No Cost EMI', 'Gaming Bundle'],
      inStock: true
    },

    // HP
    {
      id: 5,
      name: 'HP Spectre x360 14 (2023)',
      brand: 'HP',
      type: 'Laptop',
      price: '149990',
      discount: '134990',
      image: 'https://m.media-amazon.com/images/I/71+8mYd-D9L._SL1500_.jpg',
      specs: {
        cpu: 'Intel Core i7-1255U',
        gpu: 'Intel Iris Xe',
        ram: '16GB',
        storage: '1TB SSD',
        display: '14-inch 3K2K OLED',
        os: 'Windows 11',
        weight: '1.37 kg'
      },
      rating: '4.6',
      reviews: 721,
      colors: ['Nightfall Black', 'Nocturne Blue'],
      offers: ['Bank Offer', 'Free Stylus'],
      inStock: true
    },
    {
      id: 6,
      name: 'HP Omen 16 (2023)',
      brand: 'HP',
      type: 'Laptop',
      price: '129990',
      discount: '114990',
      image: 'https://m.media-amazon.com/images/I/71Yq7UQe3ZL._SL1500_.jpg',
      specs: {
        cpu: 'AMD Ryzen 7 6800H',
        gpu: 'NVIDIA RTX 3060',
        ram: '16GB',
        storage: '1TB SSD',
        display: '16.1-inch QHD 165Hz',
        os: 'Windows 11',
        weight: '2.32 kg'
      },
      rating: '4.4',
      reviews: 543,
      colors: ['Shadow Black'],
      offers: ['No Cost EMI', 'Gaming Mouse Included'],
      inStock: true
    },

    // Lenovo
    {
      id: 7,
      name: 'Lenovo ThinkPad X1 Carbon Gen 10',
      brand: 'Lenovo',
      type: 'Laptop',
      price: '159990',
      discount: '144990',
      image: 'https://m.media-amazon.com/images/I/61nzj4gQxBL._SL1500_.jpg',
      specs: {
        cpu: 'Intel Core i7-1260P',
        gpu: 'Intel Iris Xe',
        ram: '16GB',
        storage: '512GB SSD',
        display: '14-inch WUXGA',
        os: 'Windows 11 Pro',
        weight: '1.12 kg'
      },
      rating: '4.7',
      reviews: 832,
      colors: ['Black'],
      offers: ['Corporate Discount', '3 Years Warranty'],
      inStock: true
    },
    {
      id: 8,
      name: 'Lenovo Legion 5 Pro (2023)',
      brand: 'Lenovo',
      type: 'Laptop',
      price: '139990',
      discount: '124990',
      image: 'https://m.media-amazon.com/images/I/71iw7YQYHUL._SL1500_.jpg',
      specs: {
        cpu: 'AMD Ryzen 7 6800H',
        gpu: 'NVIDIA RTX 3070 Ti',
        ram: '16GB',
        storage: '1TB SSD',
        display: '16-inch WQXGA 165Hz',
        os: 'Windows 11',
        weight: '2.49 kg'
      },
      rating: '4.5',
      reviews: 678,
      colors: ['Storm Grey'],
      offers: ['No Cost EMI', 'Gaming Headset'],
      inStock: true
    },

    // Asus
    {
      id: 9,
      name: 'Asus ROG Zephyrus G14 (2023)',
      brand: 'Asus',
      type: 'Laptop',
      price: '149990',
      discount: '134990',
      image: 'https://m.media-amazon.com/images/I/71iw7YQYHUL._SL1500_.jpg',
      specs: {
        cpu: 'AMD Ryzen 9 7940HS',
        gpu: 'NVIDIA RTX 4060',
        ram: '16GB',
        storage: '1TB SSD',
        display: '14-inch QHD 165Hz',
        os: 'Windows 11',
        weight: '1.72 kg'
      },
      rating: '4.6',
      reviews: 765,
      colors: ['Moonlight White', 'Eclipse Gray'],
      offers: ['No Cost EMI', 'ROG Backpack'],
      inStock: true
    },
    {
      id: 10,
      name: 'Asus ZenBook 14X OLED',
      brand: 'Asus',
      type: 'Laptop',
      price: '99990',
      discount: '89990',
      image: 'https://m.media-amazon.com/images/I/71Yq7UQe3ZL._SL1500_.jpg',
      specs: {
        cpu: 'Intel Core i7-12700H',
        gpu: 'Intel Iris Xe',
        ram: '16GB',
        storage: '512GB SSD',
        display: '14.5-inch 2.8K OLED',
        os: 'Windows 11',
        weight: '1.4 kg'
      },
      rating: '4.5',
      reviews: 543,
      colors: ['Ponder Blue', 'Aqua Celadon'],
      offers: ['Bank Offer', 'Free Mouse'],
      inStock: true
    },

    // Acer
    {
      id: 11,
      name: 'Acer Predator Helios 300',
      brand: 'Acer',
      type: 'Laptop',
      price: '119990',
      discount: '109990',
      image: 'https://m.media-amazon.com/images/I/71+8mYd-D9L._SL1500_.jpg',
      specs: {
        cpu: 'Intel Core i7-12700H',
        gpu: 'NVIDIA RTX 3070 Ti',
        ram: '16GB',
        storage: '1TB SSD',
        display: '15.6-inch QHD 165Hz',
        os: 'Windows 11',
        weight: '2.4 kg'
      },
      rating: '4.4',
      reviews: 432,
      colors: ['Abyssal Black'],
      offers: ['No Cost EMI', 'Predator Mousepad'],
      inStock: true
    },
    {
      id: 12,
      name: 'Acer Swift X SFX14',
      brand: 'Acer',
      type: 'Laptop',
      price: '84990',
      discount: '79990',
      image: 'https://m.media-amazon.com/images/I/61YVqHdFRxL._SL1500_.jpg',
      specs: {
        cpu: 'AMD Ryzen 7 5800U',
        gpu: 'NVIDIA RTX 3050 Ti',
        ram: '16GB',
        storage: '512GB SSD',
        display: '14-inch FHD IPS',
        os: 'Windows 11',
        weight: '1.39 kg'
      },
      rating: '4.3',
      reviews: 321,
      colors: ['Mist Green', 'Safari Gold'],
      offers: ['Bank Offer', 'Free Bag'],
      inStock: true
    },

    // MSI
    {
      id: 13,
      name: 'MSI Stealth 15M',
      brand: 'MSI',
      type: 'Laptop',
      price: '129990',
      discount: '119990',
      image: 'https://m.media-amazon.com/images/I/71QN2VHaK5L._SL1500_.jpg',
      specs: {
        cpu: 'Intel Core i7-1260P',
        gpu: 'NVIDIA RTX 3060',
        ram: '16GB',
        storage: '1TB SSD',
        display: '15.6-inch FHD 144Hz',
        os: 'Windows 11',
        weight: '1.7 kg'
      },
      rating: '4.4',
      reviews: 456,
      colors: ['Carbon Gray'],
      offers: ['No Cost EMI', 'Gaming Mouse'],
      inStock: true
    },
    {
      id: 14,
      name: 'MSI Creator Z16',
      brand: 'MSI',
      type: 'Laptop',
      price: '199990',
      discount: '189990',
      image: 'https://m.media-amazon.com/images/I/71f5Eu5lJSL._SL1500_.jpg',
      specs: {
        cpu: 'Intel Core i9-12900H',
        gpu: 'NVIDIA RTX 3070 Ti',
        ram: '32GB',
        storage: '2TB SSD',
        display: '16-inch QHD+ 120Hz',
        os: 'Windows 11 Pro',
        weight: '2.2 kg'
      },
      rating: '4.6',
      reviews: 289,
      colors: ['Lunar Gray'],
      offers: ['Creator Bundle', '3 Years Warranty'],
      inStock: true
    },

    // Razer
    {
      id: 15,
      name: 'Razer Blade 15 (2023)',
      brand: 'Razer',
      type: 'Laptop',
      price: '249990',
      discount: '239990',
      image: 'https://m.media-amazon.com/images/I/61aUBxqc5PL._SL1500_.jpg',
      specs: {
        cpu: 'Intel Core i9-13950HX',
        gpu: 'NVIDIA RTX 4070',
        ram: '32GB',
        storage: '1TB SSD',
        display: '15.6-inch QHD 240Hz',
        os: 'Windows 11',
        weight: '2.02 kg'
      },
      rating: '4.7',
      reviews: 198,
      colors: ['Black'],
      offers: ['Razer Mouse Included', 'No Cost EMI'],
      inStock: true
    },
    {
      id: 16,
      name: 'Razer Blade 14 (2023)',
      brand: 'Razer',
      type: 'Laptop',
      price: '219990',
      discount: '209990',
      image: 'https://m.media-amazon.com/images/I/71+8mYd-D9L._SL1500_.jpg',
      specs: {
        cpu: 'AMD Ryzen 9 7940HS',
        gpu: 'NVIDIA RTX 4070',
        ram: '16GB',
        storage: '1TB SSD',
        display: '14-inch QHD 165Hz',
        os: 'Windows 11',
        weight: '1.78 kg'
      },
      rating: '4.6',
      reviews: 176,
      colors: ['Mercury White', 'Black'],
      offers: ['Free Razer Headset', 'Extended Warranty'],
      inStock: true
    },

    // Microsoft
    {
      id: 17,
      name: 'Microsoft Surface Laptop 5',
      brand: 'Microsoft',
      type: 'Laptop',
      price: '129990',
      discount: '119990',
      image: 'https://m.media-amazon.com/images/I/61YVqHdFRxL._SL1500_.jpg',
      specs: {
        cpu: 'Intel Core i7-1255U',
        gpu: 'Intel Iris Xe',
        ram: '16GB',
        storage: '512GB SSD',
        display: '15-inch PixelSense',
        os: 'Windows 11',
        weight: '1.54 kg'
      },
      rating: '4.5',
      reviews: 543,
      colors: ['Platinum', 'Sage', 'Black'],
      offers: ['Surface Pen Included', 'No Cost EMI'],
      inStock: true
    },
    {
      id: 18,
      name: 'Microsoft Surface Pro 9',
      brand: 'Microsoft',
      type: '2-in-1',
      price: '149990',
      discount: '139990',
      image: 'https://m.media-amazon.com/images/I/71QN2VHaK5L._SL1500_.jpg',
      specs: {
        cpu: 'Intel Core i7-1255U',
        gpu: 'Intel Iris Xe',
        ram: '16GB',
        storage: '512GB SSD',
        display: '13-inch PixelSense',
        os: 'Windows 11',
        weight: '891 g'
      },
      rating: '4.4',
      reviews: 432,
      colors: ['Platinum', 'Graphite', 'Sapphire'],
      offers: ['Type Cover Included', 'Student Discount'],
      inStock: true
    },

    // Desktops
    {
      id: 19,
      name: 'Apple iMac 24-inch M1',
      brand: 'Apple',
      type: 'All-in-One',
      price: '129900',
      discount: '119900',
      image: 'https://m.media-amazon.com/images/I/61aUBxqc5PL._SL1500_.jpg',
      specs: {
        cpu: 'Apple M1 (8-core)',
        gpu: '7-core GPU',
        ram: '8GB',
        storage: '256GB SSD',
        display: '24-inch 4.5K Retina',
        os: 'macOS',
        weight: '4.48 kg'
      },
      rating: '4.6',
      reviews: 765,
      colors: ['Blue', 'Green', 'Pink', 'Silver'],
      offers: ['Magic Keyboard Included', 'No Cost EMI'],
      inStock: true
    },
    {
      id: 20,
      name: 'HP Envy 34 All-in-One',
      brand: 'HP',
      type: 'All-in-One',
      price: '179990',
      discount: '169990',
      image: 'https://m.media-amazon.com/images/I/71f5Eu5lJSL._SL1500_.jpg',
      specs: {
        cpu: 'Intel Core i7-12700',
        gpu: 'NVIDIA RTX 3060',
        ram: '32GB',
        storage: '1TB SSD + 1TB HDD',
        display: '34-inch 5K UWVA',
        os: 'Windows 11',
        weight: '14.8 kg'
      },
      rating: '4.5',
      reviews: 321,
      colors: ['Nightfall Black'],
      offers: ['Wireless Keyboard/Mouse', '3 Years Warranty'],
      inStock: true
    },
    {
      id: 21,
      name: 'Lenovo IdeaCentre AIO 5i',
      brand: 'Lenovo',
      type: 'All-in-One',
      price: '99990',
      discount: '89990',
      image: 'https://m.media-amazon.com/images/I/71Yq7UQe3ZL._SL1500_.jpg',
      specs: {
        cpu: 'Intel Core i5-12400',
        gpu: 'Intel Iris Xe',
        ram: '16GB',
        storage: '512GB SSD',
        display: '27-inch FHD',
        os: 'Windows 11',
        weight: '8.9 kg'
      },
      rating: '4.3',
      reviews: 234,
      colors: ['Storm Grey'],
      offers: ['Wireless Keyboard/Mouse', 'No Cost EMI'],
      inStock: true
    },
    {
      id: 22,
      name: 'Dell XPS 8960 Desktop',
      brand: 'Dell',
      type: 'Desktop',
      price: '149990',
      discount: '139990',
      image: 'https://m.media-amazon.com/images/I/61nzj4gQxBL._SL1500_.jpg',
      specs: {
        cpu: 'Intel Core i7-13700',
        gpu: 'NVIDIA RTX 4070',
        ram: '32GB',
        storage: '1TB SSD + 2TB HDD',
        display: 'None',
        os: 'Windows 11',
        weight: '14.3 kg'
      },
      rating: '4.5',
      reviews: 198,
      colors: ['Platinum Silver'],
      offers: ['Dell Monitor Discount', '3 Years Warranty'],
      inStock: true
    },
    {
      id: 23,
      name: 'Asus ROG Strix G16CH',
      brand: 'Asus',
      type: 'Desktop',
      price: '139990',
      discount: '129990',
      image: 'https://m.media-amazon.com/images/I/71iw7YQYHUL._SL1500_.jpg',
      specs: {
        cpu: 'Intel Core i7-13700F',
        gpu: 'NVIDIA RTX 4070 Ti',
        ram: '16GB',
        storage: '1TB SSD',
        display: 'None',
        os: 'Windows 11',
        weight: '12.5 kg'
      },
      rating: '4.4',
      reviews: 176,
      colors: ['Black'],
      offers: ['ROG Keyboard/Mouse', 'No Cost EMI'],
      inStock: true
    },
    {
      id: 24,
      name: 'Acer Predator Orion 5000',
      brand: 'Acer',
      type: 'Desktop',
      price: '159990',
      discount: '149990',
      image: 'https://m.media-amazon.com/images/I/71+8mYd-D9L._SL1500_.jpg',
      specs: {
        cpu: 'Intel Core i7-13700KF',
        gpu: 'NVIDIA RTX 4080',
        ram: '32GB',
        storage: '1TB SSD + 2TB HDD',
        display: 'None',
        os: 'Windows 11',
        weight: '15.2 kg'
      },
      rating: '4.6',
      reviews: 143,
      colors: ['Black'],
      offers: ['Predator Monitor Bundle', 'Extended Warranty'],
      inStock: true
    },
    {
      id: 25,
      name: 'MSI Infinite RS 13th',
      brand: 'MSI',
      type: 'Desktop',
      price: '299990',
      discount: '279990',
      image: 'https://m.media-amazon.com/images/I/61YVqHdFRxL._SL1500_.jpg',
      specs: {
        cpu: 'Intel Core i9-13900K',
        gpu: 'NVIDIA RTX 4090',
        ram: '64GB',
        storage: '2TB SSD + 2TB HDD',
        display: 'None',
        os: 'Windows 11 Pro',
        weight: '16.8 kg'
      },
      rating: '4.7',
      reviews: 98,
      colors: ['Black'],
      offers: ['Premium Support', 'No Cost EMI'],
      inStock: true
    }
  ];