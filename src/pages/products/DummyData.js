export const productData = [
  {
    name: "Jan",
    Sales: 4000,
  },
  {
    name: "Feb",
    Sales: 3000,
  },
  {
    name: "Mar",
    Sales: 5000,
  },
  {
    name: "Apr",
    Sales: 2780,
  },
  {
    name: "May",
    Sales: 1890,
  },
  {
    name: "Jun",
    Sales: 2390,
  },
  {
    name: "Jul",
    Sales: 3490,
  },
];

export const mockProducts = [
  {
    id: 1,
    name: "Premium Milk",
    category: "dairy",
    price: 3.99,
    discountPrice: 3.49,
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
    description: "Organic whole milk from grass-fed cows.",
    image: "https://cdn.theatlantic.com/thumbor/MAp_MfXXLZpH6CyMHf9LfaJjdnM=/458x43:1523x1108/540x540/media/img/mt/2024/10/Atlantic_Milk_2000x1125/original.jpg",
    images: [
      "https://cdn.theatlantic.com/thumbor/MAp_MfXXLZpH6CyMHf9LfaJjdnM=/458x43:1523x1108/540x540/media/img/mt/2024/10/Atlantic_Milk_2000x1125/original.jpg",
      "https://www.organicvalley.coop/imgproxy/v__/r0_500x500__s800x800/dpr_2.0/w_500/h_500/q_auto,f_auto,fl_lossy,c_fill,g_auto/orgamicvalley/products/0003/0429/2%25_Organic_Milk_Half_Gallon_Carton_Whole_front.png",
      "https://m.media-amazon.com/images/I/71hU1x1XpZL._SL1500_.jpg"
    ],
    details: {
      brand: "Organic Valley",
      weight: "1 Gallon",
      shelfLife: "14 days",
      ingredients: "Organic milk",
      nutritionalInfo: {
        calories: 150,
        fat: 8,
        protein: 8,
        carbs: 12
      }
    }
  },
  {
    id: 2,
    name: "Organic Eggs",
    category: "dairy",
    price: 5.99,
    discountPrice: 4.99,
    rating: 4.7,
    reviewCount: 215,
    inStock: true,
    description: "Free-range organic eggs from happy chickens.",
    image: "https://m.media-amazon.com/images/I/71hU1x1XpZL._SL1500_.jpg",
    details: {
      brand: "Happy Hens",
      weight: "12 count",
      shelfLife: "30 days",
      ingredients: "Organic eggs",
      nutritionalInfo: {
        calories: 70,
        fat: 5,
        protein: 6,
        carbs: 0
      }
    }
  },
  // Add more products as needed
];

export const mockCategories = [
  { id: "all", name: "All Products" },
  { id: "dairy", name: "Dairy" },
  { id: "fruits", name: "Fruits & Vegetables" },
  { id: "meat", name: "Meat & Poultry" },
  { id: "bakery", name: "Bakery" },
  { id: "beverages", name: "Beverages" },
];