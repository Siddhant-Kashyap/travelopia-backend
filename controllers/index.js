const { helloWorldService } = require('../services');

    function getHelloWorld(req, res) {
        const message = helloWorldService();
        res.send(message);
    }

    module.exports = {
        getHelloWorld
    };