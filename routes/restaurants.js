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


/*
sql = 'insert into restaurants (name, logo, openingTime, closingTime, averageRate, address, ' +
            'categories, foods, comments) values (' + con.escape(utf8.decode(req.body.name)) + ',' +
            'concat((select max(id) from restaurants) + 1, \'.jpeg\')' + ','+ ')';
*/

router.get('/address/areas', (req, res) => {
   let sql = 'select distinct address.area from address';
   con.query(sql, (err, result) => {
      if (err) throw err;
       res.writeHead(200, {"Content-Type": "text/json; charset=utf-8"});
       res.write(JSON.stringify(result), "utf-8");
       res.end();
   });
});


router.get('/:id', (req, res) => {
    let id = con.escape(req.params.id);
    let sql = 'select * from restaurants where id=' + id;
    con.query(sql, (err, result) => {
        if (err) throw err;
        let info = result[0];
        sql = 'select categories.name from restaurants ' +
            'inner join restcat on restaurants.categories = restcat.restid ' +
            'inner join categories on restcat.catid = categories.id where restaurants.id=' + id;
        con.query(sql, (err, result) => {
            if (err) throw err;
            info.categories = result;
            sql = 'select address.* from restaurants ' +
                'inner join address on restaurants.address = address.id ' +
                'where restaurants.id=' + id;
            con.query(sql, (err, result) => {
                if (err) throw err;
                info.address = result;
                sql = 'select foods.* from restaurants ' +
                    'inner join restfood on restaurants.categories = restfood.restid ' +
                    'inner join foods on restfood.foodid = foods.id where restaurants.id=' + id;
                con.query(sql, (err, result) => {
                    if (err) throw err;
                    info.foods = result;
                    // console.log("------------------------");
                    // console.log(info);
                    // console.log("------------------------");
                    res.writeHead(200, {"Content-Type": "text/json; charset=utf-8", "Access-Control-Allow-Origin": "*"});
                    res.write(JSON.stringify(info), "utf-8");
                    res.end();
                });
            });
        });
    });
});

router.get('/:id/comments', async function(req, res) {
    let sql = 'select comments.* from restaurants inner join restcom on restaurants.comments = restcom.restid ' +
        'inner join comments on comments.id = restcom.comid where restaurants.id=' +
        con.escape(req.params.id) +
    ' order by created_at asc ';
    console.log(sql)
    con.query(sql, (err, result) => {
        if (err) throw err;
        // let resultFinal = [];
        // console.log(result);
        // for(let i = 0; i < result.length; i++)
        //     resultFinal[i] = result[i].comment
        res.writeHead(200, {"Content-Type": "text/json; charset=utf-8", "Access-Control-Allow-Origin": "*"});
        res.write(JSON.stringify(result), "utf-8");
        res.end();
    });
});

router.post('/:id/comments', (req, res) => {
    var sql = 'insert into comments (author, quality, packaging, deliveryTime, txt, created_at) ' +
        'values (' + con.escape(req.body.author) + ',' + con.escape(req.body.quality) + ','
        + con.escape(req.body.packaging) + ',' + con.escape(req.body.deliveryTime) + ',' +
        con.escape(req.body.txt) + ',\'' + moment(Date.now()).format('YYYY-MM-DD HH:mm:ss') + '\')';
    console.log(sql);

    con.query(sql, (err, result) => {
        if (err) throw err;
        let newComId = result.insertId;
        sql = 'select restaurants.id as id from restaurants inner join restcom on restcom.restid = restaurants.id ' +
            'inner join comments on comments.id = restcom.comid where restaurants.name = ' +
            con.escape(utf8.decode(req.params.id));
        console.log(sql);
        con.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            let comCount = result.length + 1;
            let restId = result[0].id;
            sql = 'insert into restcom (restid, comid) values (' + restId + ',' + newComId  +')';
            con.query(sql, (err, result) => {
                if (err) throw err;
                sql = 'select sum(comments.quality) as sum from restaurants ' +
                    'inner join restcom on restaurants.id = restcom.restid ' +
                    'inner join comments on comments.id = restcom.comid where restaurants.id = ' +
                    restId;
                con.query(sql, (err, result) => {
                    if (err) throw err;
                    console.log(result[0].sum);
                    sql = 'update restaurants set averageRate = ' + result[0].sum / comCount + ' where id = ' +
                            restId;
                    con.query(sql, (err, result) => {
                        if (err) throw err;
                        res.end('successfully added comment');
                    });
                });
            });
        });
    });
});


module.exports = router;
