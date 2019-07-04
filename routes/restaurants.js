var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var con = require('../bin/db');
var path = require('path');
var moment = require('moment');
var utf8 = require('utf8');

router.get('/', (req, res) => {
    if (!req.query.area) {
        res.sendFile(path.join(__dirname, '../public/src/main.html'));
    }
    var sql = 'select distinct restaurants.id, restaurants.*  from restaurants inner join address on restaurants.address = address.id ' +
        'inner join restcat on restaurants.categories = restcat.restid ' +
        'inner join categories on restcat.catid = categories.id where area=' + con.escape(req.query.area);

    if (req.query.category) {
        if (Array.isArray(req.query.category)) {
            sql += ' and ( 1=0';
            for (let i = 0; i < req.query.category.length; i++) {
                sql += ' or categories.name = ' + con.escape(req.query.category[i]);
            }
            sql += ')';
        } else {
            sql += ' and categories.name = ' + con.escape(req.query.category);
        }
    }
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.writeHead(200, {"Content-Type": "text/json; charset=utf-8"});
        res.write(JSON.stringify(result), "utf-8");
        res.end();
    })
});

router.post('/', (req, res) => {
    let sql = 'insert into address (city, area, addressLine) values (' + con.escape(req.body.city) + ',' +
        con.escape(req.body.area) + ',' + con.escape(req.body.addressLine) +  ')';
    con.query(sql, (err, result) => {
        if (err) throw err;
        let addressId = result[0].insertId;
        sql = 'insert into restaurants (name) values (' + con.escape(utf8.decode(req.body.name)) + ')';
        con.query(sql, (err, result) => {
            if (err) throw err;
            let insertedId = result.insertId;
            sql = 'update restaurants set logo =  ' + insertedId + '.jpeg' +
                ', openingTime = ' + req.body.openingTime +
                ', closingTime = ' + req.body.closingTime +
                ', averageRate = 0' +
                ', address = ' + addressId +
                ', categories = ' + insertedId +
                ', foods = ' + insertedId +
                ', comments = ' + insertedId +
                ' where id = ' + insertedId;

            con.query(sql, (err, result) => {
                if (err) throw err;
                res.end('successfully added');
            });
        });
    });
});

router.get('/poster/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/posters/' + req.params.id));
});

module.exports = router;
