var mysql = require('mysql');

var con = mysql.createConnection({
    host: '192.168.91.130',
    user: 'user',
    password: '123qwe',
    database: 'db',
    charset: 'utf8mb4'
});

con.connect((err) => {
   if (err) throw err;
   console.log("db connected");

   // var sql = 'create database db';
   var sql = 'ALTER TABLE categories CONVERT TO CHARACTER SET utf8 COLLATE utf8_unicode_ci;' +
       'ALTER TABLE comments CONVERT TO CHARACTER SET utf8 COLLATE utf8_unicode_ci;' +
       'ALTER TABLE address CONVERT TO CHARACTER SET utf8 COLLATE utf8_unicode_ci;' +
       'ALTER TABLE foods CONVERT TO CHARACTER SET utf8 COLLATE utf8_unicode_ci;' +
       'ALTER TABLE restaurants CONVERT TO CHARACTER SET utf8 COLLATE utf8_unicode_ci;';
   con.query(sql, (err, res)=> {
       if (err) console.log('database is already created');
       else console.log('created database db');
       sql = 'create table comments (id int AUTO_INCREMENT PRIMARY KEY,' +
           'author text,' +
           'quality int,' +
           'packaging int,' +
           'deliveryTime int,' +
           'txt text,' +
           'created_at timestamp);';
       con.query(sql, (err, res) => {
           if (err) console.log('comments is already created');
           else console.log('created comments');

           sql = 'create table foods (id int AUTO_INCREMENT PRIMARY KEY, ' +
               'name text,' +
               'price int,' +
               'description text,' +
               'foodSet text)';
            con.query(sql, (err, res) => {
                if (err) console.log('foods is already created');
                else console.log('created foods');

                sql = 'create table categories (id int AUTO_INCREMENT PRIMARY KEY, ' +
                    'name text)';
                con.query(sql, (err, res) => {
                    if (err) console.log('categories is already created');
                    else console.log('created categories');

                    sql = 'create table address (id int AUTO_INCREMENT PRIMARY KEY,' +
                        'city text,' +
                        'area text,' +
                        'addressLine text)';

                    con.query(sql, (err, res) => {
                        if (err) console.log('address is already created');
                        else console.log('created address');

                        sql = 'create table restcat (restid int, catid int)';
                        con.query(sql, (err, res) => {
                            if (err) console.log('restcat is already created');
                            else console.log('created restcat');

                            sql = 'create table restfood (restid int, foodid int)';

                            con.query(sql, (err, res) => {
                                if (err) console.log('restfood is already created');
                                else console.log('created restfood');

                                sql = 'create table restcom (restid int, comid int)';
                                con.query(sql, (err, res) => {
                                    if (err) console.log('restcom is already created');
                                    else console.log('created restcom');

                                    sql = 'create table restaurants (id int AUTO_INCREMENT PRIMARY KEY,' +
                                        'name text,' +
                                        'logo text,' +
                                        'openingTime int,' +
                                        'closingTime int,' +
                                        'averageRate int,' +
                                        'address int,' +
                                        'categories int,' +
                                        'foods int,' +
                                        'comments int)';
                                    con.query(sql, (err, res) => {
                                        if (err) console.log('restaurants is already created');
                                        else console.log('created restaurants');
                                    });
                                });
                            });
                        });
                    });
                });
            });
       });
   });
});



module.exports = con;
