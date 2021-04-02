var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get("/", (req, res, next) => {
  axios.get("https://www.mist-one.com/pub/languages")
    .then(data => {for (var i = 0; i < data.data.data.rows.length; i++)
		{data.data.data.rows[i].state="Noida" }
	    res.send(data.data.data.rows)}
)
    .catch(err => next(err));
})
module.exports = router;
