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
            <div class="faq-wrap" v-for="(item, index) in user.desc" :key="index">
                <div class="tit">{{ item.key }}</div>
                <div class="con">
                    {{ item.ques }}
                    <img :src=item.image>
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
                        <label for="">回复：</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <p>请输入具体问题，可以直接截图粘贴（ctrl+v）</p>
                    </div>
                    <div>
                        <label for=""></label>
                        <input type="button" class="formbtn" value="提交" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            flag: false,
            user: {
                key: '',
                title: '',
                number: '',
                business: '',
            },
        };
    },
    methods: {
        handleClick() {
            this.flag = !this.flag;
        },
    },
    created(){
        this.$api.getDetail().then((data) => {
            console.log(data.data.data.list);
            this.user = data.data.data.list;
        });
    }
};
</script>

<style lang="scss" scoped>
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
        padding-left: 20px;
        margin-top: 20px;
        label {
            display: inline-block;
            vertical-align: top;
            width: 60px;
            font-size: 15px;
        }
        textarea {
            border: 1px solid #bbb;
            border-radius: 2px;
            width: 400px;
        }
        p {
            margin-left: 60px;
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
