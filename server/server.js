// const express = require('express');
// const mongoose  = require('mongoose');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const authUser = require('../server/routers/user/user-router')
// const authVendor = require('../server/routers/vendor/vendor-router')
// const contact = require('../server/routers/contact/contact-router')
// const address = require('../server/routers/address/address-router')
// const user = require('../server/routers/user/user-realated-route')
// const scrapRequest = require('../server/routers/user/scrap-request-route')


// //Connection for mongo ,id : suchitrakumar098@gmail.com
// try{
//     mongoose.connect('mongodb+srv://suchitrakumar098:Dalei123@e-kawadiwala.cqjs6.mongodb.net/').then(()=>
//     {
//         console.log("mongo connect successfully");
//     }).catch(()=>{
//         console.log("some error occured while connect to Mongo");
//     })
// }catch(e){
//     console.log(e)
// }


// // creation of server  with express
// const server = express();

// //require middleware 
// server.use(
//     cors({
//         origin : "http://localhost:5173",
//         methods : ['GET','POST','DELETE','PUT'],
//         allowedHeaders :[
//             'content-Type',
//             'Authorization',
//             'Cache-Control',
//             'Expires',
//             'Pragma'
//         ],
//         credentials : true,
//     })
// )
// server.use(cookieParser());
// server.use(express.json());
// server.use('/api/auth/user',authUser);
// server.use('/api/auth/vendor',authVendor);
// server.use('/api/user/address',address);
// server.use('/api/contact',contact);
// server.use('/api/prices',user);
// server.use('/api/scrap',scrapRequest);


// const PORT = 3500;
// server.listen(PORT,()=>{
//     console.log(`Server now running on Port ${PORT}`);
// })



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
try {
    mongoose.connect('mongodb+srv://suchitrakumar098:Dalei123@e-kawadiwala.cqjs6.mongodb.net/')
        .then(() => {
            console.log("Mongo connected successfully");
        })
        .catch((err) => {
            console.log("Error connecting to MongoDB:", err);
        });
} catch (e) {
    console.log("Mongo connection error:", e);
}

// Initialize Express server
const server = express();

// ✅ Correct CORS setup to allow both frontend URLs
const allowedOrigins = [
    'http://localhost:5173',
    'https://final-yr-project-1.onrender.com'
];

server.use(
    cors({
        origin: function (origin, callback) {
            if (!origin) return callback(null, true); // allow Postman, curl, etc.
            if (allowedOrigins.includes(origin)) {
                return callback(null, true);
            } else {
                return callback(new Error('Not allowed by CORS'));
            }
        },
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials: true
    })
);

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
    console.log(`✅ Server running on port ${PORT}`);
});
