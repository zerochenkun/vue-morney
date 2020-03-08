<template>
      <div class="nav-wrapper">
        <div class="content">
         <slot/>
        </div>
        <Nav class=""/>
    </div>
</template>

<script lang="ts">
    export default({
        name:'Layout'
    })
</script>

<style scoped>
  .nav-wrapper{
        border:1px solid lime;
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .content{
        border:1px solid blue;
        flex-grow:1;
        overflow: auto;
    }
</style>