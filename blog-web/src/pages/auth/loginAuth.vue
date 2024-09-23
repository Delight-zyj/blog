<!-- 登陆页面 -->
<template>
    <el-container class="container">
        <el-main class="page-main">
                <div class="login-box">
                    <div>登陆</div>
                    <div class="fxr">
                       <div class="lbl">用户名：</div>
                       <el-input v-model="username" placeholder=""></el-input>
                    </div>
                    <div class="fxr">
                        <div class="lbl">密码：</div>
                        <el-input v-model="password" placeholder="" type="password"></el-input>
                    </div>
                </div>
        </el-main>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        handleChange(value) {
            console.log(value);
        }
    }
};
</script>

<style scoped="scoped">
.container{
    height: 100vh;
    width: 100%;
    background-color: aquamarine;
}

.login-box{
    width: 600px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border : 1px solid black;
}

.page-main{
    display: flex;
    justify-content: center;
    align-items: center;
}

.lbl{
    min-width: 80px;
}

.fxr{
    display: flex;
    flex-direction: row;

}
</style>