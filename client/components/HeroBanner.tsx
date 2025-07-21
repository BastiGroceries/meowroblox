import { Button } from "./ui/button";

export function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-br from-brand-blue-50 to-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Welcome to{" "}
                <span className="text-brand-blue bg-gradient-to-r from-brand-blue to-brand-blue-dark bg-clip-text text-transparent">
                  Meow Roblox Store
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                Discover amazing Roblox items, games, and templates. Everything
                you need to enhance your Roblox experience in one place.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
              >
                Start Shopping
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
              >
                Browse Categories
              </Button>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-4">
                <div className="w-full h-48 bg-gradient-to-br from-brand-blue-100 to-brand-blue-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">🎮</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Premium Items
                    </h3>
                    <p className="text-gray-600">Exclusive Roblox content</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-brand-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">⚡</div>
                    <div className="text-sm font-medium text-gray-700">
                      Instant Access
                    </div>
                  </div>
                  <div className="bg-brand-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">🔒</div>
                    <div className="text-sm font-medium text-gray-700">
                      Secure Purchase
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
