<template>
  <div class="container">
    <div class="blog">
      <div class="blog-title">
        <h3>{{blog.title}}</h3>
        <span>{{blog.post_time}}</span>
      </div>
      <div class="blog-content">{{blog.content}}</div>
      <div class="comments">
        <h4>评论</h4>
        <div class="comment" v-for="item in blog.comments" :key="item.comm_id">
          <div class="comment-content">---{{item.comm_content}}---</div>
          <div class="comment-info">
            评论人：<span class="userinfo">{{item.username}}</span>
            评论时间：<span class="post-time">{{item.comm_post_time}}</span>
          </div>
        </div>
      </div>
    </div>
    我的评论:<input type="text" v-model="comment"> <button @click="pushcomment">发表</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog:"",
      comment:""
    };
  },
  created () {
     this.getBlogDetail();
  },
  methods: {
      getBlogDetail() {
        // 从地址中获取的 blogId 值
      let blogId = this.$route.params.blogId;
      this.$http
          .get("/blog/detail",{
            params: {
              blogId: blogId
            }
          })
        .then((res) => {
          console.log(res);
          // 从服务器中或得blog数据和state状态
          let {state,blog} = res.data;
          if (state == "success") {
            this.blog = blog;
          }
        })
        .catch((err) => {
          console.log(err);
          this.$router.push("/login");
        });
    },

    pushcomment(){
      this.$http
        .post("/blog/comment", {
                content: this.comment,
                blog_id: this.$route.params.blogId,
                user_id: localStorage.getItem('user_id')
            })
        .then((res) => {
          // console.log(res);
          // 从服务器中或得blog数据和state状态
          if(res.data == "success"){
            this.getBlogDetail()
          }
        })
    } 
  },
};
</script>
<style scoped>
.blog {
  margin: 20px auto;
  padding: 20px;
  background: #cccccc;
}
.blog-title {
  padding: 10px;
}
.blog-content {
  padding: 10px;
}
.comment {
  padding: 20px;
}
.comment-info {
  float: right;
}
</style>