const db = require("./db");
module.exports = {
    getBlogs(){
        return db.query(`SELECT * FROM t_blog`);
    },
    getBlogById(blogId){
        return db.query(`
        SELECT blog.*, comm.comm_id, comm.content as comm_content, comm.post_time as comm_post_time, usr.username
        FROM t_blog blog  LEFT JOIN t_comment comm 
        ON comm.blog_id=blog.blog_id 
        LEFT JOIN t_user usr ON comm.user_id=usr.user_id
        WHERE blog.blog_id=?`, [blogId]);
    },
    saveBlog(article){
        return db.query("insert into t_blog set ?", article);
    },
    saveComment(comment){
        return db.query("insert into t_comment set ?", comment);
    }
};