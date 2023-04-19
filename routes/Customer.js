var express = require('express');
const customer_controlers= require('../controllers/customer');
var router = express.Router();
/* GET customer */
router.get('/', customer_controlers.customer_view_all_Page );
module.exports = router;

    