<template>
    <div class='photo'>
       <ul>
           <li v-for="(val,index) in photoList" :key="index"><router-link :to="'/photo/photodetail/'+index" >
           <img :src="val.src" alt="">
           </router-link></li>
       </ul>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                photoList:[]
            }
        },
    created(){
        axios.get('/static/moviedata/photodetail.json').then(res=>{
            this.photoList=res.data.photoData
            this.$store.commit('addPhoto',this.photoList)
        }).catch(res=>{

        })
    }
    }
</script>

<style scoped>
  .photo li{
        width:50%;
        float: left;
    }
    .photo li img{
        width:100%;
        display: block;
    }
</style>