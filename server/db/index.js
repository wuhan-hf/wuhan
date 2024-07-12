const mysql=require('mysql')
var coon=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',//数据库密码
    database:'sys'//需要连接数据库的名称
})
coon.connect(()=>{
    console.log('数据库连接成功')
})
module.exports=coon//暴露用于后续进行mysql操作。

