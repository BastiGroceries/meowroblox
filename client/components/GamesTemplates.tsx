import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface GameTemplate {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  type: "game" | "template";
  rating: number;
}

const sampleContent: GameTemplate[] = [
  {
    id: 1,
    name: "Adventure Quest Pro",
    price: "$24.99",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
    description:
      "Complete adventure game with quests, NPCs, and multiple levels",
    type: "game",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Modern City Template",
    price: "$18.99",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    description:
      "Fully detailed city template with buildings, roads, and environments",
    type: "template",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Racing Championship",
    price: "$29.99",
    image:
      "https://images.unsplash.com/photo-1558618047-a0e4c5ab6d68?w=400&h=300&fit=crop",
    description: "High-speed racing game with multiple tracks and vehicles",
    type: "game",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Medieval Castle Kit",
    price: "$16.99",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop",
    description: "Complete medieval castle building template with interiors",
    type: "template",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Space Exploration",
    price: "$32.99",
    image:
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop",
    description:
      "Sci-fi space adventure with planets, ships, and alien encounters",
    type: "game",
    rating: 4.9,
  },
  {
    id: 6,
    name: "School Simulator Kit",
    price: "$21.99",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
    description:
      "Complete school building template with classrooms and facilities",
    type: "template",
    rating: 4.5,
  },
];

function ContentCard({ item }: { item: GameTemplate }) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md rounded-2xl overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <CardContent className="p-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">★</span>
              <span className="text-sm font-medium text-gray-600">
                {item.rating}
              </span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              {item.price}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-blue transition-colors">
            {item.name}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {item.description}
          </p>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-3 rounded-xl transition-all duration-200 transform group-hover:scale-105">
          Purchase Now
        </Button>
      </CardFooter>
    </Card>
  );
}

export function GamesTemplates() {
  const games = sampleContent.filter((item) => item.type === "game");
  const templates = sampleContent.filter((item) => item.type === "template");

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-brand-blue-50 to-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Games & Templates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready-to-use games and building templates to jumpstart your Roblox
            creations
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="games" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-white shadow-md rounded-xl p-1">
            <TabsTrigger
              value="games"
              className="data-[state=active]:bg-brand-blue data-[state=active]:text-white rounded-lg transition-all duration-200"
            >
              🎮 Games
            </TabsTrigger>
            <TabsTrigger
              value="templates"
              className="data-[state=active]:bg-brand-blue data-[state=active]:text-white rounded-lg transition-all duration-200"
            >
              🏗️ Templates
            </TabsTrigger>
          </TabsList>

          <TabsContent value="games">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {games.map((game) => (
                <ContentCard key={game.id} item={game} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="templates">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {templates.map((template) => (
                <ContentCard key={template.id} item={template} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* View More Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200"
          >
            Browse All Games
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200"
          >
            View All Templates
          </Button>
        </div>
      </div>
    </section>
  );
}
