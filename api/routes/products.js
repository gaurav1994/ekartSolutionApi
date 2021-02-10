var express = require('express');

var router = express.Router();

var Product = require('../models/product-model');

router.get('/', (req,res, next)=>{
     Product.find()
     .select("productName productImage productSize productBrand productDescription")
     .then(result=>{
          let resultobj = {
               count : result.length,
               products : result
          }
          res.status(200).json(resultobj)
     })
     .catch(err=>{
          res.status(401).json(err.error)
     })
})
// get single product based on productId in params..
router.get('/:proId', (req,res,next)=>{
     let proId = req.params.proId
     Product.findOne({_id : proId}).exec()
     .then(result=>{
          if(result) res.status(200).json(result)
          else res.status(400).json({ message : "product is not available"})
     })
     .catch(err=>{
          res.status(400).json({ error : err})
     })
})

router.post('/',(req,res,next)=>{
     let product = new Product({
          productName : req.body.product_name,
          productImage : req.body.product_image,
          productSize : req.body.product_size,
          productBrand : req.body.brand_name,
          productDescription : req.body.product_description
     })
     product.save()
     .then(result =>{
          res.status(200).json(result)
     })
     .catch(err=>{
          res.status(400).json(err)
     })
})
router.delete('/:productId', (req,res)=>{
     let id = req.params.productId
     Product.deleteOne({_id : id})
     .exec()
     .then(result=>{
          console.log(result)
          res.status(200).json(result)
     })
     .catch(err=>{
          console.log(err)
          res.status(400).json(err)
     })
})
router.patch('/:productId', (req,res,next)=>{
     let id = req.params.productId 
     Product.findByIdAndUpdate(id,req.body, { new : true})
     .exec()
     .then(result=>{
          if(result) res.status(200).json(result)
          else res.status(400).json({ message : "product is not found"})
     })
     .catch(err=>{
          console.log(err)
          res.status(400).json(err)
     })
})

module.exports = router