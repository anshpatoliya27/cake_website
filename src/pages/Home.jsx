import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/home.css";
import ExploreSection from "../components/Exploreselection";

export default function Home({ onNavigate }) {
  return (
    <div className="bg-[#fff] text-gray-800">

      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">

        {/* Left */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Fresh Homemade <br />
            <span className="text-pink-500">Eggless Cakes 🎂</span>
          </h1>

          <p className="mt-4 text-gray-600">
            Made with love in Ahmedabad 💖 <br />
            Pre-order your favorite cake at least 1 day in advance.
          </p>

          <div className="mt-6 flex gap-4">
            <button
              onClick={() => onNavigate && onNavigate("customize")}
              className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-600"
            >
              Order Now
            </button>

            <button className="border px-6 py-3 rounded-lg hover:bg-gray-100">
              View Cakes
            </button>
          </div>
        </div>

        {/* Right Image */}
        <img
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
          className="w-[350px] mt-10 md:mt-0 rounded-xl soft-shadow"
        />
      </section>

      {/* Categories / Highlights */}
      <section className="px-6 md:px-16 mt-16">
        <h2 className="text-2xl font-semibold mb-6">
          Popular Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            "Birthday Cakes",
            "Chocolate Cakes",
            "Photo Cakes",
            "Anniversary Cakes"
          ].map((item, i) => (
            <div
              key={i}
              className="card-hover bg-white rounded-xl p-4 text-center soft-shadow"
            >
              <img
                src="https://images.unsplash.com/photo-1603532648955-039310d9ed75"
                className="w-full h-32 object-cover rounded-lg"
              />
              <p className="mt-3 text-sm font-medium">{item}</p>
            </div>
          ))}

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 md:px-16 mt-20">
        <h2 className="text-2xl font-semibold mb-6">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 bg-white rounded-xl soft-shadow">
            <h3 className="font-semibold text-pink-500">🎂 100% Eggless</h3>
            <p className="mt-2 text-sm text-gray-600">
              Pure vegetarian cakes made with premium ingredients.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl soft-shadow">
            <h3 className="font-semibold text-pink-500">⏰ Fresh on Order</h3>
            <p className="mt-2 text-sm text-gray-600">
              Every cake is freshly baked after you place the order.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl soft-shadow">
            <h3 className="font-semibold text-pink-500">📍 Pickup Only</h3>
            <p className="mt-2 text-sm text-gray-600">
              Available in Ahmedabad for pickup.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 mt-20 text-center">
        <h2 className="text-3xl font-bold">
          Make Your Moments Sweeter 🎉
        </h2>

        <button
          onClick={() => onNavigate && onNavigate("customize")}
          className="mt-6 bg-pink-500 text-white px-8 py-3 rounded-lg shadow hover:bg-pink-600"
        >
          Customize Your Cake ✨
        </button>
      </section>
      <ExploreSection />

      <Footer />
    </div>
  );
}