<template>
    <div class="footer">
        <div class="footerBox">
                <div class="logo"><img src="../assets/logo2.png"></div>
                <div class="copyright">
                    <img src="../assets/home_foot1.png">
                    <p>info@zuckmeta.io</p>
                </div>
                <div class="footLink">
                    <a target="_blank" href="https://twitter.com/ZuckMeta"><img src="../assets/home_link1.png"></a>
                    <a target="_blank" href="https://t.me/ZUCKMETAWORLD"><img src="../assets/home_link2.png"></a>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100075505755366"><img src="../assets/home_link3.png"></a>
                    <a target="_blank" href="https://zuckmetaverse.gitbook.io/zuck/"><img src="../assets/home_link4.png"></a>
                </div>
            </div>
    </div>
    
</template>
<script>
export default {
  name: 'Footer',
  computed: {
    language() {
      
    },
  },
  data() {
    return {
    }
  },
  watch: {
      
  },
  methods: {
      
  },
  created() {
    
  },
}
</script>
<style lang="less" scoped>
.footer{
    border-top: 2px solid #7360CD;
    .footerBox{
          display:flex;
          justify-content: space-between;
          align-items: center;
          padding:36px 0 60px;
          .logo{
              width:160px;
              img{
                  width:100%;
              }
          }
          .copyright{
              img{
                  display:block;
                  margin:0 auto;
              }
              p{
                  color:#fff;
                  text-align:center;
              }
          }
          .footLink{
              display:flex;
              justify-content: center;
              a{
                  display:block;
                  margin:0 10px;
                  cursor: pointer;
              }
          }
      }
}
@media screen and (max-width:900px) {
    .footer{
        .footerBox{
                    padding-top:16px;
                    padding-bottom:0;
                    flex-wrap: wrap;
                    align-items: center;
                    .logo{
                        width:80px;
                        order:1;
                        padding-left:15px;
                        img{
                            width:100%;
                        }
                    }
                    .footLink{
                        order:2;
                        img{
                            width:38px;
                        }
                    }
                    .copyright{
                        order:3;
                        width: 100%;
                        padding:8px 0 12px;
                        background:#000;
                        margin-top:15px;
                    }
                }
    }
}
</style>