<template>
    <div>
        <div class="header" :style="{'background':bg}">
           <span class="header-home"><router-link to="/movie/MovieList">首页</router-link></span>
           <span class="header-title">{{title}}</span>
           <span class="header-space"></span>
           <span></span>
        </div>
    </div>
</template>

<script>
    export default {
        props:['title','bg']
    }
</script>

<style scoped>
.header{
height: 1rem;
color:#fff;
display:flex;
position: fixed;
width: 100%;
line-height: 1rem;
top:0;
}
.header-home,.header-space{
    width: 1rem;
    text-indent:0.2rem;
}
.header-title{
    flex-grow:1;
    text-align:center
}
</style>