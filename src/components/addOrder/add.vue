<template>
    <div class="addForm">
        <form action="">
            <div>
                <label for="">问题类型</label>
                <select name="" id="">
                    <option value="domain" name="domain" id="domain">域名问题</option>
                    <option value="website" name="website" id="website">网站问题</option>
                    <option value="" name="" id="">备案问题</option>
                    <option value="" name="" id="">优化问题</option>
                    <option value="otherques" name="otherques" id="otherques">其他问题</option>
                </select>
            </div>
            <div>
                <label for="business">绑定业务</label>
                <input type="text" name="business" id="business" @focus="showSearch" />
            </div>
            <div>
                <label for="title">工单标题</label>
                <input type="text" name="title" id="title"/>
            </div>
            <div>
                <label for="description">问题描述</label>
                <textarea name="description" id="description" cols="30" rows="10"></textarea>
            </div>
            <div>
                <label for=""></label>
                <input type="button" value="提交工单" class="btn" />
            </div>
        </form>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
        .btn {
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
</style>
