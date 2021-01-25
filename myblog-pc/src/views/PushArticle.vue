<template>
    <div class="container">
            <div class="login-form">
                <h3>发表文章</h3>
                    <p class="title">
                        标题：<input type="text" name="title" id="title" v-model="title" autocomplete="off">
                    </p>

                    <p class="article">
                        文章：<input type="text" name="content" id="content" v-model="content" autocomplete="off">
                    </p>
                    <p>
                        <button type="submit" class="btn" @click="push">发表</button>
                    </p>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        title:"",
        // 文章信息
        content: ""
        };
    },
   methods:{
        push(){
             this.$http
            .post("/blog/push", {
                title: this.title,
                content: this.content,
                user_id: localStorage.getItem('user_id')
            })

            .then((res) => {
                let {status} = res.data;
                console.log(status);
                if (status == "success") {
                        // 注册成功
                        this.$router.push('/');
                    }
            });
        }
    }
}
</script>

<style scoped>
    #username{
        width:500px;
        height:300px;
        display:block;
        margin:0 auto;
    }
</style>