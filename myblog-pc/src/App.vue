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
</style>
