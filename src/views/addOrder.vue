<template>
    <div class="addorder">
        <div class="addForm">
            <form action="#">
                <div>
                    <label for="">问题类型</label>
                    <select name="faqName" id="faqName" v-model="user.faqName">
                        <option value="domain" name="domain" id="domain"
                            >域名问题</option
                        >
                        <option value="website" name="website" id="website"
                            >网站问题</option
                        >
                        <option value="record" name="record" id="record"
                            >备案问题</option
                        >
                        <option
                            value="optimization"
                            name="optimization"
                            id="optimization"
                            >优化问题</option
                        >
                        <option
                            value="otherques"
                            name="otherques"
                            id="otherques"
                            >其他问题</option
                        >
                    </select>
                </div>
                <div>
                    <label for="business">绑定业务</label>
                    <input
                        type="text"
                        name="business"
                        id="business"
                        @focus="showAdd"
                        v-model="user.business"
                        autocomplete="off"
                    />
                </div>
                <div>
                    <label for="title">工单标题</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        autocomplete="off"
                        v-model="user.title"
                    />
                </div>
                <div>
                    <label for="description">问题描述</label>
                    <textarea
                        name="description"
                        id="description"
                        cols="30"
                        rows="10"
                        v-model="user.desc"
                    ></textarea>
                </div>
                <div>
                    <label for=""></label>
                    <input
                        type="button"
                        value="提交工单"
                        class="formbtn"
                        @click="addorder"
                    />
                </div>
            </form>
        </div>
        <div class="addSearch-wrap" v-if="flag">
            <div class="addSearch">
                <div class="search-tit">
                    查询需要处理的公司名
                </div>
                <div class="search-form">
                    <input
                        type="text"
                        v-model="searchName"
                        @keyup.enter="searchBusiness"
                    />
                    <button type="button" @click="searchBusiness">
                        查找
                    </button>
                </div>
                <div class="search-list">
                    <table>
                        <thead>
                            <tr>
                                <th>选择</th>
                                <th>公司名</th>
                                <th>域名</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in list" :key="index">
                                <td>
                                    <input
                                        type="radio"
                                        name="radio"
                                        id="radio"
                                        :value="item.business"
                                        v-model="user.business"
                                    />
                                </td>
                                <td>
                                    {{ item.business }}
                                    <router-link
                                        tag="a"
                                        :to="{
                                            name: 'showFaq',
                                            params: { id: item.id },
                                        }"
                                    >123</router-link>
                                </td>
                                <td>{{ item.domain }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="determine">
                    <button class="btn" @click="showAdd">确定</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: "",
            listcopy: "",
            flag: false,
            searchName: "",
            user: {
                business: "",
                faqName: "domain",
                title: "",
                desc: "",
            },
        };
    },
    methods: {
        showAdd() {
            this.flag = !this.flag;
        },
        addorder() {
            if (!this.user.business) {
                alert("请绑定正确的网站名");
            } else if (this.user.title.length < 5) {
                alert("请输入大于5个字的工单标题");
            } else if (this.user.desc.length < 10) {
                alert("请输入大于10个字的问题描述");
            } else {
                this.$api.addOrder(this.user).then((data) => {});
                if (window.confirm("添加成功！ 是否跳转到待处理工单？")) {
                    this.$router.push({ path: "/needList" });
                } else {
                    this.user = {
                        business: "",
                        faqName: "domain",
                        title: "",
                        desc: "",
                    };
                }
            }
        },
        searchBusiness() {
            var searchName = this.searchName;
            if (!searchName) {
                this.list = this.listcopy;
            }
            var newList = [];
            for (var i = 0; i < this.listcopy.length; i++) {
                if (this.listcopy[i].business.indexOf(searchName) !== -1) {
                    newList.push(this.listcopy[i]);
                }
            }
            this.list = newList;
        },
    },
    created() {
        this.$api.getBusiness().then((data) => {
            this.list = data.data.data.list;
            this.listcopy = data.data.data.list;
        });
    },
};
</script>

<style lang="scss" scoped>
.addorder {
    position: relative;
    height: 100%;
}

.addForm {
    div {
        border-bottom: 1px dashed #ddd;
        padding: 20px 0;
        select {
            height: 30px;
            border: 1px solid #ddd;
            border-radius: 2px;
            padding: 0 20px;
            option {
                line-height: 36px;
                display: inline-block;
                height: 36px;
                padding: 2px 0;
            }
        }
        label {
            margin-right: 15px;
            font-size: 14px;
            width: 80px;
            display: inline-block;
            vertical-align: middle;
        }
        input {
            border: 1px solid #ddd;
            line-height: 30px;
            border-radius: 2px;
            padding: 0 10px;
            min-width: 60%;
        }
        textarea {
            display: inline-block;
            vertical-align: top;
            min-width: 60%;
            border-radius: 2px;
            border: 1px solid #ddd;
            padding: 10px;
        }
        .formbtn {
            width: 15%;
            background: #09c;
            min-width: 15%;
            line-height: 39px;
            border: none;
            color: #fff;
            font-size: 15px;
            cursor: pointer;
        }
    }
}
.addSearch-wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0);
}
.addSearch {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 50%;
    margin: auto;
    height: 55%;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 0 5px #999;
    padding: 3% 2%;
    .search-tit {
        border-bottom: 1px solid #eaeaea;
        font-size: 16px;
        padding-bottom: 10px;
        font-weight: bold;
        color: #666;
        margin-bottom: 30px;
    }
    .search-form {
        input {
            width: 33%;
            border: 1px solid #ccc;
            line-height: 28px;
            border-radius: 2px;
            outline: none;
            padding: 0 5px;
        }
        button {
            width: 15%;
            height: 30px;
            vertical-align: top;
            border: none;
            background: #134d77;
            color: #fff;
            font-size: 14px;
            cursor: pointer;
        }
    }
    .search-list {
        margin-top: 17px;
        height: 320px;
        overflow: auto;
        table {
            width: 100%;
            background: #e8e8e8;
            border-spacing: 1px;
            thead {
                th {
                    line-height: 30px;
                    font-size: 14px;
                }
            }
            tbody {
                background: #fff;
                td {
                    line-height: 28px;
                    text-align: center;
                    font-size: 13px;
                }
            }
        }
    }
    .determine {
        .btn {
            width: 100px;
            line-height: 30px;
            background: #09c;
            border: none;
            display: block;
            margin-left: auto;
            color: #fff;
            font-size: 14px;
            margin-top: 20px;
            cursor: pointer;
        }
    }
}
</style>
