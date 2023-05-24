const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

router.post('/create', postController.create);
router.get('/read/:idUser', postController.read);
router.put('/update/:idUser', postController.update);
router.delete('/delete', postController.delete);

module.exports = router;