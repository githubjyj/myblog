const router = require('koa-router')()

let controller = require('../controllers/blogController');
// 路由前缀
router.prefix('/blog')

router.get('/list',controller.welcome)

router.get('/detail',controller.getBlogDetail)
router.post('/push',controller.pushArticle)
router.post('/comment',controller.pushComment)

router.post('/blogComment',controller.pushBlogComment)
module.exports = router