export type ProductAvailability = "InStock" | "OutOfStock" | "PreOrder";

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string[];
  price: number;
  currency: string;
  image: string;
  availability: ProductAvailability;
  brand: string;
  sku: string;
  rating?: number;
  reviewCount?: number;
}

const products: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones Pro",
    description: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and crystal-clear sound quality. Perfect for music lovers and professionals on the go.",
    category: ["Electronics", "Audio", "Headphones"],
    price: 199.99,
    currency: "USD",
    image: "/images/wireless-headphones-pro.jpg",
    availability: "InStock",
    brand: "AudioTech",
    sku: "ATH-WHP-001",
    rating: 4.5,
    reviewCount: 324,
  },
  {
    id: "2",
    name: "Organic Cotton T-Shirt",
    description: "Comfortable and sustainable organic cotton t-shirt made from 100% certified organic materials. Soft, breathable, and perfect for everyday wear. Available in multiple colors.",
    category: ["Clothing", "Apparel", "T-Shirts"],
    price: 29.99,
    currency: "USD",
    image: "/images/organic-cotton-tshirt.jpg",
    availability: "InStock",
    brand: "EcoWear",
    sku: "EW-OC-TS-002",
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: "3",
    name: "Stainless Steel Water Bottle",
    description: "Durable 32oz insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours. BPA-free, leak-proof design with a wide mouth for easy cleaning.",
    category: ["Home & Kitchen", "Drinkware", "Water Bottles"],
    price: 34.99,
    currency: "USD",
    image: "/images/stainless-steel-bottle.jpg",
    availability: "InStock",
    brand: "HydroLife",
    sku: "HL-SSB-003",
    rating: 4.8,
    reviewCount: 892,
  },
  {
    id: "4",
    name: "Premium Coffee Beans - Dark Roast",
    description: "Artisan-roasted single-origin coffee beans from Ethiopia. Rich, bold flavor with notes of chocolate and caramel. Perfect for espresso and drip coffee. 12oz bag.",
    category: ["Food & Beverage", "Coffee", "Coffee Beans"],
    price: 18.99,
    currency: "USD",
    image: "/images/premium-coffee-beans.jpg",
    availability: "InStock",
    brand: "RoastMaster",
    sku: "RM-PCB-005",
    rating: 4.9,
    reviewCount: 234,
  },
];

/**
 * Returns all available products
 */
export function getAllProducts(): Product[] {
  return products;
}

/**
 * Returns a product by its ID, or null if not found
 * @param id - The product ID to search for
 */
export function getProductById(id: string): Product | null {
  return products.find((product) => product.id === id) || null;
}
