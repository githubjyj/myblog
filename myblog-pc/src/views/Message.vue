<template>
  <div class="container">
    <div class="content">
      <div>
        <div class="comments_wenzi">
          <div class="i-publish">
              <p>* 你对我的博客有什么想法吗？请写在下面吧</p>
              <!-- 文章内容 -->
              <div class="i-publish-content">
                <textarea required="required" v-model="content"></textarea>
              </div>

              <div class="manager">
                <div>
                  <p>* 留下姓名和邮箱方便作者找到你，哈哈哈</p>
                  <!-- 用户名 -->
                  <input
                    maxlength="48"
                    required="required"
                    type="text"
                    placeholder="* 请输入您的昵称"
                    class="text"
                    value=""
                    v-model="name"
                  />

                  <!-- 用户邮箱 -->
                  <input
                    maxlength="28"
                    required="required"
                    type="email"
                    placeholder="* 请输入您的邮箱"
                    class="text"
                    value=""
                    v-model="email"
                  />

                </div>
                <div  class="sss">
                  <div  class="ssb"></div>

                  <button class="i-btn" @click="pushComment">
                    <span>提交评论</span>
                  </button>
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
  data () {
    return {
      name:"",
      email:"",
      content:""
    }
  },
  methods: {
    pushComment(){
            this.$http
            .post("/blog/blogComment", {
                // 给服务器传过去的参数
                name: this.name,
                email:this.email,
                content: this.content,
            })

            .then((res) => {
                let {data} = res;
                console.log(data);
                if (data == "success") {
                  alert("你的评论将会被作者看到，及时回复你")
                }
            });
    }
  }
};
</script>

<style scoped>
.i-btn{
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

.i-btn:hover {
  background: #409eff;
  border-color: #409eff;
  color: #fff;
}


.i-publish .i-publish-content{
  padding: 10px 4px;
  border: 1px solid #9c9c9c;
  margin-bottom: 4px;
}
.i-publish .i-publish-content textarea {
  min-height: 120px;
  width: 100%;
  resize: none;
  border: 0;
  font-size: 14px;
  outline: none;
  box-sizing: content-box;
}
.i-publish .submitTip {
  margin-right: 12px;
  color: #666;
  font-size: 13px;
}
.i-publish .ss{
  margin-top: 6px;
  text-align: right;
}
.i-publish .ss span {
  color: #666;
  margin-right: 10px;
}
.i-publish .ss span em {
  color: red;
}
.i-publish .manager{
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
.i-publish .manager .text {
  padding: 10px 2px;
  font-size: 14px;
  margin-right: 6px;
}
.i-publish .manager .captcha{
  width: 100px;
}
.i-publish .manager .sss {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}
.i-publish .manager .sss .ssb,
.i-publish .manager .sss{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
@media screen and (max-width: 530px) {
  .i-publish .manager .sss,
  .i-publish .manager{
    display: block;
  }
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