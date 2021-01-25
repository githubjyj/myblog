<template>
    <div class="container">
            <div class="login-form">
                <h3>用户注册</h3>
                    <p>
                        用户名：<input type="text" name="username" id="username" v-model="username">
                    </p>
                    <p>
                        密码：<input type="password" name="password" v-model="password">
                    </p>
                    <p>
                        昵称：<input type="text" name="nickname" v-model="nickname">
                    </p>
                    <p>
                        <button type="submit" class="btn" @click="doRegist">注册</button>
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
      nickname: ""
    };
  },
    methods:{
        doRegist(){
             this.$http
            .post("/users/regist", {
                username: this.username,
                password: this.password,
                nickname: this.nickname
            })
             .then((res) => {
                let {status} = res.data;
                console.log(status);
                if (status == "success") {
                        // 注册成功
                        this.$router.push('/login');
                    } else {
                        alert('注册失败');
                }
            });
        }
    }
}
</script>

<style scoped>
    .login-form{
    width: 650px;
    background: #cccccc;
    margin: 40px auto;
    padding: 20px 0;
    text-align: center;
}
.login-form p{
    padding: 20px 0;
}

.btn{
    width: 70px;
}
</style>