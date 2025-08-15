


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');

// // Import routes
// const authUser = require('../server/routers/user/user-router');
// const authVendor = require('../server/routers/vendor/vendor-router');
// const contact = require('../server/routers/contact/contact-router');
// const address = require('../server/routers/address/address-router');
// const user = require('../server/routers/user/user-realated-route');
// const scrapRequest = require('../server/routers/user/scrap-request-route');

// // Connect to MongoDB
// try {
//     mongoose.connect('mongodb+srv://beheraratikanta436:behera%40436@cluster0.13xkl.mongodb.net/')
//         .then(() => {
//             console.log("Mongo connected successfully");
//         })
//         .catch((err) => {
//             console.log("Error connecting to MongoDB:", err);
//         });
// } catch (e) {
//     console.log("Mongo connection error:", e);
// }

// // Initialize Express server
// const server = express();

// // ✅ Correct CORS setup to allow both frontend URLs
// const allowedOrigins = [
//     // 'http://localhost:5173',
//     'https://final-yr-project-1.onrender.com',
//     'http://localhost:5173',
// ];

// server.use(
//     cors({
//         origin: function (origin, callback) {
//             if (!origin) return callback(null, true); // allow Postman, curl, etc.
//             if (allowedOrigins.includes(origin)) {
//                 return callback(null, true);
//             } else {
//                 return callback(new Error('Not allowed by CORS'));
//             }
//         },
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: [
//             'Content-Type',
//             'Authorization',
//             'Cache-Control',
//             'Expires',
//             'Pragma'
//         ],
//         credentials: true
//     })
// );

// // Middleware
// server.use(cookieParser());
// server.use(express.json());

// // API Routes
// server.use('/api/auth/user', authUser);
// server.use('/api/auth/vendor', authVendor);
// server.use('/api/user/address', address);
// server.use('/api/contact', contact);
// server.use('/api/prices', user);
// server.use('/api/scrap', scrapRequest);

// // Start server
// const PORT = process.env.PORT || 3500;
// server.listen(PORT, () => {
//     console.log(`✅ Server running on port ${PORT}`);
// });








const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Import routes
const authUser = require('../server/routers/user/user-router');
const authVendor = require('../server/routers/vendor/vendor-router');
const contact = require('../server/routers/contact/contact-router');
const address = require('../server/routers/address/address-router');
const user = require('../server/routers/user/user-realated-route');
const scrapRequest = require('../server/routers/user/scrap-request-route');

// Connect to MongoDB
mongoose.connect('mongodb+srv://beheraratikanta436:behera%40436@cluster0.13xkl.mongodb.net/')
  .then(() => {
    console.log("✅ Mongo connected successfully");
  })
  .catch((err) => {
    console.log("❌ Error connecting to MongoDB:", err);
  });

// Initialize Express server
const server = express();

// ✅ CORS config for cookies in production
server.use(cors({
  origin: [
    'https://final-yr-project-1.onrender.com', // deployed frontend
    'http://localhost:5173' // local dev
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Cache-Control',
    'Expires',
    'Pragma'
  ],
  credentials: true
}));

// ✅ Handle OPTIONS preflight for all routes
server.options('*', cors({
  origin: [
    'https://final-yr-project-1.onrender.com',
    'http://localhost:5173'
  ],
  credentials: true
}));

// Middleware
server.use(cookieParser());
server.use(express.json());

// API Routes
server.use('/api/auth/user', authUser);
server.use('/api/auth/vendor', authVendor);
server.use('/api/user/address', address);
server.use('/api/contact', contact);
server.use('/api/prices', user);
server.use('/api/scrap', scrapRequest);

// Start server
const PORT = process.env.PORT || 3500;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
