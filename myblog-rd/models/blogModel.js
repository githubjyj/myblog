const db = require("./db");
module.exports = {
    getBlogs(){
        return db.query(`SELECT * FROM t_blog`);
    },

    getBlogById(blogId){
        // 数据库发生了改变 sql语句要变
        return db.query(`
        SELECT blog.*, comm.comm_id, comm.content as comm_content, comm.post_time as comm_post_time
        FROM t_blog blog  LEFT JOIN t_comment comm 
        ON comm.blog_id=blog.blog_id 
        WHERE blog.blog_id=?`, [blogId]);
    },
    
    saveBlog(article){
        return db.query("insert into t_blog set ?", article);
    },
    saveComment(comment){
        return db.query("insert into t_comment set ?", comment);
    },
    saveBlogComment(blogComment){
        return db.query("insert into t_message set ?", blogComment);
    }
};