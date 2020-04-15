<template>
    <div id="wangeditor"></div>
</template>
<script>
import E from "wangeditor";
export default {
    data() {
        return {
            editcon: ""
        };
    },
    mounted() {
        var editor = new E("#wangeditor"); //创建富文本实例
        editor.customConfig.uploadImgShowBase64 = true;
        editor.create();
        this.editcon = editor.txt.html();
    }
};
</script>
