<template>
    <div class="showFaq">
        <div class="faq-tit">
            <div class="tit">工单题目： {{ user.title }}</div>
            <div class="num">工单编号： {{ user.number }}</div>
            <div class="business">
                客户名称： {{ user.business }}
                <a href="">查看订单</a>
            </div>
        </div>
        <div class="faq-content">
            <div
                class="faq-wrap"
                v-for="(item, index) in user.desc"
                :key="index"
            >
                <div class="tit">{{ item.key }}</div>
                <div class="con">
                    {{ item.ques }}
                    <img :src="item.image" />
                </div>
                <div class="reply">
                    提交人：{{ item.from }} 提交时间：{{ item.time }}
                </div>
            </div>
            <!-- <div class="faq-wrap">
                <div class="tit">补充</div>
                <div class="con">
                    {{ user.desc }}
                </div>
                <div class="reply">
                    提交人： 提交时间：
                </div>
            </div>
            <div class="faq-wrap">
                <div class="tit answer">回复</div>
                <div class="con">
                    {{ user.desc }}
                </div>
                <div class="reply">
                    提交人： 提交时间：
                </div>
            </div> -->
        </div>
        <div class="faq-reply">
            <button class="showbtn" @click="handleClick" v-if="!flag">
                回复问题
            </button>
            <div class="faq-con" v-if="flag">
                <form action="">
                    <div>
                        <wangEditor ref="editcon"></wangEditor>
                        <p>请输入具体问题，可以直接截图粘贴（ctrl+v）</p>
                    </div>
                    <div>
                        <label for=""></label>
                        <input
                            type="button"
                            class="formbtn"
                            value="提交"
                            @click="replyClick"
                        />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import wangEditor from "../components/wangEditor";

export default {
    mounted() {
        const id = this.$route.params.id;
        this.getData(id);
    },
    data() {
        return {
            flag: false,
            user: {
                key: "",
                title: "",
                number: "",
                business: ""
            },
            editCon: ""
        };
    },
    components: {
        wangEditor
    },
    methods: {
        handleClick() {
            this.flag = !this.flag;
        },
        getData(id) {
            this.$api.getDetail(id).then(data => {
                var list = data.data.data.list;
                for(var prop in list){
                    if(list[prop].id === id){
                        this.user = list[prop];
                    }
                }
            });
        },
        replyClick() {
            var text = document.getElementsByClassName("w-e-text")[0];
            var faqCon = document.getElementsByClassName("faq-content")[0];
            var div = document.createElement("div");
            div.className = "faq-wrap"
            div.innerHTML = `<div class="tit">回复</div>
                <div class="con">
                   ${text.innerHTML}
                </div>
                <div class="reply">
                    提交人： 提交时间： ${new Date().getFullYear()} 年 ${new Date().getMonth() + 1} 月 ${new Date().getDate()} 日
                </div>`
           faqCon.appendChild(div); 
           text.innerHTML = "";
        }
    }
};
</script>

<style lang="scss">
.faq-tit {
    background: #fcf8e3;
    color: #8a6d3b;
    padding: 12px;
    border: 1px solid #ddd;
    font-size: 13px;
    line-height: 2;
}
.faq-content {
    border: 1px solid #ddd;
    border-top: 0;
    .faq-wrap {
        border-bottom: 1px dashed #ddd;
        padding-bottom: 15px;
        margin-bottom: 15px;
        padding: 20px;
        &:last-of-type {
            border-bottom: 0;
        }
    }
    .tit {
        background: #2196f3;
        display: inline-block;
        padding: 0 20px;
        font-size: 13px;
        line-height: 23px;
        color: #fff;
        border-radius: 2px;
        &.answer {
            background: #ff9800;
        }
    }
    .con {
        font-size: 14px;
        padding: 10px;
        background: #eee;
        margin: 10px 0;
        border-radius: 2px;
    }
    .reply {
        border-top: 1px solid #eee;
        font-size: 13px;
        padding-top: 15px;
    }
}
.faq-reply {
    .showbtn {
        width: 200px;
        line-height: 35px;
        background: #2196f3;
        text-align: center;
        cursor: pointer;
        color: #fff;
        border-radius: 2px;
        border: none;
        font-size: 15px;
        margin: 20px;
    }
    .faq-con {
        margin-top: 20px;
        margin-bottom: 20px;
        p {
            margin-top: 20px;
            font-size: 14px;
            color: #666;
        }
        .formbtn {
            background: #2196f3;
            border: none;
            color: #fff;
            width: 120px;
            line-height: 30px;
            color: #fff;
            font-size: 14px;
            border-radius: 2px;
            margin-top: 10px;
            cursor: pointer;
        }
    }
}
</style>
