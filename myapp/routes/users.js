var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/results', function(req, res, next) {
  connection.query('SELECT * from customers', function (error, results, fields) {
      if(error){
        res.send({"status": 500, "error": error, "response": null}); 
        //If there is error, we send the error in the error section with 500 status
      } else {
        res.send({"status": 200, "error": null, "response": results});
        //If there is no error, all is good and response is 200OK.
      }
    });
});

router.post('/validate',function(req,res){
  var name1 = req.body.name1;
  var address1 = req.body.address1;
  var data = {
    "Response":""
  };
  connection.query("SELECT * from customers WHERE name=? and address=? LIMIT 1",[name1,address1],function(err, rows, fields){
    if(rows.length != 0){
      data["Response"] = `${name1} stays at ${address1}`;
      //data["Response"] = "Name matches the address";
      res.json(data);
    }else{
      data["Response"] = `I do not know where ${name1} stays`;
      res.json(data);
    }
  });
});

router.post('/insert', function(req,res,next) {
  var name1 = req.body.name1;
  var address1 = req.body.address1;
    var data = {"Response":""};
  var sql = "INSERT INTO customers (name, address) VALUES ?";
  var values = [
    [name1, address1]
  ];
  connection.query(sql, [values], function (error, rows, fields) {
    if(rows.length != 0){
      data["Response"] = "Record inserted";
      res.json(data);
    }else{
      data["Response"] = "Failed to insert record";
      res.json(data);
    }
  });
});

router.delete('/delete',function(req,res){
  var name1 = req.body.name1;
  var address1 = req.body.address1;
  var data = {"Response":""};
  connection.query("DELETE from customers where name=? and address=?", [name1,address1],function(err, rows, fields){
    if(rows.length != 0){
      data["Response"] = `Number of records deleted: ${rows.affectedRows}`;
      res.json(data);
    }
  });
});

router.put('/update',function(req,res){
  var name1 = req.body.name1;
  var address_old = req.body.address_old;
  var address_new = req.body.address_new;
  var data = {"Response":""};
  connection.query("UPDATE customers set address=? where name=? and address=?", [address_new,name1,address_old],function(err, rows, fields){
    if(rows.length != 0){
      data["Response"] = `Number of records updated: ${rows.affectedRows}`;
      res.json(data);
    }
  });
});



module.exports = router;
