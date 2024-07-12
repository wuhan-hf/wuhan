// var express = require('express');
// var router = express.Router();
// //导入连接mysql的函数，用于后于的mysql操作
// const coon = require('../db/index')
// var app=require('app.js')

// //\* GET home page. \*//
// app.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// //得到mysql数据库内的数据
// app.get('/datas', (req, res, next) => {
//   coon.query('select tbl_id,tbl_name from tbl_user', (err, data) => {
//     if (err) res.send({ status: 400, message: '请求失败' })
//     res.send({ status: 200, message: '请求数据成功', data: data })
//   })
// })

// //添加用户
// app.post('/adduser', (req, res, next) => {
//   const parms = req.body
//   //将数据导入mysql数据库的语句
  
//   coon.query(`INSERT INTO tbl_user(tbl_id, tbl_name, tbl_age, tbl_sex) 
//  VALUES
// ('${parms.id}','${parms.name}','${parms.age}','${parms.sex}')`, (err, data) => {
//     if (err) {
//       res.send({ code: 1,status: 300, message: "增添数据失败" }) 
//       return
//     }
//     res.send({ code: 0, status: 200, message: '添加数据成功', data: data })
//   })
// })
// //按照传入的id删除对应的一行数据
// app.delete('/deluser/:id', (req, res, next) => {
//   const parms = req.params
//   //删除指定id对应行数据的mysql数据库的语句
//   coon.query(`delete from tbl_user where tbl_user.tbl_id='${parms.id}'`, (err, data) => {
//     if (err){
//       res.send({ code: 1, message: "删除数据失败" })
//       return
//     } 
//     res.send({ code: 1, status: 200, message: '删除数据成功', data: data })
//   })
// })
// module.exports = app;

