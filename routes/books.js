var express = require("express");
var router = express.Router();
var connection = require("../lib/db");

var moment = require("moment");

router.get("/err", (req, res, next) => {
  throw new Error("ERERERERERERERE");
  //   next(err);
});
/* GET home page. */
router.get("/", function(req, res, next) {
  connection.query("SELECT * FROM records ORDER BY id ASC", function(
    err,
    rows
  ) {
    if (err) {
      res.render("index", {
        messages: { success: false, error: err },
        data: ""
      });
    } else {
      // console.log("rows", rows);
      res.render("index", {
        page_title: "Customers - Node.js",
        messages: {
          success: true
        },
        data: rows,
        moment: moment
      });
    }
  });
});

// ADD NEW USER POST ACTION
router.post("/add", function(req, res, next) {
  console.log("req.body", req.body);
  try {
    var data = {
      name: req.body.name,
      date: req.body.date,
      amount: req.body.amount,
      subject: req.body.subject
    };

    connection.query("INSERT INTO records SET ?", data, function(err, result) {
      if (err) {
        console.log("ERR;", err);
        throw err;
      }
      console.log("result", result);
      res.redirect("/books");
    });
  } catch (err) {
    throw new Error(err);
  }
});

// SHOW EDIT USER FORM
router.get("/edit/:id", function(req, res, next) {
  console.log("hi", req.params.id);
  connection.query(
    "SELECT * FROM records WHERE id = " + req.params.id,
    function(err, result, fields) {
      if (err) {
        console.log("err", err);
        return;
      }

      // if user not found
      if (result.length <= 0) {
        res.redirect("/books");
      } else {
        // if user found
        console.log("result", result);
        // render to views/user/edit.ejs template file
        res.render("edit", {
          title: "Edit Records",
          //data: result[0],
          id: result[0].id,
          name: result[0].name,
          date: moment(result[0].date).format("YYYY-MM-DD"),
          amount: result[0].amount,
          subject: result[0].subject
        });
      }
    }
  );
});

// EDIT USER POST ACTION
router.post("/update/:id", function(req, res, next) {
  console.log("req.body", req.body);
  var record = {
    name: req.body.name,
    date: req.body.date,
    amount: req.body.amount,
    subject: req.body.subject
  };
  connection.query(
    "UPDATE records SET ? WHERE id = " + req.params.id,
    record,
    function(err, result) {
      //if(err) throw err
      if (err) {
        console.log("err", err);
        // render to views/user/add.ejs
        res.render("books/edit", {
          title: "Edit Customer",
          id: req.params.id,
          name: req.body.name,
          date: req.body.date,
          amount: req.body.amount,
          subject: req.body.subject
        });
      } else {
        res.redirect("/books");
      }
    }
  );
});

// DELETE USER
router.get("/delete/(:id)", function(req, res, next) {
  console.log("req.params.id", req.params.id);
  var user = { id: req.params.id };

  connection.query(
    "DELETE FROM records WHERE id = " + req.params.id,
    user,
    function(err, result) {
      //if(err) throw err
      if (err) {
        console.log("err", err);
        // redirect to users list page
        res.redirect("/books");
      } else {
        // redirect to users list page
        res.redirect("/books");
      }
    }
  );
});

module.exports = router;
