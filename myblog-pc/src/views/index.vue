<template>
  <div>
    <div class="container">
      <div class="content">
        <div class="main">
          <div class="list">
                    <article v-for="item in blogList" :key="item.blogId">
                        <h2><router-link :to="{ path: '/blog/detail/' + item.blog_id }">{{ item.title }}</router-link></h2> 
                        <p class="description">{{item.description}}<router-link :to="{ path: '/blog/detail/' + item.blog_id }"><span>➥</span>{{ item.title }}</router-link></p>
                        <p class="date">
                            <span>posted @</span>
                            <time pubdate="2021-01-18">{{item.post_time}}</time>
                        </p>
                    </article>
            </div>
        </div>

        <aside class="aside">
          <div class="about">
            <h4 class="v-section-tit">About JUN</h4>
            <article class="violet-about-det">
              <p>Front-end Engineer，前端开发工程师</p>
              <p>
                目前是一名学生，主要负责前端规划、框架与架构、前端性能优化。
              </p>
              <p>专注前端技术，关注交互体验，擅长HTML CSS JS开发。</p>
              <p>
                坚信前端工程师的价值是最终能把技术和设计完美结合在一起。用最新的技术方案巧妙地帮助这些设计得以实现。
              </p>
            </article>
          </div>
          <div class="friendly">
            <h4 class="v-section-tit">My Links</h4>
            <article class="attent-det">
              <ul>
                <li>
                  <a href="https://github.com/githubjyj/myblog" target="_blank" title="my github"
                    ><span>GitHub</span></a
                  >
                </li>
              </ul>
            </article>
          </div>
        </aside>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogList: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.get("/blog/list").then((res) => {
        this.blogList = res.data.results;
        console.log(res);
      });
    },
  },
};
</script>

<style scoped>
.container .content {
  display: flex;
  justify-content: space-between;
}
.main {
  width: 71%;
}
.main .list article {
  line-height: 1.8em;
  margin-bottom: 34px;
}
.main .list h2 {
  font-weight: 400;
}
.main .list h2 .title {
  font-size: 30px;
  color: #3e3b3f;
  position: relative;
  box-shadow: 0 0 1px transparent;
}
.main .list .description {
  line-height: 25px;
  font-size: 14px;
  color: #666;
}
.main .list .more {
  font-size: 12px;
  color: #3e3b3f;
}
.main .list .date {
  text-align: right;
  margin-left: 60px;
  font-size: 13px;
  line-height: 12px;
  color: #666;
}

.aside {
  width: 27%;
  float: right;
  color: #3e3b3f;
}
.aside .v-section-tit {
  font-size: 18px;
  line-height: 30px;
  font-weight: 500;
  padding: 0 5px;
  color: #3e3b3f;
  border-bottom: 1px solid #dedede;
  margin-bottom: 6px;
  margin-top: 20px;
}
.aside .about p {
  line-height: 1.6;
  margin-bottom: 10px;
  font-size: 14px;
}
.page {
  text-align: center;
}
.page a,
.page span {
  border: 1px solid #ccc;
  width: 35px;
  height: 35px;
  display: inline-block;
  text-align: center;
  line-height: 35px;
  border-radius: 50%;
  margin: 0 2px;
}
.page span {
  background: #ececec;
  cursor: default;
}
.page .next,
.page .prev {
  width: auto;
  padding: 0 6px;
  border-radius: 4px;
}
</style>
