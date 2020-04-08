<template>
    <div class="header">
        <div class="header-logo">优盟工单系统</div>
        <div class="header-login">
            <div class="login-name" @click="showUl">{{ login }}</div>
            <ul v-show="flag">
                <router-link
                    :to="{ name: 'changePwd' }"
                    tag="li"
                    @click="showUl"
                    >修改密码</router-link
                >
                <router-link :to="{ name: 'showFaq' }" tag="li" @click="showUl"
                    >退出</router-link
                >
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            login: "无锡技术",
            flag: false,
        };
    },
    methods: {
        showUl() {
            this.flag === true ? (this.flag = false) : (this.flag = true);
        },
    },
};
</script>

<style lang="scss" scoped>
.header {
    height: 60px;
    background: #09c;
    line-height: 60px;
    .header-logo {
        background: #134d77;
        float: left;
        text-align: center;
        color: #fff;
        width: 200px;
        font-size: 18px;
    }
    .header-login {
        float: right;
        text-align: center;
        font-size: 15px;
        width: 112px;
        color: #fff;
        position: relative;
        width: 150px;
        .login-name {
            background: rgba(0, 0, 0, 0.1);
            cursor: pointer;
            &::after {
                content: "";
                display: inline-block;
                width: 0;
                height: 0;
                border-top: 7px solid #fff;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                vertical-align: 1px;
                margin-left: 10px;
            }
        }
        ul {
            position: absolute;
            top: 60px;
            right: 0;
            width: 149px;
            background: #fff;
            box-shadow: 0 0 3px #999;
            z-index: 9;
            li {
                height: 40px;
                line-height: 40px;
                border-bottom: 1px solid #eee;
                color: #333;
                font-size: 13px;
                cursor: pointer;
                &:hover {
                    background: rgba(0, 0, 0, 0.1);
                }
            }
        }
    }
}
</style>
