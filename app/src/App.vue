<template>
  <div id="app">
      <common-header :bg='bgColor' :title="name"></common-header>
     <router-view/>
  <common-footer :bg='bgColor'  @change="fn"></common-footer>
   
  </div>
</template>

<script>
import commonHeader from '@/components/common/header'
import commonFooter from '@/components/common/footer'
export default {
  name: 'App',
  data(){
    return{
      bgColor:'#08298A',
      name:'movie'
    }
  },
  components:{
    commonHeader,
    commonFooter
  },methods:{
    fn(color,title){
      this.bgColor=color
      this.name=title
    }
  },
  created(){
    let str=this.$route.path.split('/')[1]//判断路由地址，取出当前路由参数，解决页面刷新背景不是默认的movie页面
    switch(str){
      case'music':
      this.bgColor='green'
       break;
      case 'movie':
        this.bgColor = 'red';
        break;
         case 'book':
        this.bgColor = 'blue';
        break;
         case 'photo':
        this.bgColor = 'grey';
        break;
    }
  }
}
</script>

<style>
#app {
 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin:1rem 0;
}
 body{font-size:0.32rem;}
</style>
