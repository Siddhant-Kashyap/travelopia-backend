const express = require('express');
const connectDB = require('./utility/db')
    const app = express();
    const router = require('./routes');
    const tripRoutes = require('./routes/tripRoutes')
    const cors = require('cors');
    app.use(cors());
    app.use(express.json());

    connectDB();

   

    // Use the router for all routes
    app.use(router);


    app.use('/api', tripRoutes);

    app.listen(8080, () => {
        console.log('Server is running');
    });