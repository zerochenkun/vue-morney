<template>
    <div>
        <div>
        你访问的页面不存在，请检查网址是否正确
        </div>
        <div>
            <router-link to="/">返回首页</router-link>
            |
            <a href="#/">返回首页</a>
            <!-- <a href="/">返回首页</a> -->
        </div>
    </div>
    
</template>

<script lang="ts">
    export default ({
        name:'Notfound'
    })
</script>

<style scoped>

</style>