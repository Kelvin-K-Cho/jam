const express = require(`express`);
const router = express.Router();

/*
  @route: GET api/comments/test
  @desc: Tests comments route
  @access: Public
*/
router.get(
  `/test`,
  (req, res) => {
    res.json({msg: "Comments Works"});
  } );

module.exports = router;
