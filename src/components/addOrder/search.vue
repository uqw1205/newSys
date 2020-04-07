<template>
    <div class="addSearch">
        <div class="search-tit">
            查询需要处理的公司名
        </div>
        <div class="search-form">
            <form action="">
                <input type="text" />
                <button>查找</button>
            </form>
        </div>
        <div class="search-list">
            <table>
                <tr>
                    <th>1</th>
                    <th>公司名</th>
                </tr>
                <tr>
                    <td>2</td>
                    <td>无锡鼎尚网络科技有限公司</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.addSearch {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 65%;
    margin: auto;
    height: 78%;
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
            width: 79%;
            border: 1px solid #ccc;
            line-height: 28px;
            border-radius: 2px;
            outline: none;
        }
        button {
            width: 20%;
            height: 30px;
            vertical-align: top;
            border: none;
            background: #134d77;
            color: #fff;
            font-size: 14px;
            cursor: pointer;
        }
    }
    .search-list{
        margin-top: 17px;
        table{
            
            width: 100%;
        }
    }
}
</style>
