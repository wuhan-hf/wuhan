var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
var cors = require('cors');
//跨域处理
app.use(cors({
  origin: ['127.0.0.1', '*']
}));
// 配置跨域请求头
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Origin", "*"); //允许所有跨域请求
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token");
  res.header("Access-Control-Allow-Origin", req.headers.origin); // 设置允许来自哪里的跨域请求访问（值为*代表允许任何跨域请求，但是没有安全保证）
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS"); // 设置允许接收的请求类型
  res.header("Access-Control-Allow-Headers", "Content-Type,request-origin"); // 设置请求头中允许携带的参数
  next();
})
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//用于设置跨域问题cors策略
// var allowCrosDown=function(req,res,next){
//   res.header('Access-Control-Allow-Origin','\*')
//   res.header('Access-Control-Allow-Methods','\*')
//   res.header('Access-Control-Allow-Headers','\*')
//   next()
// }
// app.use(allowCrosDown)

// 监听调用 
app.use((request, response, next) => {
  // console.log('有人请求服务器了,HOST:http://127.0.0.1:8080');
  console.log('请求来自于',request.get('Host'));
  // console.log('请求的地址',request.url);
  next();
})

//设置3000端口
app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了,请求地址为：http://127.0.0.1:3000');   // 请求地址 
})
module.exports = app;
