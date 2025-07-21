import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const templateCategories = [
  {
    id: 1,
    name: "City & Urban",
    description: "Modern cities, buildings, and urban environments",
    icon: "🏙️",
    productCount: 15,
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Medieval & Fantasy",
    description: "Castles, kingdoms, and magical realms",
    icon: "🏰",
    productCount: 12,
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Educational",
    description: "Schools, libraries, and learning environments",
    icon: "🎓",
    productCount: 10,
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Sci-Fi & Futuristic",
    description: "Space stations, futuristic bases, and tech environments",
    icon: "🛸",
    productCount: 8,
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Nature & Landscapes",
    description: "Forests, mountains, beaches, and natural environments",
    icon: "🌲",
    productCount: 14,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Commercial & Business",
    description: "Shops, malls, offices, and commercial buildings",
    icon: "🏢",
    productCount: 11,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
  },
];

const featuredTemplates = [
  {
    id: 1,
    name: "Modern City Template",
    price: "$18.99",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    category: "City",
    rating: 4.9,
    complexity: "Advanced",
    buildTime: "2-3 hours",
    isNew: true,
    description:
      "Complete city template with buildings, roads, and detailed environments",
  },
  {
    id: 2,
    name: "Medieval Castle Kit",
    price: "$16.99",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop",
    category: "Medieval",
    rating: 4.6,
    complexity: "Intermediate",
    buildTime: "1-2 hours",
    isPopular: true,
    description: "Medieval castle building template with detailed interiors",
  },
  {
    id: 3,
    name: "Futuristic Base Template",
    price: "$25.99",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    category: "Sci-Fi",
    rating: 4.8,
    complexity: "Advanced",
    buildTime: "3-4 hours",
    isFeatured: true,
    description: "Advanced futuristic base with high-tech facilities",
  },
  {
    id: 4,
    name: "School Campus Kit",
    price: "$21.99",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
    category: "Educational",
    rating: 4.5,
    complexity: "Beginner",
    buildTime: "1 hour",
    isNew: true,
    description:
      "Complete school building template with classrooms and facilities",
  },
];

const complexityColors = {
  Beginner: "bg-green-100 text-green-800",
  Intermediate: "bg-yellow-100 text-yellow-800",
  Advanced: "bg-red-100 text-red-800",
};

export default function Templates() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-blue-50 to-white py-16 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Building Templates & Kits
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Jump-start your Roblox creations with our professionally designed
              templates. From modern cities to medieval castles - build faster
              with pre-made designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products/c=all/p=template">
                <Button
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Browse All Templates
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
              >
                Free Templates
              </Button>
            </div>
          </div>
        </section>

        {/* Template Categories Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Template Categories
              </h2>
              <p className="text-lg text-gray-600">
                Find the perfect template for your next Roblox project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {templateCategories.map((category) => (
                <Card
                  key={category.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md rounded-2xl overflow-hidden"
                >
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
                      <p className="text-gray-600">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge
                          variant="secondary"
                          className="bg-brand-blue-50 text-brand-blue"
                        >
                          {category.productCount} templates
                        </Badge>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0">
                    <Link
                      to={`/products/c=${category.name.toLowerCase().replace(/[^a-z0-9]/g, "")}/p=template`}
                      className="w-full"
                    >
                      <Button className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-3 rounded-xl transition-all duration-200 transform group-hover:scale-105">
                        Browse Templates
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Templates Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Templates
              </h2>
              <p className="text-lg text-gray-600">
                Premium templates crafted by professional designers
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredTemplates.map((template) => (
                <Card
                  key={template.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md rounded-2xl overflow-hidden"
                >
                  <div className="lg:flex">
                    <div className="lg:w-1/2 relative">
                      {template.isNew && (
                        <Badge className="absolute top-4 left-4 z-10 bg-green-500 text-white">
                          New
                        </Badge>
                      )}
                      {template.isPopular && (
                        <Badge className="absolute top-4 left-4 z-10 bg-orange-500 text-white">
                          Popular
                        </Badge>
                      )}
                      {template.isFeatured && (
                        <Badge className="absolute top-4 left-4 z-10 bg-brand-blue text-white">
                          Featured
                        </Badge>
                      )}
                      <div className="aspect-[4/3] lg:aspect-square overflow-hidden">
                        <img
                          src={template.image}
                          alt={template.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    <CardContent className="lg:w-1/2 p-6 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Badge
                            variant="secondary"
                            className="bg-brand-blue-50 text-brand-blue"
                          >
                            {template.category}
                          </Badge>
                          <div className="flex items-center space-x-1">
                            <span className="text-yellow-500">★</span>
                            <span className="text-sm font-medium text-gray-600">
                              {template.rating}
                            </span>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors mb-2">
                            {template.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">
                            {template.description}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Complexity:</span>
                            <Badge
                              className={
                                complexityColors[
                                  template.complexity as keyof typeof complexityColors
                                ]
                              }
                            >
                              {template.complexity}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Build Time:</span>
                            <span className="text-gray-800 font-medium">
                              {template.buildTime}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 text-sm">
                              Price:
                            </span>
                            <span className="text-xl font-bold text-gray-900">
                              {template.price}
                            </span>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-3 rounded-xl transition-all duration-200 mt-4">
                        Download Template
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/products/c=all/p=template">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200"
                >
                  View All Templates
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Templates?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-brand-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Save Time
                </h3>
                <p className="text-gray-600">
                  Skip hours of building with our ready-to-use templates. Focus
                  on customization and gameplay.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-brand-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Professional Design
                </h3>
                <p className="text-gray-600">
                  All templates are crafted by experienced designers with
                  attention to detail and aesthetics.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-brand-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Easy to Customize
                </h3>
                <p className="text-gray-600">
                  Our templates are built with modularity in mind, making
                  customization simple and flexible.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
