<template>
    <div class="addorder">
        <add></add>
        <search></search>
    </div>
</template>

<script>
import add from "../components/addOrder/add";
import search from "../components/addOrder/search";
export default {
    components: {
        add,
        search,
    },
};
</script>

<style lang="scss" scoped>
.addorder{
    position: relative;
}
</style>
