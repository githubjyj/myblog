<template>
  
    <div class="login-box">
    <header>
      <div class="content clearfix">
				<a class="logo" href="">军临天下</a>
				<nav>
					<em></em>
					<ul>
						<li><a title="首页" href="">首页</a></li>
						<li><a title="归档" href="#">归档</a></li>
						<li><a title="标签" href="#">标签</a></li>
						<li><a title="关于" href="#">关于</a></li>
						<li><a title="留言" href="#">留言</a></li>
					</ul>
				</nav>
			</div>
    </header>
        <!-- <div>{{name}}</div> -->
        <!-- <div v-if="!name"><a href="/login">登录</a> / <a href="/regist">注册</a></div> -->
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:"CommonHeader",
    computed: {
        ...mapState(['name'])
    }
}
</script>

<style scoped>

header {
  position: relative;
  box-shadow: inset 0 -1px 0 #f3f3f4;
}
header .content {
  height: 78px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding:0 20px;
}
header .logo {
  display: block;
  font-family: Courgette, cursive;
  font-size: 25px;
  font-weight: bolder;
  color: #4d444f;
  line-height: 25px;
}
header ul {
  position: relative;
  display: block;
  display: flex;
}
header ul li {
  display: block;
  margin-left: 18px;
}
header ul li a {
  padding: 2px;
  color: #2c2c3b;
  text-decoration: none;
  font-size: 18px;
  position: relative;
}
header ul li a:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: #6891ff;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}
header ul li a:hover:before {
  visibility: visible;
  transform: scaleX(1);
}

</style>