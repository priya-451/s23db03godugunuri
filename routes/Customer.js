var express = require('express');
const customer_controlers = require('../controllers/customer');

var router = express.Router();

/* GET customer */
router.get('/', customer_controlers.customer_view_all_Page);

/* Get home page. */
router.get('/', function(req, res, next) {
  res.render('customer', { title: 'Search Result' });
});

/* GET detail customer page */
router.get('/detail', customer_controlers.Customer_view_one_Page);

/* GET create costume page */
router.get('/create', customer_controlers.customer_create_Page);

const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect('/login');
};

/* GET update costume page */
router.get('/update', secured, customer_controlers.customer_update_Page);

/* GET delete customer page */
router.get('/delete', customer_controlers.customer_delete_Page);

router.get('/sample', customer_controlers.sample);

module.exports = router;
