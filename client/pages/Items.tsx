import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const itemCategories = [
  {
    id: 1,
    name: "Avatar Accessories",
    description: "Premium accessories to customize your Roblox avatar",
    icon: "👤",
    productCount: 25,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Weapons & Tools",
    description: "Epic weapons and professional building tools",
    icon: "⚔️",
    productCount: 18,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Clothing & Outfits",
    description: "Stylish clothing collections for every occasion",
    icon: "👕",
    productCount: 32,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Pets & Companions",
    description: "Adorable pets to accompany your adventures",
    icon: "🐱",
    productCount: 15,
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Scripts & Code",
    description: "Powerful scripts to enhance your gameplay",
    icon: "💻",
    productCount: 22,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Building Materials",
    description: "Professional building tools and materials",
    icon: "🔧",
    productCount: 28,
    image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=400&h=300&fit=crop"
  }
];

const featuredItems = [
  {
    id: 1,
    name: "Premium Avatar Package",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    category: "Avatar",
    rating: 4.8,
    isNew: true
  },
  {
    id: 2,
    name: "Epic Sword Collection",
    price: "$8.99",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    category: "Weapons",
    rating: 4.7,
    isPopular: true
  },
  {
    id: 3,
    name: "VIP Clothing Pack",
    price: "$9.99",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    category: "Clothing",
    rating: 4.6
  },
  {
    id: 4,
    name: "Pet Collection Bundle",
    price: "$11.99",
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&h=300&fit=crop",
    category: "Pets",
    rating: 4.9,
    isNew: true
  }
];

export default function Items() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-blue-50 to-white py-16 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Premium Roblox Items
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Enhance your Roblox experience with our curated collection of premium items, 
              from avatar accessories to powerful tools and scripts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products/c=all/p=item">
                <Button 
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Browse All Items
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
              >
                Featured Items
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Browse by Category
              </h2>
              <p className="text-lg text-gray-600">
                Find exactly what you're looking for in our organized categories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itemCategories.map((category) => (
                <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md rounded-2xl overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{category.icon}</span>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-brand-blue transition-colors">
                          {category.name}
                        </h3>
                      </div>
                      <p className="text-gray-600">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-brand-blue-50 text-brand-blue">
                          {category.productCount} items
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-6 pt-0">
                    <Link to={`/products/c=${category.name.toLowerCase().replace(/[^a-z0-9]/g, '')}/p=item`} className="w-full">
                      <Button 
                        className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-3 rounded-xl transition-all duration-200 transform group-hover:scale-105"
                      >
                        Explore Category
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Items Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Items
              </h2>
              <p className="text-lg text-gray-600">
                Hand-picked premium items that are trending right now
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredItems.map((item) => (
                <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md rounded-2xl overflow-hidden">
                  <div className="relative">
                    {item.isNew && (
                      <Badge className="absolute top-4 left-4 z-10 bg-green-500 text-white">
                        New
                      </Badge>
                    )}
                    {item.isPopular && (
                      <Badge className="absolute top-4 left-4 z-10 bg-orange-500 text-white">
                        Popular
                      </Badge>
                    )}
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-brand-blue-50 text-brand-blue text-xs">
                          {item.category}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <span className="text-yellow-500 text-sm">★</span>
                          <span className="text-sm font-medium text-gray-600">{item.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-blue transition-colors">
                        {item.name}
                      </h3>
                      <div className="text-xl font-bold text-gray-900">
                        {item.price}
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-4 pt-0">
                    <Button 
                      size="sm"
                      className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-2 rounded-lg transition-all duration-200"
                    >
                      Buy Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/products/c=all/p=item">
                <Button 
                  size="lg"
                  variant="outline" 
                  className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200"
                >
                  View All Items
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
