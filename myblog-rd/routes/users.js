const router = require('koa-router')()
// let jwt = require('jsonwebtoken');
const { createToken } = require('../auth')

// 处理登录
let controller = require("../controllers/userController");
// 路由前缀
router.prefix('/users')
router.post("/login", controller.login);
router.post("/regist", controller.regist);
router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
