// ✅ GLOBAL PRODUCT CATALOG
const products = [
  {
    id: 1,
    name: "Running Shoes",
    price: 1000,
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
    description: "High-performance lightweight running shoes designed with advanced cushioning and breathable mesh for maximum comfort and speed."
  },
  {
    id: 2,
    name: "Casual T-Shirt",
    price: 500,
    category: "Clothes",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=500&q=80",
    description: "Premium cotton t-shirt with a soft feel, regular fit, and durable stitching. Perfect for everyday casual styling."
  },
  {
    id: 3,
    name: "Watch",
    price: 1500,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
    description: "A sleek, minimalist analog wrist watch featuring a premium leather strap, scratch-resistant glass, and precise quartz movement."
  },
  {
    id: 4,
    name: "Western Dress",
    price: 1200,
    category: "Clothes",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=500&q=80",
    description: "A gorgeous, elegant western dress tailored for parties or formal outings, combining premium fabric with a modern silhouette."
  },
  
  {
    id: 6,
    name: "Saree",
    price: 1500,
    category: "Clothes",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=500&q=80",
    description: "An elegant, traditional Indian saree woven with intricate borders and rich silk patterns, making it perfect for festive celebrations."
  },
  {
    id: 7,
    name: "Jeans",
    price: 1000,
    category: "Clothes",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=80",
    description: "Classic blue denim jeans made from stretchable cotton denim, offering a slim fit with ultimate comfort and long-term durability."
  },
  {
    id: 8,
    name: "Top",
    price: 600,
    category: "Clothes",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80",
    description: "A fashionable and comfortable women's top featuring a modern neck design, styled for both casual wear and smart office wear."
  },
  {
    id: 9,
    name: "Leather Boots",
    price: 2500,
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=500&q=80",
    description: "Rugged and stylish brown leather boots made with premium water-resistant leather and durable non-slip rubber soles."
  },
  {
    id: 10,
    name: "Casual Sneakers",
    price: 1200,
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&q=80",
    description: "Trendy, colorful sneakers designed for urban street styling. Extremely lightweight and padded for all-day walkability."
  },
  {
    id: 11,
    name: "Premium Suit",
    price: 4500,
    category: "Clothes",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=500&q=80",
    description: "A luxury men's formal suit meticulously tailored from top-grade wool blend fabric. Fits perfectly for weddings and formal meetings."
  },
  {
    id: 12,
    name: "Denim Jacket",
    price: 1800,
    category: "Clothes",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=500&q=80",
    description: "A classic utility denim jacket featuring a stonewashed blue look, metal button closures, and spacious front flap pockets."
  },
  {
    id: 13,
    name: "Floral Summer Dress",
    price: 1400,
    category: "Clothes",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=500&q=80",
    description: "Lightweight and flowy summer dress detailed with beautiful floral designs, ideal for outdoor brunches and warm beach days."
  },
  {
    id: 14,
    name: "Smart Watch",
    price: 2999,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=500&q=80",
    description: "A modern smartwatch equipped with heart rate monitoring, fitness tracking, sleep analysis, and call notifications. Long battery life."
  },
  {
    id: 15,
    name: "Sunglasses",
    price: 800,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=500&q=80",
    description: "Classic retro sunglasses with UV400 protective polarized lenses and a lightweight metallic frame for high comfort and sun safety."
  },
  {
    id: 16,
    name: "Leather Handbag",
    price: 2200,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80",
    description: "A premium leather handbag featuring multiple zippered compartments, secure magnetic locks, and an adjustable shoulder strap."
  },
  {
    id: 17,
    name: "Gold Necklace",
    price: 15000,
    category: "Jewellery",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80",
    description: "An exquisite gold-plated necklace set featuring intricate royal floral designs and encrusted sparkling crystals, perfect for bridal wear."
  },
  {
    id: 18,
    name: "Diamond Ring",
    price: 25000,
    category: "Jewellery",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=500&q=80",
    description: "A stunning, timeless platinum engagement ring featuring a brilliant-cut round solitaire diamond held in a classic six-prong setting."
  },
  
  {
    id: 20,
    name: "Pearl Bracelet",
    price: 3500,
    category: "Jewellery",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=500&q=80",
    description: "A classic single-strand bracelet crafted with high-luster cultured freshwater pearls and a secure sterling silver clasp."
  }
];
