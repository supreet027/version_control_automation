const express = require('express');
const QRCode = require('qrcode');
const router = express.Router();
const bodyParser = require('body-parser');
const database = require('../database');

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', function(_req, res) {
    res.render('Consult', { title: 'Mobile number ☎ ', mobile_no: '' });
});

router.post('/token_id', function(req, res) {
    var mobile_no = req.body.mobile_no;

    console.log('Query Starts here:');

    const selectQuery = `
    SELECT token_id
    FROM table1
    WHERE mobile_no = '${mobile_no}'`;

    console.log('Select query ✔')

    const insertQuery = `
    INSERT INTO table1 
    (hospital, service, mobile_no)
    VALUES 
    ('1001', 'Consult', '${mobile_no}')`;

    console.log('insert query ✔');

    database.query(selectQuery, function(error, rows, _fields) {
        try {
            if (error) {
                console.log('Database error:', error);
                throw error;
            } else {
                if (rows.length > 0) {
                    const token_id = rows[0].token_id;
                    res.render('token_id', { title: 'Your generated Token Id is mentioned below:', token_id: token_id });
                } else {
                    database.query(insertQuery, function(err, _results, _fields) {
                        if (err) {
                            console.log('Database error:', err);
                            throw err;
                        } else {
                            database.query(selectQuery, function(err, rows, _fields) {
                                if (err) {
                                    console.log('Database error:', err);
                                    throw err;
                                } else {
                                    const token_id = rows[0].token_id;
                                    res.render('token_id', { title: 'Success!', token_id: token_id });
                                }
                            });
                        }
                    });
                }
            }
        } catch (exception) {
            console.log('Exception:', exception);
            throw exception;
        }
    });

    console.log('After query execution');
});


module.exports = router;










// router.get('/page', function(req, res, next){
//     var query = `SELECT * FROM qr_web.Table1 ORDER BY token_id DESC`;
//     database.query(error, data){
//         if error{
//             throw error;
//         }
//         else{
//             return res.json({data})
//         }
//     }
// });




// router.post('/add', function(req, res) {
//     var mobile_no = req.body.mobile_no;

//     const query = `
//     INSERT INTO table1 
//     (hospital, service, mobile_no)
//     VALUES 
//     ('1001', 'Consult', '${mobile_no}')`;

//     database.query(query, function(error, _results, _fields) {
//         try {
//             if (error) {
//                 console.log('Database error:', error);
//                 throw error;
//             } else {
//                 res.render('success', { title: 'Success' });
//             }
//         } catch (exception) {
//             console.log('Exception:', exception);
//             throw exception;
//         }
//     });

//     console.log('After query execution');
// });





// const express = require('express');
// const router = express.Router();
// const bodyParser = require('body-parser');
// const database = require('../database');

// router.use(bodyParser.urlencoded({ extended: true }));

// router.get('/', function(_req, res) {
//     res.render('work', { title: 'Enter your mobile number' });
// });

// // router.post('/add_work', function(req, res, next) {
// //     const mobileNumber = req.body.mobile;
// //     const query = "INSERT INTO qr_web.Table1 (hospital, service, mobile_no, token_id) VALUES ('1001', 'Consult', ?, '0'); SELECT LAST_INSERT_ID() AS token_id";
    
// //     database.query(query, [mobileNumber], function(error, results, _fields) {
// //         if (error) {
// //             console.error('Database query error:', error);
// //             return next(error); 
// //         } else {
// //             const tokenID = results[1][0].token_id;

// //             res.redirect('/success?token_id=' + tokenID);
// //         }
// //     });
// // });

// router.post('/add_work', function(req, res, next) {
//     const mobileNumber = req.body.mobile;
//     const query = "INSERT INTO qr_web.Table1 (hospital, service, mobile_no, token_id) VALUES ('1001', 'Consult', ?, '0'); SELECT LAST_INSERT_ID() AS token_id";
    
//     database.connect.query(query, [mobileNumber], function(error, results, _fields) {
//         if (error) {
//             console.error('Database query error:', error);
//             return next(error); 
//         } else {
//             const tokenID = results[1][0].token_id;

//             res.render('work', { title: 'Enter your mobile number', token_id: tokenID });
//         }
//     });
// });


// router.get('/success', function(req, res, _next) {
//     const tokenID = req.query.token_id;
//     res.render('success', { title: 'Success', token_id: tokenID });
// });

// module.exports = router;
