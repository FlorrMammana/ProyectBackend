'use strict';

const {
    //database,
    server,
    errorHandler,
} = require("./src/loaders");

(async () => {
    // create db
    //await database.start();

    // create/init server
    const app = server.create();
    await server.start(app);

    // create error handler
    errorHandler.create();
})();

