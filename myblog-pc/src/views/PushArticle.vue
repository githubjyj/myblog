<template>
    <div class="container">
        <div class="content">
            <div class="login-form">
                <h3>发表文章</h3>

                    <p class="title">
                        标题：<input type="text" name="title" id="title" v-model="title" >
                    </p>

                    <br>

                    <p class="description">
                        描述：<input type="text" name="description" id="description" v-model="description" >
                    </p>
                    
                    文章内容
                    <p class="article">
                        <!-- 文章：<input type="text" name="content" id="content" v-model="content" autocomplete="off"> -->
                        <textarea v-model="content"></textarea>
                    </p>

                    <p>
                        <button type="submit" class="btn" @click="push">发表文章</button>
                    </p>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        title:"",
        // 文章信息
        description:"",
        content: ""
        };
    },
   methods:{
        push(){
             this.$http
            .post("/blog/push", {
                // 给服务器传过去的参数
                title: this.title,
                description:this.description,
                content: this.content,
            })

            .then((res) => {
                let {status} = res.data;
                console.log(status);
                if (status == "success") {
                        // 发表成功
                        alert("文章发表成功")
                        this.$router.push('/');
                    }
            });
        }
    }
}
</script>

<style scoped>

</style>