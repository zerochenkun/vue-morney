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
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .content{
        flex-grow:1;
        overflow: auto;
    }
</style>