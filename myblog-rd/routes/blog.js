const router = require('koa-router')()
const { verifyToken } = require('../auth')

let controller = require('../controllers/blogController');
// 路由前缀
router.prefix('/blog')
router.get('/list',controller.welcome)

router.get('/detail',verifyToken,controller.getBlogDetail)
router.post('/push',verifyToken,controller.pushArticle)
router.post('/comment',verifyToken,controller.pushComment)
module.exports = router