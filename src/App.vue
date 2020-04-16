<template>
    <div class="system">
        <Header />
		<Lside />
		<div class="sys-content">
			<router-view></router-view>
		</div>
    </div>
</template>

<script>
import Header from "./components/Header";
import Lside from './components/Lside'

export default {
    components: {
		Header,
		Lside
    },
};
</script>

<style>
@import url(./assets/css/reset.css);
.sys-content{
	margin-left: 200px;
    height: calc(100vh - 100px);
	padding: 20px;
    overflow-y: auto;
}
</style>
