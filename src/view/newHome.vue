<template>
  <div class="homeContainer">
    <div class="banner">
      <img src="../assets/banner.png">
      <div class="contactType">
        <a target="_blank" href="/"><img src="../assets/linkImg1.png"></a>
        <a target="_blank" href="/"><img src="../assets/linkImg2.png"></a>
        <a target="_blank" href="/"><img src="../assets/linkImg3.png"></a>
        <a target="_blank" href="/"><img src="../assets/linkImg4.png"></a>
        <a target="_blank" href="/"><img src="../assets/linkImg5.png"></a>
        <a target="_blank" href="/"><img src="../assets/linkImg6.png"></a>
        <a target="_blank" href="/"><img src="../assets/linkImg7.png"></a>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.homeContainer{
  .banner{
    position:relative;
    img{
      width:100%;
    }
    .contactType{
      position:absolute;
      bottom:10%;
      left:20%;
      display:flex;
      a{
        margin-right:28px;
      }
      img{
        width:56px;
      }
    }
  }
}
</style>