const express = require('express');
    const router = express.Router();
    const { getHelloWorld } = require('../controllers');

    // Define routes
    router.get('/', getHelloWorld);

    module.exports = router;