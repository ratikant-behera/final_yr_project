import React, { useState } from 'react';

const SellEWastePage = () => {
  const [form, setForm] = useState({ name: '', email: '', item: '', address: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const eWasteItems = [
    { name: 'Mobile Phones', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80' },
  { name: 'Laptops', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80' },
  { name: 'Televisions', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80' },
  { name: 'Batteries', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80' },
  { name: 'Washing Machines', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80' },
  { name: 'Air Conditioners', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-green-700">Sell Your E-Waste</h1>
        <p className="text-gray-700 text-lg">
          Turn your old electronics into cash and help the environment. Schedule a pickup today!
        </p>
      </header>

      {/* Steps */}
      <section className="grid md:grid-cols-3 gap-6 text-center">
        {[
          { title: '1. Select Item', desc: 'Choose what you want to sell from our accepted list.' },
          { title: '2. Schedule Pickup', desc: 'Enter your details and address for doorstep service.' },
          { title: '3. Get Paid', desc: 'We verify the item and pay you on the spot or online.' },
        ].map(({ title, desc }) => (
          <div key={title} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h2 className="text-2xl text-green-600 font-bold mb-2">{title}</h2>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </section>

      {/* E-waste Items */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Items We Accept</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {eWasteItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <img src={item.img} alt={item.name} className="h-40 w-full object-cover rounded-t-lg" />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pickup Form */}
      <section className="bg-green-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Schedule a Pickup</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-green-400 p-2 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-green-400 p-2 rounded"
            />
            <input
              type="text"
              name="item"
              placeholder="Item to Sell (e.g., Laptop)"
              value={form.item}
              onChange={handleChange}
              required
              className="w-full border border-green-400 p-2 rounded"
            />
            <textarea
              name="address"
              placeholder="Pickup Address"
              value={form.address}
              onChange={handleChange}
              required
              className="w-full border border-green-400 p-2 rounded"
            />
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition"
            >
              Book Pickup
            </button>
          </form>
        ) : (
          <div className="text-green-800 font-medium">
            ✅ Thank you {form.name}, your pickup for <strong>{form.item}</strong> is scheduled! We'll contact you soon.
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 mt-10 text-sm">
        ♻️ Recycling electronics keeps our planet cleaner. Let’s do this together!
      </footer>
    </div>
  );
};

export default SellEWastePage;
