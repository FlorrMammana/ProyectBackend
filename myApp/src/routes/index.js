module.exports = {
  initialize(server) {
   

    // app route
    server.use('/api', require('./products.routes.js'));
    return true;
  }
};