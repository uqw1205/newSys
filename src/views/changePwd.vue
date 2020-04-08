<template>
    <div class="changepwd">
        <form action="">
            <div>
                <label for="">原密码</label>
                <input type="text"/>
            </div>
            <div>
                <label for="">新密码</label>
                <input type="text"/>
            </div>
            <div>
                <label for="">确定密码</label>
                <input type="text"/>
            </div>
            <div>
                <label for=""></label>
                <input type="button" class="button" value="确认修改" />
            </div>
        </form>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
    .changepwd{
        div{
            padding-bottom: 20px;
            label{
                width: 80px;
                display: inline-block;
                font-size:13px;
                color: #333;
            }
            input{
                line-height: 30px;
                border: 1px solid #ddd;
                border-radius: 2px;
                min-width: 300px;
                padding: 0 10px;
            }
            .button{
                width: 120px;
                min-width: 120px;
                line-height: 36px;
                background: #09c;
                color: #fff;
                border: none;
                border-radius: 2px;
                font-size:14px;
                cursor: pointer;
            }
        }
    }
</style>
