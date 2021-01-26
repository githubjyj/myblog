const userModel = require("../models/userModel");
const model = require("../models/userModel");
const { createToken } = require('../auth')

module.exports = {
    async login(ctx, next) {
        // 1. 接收表单数据
        // {username: 'lisi', pasword: '123456'}
        let { username, password } = ctx.request.body;
        // 2. 安全验证
        if (username.length == 0) {
          await ctx.render("error", {
            message: "请输入用户名!",
          });
        } else {
          // 3. 连接数据库
          let results = await model.getUserByNameAndPwd(username, password);
          console.log(results);
          // console.log(results[0].user_id);
          // 4. 根据查询的结果跳转(或输出)不同的结果页面
          if (results.length > 0) {
            // 登录成功
            // 1.生成 token
            let payload = {
                userId:results[0].user_id,
                username:results[0].username,
              }
            // 产生 token
            let token = createToken(payload);
            ctx.body = {
              status:"success",
              token,
              payload
            }
          } else {
            console.log("登录失败");
            ctx.body = "fail"
          }
        }
      },
      
      async regist(ctx) {
        // 接收表单数据
        let { username, password, nickname } = ctx.request.body;
        console.log(username,password,nickname);
        // 连接数据库
        let results = await model.saveUser({ username, password, nickname });
        // 4. 根据查询的结果跳转(或输出)不同的结果页面
        if (results.insertId) {
            ctx.body = {
              status:"success",
            }
          } else {
            ctx.body = "fail"
          }
      },
}








