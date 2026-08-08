// LISTE DE BASE POUR GENERER
const names = [
  "iPhone 15 Pro Max", "Samsung S24 Ultra", "AirPods Pro 2", "MacBook Pro M3", "Apple Watch 9",
  "Nike Air Max 270", "Adidas Ultraboost", "Gaming Headset RGB", "PS5 Controller", "Xbox Controller",
  "4K Smart TV 55", "Bluetooth Speaker", "DSLR Camera Canon", "Drone DJI Mini 3", "Gaming Chair",
  "Mechanical Keyboard", "Gaming Mouse", "Power Bank 20000", "Smartwatch Fitness", "Perfume Dior",
  "Sunglasses Rayban", "Leather Jacket", "Running Shoes", "Backpack Laptop", "Coffee Maker",
  "Air Fryer", "Robot Vacuum", "LED TV 43", "Soundbar", "Ring Light",
  "Ring Necklace Gold", "Watch Fossil", "Handbag Gucci", "Wallet Leather", "Sneakers Jordan",
  "Hoodie Nike", "Jeans Levi's", "T-shirt Cotton", "Cap Supreme", "Socks Pack 5",
  "Laptop Stand", "USB-C Hub", "Webcam 4K", "Microphone Mic", "Desk Lamp LED",
  "Yoga Mat", "Dumbbell 10kg", "Protein Powder", "Vitamin Pack", "Massage Gun"
];

const descs = [
  "Premium quality with 1 year warranty. Fast delivery and original product",
  "Latest model 2026. High performance and durable design",
  "Best seller product. Free shipping and 30 day returns",
  "Brand new sealed box. 100% authentic with buyer protection",
  "Top rated item. Ships from local warehouse. 24h processing"
];

const addresses = [
  "VENDO Warehouse, Paris, France",
  "VENDO Store, New York, USA",
  "VENDO Hub, Douala, Cameroun",
  "VENDO Center, Lyon, France",
  "VENDO Depot, Los Angeles, USA"
];

const images = [
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500",
  "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9d?w=500",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  "https://images.unsplash.com/photo-1599669454699-248893623440?w=500",
  "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500",
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
  "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500"
];

const countries = ['FR', 'US', 'CM'];

// GENERATE 50 RANDOM PRODUCTS
export const products = Array.from({length: 50}, (_, i) => {
  const basePrice = Math.floor(Math.random() * 1500) + 50; // 50 to 1550
  const country = countries[Math.floor(Math.random() * 3)];

  return {
    id: i + 1,
    nom: names[i] + " " + ["Black", "White", "Pro", "Max", "2026"][Math.floor(Math.random()*5)],
    nom_en: names[i] + " + ["Black", "White", "Pro", "Max", "2026"][Math.floor(Math.random()*5)],
    prix: basePrice,
    prix_plus_5: basePrice + 5, // +5€ for Binance
    desc: descs[Math.floor(Math.random()*descs.length)],
    address: addresses[Math.floor(Math.random()*addresses.length)],
    img: images[Math.floor(Math.random()*images.length)],
    pays: country
  }
});

export const translations = {
  FR: { currency: '€' },
  US: { currency: '$' },
  CM: { currency: 'XAF' }
};
