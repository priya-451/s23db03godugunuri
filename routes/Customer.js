var express = require('express');
// A little function to check if we have an authorized user and continue on
// or redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
      return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
  }
  
const customer_controlers= require('../controllers/customer');
var router = express.Router();
/* GET customer */
router.get('/', customer_controlers.customer_view_all_Page );
module.exports = router;
/* GET detail customer page */
router.get('/detail', customer_controlers.Customer_view_one_Page);
/* GET create costume page */
router.get('/create', customer_controlers.customer_create_Page);
/* GET update costume page */
router.get('/update', secured,
customer_controlers.customer_update_Page);
/* GET delete customer page */
router.get('/delete', customer_controlers.customer_delete_Page);
router.get('/sample', customer_controlers.sample);


