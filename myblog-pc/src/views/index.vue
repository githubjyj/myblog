<template>
  <div class="container">
    <div class="blog-list">
      <div class="blog" v-for="item in blogList" :key="item.blogId">
        <h3 class="blog-title">
          <router-link :to="{ path: '/blog/detail/' + item.blog_id }">{{ item.title }}</router-link>
        </h3>
        <p class="blog-content">{{ item.content }}</p>
        <span class="post-time">{{ item.postTime }}</span>
      </div>
    </div>
    <router-link to="/PushArticle">发布文章</router-link>
  </div>
</template>

<script>
export default {
    data(){
        return {
            blogList:[]
        }
    },
    created(){
        this.getData()
    },
    methods: {
        getData(){
            this.$http
                .get("/blog/list")
                .then((res) => {
                    console.log(res);
                    this.blogList = res.data.results
            })
        }
    }
}
</script>

<style>
    .blog-list{
    width: 815px;
    margin: 20px auto;
}
.blog{
    background: #cccccc;
    padding: 20px;
    margin: 20px 0;
}
.blog-title, .blog-content, .post-time{
    margin: 20px 0;
}
</style>