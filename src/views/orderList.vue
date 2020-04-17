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
                    <td>{{ item.type_name }}问题</td>
                    <td>{{ item.id }}</td>
                    <td class="title">
                        <router-link
                            tag="a"
                            :to="{ name: 'showFaq', params: { id: item.id } }"
                            >{{ item.title }}</router-link
                        >
                    </td>
                    <td class="salename">{{ item.sales_name }}</td>
                    <td
                        class="status"
                        :class="
                            item.status == 1
                                ? ''
                                : item.status == 8
                                ? 'green'
                                : 'red'
                        "
                    >
                        {{
                            item.status == 1
                                ? "已回复"
                                : item.status == 0
                                ? "待处理"
                                : "已完成"
                        }}
                    </td>
                    <td>{{ item.member_group_id }}</td>
                    <td>{{ +item.create_time | formatDate }}</td>
                    <td>{{ item.user_id }}</td>
                </tr>
            </tbody>
        </table>
        <pagination
            v-show="total > 0"
            :total="total"
            :page.sync="listQuery.page"
            :limit.sync="listQuery.limit"
            @pagination="getList"
        />
    </div>
</template>

<script>
import Pagination from "../components/Pagination";
export default {
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            // console.log(vm);
        });
    },
    components: {
        Pagination,
    },
    data() {
        return {
            list: [],
            total: 0,
            listQuery: {
                page: 1,
            },
        };
    },
    filters: {
        // 时间戳
        formatDate: function(value) {
            let date = new Date(value * 1000);
            let y = date.getFullYear();
            let MM = date.getMonth() + 1;
            MM = MM < 10 ? "0" + MM : MM;
            let d = date.getDate();
            d = d < 10 ? "0" + d : d;
            let h = date.getHours();
            h = h < 10 ? "0" + h : h;
            let m = date.getMinutes();
            m = m < 10 ? "0" + m : m;
            return y + "-" + MM + "-" + d + " " + h + ":" + m;
        },
    },
    methods: {
        getList() {
            var page = {
                p: this.listQuery.page,
            };
            this.$api.getOrder(page).then((data) => {
                this.list = data.data.data.list;
            });
        },
    },
    created() {
        // 渲染表格
        this.$api.getOrder().then((data) => {
            console.log(data);
            this.list = data.data.data.list;
            this.total = +data.data.data.total;
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
            line-height: 35px;
            font-size: 13px;
            font-family: arial;
            text-align: center;
            &.salename {
                text-align: left;
                padding: 0 15px;
            }
            &.status {
                color: #00d0ff;
                &.red {
                    color: red;
                }
                &.green {
                    color: green;
                }
            }
            &.title {
                width: 45%;
            }
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
.el-pagination {
    text-align: center;
    margin-top: 20px;
}
</style>
