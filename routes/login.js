const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const database = require('../database');

router.use(bodyParser.urlencoded({ extended: true }));

// GET route for rendering the login page
router.get('/', function(_req, res) {
  res.render('login', { title: 'WELCOME', username: '', password: '' });
});

// POST route for dashboard login
router.post('/dashboard', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  const insertquery = `SELECT * FROM qr_web.Table2 WHERE username = '${username}' AND password = '${password}'`;

  database.query(insertquery, function(error, rows, _fields) {
    try {
      if (error) {
        console.log('database error:', error);
        throw error;
      } else {
        if (rows.length > 0) {
          // Successful login, redirect to dashboard page
          // res.redirect('/dashboard');
          res.render('dashboard', { title: 'Welcome to the Dashboard!', error: false });
        } else {
          // Redirect to login page with error message
          res.redirect('/?error=1');
        }
      }
    } catch (exception) {
      console.log('Exception:', exception);
      throw exception;
    }
  });
});

// POST route for the report page that fetches data from the database
router.post('/dashboard/report', function(req, res, next) {
    const { filter } = req.body;
    let query = `SELECT * FROM qr_web.Table1 ORDER BY token_id`;
  
    if (filter) {
      query = `SELECT * FROM qr_web.Table1 WHERE action = '${filter}' ORDER BY token_id`;
    }
  
    database.query(query, function(error, data) {
      if (error) {
        throw error;
      } else {
        res.render('report', { title: 'REPORT', table1Data: data });
      }
    });
});  

// POST route for the detail page that fetches specific data from the database
router.post('/dashboard/detail', function(_req, res, _next) {
  console.log('query starts');
  const query = `SELECT * FROM qr_web.Table1 WHERE action = 0 ORDER BY token_id`;
  database.query(query, function(error, data) {
    if (error) {
      throw error;
    } else {
      res.render('detail', { title: 'Token_Id list:', table1Data: data, action: 'complete' });
    }
  });
});

// POST route for completing a request
router.post('/dashboard/detail/complete_request', function(req, res) {
    // Access the token_id from the request body
    const { token_id } = req.body;
  
    // Update the action and end_time columns in the database
    const updateQuery = `UPDATE qr_web.Table1 SET action = 1, end_time = CURRENT_TIMESTAMP WHERE token_id = '${token_id}'`;
    database.query(updateQuery, function(error, _result) {
      if (error) {
        console.log('Database error:', error);
        res.sendStatus(500);
      } else {
        console.log('Request completed successfully');
  
        const refreshQuery = `SELECT * FROM qr_web.Table1 WHERE action = 0 ORDER BY token_id`;
        database.query(refreshQuery, function(error, data) {
          if (error) {
            console.log('Database error:', error);
            res.sendStatus(500);
          } else {
            res.render('detail', { title: 'Token_Id list:', table1Data: data, action: 'complete' });
          }
        });
      }
    });
});
  

module.exports = router;
