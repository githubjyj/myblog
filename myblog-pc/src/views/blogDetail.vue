<template>
  <!-- <div class="container">
    <div class="content">
    <div class="blog">
      <div class="blog-title">
        <h3>{{blog.title}}</h3>
        <span>{{blog.post_time}}</span>
      </div>

      <div class="blog-content">{{blog.content}}</div>
      <div class="comments">
      </div>
    </div>

      <textarea  cols="30" rows="5" v-model="comment"></textarea>
    <button @click="pushcomment">提交评论</button>

    <h4>评论</h4>
        <div class="comment" v-for="item in blog.comments" :key="item.comm_id">
          <div class="comment-content">{{item.comm_content}}</div>
          <div class="comment-info">
            <span class="userinfo">{{item.username}}</span>
            <span class="post-time">{{item.comm_post_time}}</span>
          </div>
        </div>
    </div>
  </div> -->

  <div class="container">
    <div class="content">
      <div class="main detail" id="app">
        <!-- 文章题目 -->
        <h1>{{ blog.title }}</h1>
        <!-- 发布时间 -->
        <div class="date">发布于 {{ blog.post_time }}</div>

        <!-- 文章详情 -->
        <article>
          <div class="lead">
            {{ blog.content }}
          </div>
        </article>

        <div>
          <div class="comments_wenzi">
            <div data-v-67070f71="" class="i-publish">

                <!-- 评论内容 -->
                <div data-v-67070f71="" class="i-publish-content">
                  <textarea data-v-67070f71="" required="required" v-model="comment"></textarea>
                </div>

                <div data-v-67070f71="" class="manager">

                  <!-- 评论人信息 -->
                  <!-- <div data-v-67070f71="">
                    <input data-v-67070f71="" maxlength="48" required="required" type="text" v-model="content_user" placeholder="* 请输入您的昵称" class="text" value=""/>
                  </div> -->

                  <div data-v-67070f71="" class="sss">
                    <div data-v-67070f71="" class="ssb"></div>
                    <button data-v-731308b2="" data-v-67070f71="" class="i-btn" @click="pushcomment">
                      <span data-v-731308b2="">提交评论</span>
                    </button>
                  </div>

                </div>
           
            </div>

            <!-- 评论 -->
            <div class="list">
              <h3 class="title">评论</h3>
              <div class="nocomments">

                <!-- 评论 -->
                <div class="comment" v-for="(item,index) in blog.comments" :key="item.comm_id">
                  
                  <p v-if="blog.comments[0].comm_id">{{index+1}}楼</p>
                  <div class="comment-content">{{ item.comm_content }}</div>
                  <div class="comment-info">
                    <span class="post-time">{{ item.comm_post_time }}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: "",
      comment: ""
    };
  },
  created() {
    this.getBlogDetail();
  },
  methods: {
    getBlogDetail() {
      // 从地址中获取的 blogId 值
      let blogId = this.$route.params.blogId;
      this.$http
        .get("/blog/detail", {
          params: {
            blogId: blogId,
          },
        })
        .then((res) => {
          console.log("下面是请求回来的数据");
          console.log(res);
          // 从服务器中或得blog数据和state状态
          let { state, blog } = res.data;
          if (state == "success") {
            this.blog = blog;
          }
        })
        .catch((err) => {
          console.log(err);
          this.$router.push("/error");
        });
    },

    pushcomment() {
      this.$http
        .post("/blog/comment", {
          content: this.comment,
          blog_id: this.$route.params.blogId
        })
        .then((res) => {
          if (res.data == "success") {
            this.getBlogDetail();
          }
        });
    },
  },
};
</script>


<style scoped>
.i-btn[data-v-731308b2] {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-color: #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
}
.i-btn[data-v-731308b2]:hover {
  background: #409eff;
  border-color: #409eff;
  color: #fff;
}
.submit_disabled[data-v-731308b2] {
  cursor: not-allowed;
}
.submit_disabled[data-v-731308b2],
.submit_disabled[data-v-731308b2]:hover {
  color: #8cc5ff;
  background-color: #ecf5ff;
  border-color: #d9ecff;
}

.i-publish .i-publish-content[data-v-67070f71] {
  padding: 10px 4px;
  border: 1px solid #9c9c9c;
  margin-bottom: 4px;
}
.i-publish .i-publish-content textarea[data-v-67070f71] {
  min-height: 120px;
  width: 100%;
  resize: none;
  border: 0;
  font-size: 14px;
  outline: none;
}
.i-publish .submitTip[data-v-67070f71] {
  margin-right: 12px;
  color: #666;
  font-size: 13px;
}
.i-publish .ss[data-v-67070f71] {
  margin-top: 6px;
  text-align: right;
}
.i-publish .ss span[data-v-67070f71] {
  color: #666;
  margin-right: 10px;
}
.i-publish .ss span em[data-v-67070f71] {
  color: red;
}
.i-publish .manager[data-v-67070f71] {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.i-publish .manager .text[data-v-67070f71] {
  padding: 10px 2px;
  font-size: 14px;
  margin-right: 6px;
}
.i-publish .manager .captcha[data-v-67070f71] {
  width: 100px;
}
.i-publish .manager .sss[data-v-67070f71] {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}
.i-publish .manager .sss .ssb[data-v-67070f71],
.i-publish .manager .sss[data-v-67070f71] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
@media screen and (max-width: 530px) {
  .i-publish .manager .sss[data-v-67070f71],
  .i-publish .manager[data-v-67070f71] {
    display: block;
  }
}
.comment{
  border:1px double black;
  margin-top:1em;
}
.comments_wenzi {
  margin-top: 30px;
}
.comments_wenzi .clearfix:after {
  content: "\A0";
  display: block;
  visibility: hidden;
  width: 0;
  height: 0;
  clear: both;
  font-size: 0;
  line-height: 0;
  overflow: hidden;
}
.comments_wenzi .clearfix {
  zoom: 1;
}
.list .title {
  margin: 10px 0;
}
@-webkit-keyframes animate_in-data-v-228146a4 {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes animate_in-data-v-228146a4 {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes animate_out-data-v-228146a4 {
  0% {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes animate_out-data-v-228146a4 {
  0% {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
