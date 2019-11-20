<template>
  <div>
      <nav-bar>
        <div slot="center">主页</div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name:'Home',
  components:{
    NavBar
  }
}
</script>

<style>
  .nav-bar {
    background: pink;
    color: #FFF;
  }
</style>