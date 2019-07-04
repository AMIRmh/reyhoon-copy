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

router.get('/areas', (req, res) => {
   let sql = 'select distinct address.area from address';
   con.query(sql, (err, result) => {
      if (err) throw err;
       res.writeHead(200, {"Content-Type": "text/json; charset=utf-8"});
       res.write(JSON.stringify(result), "utf-8");
       res.end();
   });
});


router.get('/:id', (req, res) => {
    let sql = 'select * from restaurants where name=' + con.escape(req.params.id);
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.writeHead(200, {"Content-Type": "text/json; charset=utf-8"});
        res.write(JSON.stringify(result), "utf-8");
        res.end();
    });
});

router.get('/:id/comments', async function(req, res) {
    let sql = 'select * from restaurants inner join restcom on restaurants.comments = restcom.restid ' +
        'inner join comments on comments.id = restcom.comid where restaurants.name=' +
        con.escape(req.params.id);
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.writeHead(200, {"Content-Type": "text/json; charset=utf-8"});
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
                    })
                });
            });
        });
    });
});

router.post('/add/restaurants', async function(req, res) {
   const schema = await loadSchema('restaurants');
   await schema.insertOne({
       name: req.body.name,
       logo: "",
       openingTime: req.body.open,
       closingTime: req.body.close,
       averageRate: req.body.rate,
       address: req.body.address,
       categories: Array.isArray(req.body.categories) ?  req.body.categories : [req.body.categories],
       foods: Array.isArray(req.body.foods) ?  req.body.foods : [req.body.foods],
       comments: Array.isArray(req.body.comments) ? req.body.comments : [req.body.comments],
   });
   res.status(201).end();
});


router.post('/add/foods', async function(req, res) {
    const schema = await loadSchema('foods');
    await schema.insertOne({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description === undefined ? "" : req.body.description,
        foodset: req.body.foodset
    });
    res.status(201).end();
});


router.post('/add/address', async function(req, res) {
    const schema = await loadSchema('address');
    await schema.insertOne({
        city: req.body.city,
        area: req.body.area,
        addressLine: req.body.addressLine
    });
    res.status(201).end();
});

router.post('/add/comments', async function(req, res) {
    const schema = await loadSchema('comments');
    await schema.insertOne({
        author: req.body.author,
        quality: req.body.quality,
        packaging: req.body.packaging,
        deliveryTime: req.body.deliveryTime,
        text: req.body.text,
        created_at: new Date()
    });
    res.status(201).end();
});

router.post('/add/categories', async function(req, res) {
    const schema = await loadSchema('categories');
    await schema.insertOne({
        name: req.body.name
    });
    res.status(201).end();
});


async function loadSchema(schema) {
  const client = await mongodb.connect
  ('mongodb+srv://root:123qwe@cluster0-q50fw.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
  });

  return client.db('test').collection(schema);
}

module.exports = router;
