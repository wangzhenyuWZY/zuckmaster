<template>
  <div class="headerContainer">
    <div class="header">
        <div class="logobox">
          <img src="../assets/logo.png" class="logo">
        </div>
        <div class="menus">
            <a class="menu" :class="active==0?'active':''" @click="toLink(0)"><span>Home</span></a>
            <a class="menu" :class="active==1?'active':''" @click="toLink(1)"><span>Mint</span></a>
            <a class="menu" :class="active==2?'active':''" @click="toLink(2)"><span>Tokenomics</span></a>
            <a class="menu" :class="active==3?'active':''" @click="toLink(3)"><span>NFT</span></a>
            <a class="menu" :class="active==6?'active':''" @click="toLink(6)"><span>My MAX</span></a>
            <a class="menu" :class="active==4?'active':''" @click="toLink(4)"><span>Metaverse</span></a>
            <a class="menu" :class="active==5?'active':''" @click="toLink(5)"><span>RoadMap</span></a>
            <a class="menu" target="_blank" href="https://zuckmetaverse.gitbook.io/zuck/"><span>WhitePaper</span></a>
            <a class="menu" target="_blank" href="https://github.com/AuditRateTech/Smart-Contract-Audits/blob/main/ZuckMeta_0x81B242276afA697b118554F8cEA4A5b09743a70b.pdf"><span>Audit</span></a>
        </div>
        <div class="wallet">
          <img src="../assets/bsc.jpg" >
          {{defaultAddress}}
        </div>
    </div>
    <div class="mobHeader">
      <div class="nav_merge">
          <img class="merge_img" src="../assets/more.png" @click="drawer = true" alt="">
        </div>
        <el-drawer title="我是标题" v-model="drawer" :show-close="false" custom-class="drawer_body" :with-header="false" @click="tolerPop=false">  
          <i class="closeico" @click="drawer = false"></i>
          <div class="wallet">
            <img src="../assets/bsc.jpg" >
            {{defaultAddress}}
          </div>
          <ul class="drawer_nav">
            <li @click="toLink(0)"><a class="menu">Home</a></li>
            <li @click="toLink(1)"><a class="menu">Mint</a></li>
            <li @click="toLink(2)"><a class="menu">Tokenomics</a></li>
            <li @click="toLink(3)"><a class="menu">NFT</a></li>
            <li @click="toLink(6)"><a class="menu">My MAX</a></li>
            <li @click="toLink(4)"><a class="menu">Metaverse</a></li>
            <li @click="toLink(5)"><a class="menu">RoadMap</a></li>
            <li><a class="menu" target="_blank" href="https://zuckmetaverse.gitbook.io/zuck/">WhitePaper</a></li>
            <li><a class="menu" target="_blank" href="https://github.com/AuditRateTech/Smart-Contract-Audits/blob/main/ZuckMeta_0x81B242276afA697b118554F8cEA4A5b09743a70b.pdf">Audit</a></li>
          </ul>
          
        </el-drawer>
    </div>    
  </div>
