<template>
<div>
    <h2>home组件</h2>
    <router-link to="/home/door">门</router-link>
    <router-link to="/home/casement">窗户</router-link>
    <router-view/>
</div>  
</template>

<script>
export default {
    name: 'home',
    // 创建
    created() {
        console.log('创建了home组件');
    },
    // 销毁
    destroyed() {
        console.log('销毁了home组件');
    }
}
</script>

<style>

</style>