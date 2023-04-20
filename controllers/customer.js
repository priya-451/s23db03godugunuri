var Customer = require('../models/customer');
// // List of all customer
// exports.customer_list = function(req, res) {
// res.send('NOT IMPLEMENTED: customer list');

// };
exports.customer_list = async function(req, res) {
    try{
    thecustomer = await Customer.find();
    res.send(thecustomer);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// for a specific customer.
//exports.customer_detail = function(req, res) {
//res.send('NOT IMPLEMENTED: customer detail: ' + req.params.id);
//};


// Handle customer create on POST.
exports.customer_create_post = async function(req, res) {
console.log(req.body)
let document = new Customer();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"Cust_Name":"goat", "Cust_Age":12, "Mail_Id":"large"}
document.Cust_Name = req.body.Cust_Name;
document.Mail_Id = req.body.Mail_Id;
document.Cust_Age = req.body.Cust_Age;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};


// Handle customer delete on DELETE.
exports.customer_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Customer.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    
// Handle customer update form on PUT.
//exports.customer_update_put = function(req, res) {
//res.send('NOT IMPLEMENTED: customer update PUT' + req.params.id);
//};

// if(req.body.checkboxsale) toUpdate.sale = true;
// else toUpdate.same = false;


// VIEWS
// Handle a show all view
exports.customer_view_all_Page = async function(req, res) {
    try{
    thecustomer = await Customer.find();
    res.render('Customer', { title: 'customer Search Results', results: thecustomer });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // for a specific customer.
exports.customer_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Customer.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
   // Handle customer update form on PUT.
exports.customer_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Customer.findById( req.params.id)
    // Do updates of properties
    if(req.body.Cust_Name)
    toUpdate.Cust_Name = req.body.Cust_Name;
    if(req.body.Mail_Id) toUpdate.Mail_Id = req.body.Mail_Id;
    if(req.body.Cust_Age) toUpdate.Cust_Age = req.body.Cust_Age;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
   };
   // Handle a show one view with id specified by query
exports.Customer_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Customer.findById( req.query.id)
    res.render('Customerdetail',
    { title: 'Customer Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.customer_create_Page = function(req, res) {
  console.log("create view")
    try{
      res.render('customercreate', { title: 'Customer Create'});
    }
    catch(err){
      res.status(500)
      res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a customer.
// query provides the id
exports.customer_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
      let result = await Customer.findById(req.query.id)
      res.render('customerupdate', { title: 'customer Update', toShow: result });
    }
    catch(err){
      res.status(500)
      res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.customer_delete_Page = async function(req, res) {
  console.log("Delete view for id " + req.query.id)
    try{
      result = await Customer.findById(req.query.id)
      res.render('customerdelete', { title: 'Customer Delete', toShow:
result });
    }
    catch(err){
      res.status(500)
      res.send(`{'error': '${err}'}`);
    }
};

exports.sample = function(req, res) {
    console.log("create view")
      try{
        res.render('sample', { title: 'Customer Create'});
      }
      catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
      }
  };
    
    


         