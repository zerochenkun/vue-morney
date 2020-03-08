<template>
    <svg class="icon">
        <use :xlink:href="'#'+name"/>
    </svg>
</template>

<script>
    const importAll = (requireContext) => requireContext.keys().forEach(requireContext);
    //  ======↓↓↓↓↓↓↓ 方方的代码需要__WebpackModuleApi.RequireContext ↓↓↓↓↓↓↓ ====
    // let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
    // =======↑↑↑↑↑↑↑=============================================↑↑↑↑↑↑↑
    try{
        importAll(require.context('../assets/icon',true,/\.svg$/));
    }catch(error){
        console.log(error)
    } 
    // ========↓↓↓↓↓↓↓单个引入 svg 写法    ↓↓↓↓↓↓↓ ====
    // import x from '../assets/icon/money.svg';
    // console.log(x)
    // =======↑↑↑↑↑↑↑==上面打印出来是一个 symble 标签===↑↑↑↑↑↑↑
    export default {
        props:['name'],
        name:'Icon'
    }
</script>

<style lang="scss" scoped>
//   .icon{
//     width: 1em; height: 1em;
//     vertical-align: -0.15em;
//     fill: currentColor;
//     overflow: hidden;
//   }
</style>