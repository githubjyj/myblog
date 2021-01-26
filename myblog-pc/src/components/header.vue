<template>
  
    <div class="login-box">
    <header>
      <div class="content clearfix">
				<a class="logo" href="https://github.com/githubjyj/myblog" target="blank">军临天下</a>
				<nav>
					<em></em>
					<ul>
						<li><a title="首页" href="/">首页</a></li>
						<li><a title="关于" href="/About">关于</a></li>
						<li><a title="留言" href="/Message">留言</a></li>
					</ul>
				</nav>
			</div>
    </header>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:"CommonHeader",

    computed: {
        ...mapState(['name'])
    },

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
  padding:0 50px;
  font-weight: bold;
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

@media screen and (max-width: 462px) {
  .detail h1 {
    font-size: 24px;
  }
  nav em {
    display: block;
    cursor: pointer;
  }
  /* nav em:after {
    
    font-size: 1.5em;
    margin-top: 10px;
    display: block;
  } */
   nav ul {
    position: absolute;
    top: 70px;
    width: 100%;
    left: 0;
    background-color: #2c3e50;
  }
  nav ul li {
    margin-left: 0;
    width: 100%;
    text-align: center;
  }
  nav ul li a {
    color: #fff;
  }
  nav ul li a:hover {
    background: none;
  }
  .wechat_pub img {
    width: 130px;
    height: 130px;
  }
}


</style>