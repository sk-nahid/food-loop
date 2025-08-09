import React from "react";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">About FoodLoopBD</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Reducing food waste. Helping communities. Connecting donors and requesters for a sustainable future.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 space-y-12">
        
        {/* Mission Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className=" leading-relaxed">
              At <strong>FoodLoopBD</strong>, our mission is to fight food waste and hunger 
              by creating a platform where individuals, restaurants, and organizations can 
              share surplus food with those who need it. 
              We believe in the power of community and technology to bring people together 
              for a sustainable cause.
            </p>
          </div>
          <img
            src="https://i.ibb.co.com/ZzZhqkjG/elaine-casap-qg-HGDbb-SNm8-unsplash.jpg"
            alt="Mission"
            className="rounded-lg shadow-lg object-cover h-64 w-full"
          />
        </section>

        {/* How It Works */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">1. Post Food</h3>
              <p className="text-gray-600">Donors post details of surplus food including quantity, type, and pickup location.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">2. Request Food</h3>
              <p className="text-gray-600">Nearby requesters browse available listings and request what they need.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">3. Share & Connect</h3>
              <p className="text-gray-600">Donors and requesters coordinate pickup, reducing waste and helping communities.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary text-white text-center py-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
          <p className="max-w-xl mx-auto mb-6">
            Every meal matters. Be part of the change by donating food, requesting help, or 
            spreading the word about FoodLoopBD.
          </p>
          <Link to="/register" className="btn btn-secondary">
            Get Started
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
