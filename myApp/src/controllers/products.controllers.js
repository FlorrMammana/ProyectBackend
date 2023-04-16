const {products} = require("../services")

exports.create = async (req, res) => {
    try {
      const product = await products.create();
      return res.success(product, 200);
    } catch (ex) {
      console.log("[POST /api/services create()] ", ex.message);
  
      return res.failure(-1, ex.message, 500);
    }
  };


  exports.delete = async (req, res) => {
    try {
      const product = await products.delete();
      return res.success(product, 200);
    } catch (ex) {
      console.log("[POST /api/services create()] ", ex.message);
  
      return res.failure(-1, ex.message, 500);
    }
  };

  exports.edit = async (req, res) => {
    try {
      const product = await products.edit();
      return res.success(product, 200);
    } catch (ex) {
      console.log("[POST /api/services create()] ", ex.message);
  
      return res.failure(-1, ex.message, 500);
    }
  };


  exports.get = async (req, res) => {
    try {
      const product = await products.get();
      return res.success(product, 200);
    } catch (ex) {
      console.log("[POST /api/services create()] ", ex.message);
  
      return res.failure(-1, ex.message, 500);
    }
  };
