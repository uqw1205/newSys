<template>
    <div class="lside">
        <ul>
            <router-link :to="{ name: 'addOrder' }" tag="li"
                >新建工单</router-link
            >
            <router-link :to="{ name: 'needList' }" tag="li"
                >待处理工单</router-link
            >
            <router-link :to="{ name: 'orderList' }" tag="li"
                >全部工单</router-link
            >
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.lside {
    width: 200px;
    float: left;
    height: calc(100vh - 60px);
    background: #eee;
    li {
        text-align: center;
        line-height: 50px;
        border-bottom: 1px solid #eaeaea;
        cursor: pointer;
        user-select: none;
        &.router-link-active {
            background: #fff;
        }
    }
}
</style>