</template>
<script>
import { getEther } from '../utils/ethers'
export default {
  name: 'Header',
  props: {
      active: {
          type: Number,String,
          default: 0
      }
  },
  computed: {
    language() {
      return this.$i18n.locale
    },
    _isMobile() {
      let flag = false;
      if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        flag = true // 
      } else {
        flag = false // 
      }
      return flag;
    }
  },
  data() {
    return {
      drawer:false,
      lang:false,
      tolerPop:false,
      defaultAddress:'',
      isLogin:false,
      contPop:false,
      eth:{}
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
    showLinkPop(){
      if(!this.isLogin){
        this.contPop = true
      }
    },
    toLink(i){
          localStorage.setItem('active',i)
          this.drawer = false
          if(i!==6){
              this.$router.push('/')
              this.$emit('toId',i)
          }else{
              this.$router.push({name:'max'})
          }
      },
    handleSetLanguage() {
      // 选择语言
      let lang = this.$i18n.locale
      if(lang=='ch'){
        this.$i18n.locale = 'en'
      }else{
        this.$i18n.locale = 'ch'
      }
      window.localStorage.setItem('lang', this.$i18n.locale)
      this.drawer = false
      this.scrollto = 0
    },
    plusXing(str,frontLen,endLen){ 
      var len = str.length-frontLen-endLen;
      var xing = '';
      for (var i=0;i<len;i++) {
        xing ='...';
      }
      return str.substring(0,frontLen)+xing+str.substring(str.length-endLen);
    }
  },
  async created() {
    this.eth = await getEther();
    if (this.eth) {
        this.defaultAddress = this.plusXing(this.eth.myAddr,5,5)
    }
  },
  mounted(){
      let active = localStorage.getItem('active')
      this.$emit('toId',active)
  }
}
</script>
<style lang="less" scoped>
 @font-face { // 正常
    font-family: STSongti-TC-Regular; 
    src:url('../assets/STSongti-TC-Regular.otf');
}
.headerContainer{
  width:100%;
  background:#000;
}
.header{
    // font-family: DFPBuDingW12;
    height:78px;
    display:flex;
    justify-content:space-between;
    opacity:1;
    width:1400px;
    margin:0 auto;
    z-index:9;
    align-items: center;
    .more{
      display:none;
    }
    .logo{
        width:250px;
    }
    .wallet{
      font-size:16px;
      color:#fff;
      line-height:78px;
      display: flex;
    justify-content: center;
    align-items: center;
      img{
        width:30px;
        height:30px;
        border-radius:50%;
        margin-right:4px;
      }
    }
    .menus{
        display:flex;
        padding-left:0;
        .menu{
            font-size:20px;
            color:#DC2BFE;
            line-height:78px;
            position:relative;
            cursor: pointer;
            height:100%;
            width:150px;
            text-align:center;
            margin-left:-20px;
            span{
              position:relative;
              z-index:2;
            }
            &.active{
              color:#fff;
                &:before{
                  content: '';
                  position: absolute;
                  transform: skewX(-22deg);
                  left: 15px;
                  right: 15px;
                  top: 0;
                  bottom: 0;
                  z-index: 1;
                  background: linear-gradient(90deg, #EF2AFE 0%, #6E33FD 100%);
                }
            }
            
            &:first-child{
              margin-left:0;
            }
        }
    }
    .options{
        display:flex;
        justify-content: space-between;
        padding-top:16px;
        .wallet{
            width:197px;
            height:40px;
            background:#454545;
            display:flex;
            justify-content:center;
            border-radius:28px;
            font-size:18px;
            color:#FFFFFF;
            align-items: center;
            font-family: Roboto-Regular, Roboto;
            cursor: pointer;
            img{
                width:24px;
                margin-right:10px;
            }
        }
    }
}
.mobHeader{
  display:none;
}
.nav_merge{
    display:none;
}
@media screen and (max-width:900px) {
  .mobHeader{
    top: 0;
    height:60px;
    background-size:100% 100%;
    position: fixed;
    width: 100%;
    z-index:9;
    display:block;
    display:flex;
    justify-content: flex-end;
    .wallet{
      font-size:16px;
      color:#fff;
      line-height:88px;
      width:100%;
      padding-left: 33px;
      img{
        width:30px;
        height:30px;
        border-radius:50%;
        margin-right:10px;
      }
    }
    .logo{
      width:88px;
      height:38px;
      margin-left:15px;
      margin-top:8px;
    }
  }
    .header{
      width:100%;
        height:54px;
        padding:0 15px;
        box-sizing:border-box;
        .wallet{
          display:none;
        }
        .more{
          display:block;
          width:33px;
          height:33px;
        }
        .logo{
            width:200px;
        }
        .menus{
            display:none;
        }
        .options{
            display:none;
        }
    }
    .nav_merge {
        display:block;
        background:none;
        text-align:right;
        padding-right:20px;
        img {
            vertical-align: middle;
            margin-top: 8px;
            cursor: pointer;
        }
        .merge_img {
            width: 42px;
            height: auto;
        }
    }
    .drawer_logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  .lt_logo {
    padding-left: 10px;
    img {
      width: 138px;
    }
  }
  .rg_colse {
    padding-right: 10px;
    img {
      // width: 0.9rem;
      width: 23px;
    }
  }
}
.drawer_nav_aubt {
  position: absolute;
  left: 0;
  bottom: 0.7rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  li {
    img {
      width: 0.58667rem;
    }
  }
}
.drawer_nav {
  // font-size: 0.5rem;
  font-size: 16px;
  li {
    line-height: 52px;
    a{
        display:block;
        color:#DC2BFE;
        text-align:left;
        padding-left:33px;
        font-family: STSongti-TC-Regular;
        font-size:20px;
        &.active{
            color:#ADADAD;
        }
    }
  }
  
}
.closeico{
    position:absolute;
    top:25px;
    right:14px;
    width:37px;
    height:37px;
    background:url(../assets/closeico.png) no-repeat center;
    background-size:100% 100%;
  }
.drawer_nav_active {
  color: #fc6446;
  font-family: roboto-mediumitalic;
}
.cantactus{
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    img{
        width:22px;
    }
}
.langAndSet {
    position: absolute;
    bottom: 2rem;
    width: 100%;
    text-align: center;
  }
  .langAndSet .setbox {
    font-size: 0.37rem;
    line-height: 44px;
    text-align: left;
    padding-left: 24px;
    margin-bottom:30px;
  }
  .langAndSet .setbox.fr {
    float: right;
    padding-right: 24px;
  }
  // .langAndSet .setbox .setico {
  //   display: inline-block;
  //   vertical-align: middle;
  //   width: 24px;
  //   height: 24px;
  //   background: url(../assets/icon_setting.png) no-repeat center;
  //   background-size: 100% 100%;
  //   margin-right:5px;
  // }
  // .langAndSet .setbox .langico {
  //   display: inline-block;
  //   vertical-align: middle;
  //   width: 24px;
  //   height:24px;
  //   background: url(../assets/icon_lang.png) no-repeat center;
  //   background-size: 100% 100%;
  //   margin-right:5px;
  // }
}
</style>
<style >
.van_list{
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.changeToler{
  width:100%;
  height:36px;
  background:#23323C;
  border-radius:15px;
  line-height:36px;
  padding-left:10px;
  box-sizing: border-box;
  font-size:18px;
  color:#fff;
}
.drawer_body {
  width: 69% !important;
  background: #000;
  color: #ffffff;
  /* position: relative; */
  outline: 0;
}
.drawer_btn{
    padding-top:60px
}
.drawer_wallet{
    width:222px;
    height:34px;
    margin:0 auto;
    background:rgb(69, 69, 69);
    font-size:15px;
    line-height:34px;
   font-family: Roboto-Medium, Roboto;
   border-radius:24px;
}
.drawer_wallet img{
        width:20px;
        height:20px;
        margin-right:4px;
    }
</style>