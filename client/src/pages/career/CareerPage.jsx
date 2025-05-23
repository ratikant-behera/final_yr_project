import React, { useState } from 'react';

const jobsData = [
  {
    id: 1,
    title: 'Collection Executive',
    location: 'Delhi',
    type: 'Full-time',
    description: 'Responsible for overseeing the collection of recyclable materials across Delhi zones. Must be proactive and organized.',
    requirements: '2+ years of experience in field operations, good communication skills.'
  },
  {
    id: 2,
    title: 'Sorting Specialist',
    location: 'Mumbai',
    type: 'Part-time',
    description: 'Work in our warehouse to identify and sort recyclable materials accurately.',
    requirements: 'Prior experience in waste management is preferred.'
  },
  {
    id: 3,
    title: 'Recycling Coordinator',
    location: 'Remote',
    type: 'Full-time',
    description: 'Coordinate with teams and partners for smooth recycling process across India.',
    requirements: 'Strong organizational skills and knowledge of recycling regulations.'
  },
  {
    id: 4,
    title: 'Scanning Assistant',
    location: 'Remote',
    type: 'Full-time',
    description: 'Coordinate with teams and partners for smooth recycling process across India.',
    requirements: 'Strong organizational skills and knowledge of recycling regulations.'
  }
];

const CareerPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', resume: null });

  const handleApply = (job) => setSelectedJob(job);

  const handleChange = (e) => {
    if (e.target.name === 'resume') {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Application submitted for ${selectedJob.title} by ${formData.name}`);
    setSelectedJob(null);
    setFormData({ name: '', email: '', resume: null });
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-green-700">Join Our Mission</h1>
      <p className="mb-6 text-gray-700">Be part of India’s leading sustainable scrap management company.</p>

      <div className="grid gap-6 md:grid-cols-2">
        {jobsData.map((job) => (
          <div key={job.id} className="bg-white shadow-lg rounded p-5 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-green-800">{job.title}</h2>
            <p className="text-gray-600 mt-1">{job.location} • {job.type}</p>
            <p className="mt-2 text-sm text-gray-700"><strong>Description:</strong> {job.description}</p>
            <p className="mt-1 text-sm text-gray-700"><strong>Requirements:</strong> {job.requirements}</p>
            <button
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              onClick={() => handleApply(job)}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
            <h3 className="text-2xl font-bold mb-4">Apply for {selectedJob.title}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded"
              />
              
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="w-full"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Submit Application
              </button>
              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                className="w-full mt-2 bg-gray-300 text-gray-800 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerPage;
