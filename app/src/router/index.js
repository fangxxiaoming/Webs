import Vue from 'vue'
import Router from 'vue-router'
import movieList from '@/components/movie/MovieList'
import musicList from '@/components/music/MusicList'
import bookList from '@/components/book/book'
import photoList from '@/components/photo/photo'
import movieDetail from '@/components/movie/movieDetail'
import musicDetail from '@/components/music/musicDetail'
import photoDetail from '@/components/photo/photodetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/movie/MovieList'
     
    },{
      path:'/movie/MovieList',
      component:movieList
    },{
      path:'/music/MusicList',
      component:musicList
    },{
      path:'/book/book',
      component:bookList
    },{
      path:'/photo/photo',
      component:photoList
    }
    ,{
      path:'/movie/movieDetail/:movieId',
      component:movieDetail
    }  ,{
      path:'/music/musicDetail/:musicId',
      component:musicDetail
    }
    ,{
      path:'/photo/photodetail/:photoId',
      component:photoDetail
    }
  ]
})
