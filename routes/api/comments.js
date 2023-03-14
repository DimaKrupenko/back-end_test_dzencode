const express = require('express');

const router = express.Router();

const { comments: ctrl } = require('../../controllers/index');

router.get('/', ctrl.getAll);

router.post('/', ctrl.add);

module.exports = router;
