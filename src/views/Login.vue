<template>
  <div class="login">

    <img class="logo" src="../assets/logo.png">

    <div class="form">
        <input class="input" type="text" v-model="userName" placeholder="请输入账号">
        <input class="input" type="password" v-model="password" placeholder="请输入密码">
        <div class="login" @click="login">登录</div>
    </div>
  </div>
</template>

<script>
import { setToken } from '@/utils/auth'; // 验权(从cookie中获取)

export default {
    data() {
        return {
            userName: 'admin',
            password: '123456'
        }
    },
    methods: {
        async login() {
            console.log(this.userName, this.password);

            if (!!this.userName && !!this.password) {
                console.log('登录成功');
                await setToken('Token', '123456');
                this.$router.push({ path:'/' });
            }
        }
    },
}
</script>

<style lang="less">
    @color1: #333;

    .login {
        margin-top: 50px;
        .logo {
            width: 150px;
            display: block;
            margin: 0 auto;
        }
        .form {
            margin: 30px 0;
            .input {
                display: block;
                margin: 10px auto;
                width: 60%;
                border-top: 0;
                border-left: 0;
                border-right: 0;
                border-bottom: 1px solid #eee;
                font-size: 16px;
                padding: 6px 15px;
                transition: all .5s;
                
                &:focus {
                    outline: none;
                    border-bottom-color: @color1;
                }
            }
        }
        .login {
            width: 40%;
            height: 40px;
            line-height: 40px;
            font-size: 14px;
            text-align: center;
            margin: 50px auto;
            background-color: @color1;
            color: #fff;
            border-radius: 5px;
        }
    }
</style>