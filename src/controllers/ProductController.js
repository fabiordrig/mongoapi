const mongoose = require('mongoose')
const Product = mongoose.model('Product')

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query
    const products = await Product.paginate({}, {page, limit: 10});

    return res.json(products)
  },

  async show (req, res) {
    let product = await Product.findById(req.params.id)

    return res.json(product)
    
  },

  async store(req, res) {
    let product = await Product.create(req.body);

    return res.json(product)
  },
  
  
  async update(req, res) {
    let product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(product)
  },

  async remove(req, res) {
    let product = await Product.findOneAndRemove(req.params.id, req.body);

    return res.send();
  }
}

