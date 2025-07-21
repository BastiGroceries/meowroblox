import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const gameCategories = [
  {
    id: 1,
    name: "Adventure Games",
    description: "Epic quests and exploration adventures",
    icon: "🗺️",
    productCount: 12,
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Racing Games",
    description: "High-speed racing and vehicle competitions",
    icon: "🏎️",
    productCount: 8,
    image:
      "https://images.unsplash.com/photo-1558618047-a0e4c5ab6d68?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Simulation Games",
    description: "Life simulation and management games",
    icon: "🏠",
    productCount: 15,
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Horror Games",
    description: "Scary survival and horror experiences",
    icon: "👻",
    productCount: 6,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Sci-Fi Games",
    description: "Futuristic space and technology adventures",
    icon: "🚀",
    productCount: 10,
    image:
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Battle Games",
    description: "Combat and strategy battle games",
    icon: "⚔️",
    productCount: 14,
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
  },
];

const featuredGames = [
  {
    id: 1,
    name: "Adventure Quest Pro",
    price: "$24.99",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
    category: "Adventure",
    rating: 4.8,
    players: "1-50",
    isNew: true,
    description:
      "Complete adventure game with quests, NPCs, and multiple levels",
  },
  {
    id: 2,
    name: "Racing Championship",
    price: "$29.99",
    image:
      "https://images.unsplash.com/photo-1558618047-a0e4c5ab6d68?w=400&h=300&fit=crop",
    category: "Racing",
    rating: 4.7,
    players: "1-20",
    isPopular: true,
    description: "High-speed racing game with multiple tracks and vehicles",
  },
  {
    id: 3,
    name: "Space Exploration",
    price: "$32.99",
    image:
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop",
    category: "Sci-Fi",
    rating: 4.9,
    players: "1-100",
    isFeatured: true,
    description:
      "Epic space adventure with planets, ships, and alien encounters",
  },
  {
    id: 4,
    name: "City Builder Pro",
    price: "$26.99",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    category: "Simulation",
    rating: 4.6,
    players: "1-30",
    isNew: true,
    description: "Build and manage your own virtual city",
  },
];

export default function Games() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-blue-50 to-white py-16 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Amazing Roblox Games
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover incredible ready-to-play Roblox games across all genres.
              From epic adventures to competitive racing - find your next
              favorite game!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products/c=all/p=game">
                <Button
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Browse All Games
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
              >
                Top Rated Games
              </Button>
            </div>
          </div>
        </section>

        {/* Game Categories Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Game Categories
              </h2>
              <p className="text-lg text-gray-600">
                Explore games by your favorite genres and themes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gameCategories.map((category) => (
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
                          {category.productCount} games
                        </Badge>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0">
                    <Link
                      to={`/products/c=${category.name.toLowerCase().replace(/[^a-z0-9]/g, "")}/p=game`}
                      className="w-full"
                    >
                      <Button className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-3 rounded-xl transition-all duration-200 transform group-hover:scale-105">
                        Explore Games
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Games Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Games
              </h2>
              <p className="text-lg text-gray-600">
                Top-rated games that are trending and loved by the community
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredGames.map((game) => (
                <Card
                  key={game.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md rounded-2xl overflow-hidden"
                >
                  <div className="lg:flex">
                    <div className="lg:w-1/2 relative">
                      {game.isNew && (
                        <Badge className="absolute top-4 left-4 z-10 bg-green-500 text-white">
                          New
                        </Badge>
                      )}
                      {game.isPopular && (
                        <Badge className="absolute top-4 left-4 z-10 bg-orange-500 text-white">
                          Popular
                        </Badge>
                      )}
                      {game.isFeatured && (
                        <Badge className="absolute top-4 left-4 z-10 bg-brand-blue text-white">
                          Featured
                        </Badge>
                      )}
                      <div className="aspect-[4/3] lg:aspect-square overflow-hidden">
                        <img
                          src={game.image}
                          alt={game.name}
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
                            {game.category}
                          </Badge>
                          <div className="flex items-center space-x-1">
                            <span className="text-yellow-500">★</span>
                            <span className="text-sm font-medium text-gray-600">
                              {game.rating}
                            </span>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors mb-2">
                            {game.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">
                            {game.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>👥 {game.players} players</span>
                          <span className="text-xl font-bold text-gray-900">
                            {game.price}
                          </span>
                        </div>
                      </div>

                      <Button className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-3 rounded-xl transition-all duration-200 mt-4">
                        Play Now
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/products/c=all/p=game">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200"
                >
                  View All Games
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-brand-blue text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join Millions of Players
              </h2>
              <p className="text-xl text-blue-100">
                Our games are loved by players worldwide
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500K+</div>
                <div className="text-blue-200">Active Players</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">65+</div>
                <div className="text-blue-200">Games Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">4.8</div>
                <div className="text-blue-200">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">Support</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
