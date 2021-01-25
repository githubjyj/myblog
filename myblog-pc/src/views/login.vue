<template>
    <div class="container">
        <div class="login-form">
            <h3>用户登录</h3>
            <p>
                用户名：<input type="text" name="username" v-model="username">
            </p>
            <p>
                密码：<input type="password" name="password" v-model="password">
            </p>
            <p>
                <button @click="doLogin" class="btn">登录</button>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      // 与账号密码绑定
      username: "",
      password: "",
    };
  },
  methods: {
    doLogin() {
      this.$store.commit('getUserName',this.username)
      this.$http
        .post("/users/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          let {status,token,payload} = res.data;
          if (status == "success") {
            // 登录成功
            // 存储 token
            this.$store.dispatch('getUserId',payload.userId)
            this.$store.dispatch('setToken', token)
            this.$router.push('/');
          } else {
            alert('用户名或密码不正确!');
          }
        });
    },
  },
};
</script>

<style scoped>
.login-form {
  width: 650px;
  background: #cccccc;
  margin: 40px auto;
  padding: 20px 0;
  text-align: center;
}
.login-form p {
  padding: 20px 0;
}
.btn {
  width: 70px;
}
</style>