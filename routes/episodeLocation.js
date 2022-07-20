const { Router } = require("express");

const {episodeLocationByid} = require('../controllers/episodeLocation');


const router = Router();


router.get('/:episode', episodeLocationByid);


module.exports = router;