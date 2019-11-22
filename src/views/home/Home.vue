<template>
  <div>
      <nav-bar>
        <div slot="center">主页</div>
      </nav-bar>
      <HomeSwiper :banners="banners"/>
      <RecommendView :recommends="recommends"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommondView'

import {getHomeMultidata} from 'network/home'
export default {
  name:'Home',
  components:{
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data () {
    return {
      banners:[],
      recommends:[]
    }
  },
  created () {
    getHomeMultidata().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style>
  .nav-bar {
    background: pink;
    color: #FFF;
  }
</style>