import React, { useState } from 'react';

const ZeroWasteSocietyPage = () => {
  const [pledgeForm, setPledgeForm] = useState({ name: '', email: '' });
  const [pledged, setPledged] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPledgeForm({ ...pledgeForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPledged(true);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-green-700">Join the Zero Waste Society</h1>
        <p className="text-gray-700 text-lg">
          A cleaner planet starts with you. Reduce, reuse, recycle – and rethink your waste.
        </p>
      </header>

      {/* Step-by-step guide */}
      <section className="grid md:grid-cols-3 gap-6 text-center">
        {[
          { title: '1. Refuse', desc: 'Say no to plastic bags, single-use cutlery, and freebies.' },
          { title: '2. Reduce', desc: 'Buy only what you need. Go paperless. Choose minimal packaging.' },
          { title: '3. Reuse & Recycle', desc: 'Use cloth bags, glass jars, and recycle your items properly.' },
        ].map(({ title, desc }) => (
          <div key={title} className="bg-white p-6 rounded shadow hover:shadow-md transition">
            <h2 className="text-2xl text-green-600 font-bold mb-2">{title}</h2>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </section>

      {/* Take the Pledge */}
      <section className="bg-green-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Take the Zero Waste Pledge</h2>
        {!pledged ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={pledgeForm.name}
              onChange={handleChange}
              required
              className="w-full border border-green-400 p-2 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={pledgeForm.email}
              onChange={handleChange}
              required
              className="w-full border border-green-400 p-2 rounded"
            />
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition"
            >
              I Pledge
            </button>
          </form>
        ) : (
          <div className="text-green-800 font-medium">
            🌿 Thank you, {pledgeForm.name}, for pledging to live with less waste!
          </div>
        )}
      </section>

      {/* Impact Cards */}
      <section className="grid md:grid-cols-2 gap-6">
        {[
          { stat: '95%', text: 'of plastic is never recycled globally.' },
          { stat: '1M+', text: 'plastic bottles are bought every minute worldwide.' },
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded shadow">
            <h3 className="text-3xl font-bold text-green-700">{item.stat}</h3>
            <p className="text-gray-700 mt-2">{item.text}</p>
          </div>
        ))}
      </section>

      {/* FAQs */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-green-700">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="border p-4 rounded">
            <summary className="cursor-pointer font-semibold">What is a zero waste lifestyle?</summary>
            <p className="mt-2 text-gray-700">
              It's about reducing what we send to landfills by reusing, recycling, and composting.
            </p>
          </details>
          <details className="border p-4 rounded">
            <summary className="cursor-pointer font-semibold">Do I need to be perfect to join?</summary>
            <p className="mt-2 text-gray-700">
              Not at all! Every small action counts. Start with simple swaps like reusable bottles.
            </p>
          </details>
          <details className="border p-4 rounded">
            <summary className="cursor-pointer font-semibold">Is zero waste expensive?</summary>
            <p className="mt-2 text-gray-700">
              Actually, it often saves money by encouraging mindful buying and reuse.
            </p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 mt-10 text-sm">
        🌍 Together, we can make a difference. #ZeroWasteSociety
      </footer>
    </div>
  );
};

export default ZeroWasteSocietyPage;
