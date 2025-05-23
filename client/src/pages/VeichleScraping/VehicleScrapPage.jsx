import React, { useState } from 'react';

const VehicleScrapPage = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    contact: '',
    vehicleNumber: '',
    vehicleType: 'Car',
    rcBook: null,
    idProof: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-green-700 mb-4">Scrap Your Old Vehicle</h1>
      <p className="mb-6 text-gray-700">
        We help you legally scrap your old vehicle and get the best value with a certificate of destruction.
      </p>

      <section className="mb-10 grid md:grid-cols-3 gap-6 text-center">
        {[
          { step: '1', title: 'Submit Vehicle Details' },
          { step: '2', title: 'Pickup & Inspection' },
          { step: '3', title: 'Get Paid & Certificate' },
        ].map((item) => (
          <div key={item.step} className="bg-white p-6 shadow rounded hover:shadow-md transition">
            <h2 className="text-green-600 text-2xl font-bold mb-2">Step {item.step}</h2>
            <p className="text-gray-700">{item.title}</p>
          </div>
        ))}
      </section>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow space-y-4"
          encType="multipart/form-data"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Vehicle Information</h2>
          <input
            type="text"
            name="ownerName"
            placeholder="Owner's Name"
            value={formData.ownerName}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="vehicleNumber"
            placeholder="Vehicle Number (e.g., DL09CD1234)"
            value={formData.vehicleNumber}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <select
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option>Car</option>
            <option>Bike</option>
            <option>Truck</option>
            <option>Bus</option>
            <option>Other</option>
          </select>
          <div>
            <label className="block mb-1">Upload RC Book (PDF or Image)</label>
            <input
              type="file"
              name="rcBook"
              accept=".pdf, image/*"
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Upload ID Proof</label>
            <input
              type="file"
              name="idProof"
              accept=".pdf, image/*"
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
          >
            Submit Request
          </button>
        </form>
      ) : (
        <div className="bg-green-100 border border-green-400 text-green-700 p-6 rounded">
          <h3 className="text-xl font-bold mb-2">Request Submitted Successfully!</h3>
          <p>Thank you, {formData.ownerName}. Our team will contact you soon for pickup and further processing.</p>
        </div>
      )}

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="border p-4 rounded">
            <summary className="font-semibold cursor-pointer">What documents are needed?</summary>
            <p className="mt-2 text-gray-700">RC book and a valid government ID proof are required.</p>
          </details>
          <details className="border p-4 rounded">
            <summary className="font-semibold cursor-pointer">How is the scrap value calculated?</summary>
            <p className="mt-2 text-gray-700">Based on the type, age, and weight of the vehicle.</p>
          </details>
          <details className="border p-4 rounded">
            <summary className="font-semibold cursor-pointer">Do I get a certificate?</summary>
            <p className="mt-2 text-gray-700">Yes, you will receive a government-approved Certificate of Destruction.</p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default VehicleScrapPage;
