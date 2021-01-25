// 用到了 jwt
let jwt = require('jsonwebtoken');
module.exports = {
    // 生成 token 
    createToken:(payload) =>{
        return jwt.sign(payload, '***my_scrret***', {expiresIn: 100});
    },
    // 验证 token
    verifyToken:async (ctx, next) => {
        if(ctx.header.authorization){
          let token = ctx.header.authorization;
          try {
            // 验证token
            jwt.verify(token, '***my_scrret***');
            // 验证通过，执行之后的中间件
            await next();
          } catch(err) {
            // 需要鉴权
            ctx.status = 401;
            ctx.body = {
              state: 'auth-fail'
            };
          }
        }
      }
}