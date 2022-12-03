var express = require('express');
var router = express.Router();

let postsController = require('../controllers/posts');

// get all post
router.get('/', postsController.getAllposts);

//get a post by id
router.get('/:id', postsController.getPostDetailsById);

// createnew post
router.post('/', postsController.createPost);

// update a post
router.put('/:id', postsController.updatePost);

// delete a post
router.delete('/:id', postsController.deletePost);

module.exports = router;
