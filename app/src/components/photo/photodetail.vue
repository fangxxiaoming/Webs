<template>
    <v-touch v-on:swipeleft="next()">
        <div class="photo" :style="{'background-image':url}" @click="hide()">
        </div>
    </v-touch>
</template>

<script>
    export default {
        data(){
            return{
                nowIndex:this.$route.params.photoId,
                photoList:[]
            }
        }
        ,
            created(){
                this.photoList=this.$store.state.photoList
                console.log(111)
            },
            computed:{
                url(){
                     return `url(${this.photoList[this.nowIndex].src}`
                }
               
            },methods:{
                next(){
                    this.nowIndex++
                    if(nowIndex==this.photoList.length){
                        this.nowIndex=0;
                    }
                },
                hide(){
                    this.$router.push('/photo/photo')
                }
            }
    }
</script>

<style scoped>
 .photo{
        position: absolute;
        left:0;
        top:1rem;
        right:0px;
        bottom:1rem;
        color: #ffffff;
        background: #000 no-repeat center center;
        background-size: contain;
    }
</style>