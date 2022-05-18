<template>
    <div class="container">
        <Header :active="navActive"/> 
        <div class="basiCon">
            <div class="layerCon">
                <h2 class="title">Your NFT digital identity</h2>
                <img src="../assets/maxBanner.webp" class="banner">
                <div class="maxData">
                    <div class="dataItem">
                        <p class="num">{{totalHolder}}</p>
                        <p class="name">ZUCKNFT MAX</p>
                    </div>
                    <div class="dataItem">
                        <p class="num">{{ holders[0] }}</p>
                        <p class="name">Crazy MAX</p>
                    </div>
                    <div class="dataItem">
                        <p class="num">{{ holders[1] }}</p>
                        <p class="name">Mad MAX</p>
                    </div>
                    <div class="dataItem">
                        <p class="num">{{ holders[2] }}</p>
                        <p class="name">King MAX</p>
                    </div>
                    <div class="dataItem">
                        <p class="num">{{ holders[3] }}</p>
                        <p class="name">Mars MAX</p>
                    </div>
                </div>
                <div class="rule">
                    <p>★ Our collection is available and verified on the following NFT Marketplace!</p>
                    <p>★ Grab your ZUCK NFT MAX  today and become an exclusive member in our community.</p>
                    <p>★ Hold ZUCK NFT MAX, earn long-term dividends of $ZUCK transaction fees, and can also be used as a symbol of the digital </p>
                    <p>identity of ZUCKSwap shareholders to earn long-term Swap transaction fees dividends.</p>
                </div>
                <div class="contract">
                    <p>NFT Contract Address(ERC721):  <span>{{ nftAddr }}</span></p>
                    <div class="btn" @click="copy">
                        <i></i>
                        copy
                    </div>
                </div>
                <div class="market">
                    <p class="info">Check out the collection on the following MarketPlace!</p>
                    <div class="marketList">
                        <div class="marketItem">
                            <img src="../assets/market1.webp">
                        </div>
                        <div class="marketItem">
                            <img src="../assets/market2.webp">
                        </div>
                        <div class="marketItem">
                            <img src="../assets/market3.webp">
                        </div>
                        <div class="marketItem">
                            <img src="../assets/market4.webp">
                        </div>
                    </div>
                </div>
                <h3 class="myNftTitle">My ZUCKNFT MAX</h3>
                <div class="myNft">
                    <div class="nftItem" v-for="(item,index) in myNft" :key="index">
                        <img :src="item.image">
                        <p>ZUCKNFT MAX #{{ item.tokenId }}</p>
                        <p>{{ item.name }}</p>
                    </div>
                    <div class="nftItem" @click="toMint">
                        <div class="add">
                            <i></i>
                        </div>
                    </div>
                </div>
                <div class="rewardPanel">
                    <div class="reward">
                        <h3 class="rewardTitle">REWARDS</h3>
                        <p class="rewardsText">All NFT holders earn  $ZUCK transaction fees dividends. NFTs with higher level get higher rewards!</p>
                        <div class="claimBox">
                            <div class="claimImg"><img src="../assets/claimImg.webp"></div>
                            <div class="claimInfo">
                                <p>Claim Your dividends of $ZUCK transaction fees</p>
                                <p>BALANCE: <span>? BNB</span></p>
                                <div class="btn" @click="comsoon">CLAIM</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
        
    </div>
