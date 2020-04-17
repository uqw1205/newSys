<template>
    <div class="showFaq">
        <div class="faq-tit">
            <div class="tit">工单题目： {{ list.title }}</div>
            <div class="num">工单编号： {{ list.id }}</div>
            <div class="business">
                客户名称： {{ list.sales_name }}
                <a
                    :href="
                        'http://a.msmn.cn/index.php/sales/view/id/' +
                            list.sales_id +
                            '.html'
                    "
                    target="_blank"
                    >查看订单</a
                >
            </div>
        </div>
        <div class="faq-content">
            <div class="faq-wrap">
                <div class="tit">问题</div>
                <div
                    class="con reply-con"
                    v-html="unescape(list.content)"
                ></div>
                <div class="reply">
                    <span> 提交人：{{ list.user_id }}</span
                    ><span> 提交时间：{{ list.create_time | formatDate }}</span>
                </div>
            </div>
            <div
                class="faq-wrap"
                v-for="(item, index) in list.reply_data"
                :key="index"
            >
                <div
                    class="tit"
                    :class="item.user_id !== list.user_id ? 'answer' : ''"
                >
                    {{ item.user_id == list.user_id ? "补充" : "回复" }}
                </div>
                <div
                    class="con reply-con"
                    v-html="unescape(item.content)"
                ></div>
                <div class="reply">
                    <span> 提交人：{{ item.user_id }}</span
                    ><span> 提交时间：{{ item.create_time | formatDate }}</span>
                </div>
            </div>
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
        // 取到问题的id
        const id = this.$route.params.id;
        this.id = id;
        this.getData(id);
    },
    data() {
        return {
            id: "",
            flag: false, //显示回复框
            list: "", //
            editCon: "", //编辑框内容
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
    components: {
        wangEditor, //编辑框
    },
    updated() {
        // 更改问题中的图片地址  （上线后可删除）
        var replycon = document.getElementsByClassName("reply-con");
        for (var i = 0; i < replycon.length; i++) {
            var img = replycon[i].getElementsByTagName("img");
            for (var j = 0; j < img.length; j++) {
                if (img[j].src.indexOf("localhost") > 0) {
                    var src = img[j].src.replace("http://localhost:8080", "");
                    img[j].src = "http://a.msmn.cn/" + src;
                }
            }
        }
    },
    methods: {
        // 显示回复框
        handleClick() {
            this.flag = !this.flag;
        },
        // 通过id获取工单数据
        getData(id) {
            this.$api.getDetail(id).then((data) => {
                console.log(data);
                this.list = data.data.data;
            });
        },
        // 转义
        unescape: function(html) {
            html += "";
            return html
                .replace(html ? /&(?!#?\w+;)/g : /&/g, "&amp;")
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")
                .replace(/&quot;/g, '"')
                .replace(/&#39;/g, "'")
                .replace(/&nbsp;/g, " ");
        },
        // 点击提交
        replyClick() {
            var text = document.getElementsByClassName("w-e-text")[0];
            var faqCon = document.getElementsByClassName("faq-content")[0];
            var div = document.createElement("div");
            var nowTime = `${new Date().getFullYear()}-${new Date().getMonth() +
                1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}`;
            var replyData = {
                // 'id': `${Math.floor(Math.random() * 400)}`,
                "id": this.id,
                'question_id': this.id,
                'content': "" + text.innerHTML,
                'type_id': '0',
                'user_id': '67',
                'create_time': `${Math.floor(new Date().getTime() / 1000)}`,
            };
            console.log(replyData);
            this.$api.replyOrder(replyData).then((data) => {
                console.log(data);
            });
            div.className = "faq-wrap";
            div.innerHTML = `<div class="tit answer">回复</div>
                <div class="con reply-con">
                   ${text.innerHTML}
                </div>
                <div class="reply">
                    <span>提交人：67 </span><span>提交时间： ${nowTime}</span>
                </div>`;
            faqCon.appendChild(div); //将回复内容插入到页面
            text.innerHTML = "";
        },
    },
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
        font-size: 13px;
        padding: 20px 15px;
        background: #f5f5f5;
        margin: 10px 0;
        border-radius: 2px;
        line-height: 2;
        border: 1px solid #e2e2e2;
        color: #272727;
    }
    .reply {
        border-top: 1px solid #eee;
        font-size: 13px;
        padding-top: 15px;
        span {
            margin-right: 20px;
        }
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
