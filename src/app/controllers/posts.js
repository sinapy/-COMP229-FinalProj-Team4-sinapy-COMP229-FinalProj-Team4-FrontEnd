// create a reference to the model
let productModel = require('../models/post');
let moment = require('moment');


module.exports.getAllposts = function(req, res, next) {  
    productModel.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
}



module.exports.getPostDetailsById = (req, res, next) => {
    
    let id = req.params.id;

    productModel.findById(id).then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Post with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Post with id=" + id });
      });
}

module.exports.createPost = (req, res, next) => {

    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
      }

    let newPost = productModel({
        _id: Math.random().toString(36).slice(2),
        title: req.body.title,
        price: req.body.price,
        status: req.body.status,
        expires_on: req.body.expires_on,
        
    });

    productModel.create(newPost).then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Post."
      });
    });

}


module.exports.updatePost = (req, res, next) => {

    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
    }

    let id = req.params.id
    
    console.log(req.body);

    let updatedPost = productModel({
        title: req.body.title,
        price: req.body.price,
        status: req.body.status,
        expires_on: req.body.expires_on,
    });

    productModel.findByIdAndUpdate(id, updatedPost, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Post with id=${id}. Maybe Post was not found!`
            });
          } else res.send({ message: "Post was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Post with id=" + id
          });
        });


}


module.exports.deletePost = (req, res, next) => {

    let id = req.params.id
    
    console.log(req.body);

    productModel.findByIdAndRemove(id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        } else {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });

}

