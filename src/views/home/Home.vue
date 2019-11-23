<template>
  <div id="home">
      <nav-bar>
        <div slot="center">主页</div>
      </nav-bar>
      <HomeSwiper :banners="banners"/>
      <RecommendView :recommends="recommends"/>
      <FeatureView/>
      <tab-control :titles="['流行','新款','精选']"/>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommondView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'

import {getHomeMultidata} from 'network/home'
export default {
  name:'Home',
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl
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
  #home {
    padding: 44px 0 49px;
  }
</style>