</template>
<style lang="less" scoped>
@font-face { // 正常
    font-family: STSongti-TC-Regular; 
    src:url('../assets/SF-Pro.ttf');
}
.container{
    font-family: STSongti-TC-Regular, STSongti-TC;
    background:#101A44;
    .basiCon{
        width:1330px;
        margin:0 auto;
    }
    .title{
        height: 78px;
        font-size: 61px;
        font-family: SFPro-Medium, SFPro;
        font-weight: 500;
        color: #FCDAFF;
        line-height: 85px;
        background: linear-gradient(87deg, #EF2AFE 0%, #6E33FD 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align:center;
        text-transform: uppercase;
        padding:60px 0 20px;
    }
    .banner{
        width:100%;
    }
    .maxData{
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding:60px 0 38px;
        .dataItem{
            width:230px;
            box-sizing: border-box;
            padding:20px;
            border-radius: 26px;
            background:#09102E;
            p{
                text-align:center;
                color:#FCDAFF;
                &.num{
                    font-size:42px;
                    line-height:100%;
                    padding-top:10px;
                }
                &.name{
                    font-size:20px;
                    line-height:120%;
                    padding-top:15px;
                }
            }
        }
    }
    .rule{
        padding:20px 30px;
        background:#061133;
        border-radius:28px;
        font-size:23px;
        color:#FCDAFF;
        line-height:100%;
        p{
            padding-bottom:15px;
            &:last-child{
                padding-bottom:0;
            }
        }  
    }
    .contract{
        padding:16px 35px;
        background:#061133;
        display:flex;
        justify-content: space-between;
        align-items: center;
        border-radius:17px;
        margin-top:40px;
        p{
            font-size:24px;
            color:rgba(255, 255, 255, 0.6);
            span{
                color:#fff;
                font-weight: bold;
            }
        }
        .btn{
            display:flex;
            justify-content: center;
            align-items: center;
            font-size:20px;
            color:#fff;
            line-height: 28px;
            background:#485CB4;
            border-radius:8px;
            cursor: pointer;
            padding:5px 20px;
            i{
                display:block;
                width:20px;
                height:22px;
                background:url(../assets/copyIco.webp) no-repeat center;
                background-size:100% 100%;
                margin-right:10px;
            }
        }
    }
    .market{
        padding:24px 30px 38px;
        background:#061133;
        border-radius:18px;
        margin-top:38px;
        .info{
            font-size:31px;
            color:#FCDAFF;
            line-height:100%;
            padding-bottom:30px;
            padding-left:10px;
        }
        .marketList{
            display:flex;
            justify-content: space-between;
            align-items: flex-end;
            .marketItem{
                cursor: pointer;
                &:nth-child(1){
                    img{
                        width:175px;
                    }
                }
                &:nth-child(2){
                    img{
                        width:263px;
                    }
                }
                &:nth-child(3){
                    img{
                        width:242px;
                    }
                }
                &:nth-child(4){
                    img{
                        width:247px;
                    }
                }
            }
        }
    }
    .myNftTitle{
        font-size:48px;
        color:#FCDAFF;
        line-height:58px;
        padding:72px 0 8px 15px;
    }
    .myNft{
        padding:28px 38px 0;
        background:#061133;
        display:flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        border-radius: 21px;
        margin:0 10px 45px;
        .nftItem{
            margin:0 13px 45px;
            img{
                border-radius:15px;
                width:220px;
            }
            p{
                font-size:20px;
                color:#FCDAFF;
                line-height:100%;
                text-align:center;
                padding-top:15px;
            }
            .add{
                width:220px;
                height:220px;
                background:#000000;
                border-radius: 21px;
                display:flex;
                justify-content: center;
                align-items: center;
                i{
                    width:56px;
                    height:56px;
                    display:block;
                    background:url(../assets/add.png) no-repeat center;
                    background-size:100% 100%;
                }
            }
        }
    }
    .rewardPanel{
        position:relative;
        margin-top:68px;
        margin-bottom:78px;
        border-radius: 20px;
        padding:5px;
        box-sizing: border-box;
        background-image: linear-gradient(110deg, rgba(239, 42, 254, 1), rgba(110, 51, 253, 1));
        .reward{
            height: 362px;
            background:#101A44;
            border-radius: 20px;
            .rewardTitle{
                position:absolute;
                font-size:48px;
                color:#FCDAFF;
                line-height:100%;
                background:#101A44;
                padding:0 28px;
                top:-22px;
                left: 70px;
            }
            .rewardsText{
                font-size:28px;
                color:#FCDAFF;
                line-height:100%;
                text-align:center;
                padding-top:56px;
                padding-bottom:40px;
            }
            .claimBox{
                width:800px;
                border-radius: 19px;
                background:#fff;
                padding:20px 30px 30px;
                display:flex;
                justify-content: space-between;
                align-items: center;
                margin:0 auto;
                .claimImg{
                    width:194px;
                    img{
                        width:100%;
                    }
                }
                .claimInfo{
                    p{
                        font-size:22px;
                        color:#373737;
                        line-height:100%;
                        padding-bottom:10px;
                        span{
                            color:#810C11;
                        }
                    }
                    .btn{
                        width: 247px;
                        height: 60px;
                        background: linear-gradient(90deg, #EF2AFE 0%, #6E33FD 100%);
                        border-radius: 30px;
                        line-height:60px;
                        text-align:center;
                        font-size:28px;
                        color:#fff;
                        cursor: pointer;
                        margin-top:20px;
                    }
                }
            }
        }
    }
}
@media screen and (max-width:900px) {
   .container{
       .basiCon{
           width:100%;
           margin:0;
       }
       .layerCon{
           padding:0 15px;
       }
       .title{
           width:284px;
           height:24px;
           font-size:17px;
           line-height:24px;
           margin:0 auto;
           text-align:center;
           padding:22px 0 12px;
       }
       .maxData{
           padding:38px 0 20px;
           flex-wrap: wrap;
           justify-content: center;
           .dataItem{
               padding:6px 4px;
               border-radius:12px;
               width:105px;
               margin:0 5px 15px;
               &:first-child{
                   p{
                       &.name{
                           padding-top:5px;
                           line-height: 110%;
                       }
                   }
               }
               p{
                   &.num{
                        font-size:19px;
                    }
                    &.name{
                        font-size:9px;
                        padding-top:10px;
                        transform: scale(.8);
                    }
               }
           }
       }
       .rule{
           padding:20px 16px;
           border-radius:28px;
           font-size:12px;
           line-height:20px;
           p{
               padding-bottom:5px;
           }
       }
       .contract{
           border-radius:17px;
           flex-wrap: wrap;
           justify-content: center;
           p{
               font-size:12px;
               text-align: center;
               span{
                   display:block;
               }
           }
           .btn{
               font-size:12px;
               line-height:28px;
               padding:0 12px;
               border-radius:5px;
               margin-top:10px;
               i{
                   width:12px;
                   height:14px;
               }
           }
       }
       .market{
           padding:12px 0;
           border-radius:17px;
           .info{
               font-size:12px;
               text-align:center;
           }
           .marketList{
               flex-wrap: wrap;
               justify-content:space-evenly;
               .marketItem{
                   margin-bottom:20px;
                   &:nth-child(1){
                       img{
                           width:98px;
                       }
                   }
                   &:nth-child(2){
                       img{
                           width:147px;
                       }
                   }
                   &:nth-child(3){
                       img{
                           width:135px;
                       }
                   }
                   &:nth-child(4){
                       img{
                           width:137px;
                       }
                   }
               }
           }
       }
       .myNftTitle{
           padding-top:30px;
           font-size:14px;
           line-height:16px;
       }
       .myNft{
            padding:20px 0;
            border-radius:17px;
            justify-content: center;
            .nftItem{
                margin:0 8px 18px;
                img{
                    border-radius:10px;
                    width:140px;
                }
                p{
                    font-size: 12px;
                }
                .add{
                    width:140px;
                    height:140px;
                    i{
                        width:36px;
                        height:36px;
                    }
                }
            }
        }
        .rewardPanel{
            padding:2px;
            .reward{
                height:auto;
                padding-bottom:20px;
                .rewardTitle{
                    font-size:14px;
                    padding:0 15px;
                    top:-6px;
                    left:30px;
                }
                .rewardsText{
                    font-size:12px;
                    text-align:center;
                    padding: 35px 10px 15px;
                    line-height: 120%;
                }
                .claimBox{
                    width:90%;
                    margin:0 auto;
                    padding:10px;
                    justify-content: space-evenly;
                    .claimImg{
                        width:100px;
                    }
                    .claimInfo{
                        padding-left:20px;
                        p{
                            font-size:12px;
                        }
                        .btn{
                            width:108px;
                            height:26px;
                            line-height:26px;
                            font-size:12px;
                        }
                    }
                }
            }
        }
   } 
}
</style>
<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    import useClipboard from 'vue-clipboard3'
    import { getEther } from '../utils/ethers'
    export default {
        name: 'max',
        components: { Header, Footer },
        data() {
            return {
                navType: 1,
                holders:[],
                totalHolder:0,
                eth:{},
                nftAddr:"",
                myNft:[],
                navActive:6
            }
        },
        methods: {
            comsoon(){
                this.$message.success('Coming Soon')
            },
            toMint(){
                this.$router.push('/')
            },
            async copy(){
                const { toClipboard } = useClipboard()
                try {
                    await toClipboard(this.eth.c.zuckNft.address)
                    console.log('Copied to clipboard')
                } catch (e) {
                    console.error(e)
                }
            },
            async getInfos(){
                this.nftAddr = this.eth.c.zuckNft.address
                this.holders = await this.eth.c.zuckNft.typeMints()
                this.totalHolder = parseInt(this.holders[0]) + parseInt(this.holders[1]) + parseInt(this.holders[2]) + parseInt(this.holders[3])
                let myTokens = await this.eth.c.zuckNft.tokensOfOwner(this.eth.myAddr)
                for(var i=0;i<myTokens.length;i++){
                    let url = await this.eth.c.zuckNft.tokenURI(myTokens[i])
                    let data = await this.$axios.get(url)
                    let type = ""
                    if(myTokens[i] < 7000){
                        type = 'Crazy MAX'
                    }else if(myTokens[i] < 8900){
                        type = 'Mad MAX'
                    }else if(myTokens[i] < 9800){
                        type = 'King MAX'
                    }else if(myTokens[i] < 10000){
                        type = 'Mars MAX'
                    }
                    this.myNft.push({
                        name: type,
                        image: data.data.image,
                        tokenId: myTokens[i]
                    })
                }
                myTokens.forEach((item) => {
                    
                })
            }
        },
        async created() {
            this.eth = await getEther();
            if (this.eth) {
                this.getInfos()
            }
        },
        mounted () {
        }
    }
</script>