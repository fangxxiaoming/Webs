<template>
    <div>
           <aplayer autoplay  :list="musicdata" v-if="isShow"
  :music="musicdata[0]"
/>
    </div>
</template>

<script>
  import aplayer from 'vue-aplayer'
    import axios from 'axios'
    export default {
        data(){
            return{
                musicdata:[],
                isShow:false
            }
        },
        components:{
            aplayer
        },created(){
   axios.get('./static/moviedata/musicdetail.json').then(res =>{
               res.data.musicData.forEach(obj => {
                   this.musicdata.push({
                          src:obj.src,
                        title:obj.title,
                        artist:obj.author,
                        pic:obj.musicImgSrc,
                        lrc:obj.lrc
                   })
                 
               });
        
               this.isShow = true;
            }).catch(res => {
                console.log("失败")
            });
        }
    }
</script>

<style scoped>

</style>