import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Badge } from "../components/ui/badge";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  type: "item" | "game" | "template";
  rating: number;
  description: string;
  featured?: boolean;
}

const allProducts: Product[] = [
  // Items
  {
    id: 1,
    name: "Premium Avatar Package",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    category: "Avatar",
    type: "item",
    rating: 4.8,
    description: "Complete avatar makeover with exclusive accessories",
    featured: true
  },
  {
    id: 2,
    name: "Epic Sword Collection",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    category: "Weapons",
    type: "item",
    rating: 4.7,
    description: "Legendary swords for epic battles"
  },
  {
    id: 3,
    name: "VIP Clothing Pack",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    category: "Clothing",
    type: "item",
    rating: 4.6,
    description: "Exclusive clothing collection for stylish avatars"
  },
  {
    id: 4,
    name: "Pet Collection Bundle",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&h=300&fit=crop",
    category: "Pets",
    type: "item",
    rating: 4.9,
    description: "Adorable pet companions for your adventures",
    featured: true
  },
  {
    id: 5,
    name: "Building Tools Pro",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=400&h=300&fit=crop",
    category: "Tools",
    type: "item",
    rating: 4.5,
    description: "Professional building tools for creators"
  },
  
  // Games
  {
    id: 6,
    name: "Adventure Quest Pro",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
    category: "Adventure",
    type: "game",
    rating: 4.8,
    description: "Complete adventure game with quests and NPCs"
  },
  {
    id: 7,
    name: "Racing Championship",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1558618047-a0e4c5ab6d68?w=400&h=300&fit=crop",
    category: "Racing",
    type: "game",
    rating: 4.7,
    description: "High-speed racing with multiple tracks"
  },
  {
    id: 8,
    name: "Space Exploration",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop",
    category: "Sci-Fi",
    type: "game",
    rating: 4.9,
    description: "Epic space adventure with alien encounters",
    featured: true
  },
  {
    id: 9,
    name: "Zombie Survival",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    category: "Horror",
    type: "game",
    rating: 4.6,
    description: "Survive the zombie apocalypse"
  },
  
  // Templates
  {
    id: 10,
    name: "Modern City Template",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    category: "City",
    type: "template",
    rating: 4.9,
    description: "Complete city template with buildings and roads"
  },
  {
    id: 11,
    name: "Medieval Castle Kit",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop",
    category: "Medieval",
    type: "template",
    rating: 4.6,
    description: "Medieval castle with detailed interiors"
  },
  {
    id: 12,
    name: "School Simulator Kit",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
    category: "Educational",
    type: "template",
    rating: 4.5,
    description: "Complete school building template"
  },
  {
    id: 13,
    name: "Futuristic Base Template",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    category: "Sci-Fi",
    type: "template",
    rating: 4.8,
    description: "Advanced futuristic base design",
    featured: true
  }
];

type SortOption = "name-asc" | "name-desc" | "price-low" | "price-high" | "rating-high" | "rating-low" | "featured";

export default function Products() {
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  
  const categoryFilter = searchParams.get("c") || "all";
  const typeFilter = searchParams.get("p") || "all";

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts;

    // Filter by category
    if (categoryFilter !== "all") {
      filtered = filtered.filter(product => 
        product.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }

    // Filter by type
    if (typeFilter !== "all") {
      filtered = filtered.filter(product => product.type === typeFilter);
    }

    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating-high":
          return b.rating - a.rating;
        case "rating-low":
          return a.rating - b.rating;
        case "featured":
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        default:
          return 0;
      }
    });

    return sorted;
  }, [categoryFilter, typeFilter, sortBy]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  All Products
                </h1>
                <p className="text-gray-600">
                  Showing {filteredAndSortedProducts.length} products
                  {categoryFilter !== "all" && ` in ${categoryFilter}`}
                  {typeFilter !== "all" && ` (${typeFilter}s)`}
                </p>
              </div>
              
              {/* Sort Controls */}
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700">Sort by:</span>
                <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured First</SelectItem>
                    <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                    <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                    <SelectItem value="price-low">Price (Low to High)</SelectItem>
                    <SelectItem value="price-high">Price (High to Low)</SelectItem>
                    <SelectItem value="rating-high">Rating (High to Low)</SelectItem>
                    <SelectItem value="rating-low">Rating (Low to High)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-8 p-4 bg-brand-blue-50 rounded-xl">
            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-sm font-medium text-gray-700">Active Filters:</span>
              
              {categoryFilter !== "all" && (
                <Badge variant="secondary" className="bg-brand-blue text-white">
                  Category: {categoryFilter}
                </Badge>
              )}
              
              {typeFilter !== "all" && (
                <Badge variant="secondary" className="bg-brand-blue text-white">
                  Type: {typeFilter}
                </Badge>
              )}
              
              {(categoryFilter !== "all" || typeFilter !== "all") && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.location.href = "/products/c=all/p=all"}
                  className="text-brand-blue hover:text-brand-blue-dark"
                >
                  Clear All Filters
                </Button>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md rounded-2xl overflow-hidden">
                <div className="relative">
                  {product.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-brand-blue text-white">
                        Featured
                      </Badge>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="outline" className="bg-white/90 text-gray-700">
                      {product.type}
                    </Badge>
                  </div>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-brand-blue-50 text-brand-blue">
                        {product.category}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm font-medium text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-blue transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="text-xl font-bold text-gray-900">
                      ${product.price}
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0">
                  <Button 
                    className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-3 rounded-xl transition-all duration-200 transform group-hover:scale-105"
                  >
                    Buy Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters or search criteria</p>
              <Button 
                onClick={() => window.location.href = "/products/c=all/p=all"}
                className="bg-brand-blue hover:bg-brand-blue-dark text-white"
              >
                View All Products
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
