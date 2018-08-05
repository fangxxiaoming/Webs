<template>
    <div>
        <ul>
        <li v-for="(val,index) in musicList" :key='index'><img :src="'/'+val.bg" alt="" @click="run(val.id)"></li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                musicList:[]
            }
        },
        methods:{
            run(id){
                 this.$router.push(`/music/musicDetail/${id}`)
            }
        },
        created(){
        axios.get('./static/moviedata/musicList.json').then(res=>{
        
           this.musicList= res.data.albums
        }).catch(res=>{

        })
            }
    }
</script>


<style scoped>

ul li{
    width: 50%;
    float:left;
    height:180px;
}
ul li img{
    width: 100%;
}
</style>