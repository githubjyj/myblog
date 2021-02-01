<template>
  <div class="container">
        <div class="content">
            管理员账号：<input type="text" name="title" id="title" v-model="loginNum">
            管理员密码：<input type="password" name="password" id="title" v-model="password">
            <button @click="login">进入编辑</button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            loginNum:"",
            password:""
        }
    },
    methods: {
        login(){
            this.$http
            .post("/blog/login", {
                // 密码账号
                loginNum: this.loginNum,
                password:this.password
            })
            .then((res) => {
                console.log(res)
                let {state,value} = res.data
                // console.log(state,value)
                if (state == "success") {
                        console.log(res)
                        // 发表成功
                        alert("登录成功")
                        this.$store.commit('setUserInfo',{value})
                        this.$router.push('/PushArticle');
                    }else{
                        alert("登录失败")
                        this.$router.push('/');
                    }
            });
        }
    }
}
</script>

<style scoped>
    input{
        display:block;
    }
</style>