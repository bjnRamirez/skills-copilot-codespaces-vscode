// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Routes
router.get('/comments', commentController.getComments);
router.post('/comments', commentController.postComment);
router.put('/comments/:id', commentController.putComment);
router.delete('/comments/:id', commentController.deleteComment);

module.exports = router;