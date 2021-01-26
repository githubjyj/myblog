<template>
  <div id="app">
      <common-header></common-header>
      <router-view/>
  </div>
</template>

<script>

import CommonHeader from "./components/header"

export default {
    components:{
      CommonHeader
    }
};
</script>

<style lang="scss">
blockquote,
body,
button,
dd,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
input,
legend,
li,
ol,
p,
pre,
td,
textarea,
th,
ul {
  margin: 0;
  padding: 0;
}
body,
button,
input,
select,
textarea {
  font: 16px/1.5 -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC,
    Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei,
    sans-serif;
  color: #2c2c3b;
  font-weight: 400;
  word-wrap: break-word;
  -webkit-font-kerning: normal;
  font-kerning: normal;
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt", "kern";
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}
address,
cite,
dfn,
em,
var {
  font-style: normal;
}
code,
kbd,
pre,
samp {
  font-family: source code pro, couriernew, courier, pingfang sc medium;
}
small {
  font-size: 12px;
}
ol,
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
sup {
  vertical-align: text-top;
}
sub {
  vertical-align: text-bottom;
}
legend {
  color: #000;
}
fieldset,
img {
  border: 0;
}
button,
input,
select,
textarea {
  font-size: 100%;
  outline: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: #4183c4;
}
[v-cloak] {
  display: none;
}
body {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-overflow-scrolling: touch;
}

.container {
  padding-top: 20px;
}
.content {
  width: 1080px;
  margin: 0 auto;
  zoom: 1;
}

footer {
  margin: 20px 0;
  text-align: center;
  font-size: 15px;
  
}

@media screen and (max-width: 1080px) {
  .content {
    width: auto;
    padding: 0 10px;
  }
  .content .main {
    width: 100%;
    float: none;
  }
  .content .main .wechat_pub {
    display: block;
  }
  .content .aside,
  .sidenav {
    display: none;
  }
}
@media screen and (max-width: 700px) {
  .navbar form,
  .qrcode {
    display: none;
  }
  .wechat_pub img {
    width: 165px;
    height: 165px;
  }
}
@media screen and (max-width: 462px) {
  .detail h1 {
    font-size: 24px;
  }
  nav em {
    display: block;
    cursor: pointer;
  }
  nav em:after {
    content: "\2630";
    font-size: 1.5em;
    margin-top: 10px;
    display: block;
  }
  nav ul {
    position: absolute;
    top: 52px;
    width: 100%;
    left: 0;
    display: none;
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
