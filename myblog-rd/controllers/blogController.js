const blogModel = require("../models/blogModel");
const model = require("../models/blogModel");
// 引入时间处理方法
const date = require("../utils/dateTimeUtil")

module.exports = {
    async welcome(ctx) {
        // 查询所有文章数据
        let results = await model.getBlogs();
        // 格式化时间
        for(let i = 0;i < results.length;i++){
          results[i].post_time = date.formatTime('yyyy-MM-dd hh:mm:ss',results[i].post_time)
        }
        ctx.body = {
          state: 'success',
          results
        }
      },
      // 获取文章详情
      async getBlogDetail(ctx) {
        let { blogId } = ctx.query;
        let results = await blogModel.getBlogById(blogId);
        console.log(results);
        if (results.length > 0) {
          let { blog_id, title, content, post_time } = results[0];
          post_time = date.formatTime('yyyy-MM-dd hh:mm:ss',post_time)
          let blogInfo = {
            blog_id,
            title,
            content,
            post_time,
          };
          blogInfo.comments = [];
          for (let i = 0; i < results.length; i++) {
            let obj = results[i];
            blogInfo.comments.push({
              comm_id: obj.comm_id,
              comm_content: obj.comm_content,
              comm_post_time:obj.comm_post_time?date.formatTime('yyyy-MM-dd hh:mm:ss',obj.comm_post_time):obj.comm_post_time,
              username: obj.username
            });
          }
          ctx.body = {
            blog: blogInfo,
            state:"success"
          }
        }else{
          ctx.body = "fail"
        }
      },

      async pushArticle(ctx){
         // 接收表单数据
         let { title, content, description } = ctx.request.body;
        //  // 连接数据库
         let results = await model.saveBlog({ title, content, description});
         console.log(results);
        //  // 4. 根据查询的结果跳转(或输出)不同的结果页面
         if (results.insertId) {
             //通过判断insertId是不是有正常值，如果有，说明插入成功
             ctx.body = {
               status:"success",
             }
           } else {
             ctx.body = "fail"
           }
      },
      
      async pushComment(ctx){
        let { content,blog_id } = ctx.request.body;
        let results = await model.saveComment({ content, blog_id });
        console.log("下面是保存评论的返回内容");
        console.log(results);
        if(results.insertId){
          ctx.body = "success"
        }else{
          ctx.body = "fail"
        }
      },

      async pushBlogComment(ctx){
        let { name,email,content } = ctx.request.body;
        let results = await model.saveBlogComment({ name, email,content });
        console.log(results);
        if(results){
          ctx.body = "success"
        }else{
          ctx.body = "fail"
        }
      },
      login(ctx){
        let { loginNum,password } = ctx.request.body
        if(loginNum == "lisi" && password == "123456"){
            ctx.body = {
              state:"success",
              value:ctx.request.body
            }
        }else{
          ctx.body = "fail"
        }
      } 
}











