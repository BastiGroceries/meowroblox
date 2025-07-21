import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

interface Item {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  featured?: boolean;
}

const sampleItems: Item[] = [
  {
    id: 1,
    name: "Premium Avatar Package",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    category: "Avatar",
    featured: true
  },
  {
    id: 2,
    name: "Epic Sword Collection",
    price: "$8.99",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    category: "Weapons"
  },
  {
    id: 3,
    name: "Robux Generator Script",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
    category: "Scripts",
    featured: true
  },
  {
    id: 4,
    name: "Building Tools Pro",
    price: "$6.99",
    image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=400&h=300&fit=crop",
    category: "Tools"
  },
  {
    id: 5,
    name: "VIP Clothing Pack",
    price: "$9.99",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    category: "Clothing"
  },
  {
    id: 6,
    name: "Pet Collection Bundle",
    price: "$11.99",
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&h=300&fit=crop",
    category: "Pets",
    featured: true
  }
];

export function ItemsShowcase() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Items
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular Roblox items, carefully selected for the best gaming experience
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sampleItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md rounded-2xl overflow-hidden">
              <div className="relative">
                {item.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-brand-blue font-medium bg-brand-blue-50 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xl font-bold text-gray-900">
                      {item.price}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-blue transition-colors">
                    {item.name}
                  </h3>
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

        {/* View All Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200"
          >
            View All Items
          </Button>
        </div>
      </div>
    </section>
  );
}
