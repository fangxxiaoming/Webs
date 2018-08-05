<template>
    <div>
        <ul class="footer" :style="{'background':bg}">
            <li  @click="$emit('change','#0080ff','movie')"><router-link to="/movie/MovieList">电影</router-link> </li>
            <li @click="$emit('change','#86B404','music')"><router-link to="/music/MusicList">音乐</router-link></li>
            <li  @click="$emit('change','#00caca','book')"><router-link to="/book/book">书籍</router-link></li>
            <li  @click="$emit('change','#CC9966','photo')"><router-link to="/photo/photo">图片</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
            
            }
        },
        props:['bg','name']
       
    }
</script>

<style scoped>
.footer{
    display: flex;
    height: 1rem;
    line-height:1rem;
    position: fixed;
    bottom:0;
    width: 100%;
}
.footer li{
    flex-grow:1;
    color:#fff;
    padding-left:0.2rem
}
.footer li a{
    columns: #999999;
}
 
</style>