<template>
    <div class="footer">
        <div class="footopcon">
            <div class="left">
                <h2>Community Call.</h2>
                <div class="linklist">
                    <a class="linkitem" href="https://t.me/ZUCKMETAWORLD" target="_black">
                        <img src="../assets/linkimg1.png">
                        <p>Telegram</p>
                    </a>
                    <a class="linkitem" href="https://twitter.com/ZuckMeta" target="_black">
                        <img src="../assets/linkimg2.png">
                        <p>Twitter</p>
                    </a>
                    <a class="linkitem" href="https://www.facebook.com/profile.php?id=100075505755366" target="_black">
                        <img src="../assets/linkimg3.png">
                        <p>Meta</p>
                    </a>
                    <a class="linkitem" href="https://zuckmetaverse.gitbook.io/zuck/" target="_black">
                        <img src="../assets/linkimg4.png">
                        <p>Gitbooks</p>
                    </a>
                </div>
            </div>
            <div class="right">
                <img src="../assets/foot1.png">
            </div>
        </div>
        <p class="copy">© Copyright 2021 ZUCKMETA </p>
    </div>
</template>
<script>
export default {
  name: 'Header',
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
    position:relative;
    background:#1D1D1D;
   .footopcon{
       width:1100px;
       margin:0 auto;
       display:flex;
       justify-content:space-between;
       padding:30px 0;
       .left{
           h2{
               font-size:30px;
               color:#fff;
               line-height:100%;
               text-align:left;
           }
           .linklist{
               padding-top:26px;
               display:flex;
               justify-content:center;
               align-item:center;
               .linkitem{
                   margin:0 20px;
                   img{
                       height:46px;
                   }
                   p{
                       font-size:15px;
                       color:#fff;
                       line-height:100%;
                       padding-top:10px;
                       text-align:center;
                   }
               }
           }
       }
   }
   .copy{
       background:#000000;
        line-height:43px;
        color:rgba(255,255,255,0.6);
        height:43px;
        font-size:14px;
        text-align:center;
   }
}
@media screen and (max-width:900px) {
    .footer{
        .copy{
           height:40px;
           line-height:40px;
           font-size: 12px;
        }
        .footopcon{
            width:auto;
            padding:0 10px 24px;
            .right{
                display:none;
            }
            .left{
                width:100%;
                h2{
                    font-size:22px;
                    color:#fff;
                    line-height:30px;
                    padding-top:25px;
                    padding-bottom:20px;
                }
                .linklist{
                    padding:0 20px;
                    display:flex;
                    justify-content: space-between;
                    .linkitem{
                        margin:0 ;
                        img{
                            width:40px;
                            height:auto;
                        }
                        &:nth-child(2){
                            img{
                                margin:4px 0;
                            }
                        }
                        &:nth-child(3){
                            img{
                                margin:6px 0;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>