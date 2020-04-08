<template>
    <div class="orderlist">
        <table border="0">
            <thead>
                <tr>
                    <th>问题类型</th>
                    <th>工单号</th>
                    <th>问题标题</th>
                    <th>绑定业务</th>
                    <th>处理状态</th>
                    <th>跟进</th>
                    <th>提交时间</th>
                    <th>提交人</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in list" :key="index">
                    <td>{{ item.type }}</td>
                    <td>{{ item.number }}</td>
                    <td>
                        <a href="">{{ item.title }}</a>
                    </td>
                    <td>{{ item.business }}</td>
                    <td>{{ item.status }}</td>
                    <td>{{ item.follow }}</td>
                    <td>{{ item.time }}</td>
                    <td>{{ item.from }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
        };
    },
    created() {
        this.$api.getOrder().then((data) => {
            this.list = data.data.data.list;
        });
    },
};
</script>

<style lang="scss" scoped>
table {
    width: 100%;
    background: #e0e0e0;
    border-spacing: 1px;
    thead {
        background: #eee;
        th {
            line-height: 38px;
            font-size: 15px;
            color: #333;
        }
    }
    tbody {
        background: #fff;
        td {
            line-height: 37px;
            font-size: 14px;
            font-family: arial;
            text-align: center;
            a {
                text-align: left;
                display: block;
                padding-left: 2%;
                color: #09c;
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>
