var express = require('express');
const customer_controlers= require('../controllers/customer');
var router = express.Router();
/* GET customer */
router.get('/', customer_controlers.customer_view_all_Page );
module.exports = router;
/* GET detail customer page */
router.get('/detail', customer_controlers.Customer_view_one_Page);
/* GET create costume page */
router.get('/create', customer_controlers.customer_create_Page);
/* GET create update page */
router.get('/update', customer_controlers.customer_update_Page);
/* GET delete customer page */
router.get('/delete', customer_controlers.customer_delete_Page);
router.get('/sample', customer_controlers.sample);
