<template>
  <div class="container">
    <Header @toToken="toToken" @toRoadmap="toRoadmap" @toCommunity="toCommunity"></Header>
    <div class="homeContainer" v-if="!_isMobile">
      <div class="topCon">
        <img src="../assets/bg.jpg" class="topbg">
        <div class="basicPanel">
          <div class="banners">
            <div class="btnsbar">
              <router-link to="MysteryBoxes" class="btn"><img src="../assets/btn1.png"></router-link>
              <a class="btn" href="https://zuckmetaverse.gitbook.io/zuck/" target="_black"><img src="../assets/btn2.png"></a>
            </div>
            <p>ZUCK is jumping the metaverse and so are we</p>
          </div>
          <div class="about">
            <img src="../assets/btn3.png">
            <p>The metaverse is the next evolution of social connection. <br>3D spaces in the metaverse will let you socialize, learn, <br>collaborate and play in ways that go beyond what we can <br>imagine.Zuck's vision is to help bring the metaverse to life.</p>
          </div>
        </div>
      </div>
      <div class="btmCon">
        <img src="../assets/bg2.jpg" class="btmbg">
        <div class="basicPanel">
          <img src="../assets/btn4.png" class="btn4 linkbtn4">
          <img src="../assets/btn5.png" class="btn5">
          <div class="baifenbi">
            <p><span>3.0%</span> Redistribution     </p>
            <p><span>2.0%</span>  Marketingand Brand     </p>
            <p><span>3.0%</span> Auto liquidity Pool </p>
          </div>
          <p class="simply">Simply earn ZUCK tokens by holding! 3.0% Holder Rewards are dispersed to all token holders relative to their holding percentages. Also 2.0% Marketing and Brand  keeps our token extremely fomo and healthy for many years to come. And 3.0% Auto liquidity pool can push the price slowly! Be a HODL's with us and earn more tokens on auto-pilot!</p>
          <img src="../assets/btn6.png" class="btn6">
          <img src="../assets/btn7.png" class="btn7">
          <div class="swap">
            <div class="swapTop">
              <img src="../assets/btn8.png" class="btn8">
              <div class="wapinfo">
                <img src="../assets/btn9.png">
                <p>ZUCK token is the main in-META currency. It will be used to trade, exchange, and buy social props.</p>
              </div>
            </div>
            <div class="swapTop">
              <div class="wapinfo">
                <img src="../assets/btn10.png">
                <p>The ZUCKMETA  create a virtual marketplace for virtual goods such as NFTs where users can buy, sell and exchange. </p>
              </div>
              <img src="../assets/btn11.png" class="btn11">
            </div>
          </div>
          <div class="zuckmeta">
            <img src="../assets/btn12.png" class="btn12 linkbtn5">
            <img src="../assets/btn13.png" class="btn13">
            <img src="../assets/btn14.png" class="btn14">
            <p class="zucktoken">$ZUCK has been launched. You can see as follows and  buy on PankcakeSwap.</p>
            <div class="partner">
              <a><img src="../assets/partner1.png"></a>
              <a><img src="../assets/partner2.png"></a>
              <a><img src="../assets/partner3.png"></a>
              <a><img src="../assets/partner4.png"></a>
              <a><img src="../assets/partner5.png"></a>
              <a><img src="../assets/partner6.png"></a>
              <a><img src="../assets/partner7.png"></a>
              <a><img src="../assets/partner8.png"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="homeContainerMob" v-if="_isMobile">
      <div class="mobPanel1">
        <p class="zucktip">
          ZUCK is jumping the<br> metaverse and so are we
        </p>
        <router-link to="MysteryBoxes"><img src="../assets/btn1.png"></router-link>
        <a href="https://zuckmetaverse.gitbook.io/zuck/" target="_black"><img src="../assets/btn15.png"></a>
        <div class="morebtm"><img src="../assets/morebtm.png"></div>
      </div>
      <div class="mobPanel2">
        <img src="../assets/btn3.png" class="btn1">
        <p class="abouttext">The metaverse is the next evolution of social connection. 3D spaces in the metaverse will let you socialize, learn, collaborate and play in ways that go beyond what we can imagine.Zuck's vision is to help bring the metaverse to life.</p>
        <div class="morebtm"><img src="../assets/morebtm.png"></div>
      </div>
      <div class="mobPanel3 ">
        <img src="../assets/btn4.png" class="btn4 linkbtn4">
        <img src="../assets/btn5.png" class="btn5">
        <div class="baifenbi">
          <p><span>3.0%</span> Redistribution     </p>
          <p><span>2.0%</span>  Marketingand Brand     </p>
          <p><span>3.0%</span> Auto liquidity Pool </p>
        </div>
        <p class="simplytext">
          Simply earn ZUCK tokens by holding! 3.0% Holder Rewards are dispersed to all token holders relative to their holding percentages. Also 2.0% Marketing and Brand  keeps our token extremely fomo and healthy for many years to come. And 3.0% Auto liquidity pool can push the price slowly! Be a HODL's with us and earn more tokens on auto-pilot!
        </p>
        <div class="morebtm"><img src="../assets/morebtm.png"></div>
        <img src="../assets/btn6.png" class="btn6">
        <div class="tl">
          <img src="../assets/btn16.png" class="btn7">
        </div>
        <div class="morebtm"><img src="../assets/morebtm.png"></div>
      </div>
      <div class="mobPanel4">
         <img src="../assets/btn9.png" class="btn9">
          <img src="../assets/btn8.png" class="btn10">
          <p class="zucktext">ZUCK token is the main in-META currency. It will be used to trade, exchange, and buy social props.</p>
          <div class="morebtm"><img src="../assets/morebtm.png"></div>
          <img src="../assets/btn10.png" class="btn11">
          <p class="zucktext">The ZUCKMETA  create a virtual marketplace for virtual goods such as NFTs where users can buy, sell and exchange. </p>
          <img src="../assets/btn11.png" class="btn12">
          <div class="morebtm"><img src="../assets/morebtm.png"></div>
      </div>
      <div class="mobPanel5 linkbtn5">
        <img src="../assets/btn12.png" class="btn13">
          <img src="../assets/btn17.png" class="btn14">
          <div class="morebtm"><img src="../assets/morebtm.png"></div>
      </div>
      <div class="mobPanel6">
        <img src="../assets/btn14.png" class="btn15">
          <p class="tokentext">$ZUCK has been launched. You can see as follows and  buy on PankcakeSwap.</p>
          <div class="partner">
            <a><img src="../assets/partner1.png"></a>
            <a><img src="../assets/partner2.png"></a>
            <a><img src="../assets/partner3.png"></a>
            <a><img src="../assets/partner4.png"></a>
            <a><img src="../assets/partner5.png"></a>
            <a><img src="../assets/partner6.png"></a>
            <a><img src="../assets/partner7.png"></a>
            <a><img src="../assets/partner8.png"></a>
          </div>
      </div>
    </div>
    <Footer class="linkbtn6"></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Home',
  components:{Header,Footer},
  computed: {
    language() {
      return this.$i18n.locale
    },
    _isMobile() {
      let flag = false;
      if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        flag = true // 手机端
      } else {
        flag = false // alert('PC端')
      }
      return flag;
    }
  },
  data() {
    return {
      drawer:false,
      lang:false
    }
  },
  watch: {
      '$i18n.locale'(newValue) {
          if (this.$i18n.locale === 'en') {
              this.lang = false
          } else if (this.$i18n.locale === 'ch') {
              this.lang = true
          }
      }
  },
  methods: {
    toToken(){
      this.$el.querySelector('.linkbtn4').scrollIntoView({
          behavior: "smooth",  // 平滑过渡
          block: "start"  // 上边框与视窗顶部平齐。默认值
      });
    },
    toRoadmap(){
      this.$el.querySelector('.linkbtn5').scrollIntoView({
          behavior: "smooth",  // 平滑过渡
          block: "start"  // 上边框与视窗顶部平齐。默认值
      });
    },
    toCommunity(){
      this.$el.querySelector('.linkbtn6').scrollIntoView({
          behavior: "smooth",  // 平滑过渡
          block: "start"  // 上边框与视窗顶部平齐。默认值
      });
    },
    toMarket(){
      this.$router.push('/MysteryBoxes')
    }
  },
  created(){
    
  },
  mounted(){
    
  }
}
</script>
<style lang="less">
@font-face { // 正常
    font-family: "ZhanKuQingKeHuangYouTi"; 
    src:url('../assets/ToppanBunkyuGothicPr6N-Regular-AlphaNum-02.otf');
}
.container{
  width: 100%;
  font-family: "ZhanKuQingKeHuangYouTi";
  min-height:100vh;
  .homeContainerMob{
    display:none;
  }
  .homeContainer{
    .basicPanel{
      width:1200px;
      position:absolute;
      top:0;
      left:50%;
      height:100%;
      margin-left:-600px;
    }
    .topCon{
      position:relative;
      .topbg{
        width:100%;
      }
    }
    .banners{
      position:absolute;
      right:60px;
      top:540px;
      .btnsbar{
        display:flex;
        justify-content:space-between;
        .btn{
          cursor:pointer;
          margin:0 6px;
        }
      }
      p{
        font-size:24px;
        color:#fff;
        padding-top:10px;
      }
    }
    .about{
      position:absolute;
      bottom:10%;
      text-align:left;
      img{
        width:534px;
      }
      p{
        font-size:27px;
        color:#fff;
        line-height:36px;
        text-align:left;
        padding-left:30px;
        padding:20px;
      }
    }
    .btmCon{
      position:relative;
      .btmbg{
        width:100%;
      }
      .btn4,.btn5,.btn6,.btn7{
        display:block;
        margin:0 auto;
      }
      .btn4{
        margin-top:70px;
        margin-bottom:60px;
      }
      .baifenbi{
        display:flex;
        justify-content:center;
        padding-top:34px;
        p{
          font-size:20px;
          color:#FFFFFF;
          line-height:100%;
          padding:0 10px;
          span{
            font-size:26px;
            color:#06FEFE;
          }
        }
      }
      .simply{
        width:980px;
        margin:28px auto 130px;
        font-size:26px;
        color:#fff;
        line-height:40px;
      }
      .swap{
        padding-top:120px;
        .swapTop{
          display:flex;
          justify-content:center;
          .wapinfo{
            text-align:left;
            padding-top:100px;
            margin:0 50px;
            p{
              font-size:26px;
              color:#fff;
              line-height:40px;
              width:538px;
              text-align:left;
              padding-top:40px;
            }
          }
          .btn11{
            margin-top:-100px;
          }
        }
      }
      .zuckmeta{
        text-align:center;
        .btn12{
          margin-top:160px;
          margin-bottom:96px;
        }
        .btn14{
          margin-top:76px;
          margin-bottom:34px;
        }
        .zucktoken{
          font-size:20px;
          color:#fff;
          line-height:22px;
        }
        .partner{
          display:flex;
          justify-content:space-between;
          flex-wrap:wrap;
          width:1000px;
          margin:50px auto;
          a{
            margin-bottom:24px;
          }
        }
      }
    }
  }
}
@media screen and (max-width:1600px) {
    .container{
      .homeContainer {
        .banners{
          top:465px;
        }
        .btmCon{
          .basicPanel{
            .btn4{
              width:360px;
              margin-top:40px;
              margin-bottom:30px;
            }
            .btn5{
              width:380px;
            }
            .simply{
              font-size:24px;
              line-height:34px;
              margin-bottom:60px;
            }
            .btn6{
              width:300px;
              display:block;
              margin:0 auto;
            }
            .btn7{
              width:890px;
            }
            .swap{
              padding-top:60px;
              .swapTop{
                .btn8{
                  width:380px;
                }
                .wapinfo{
                  padding-top:60px;
                  img{
                    width:200px;
                  }
                  p{
                    font-size:24px;
                  }
                }
                .btn11{
                  width:480px;
                }
              }
            }
            .zuckmeta{
              .btn12{
                margin-top:80px;
                width:460px;
                margin-bottom:60px;
              }
              .btn13{
                width:980px;
              }
              .btn14{
                margin-top:40px;
                margin-bottom:30px;
                width:300px;
              }
              .zucktoken{
                font-size:16px;
              }
              .partner{
                width:800px;
                margin:30px auto 0;
                img{
                  width:180px;
                }
              }
            }
          }
        }
      }
    }
}
@media screen and (max-width:900px){
  .container{
    .homeContainer{
      display:none;
    }
    .homeContainerMob{
      display:block;
      .morebtm{
        text-align:center;
        padding-top:38px;
      }
      .mobPanel1{
        background:url(../assets/bg3.png) no-repeat top center;
        background-size:100% 100%;
        padding-bottom:55px;
        text-align:center;
        .zucktip{
          text-align:center;
          font-size:20px;
          color:#06FEFE;
          line-height:28px;
          padding-top:520px;
          padding-bottom:24px;
        }
      }
      .mobPanel2{
        background:url(../assets/bg4.png) no-repeat top center;
        background-size:100% 100%;
        padding:260px 35px 0;
        text-align:center;
        .btn1{
          width:260px;
          margin-bottom:56px;
        }
        .abouttext{
          font-size:22px;
          color:#fff;
          line-height:30px;
          text-align:left;
          padding-bottom:100px;
        }
      }
      .mobPanel3{
        background:url(../assets/bg5.png) no-repeat top center;
        background-size:100% 100%;
        padding:40px 30px;
        text-align:center;
        .btn4{
          width:260px;
          margin-bottom:46px;
        }
        .btn5{
          width:280px;
        }
        .baifenbi{
          padding-top:16px;
          text-align:center;
          p{
            font-size:15px;
            color:#fff;
            line-height:100%;
            padding-bottom:15px;
            span{
              font-size:23px;
              color:#06FEFE;
              line-height:100%;
            }
          }
        }
        .simplytext{
          font-size:22px;
          color:#fff;
          line-height:34px;
          text-align:left;
          word-break: break-all;
        }
        .btn6{
          width:295px;
          margin-top:100px;
        }
        .tl{
          text-align:left;
          padding-top:36px;
          img{
            margin-left:-40px;
          }
        }
      }
      .mobPanel4{
        text-align:center;
        background:url(../assets/bg6.png) no-repeat top center;
        background-size:100% 100%;
        .btn9{
          width:238px;
          margin-top:120px;
          margin-bottom:26px;
        }
        .btn10{
          width:350px;
          margin-left:-15px;
        }
        .zucktext{
          font-size:22px;
          color:#fff;
          line-height:36px;
          text-align:left;
          padding:0 50px 80px;
        }
        .btn11{
          width:236px;
          margin-top:70px;
          margin-bottom:50px;
        }
        .btn12{
          width:100%;
        }
      }
      .mobPanel5{
        background:url(../assets/bg7.png) no-repeat top center;
        background-size:100% 100%;
        text-align:center;
        padding:0 10px;
        .btn13{
          width:288px;
          margin-top:120px;
          margin-bottom:40px;
        }
        .btn14{
          width:100%;
        }
        
      }
      .mobPanel6{
        background:url(../assets/bg8.png) no-repeat top center;
        background-size:100% 100%;
        text-align:center;
        height:514px;
        padding:0 30px;
        .btn15{
          width:236px;
          margin-top:80px;
          margin-bottom:18px;
        }
        .tokentext{
          font-size:22px;
          color:#fff;
          line-height:32px;
          text-align:left;
          padding-bottom:20px;
          padding:0 10px;
        }
        .partner{
          display:flex;
          justify-content:left;
          flex-wrap:wrap;
          a{
            margin:16px 2px;
          }
          img{
            width:100px;
          }
        }
      }
    }
  }
}
</style>
<style >
  .el-drawer,.drawer_body {
      width: 60% !important;
      height: 100% !important;
      /* background: url(/src/assets/itembg.png) center center / 100% 100% no-repeat; */
      outline: 0;
  }
  /*.el-drawer__wrapper {*/
  /*    z-index: 2001;*/
  /*}*/
  </style>