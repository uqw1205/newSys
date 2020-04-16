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
                    <td>
                        <router-link
                            tag="a"
                            :to="{ name: 'showFaq', params: { id: item.id } }"
                            >{{ item.title }}</router-link
                        >
                    </td>
                    <td>{{ item.sales_name }}</td>
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
        <el-pagination
            v-show="total > 0"
            :total="total"
            :page.sync="listQuery.page"
            :limit.sync="listQuery.limit"
            @pagination="getList"
        />
    </div>
</template>

<script>
export default {
    beforeRouteEnter(to, from, next) {
        // console.log(this);
        next((vm) => {
            // console.log(vm);
        });
    },
    data() {
        return {
            list: [],
            total: 0,
            listLoading: true,
            listQuery: {
                page: 1,
                limit: 2,
                importance: undefined,
                title: undefined,
                type: undefined,
                sort: "+id",
            },
        };
    },
    filters: {
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
            this.listLoading = true;
            this.$api.getOrder(this.listQuery).then((data) => {
                this.list = data.data.data.list;
                this.total = data.data.data.total;
                // console.log(this.list)
                setTimeout(() => {
                    this.listLoading = false;
                }, 1.5 * 1000);
            });
        },
    },
    created() {
        this.$api.getOrder().then((data) => {
            var list = [];
            for (var i = 0; i < data.data.data.list.length; i++) {
                if (data.data.data.list[i].status == 0) {
                    list.push(data.data.data.list[i]);
                }
            }
            this.list = list;
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
            &.status {
                color: #00d0ff;
                &.red {
                    color: red;
                }
                &.green {
                    color: green;
                }
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
