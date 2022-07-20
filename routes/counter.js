const { Router } = require("express");

const {counterGetByLetter} = require('../controllers/counter');


const router = Router();


router.get('/:entity/:letter',counterGetByLetter);


module.exports = router;