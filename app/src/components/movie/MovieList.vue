<template>
    <div>
        <ul>
            <li class="movieList" v-for="(obj,index) in movieList" :key='index' @click="goDetail(obj.id)">
                <div class="movie-img">
                    <img :src="obj.img">
                </div>
                <div class="movie-info">
                    <h3>{{obj.nm}}</h3>
                    <p> {{obj.star}}</p>
                    <p>{{obj.cat}}</p>
                    <p>{{obj.rt}}</p>
                </div>
            </li>
           
        </ul>
        <div>
            <img src="@/assets/loading.gif" alt="" v-show="isShow" style="margin-left:3rem">
        </div>
    </div>
</template>

<script>
import Vue from "vue"
import axios from 'axios'
    export default {
        data(){
            return{
                movieList:[],
                isShow:false,
                resultLength:0
            }
        },
        methods:{
            load(){
                 axios.get(`./static/moviedata/moviedata${this.movieList.length}.json`).then
         (res=>{

                this.resultLength=res.data.data.movies.length;
                console.log(res.data.data.movies.length,this.re)
               this.movieList = this.movieList.concat(res.data.data.movies);
               this.isShow=false;
         }).catch(res=>{})
            },
            goDetail(id){
                this.$router.push(`/movie/movieDetail/${id}`)
            }
        },
       created (){
         this.load()
        window.onscroll=()=>{
            let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
            let clientHeight=document.documentElement.clientHeight
            let Height=document.documentElement.scrollHeight;
            if(scrollTop+clientHeight==Height){
                console.log(11111)
                console.log(this.resultLength);
                if(this.resultLength==10){
                    console.log(2222);
                    this.isShow=true;
                    this.load()
                }
            }
        }
       }
    }
</script>

<style scoped>
    .movieList{
        display: flex;
        padding: 0.2rem;
        font-size: 14px;
        line-height: 1.8;
    }
    .movie-img{
        flex-grow: 1;
        margin-right: 0.1rem;
        width: 0px;
    }
    .movie-img img{
        width: 100%;
    }
    .movie-info{
        width: 0px;
        flex-grow: 2;
    }
</style>