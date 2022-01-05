<template>
    <div class="mystery-boxes">
        <Header />
        <div class="top-img">
            <img class="min-img" src="../assets/myBox/min_icon.png" alt="">
        </div>
        <div class="content">
            <div class="shop">
                <div class="img-box">
                    <!-- <img src="../assets/myBox/box_img1.png" alt=""> -->
                    <div class="swiper-box">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item,index) in nftList" :key="index">
                                    <img class="" :src="item.imgurl" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-desc">
                    <div class="sale">COUNTDOWN TO PUBLIC SALE <span class="soon">COMING SOON</span></div>
                    <div class="max">CLAIM YOUR MAX</div>
                    <div class="mint">
                        Enter how many MAXs you would like to mint here
                        <br>MAX minted: {{mintNum}} / 1,000
                    </div>
                    <div class="price">
                        <div class="swiper-box-min">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide" v-for="(item,index) in nftList" :key="index">
                                        <img class="" :src="item.imgurl" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="desc">
                            <div>Price Per MAX</div>
                            <div class="zuck">{{price}} ZUCK Each</div>
                        </div>
                    </div>
                    <div class="number">
                        <div @click="redumNum">-</div>
                        <input v-model="number" placeholder="Please Enter 1-5" type="text">
                        <div @click="addNum">+</div>
                    </div>
                    <div class="total">
                        <span>（{{number?number:0}}/MAX）</span><span>Total:<span class="total-price">{{totalPrice}} ZUCK</span></span>
                    </div>
                    <el-button class="mint-btn" @click="checkMint" :loading="isDoing" :disabled="isDoing">{{isApproved?'Mint Now':'Approve'}}</el-button>
                </div>
            </div>
            <div class="min-icon-box">
                <img class="min-icon" src="../assets/myBox/min_icon.png" alt="">
            </div>
            <div class="nav">
                <div :class="navType === 1 ? 'on' : ''" @click="changeNav(1)">Product Description</div>
                <div :class="navType === 2 ? 'on' : ''" @click="changeNav(2)">Details</div>
                <div :class="navType === 3 ? 'on' : ''" @click="changeNav(3)">Series Content</div>
            </div>
            <div class="nav-view">
                <div v-if="navType === 1" class="">
                    <div class="nav-img">
                        <img src="../assets/myBox/box_img15.png" alt="">
                        <img src="../assets/myBox/box_img16.png" alt="">
                        <img src="../assets/myBox/box_img17.png" alt="">
                        <img src="../assets/myBox/box_img18.png" alt="">
                    </div>
                    <div class="value">
                        Collection Value
                        <br>1. Reduce ZUCK single transaction tax slippage
                        <br>2. Obtain ZUCKSWAP's fee dividend privilege
                        <br>3. Obtain the governance privileges of ZUCKDAO
                        <br>4. Get dividends from ZUCK Mammon
                    </div>
                </div>
                <div v-if="navType === 2" class="details">
                    <div class="">
                        1、There will be <span class="on-text">1000</span> Mystery Boxes on sale,Every user can only buy a maximum of 5 boxes.
                        <br>2、Zuckerberg's MAX series will include Crazy MAX,Mad MAX ,King MAX and Mars MAX.Their rank is N, R, SR and SSR . Each N, R, SR and SSR used to offset single transaction tax and ZUCKSwap'fee dividend and also Get dividends from ZUCK Mammon.
                    </div>
                    <div>
                        <div>
                            3、NFT Privilege：
                        </div>
                        <div>
                            <span class="on-text">Crazy MAX :</span>
                            Rank N , 700 NFTs, Each N can be used to offset 2% single transaction tax
                        </div>
                        <div>
                            <span class="on-text">Mad MAX :</span>
                            Rank R, 200 NFTs, Each R can be used to offset 3% single transaction tax and ZUCKSwap'fee dividend
                        </div>
                        <div>
                            <span class="on-text">King MAX :</span>
                            Rank SR, 90 NFTs, Each SR can be used to offset 5% single transaction tax and ZUCKSwap'fee dividend and also get dividends from ZUCK Mammon
                        </div>
                        <div>
                            <span class="on-text">Mars MAX :</span>
                            Rank SSR, 10 NFTs, Each SR can be used to offset 8% single transaction tax and ZUCKSwap'fee dividend and also get dividends from ZUCK Mammon and also obtain the governance privileges of ZUCKDAO
                        </div>
                    </div>
                </div>
                <div v-if="navType === 3" class="series">
                    <table>
                        <tr class="tab-header">
                            <td>Edition</td>
                            <td>Rank</td>
                            <td>Issue Amount</td>
                            <td>Probability</td>
                        </tr>
                        <tr class="tab-row">
                            <td>Crazy MAX</td>
                            <td class="rank-row1">N</td>
                            <td>700</td>
                            <td>70%</td>
                        </tr>
                        <tr class="tab-row">
                            <td>Mad MAX</td>
                            <td class="rank-row2">R</td>
                            <td>200</td>
                            <td>20%</td>
                        </tr>
                        <tr class="tab-row">
                            <td>King MAX</td>
                            <td class="rank-row3">SR</td>
                            <td>90</td>
                            <td>0.9%</td>
                        </tr>
                        <tr class="tab-row">
                            <td>Mars MAX</td>
                            <td class="rank-row4">SSR</td>
                            <td>10</td>
                            <td>0.1%</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="nft-maxs">
                <div class="type">NFT MAXS</div>
                <div class="type_box">
                    <div class="max-type">
                        <img src="../assets/myBox/box_img3.png" alt="">
                        <div class="name">Crazy MAX</div>
                    </div>
                    <div class="max-type">
                        <img src="../assets/myBox/box_img4.png" alt="">
                        <div class="name">Mad MAX</div>
                    </div>
                    <div class="max-type">
                        <img src="../assets/myBox/box_img5.png" alt="">
                        <div class="name">King MAX</div>
                    </div>
                    <div class="max-type">
                        <img src="../assets/myBox/box_img6.png" alt="">
                        <div class="name">King MAX</div>
                    </div>
                </div>
            </div>
            <div class="the-needs">
                <div class="title">The Metaverse needs $ZUCK</div>
                <div class="func">$ZUCK has been launched. You can see as follows and  buy on PankcakeSwap.</div>
                <div class="img-box">
                    <img src="../assets/myBox/box_img7.png" alt="">
                    <img src="../assets/myBox/box_img8.png" alt="">
                    <img src="../assets/myBox/box_img9.png" alt="">
                    <img src="../assets/myBox/box_img10.png" alt="">
                    <img src="../assets/myBox/box_img11.png" alt="">
                    <img src="../assets/myBox/box_img12.png" alt="">
                    <img src="../assets/myBox/box_img13.png" alt="">
                    <img src="../assets/myBox/box_img14.png" alt="">
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    import Swiper from "Swiper";
    import 'swiper/css/swiper.css'
    import { ElMessage } from 'element-plus'
    export default {
        name: 'MysteryBoxes',
        components: { Header, Footer },
        data() {
            return {
                number: '',
                navType: 1,
                nftList:[],
                defaultAccount:null,
                isApproved:false,
                isDoing:false,
                price:15000000,
                totalPrice:0,
                mintNum:0
            }
        },
        methods: {
            async getInfos(){
                let balance = await this.$eth.c.zuckToken.balanceOf(this.defaultAccount)
                this.zuckBalance = parseInt(balance) / Math.pow(10,9)
                let isApproved = await this.$eth.c.zuckToken.allowance(this.defaultAccount, this.$eth.c.zuckFactory.address)
                if (parseInt(isApproved)) {
                    this.isApproved = true
                }
                let mints = await this.$eth.c.zuckFactory.getMintedTokenIds()
                this.mintNum = mints.length
            },
            async checkMint(){
                this.isDoing = true
                if(this.isApproved){
                    this.doMint()
                }else{
                    try {
                        let res = await this.$eth.c.zuckToken.approve(this.$eth.c.zuckFactory.address, '10000000000000000000000000000')
                        await res.wait()
                        this.isApproved = true
                        this.isDoing = false
                    } catch {
                        this.isDoing = false
                    }
                }
            },
            async doMint(){
                try{
                    let res = await this.$eth.c.zuckFactory.mint(this.number)
                    let waitres = await res.wait()
                    console.log(waitres)
                    ElMessage({
                        message: 'Success',
                        type: 'success',
                    })
                    this.isDoing = false
                }catch(e){
                    console.log(e)
                    this.isDoing = false
                }
            },
            redumNum(){
                if(!this.number){
                    this.number = 0
                }
                if(this.number>1){
                    this.number--
                    this.totalPrice = this.number * this.price
                    
                }
            },
            addNum(){
                if(!this.number){
                    this.number = 0
                }
                if(this.number<5){
                    this.number++
                    this.totalPrice = this.number * this.price
                }
            },
            changeNav(nav) {
                this.navType = nav
            },
            getSale () {
                //调用延迟加载 $nextTick
                this.$nextTick(() => {
                    let swiper = new Swiper(".swiper-container", {
                    //是否循环
                        loop: true,
                        autoplay: {
                            //swiper手动滑动之后自动轮播失效的解决方法,包括触碰，拖动，点击pagination,重新启动自动播放
                            disableOnInteraction: false,
                            // 自动播放时间：毫秒
                            delay: 500
                        },
                        slidesPerView: 1,
                    })
                })
            },
            async getList(){
                let res = await this.$axios.get('/api/maskpolling')
                if(res.status === 200){
                    this.nftList = res.data
                    this.getSale()
                }
                
            }
        },
        async mounted () {
            this.getList()
            this.defaultAccount = await this.$eth.signer.getAddress()
            this.getInfos()
        }
    }
</script>

<style lang="less" scoped>
.mystery-boxes {
    width: 100%;
    height: 100%;
    .top-img {
        width: 100%;
        height: 751px;
        position: relative;
        background: url('../assets/myBox/box_top.png') no-repeat center/100% 100%;
        .min-img {
            display: none;
            position: absolute;
            bottom: 1rem;
            transform: translate(-50%, 0);
        }
    }
    .content {
        width: 100%;
        margin-top: 0;
        padding-bottom: 94px;
        background: url('../assets/myBox/box_bg1.png') no-repeat center;
        background-size: 100% 101%;
        .shop {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .img-box {
                width: 473px;
                height: 450px;
                display: flex;
                justify-content: center;
                align-items: center;
                background: url('../assets/myBox/box_bg2.png') no-repeat center/100% 100%;
                .swiper-box {
                    width: 401px;
                    height: 401px;
                    overflow: hidden;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                
            }
            .img-desc {
                text-align: left;
                .sale {
                    font-size: 28px;
                    font-family: zcoolqingkehuangyouti-Regular, zcoolqingkehuangyouti;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 34px;
                    letter-spacing: 2px;
                    .soon {
                        font-size: 18px;
                        font-family: zcoolqingkehuangyouti-Regular, zcoolqingkehuangyouti;
                        font-weight: 400;
                        color: #FFFFFF;
                        line-height: 21px;
                        letter-spacing: 1px;
                    }
                }
                .max {
                    font-size: 37px;
                    line-height: 44px;
                    letter-spacing: 2px;
                    font-weight: 400;
                    font-family: zcoolqingkehuangyouti-Regular, zcoolqingkehuangyouti;
                    color: #06FEFE;
                }
                .mint {
                    font-size: 22px;
                    font-family: zcoolqingkehuangyouti-Regular, zcoolqingkehuangyouti;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 30px;
                    letter-spacing: 1px;
                }
                .price {
                    width: 595px;
                    height: 110px;
                    margin-top: 10px;
                    padding: 0 20px 0 10px;
                    border: 1px solid #363636;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .swiper-box-min {
                        width: 93px;
                        height: 93px;
                        overflow: hidden;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    
                    .desc {
                        font-size: 22px;
                        line-height: 30px;
                        letter-spacing: 1px;
                        font-family: zcoolqingkehuangyouti-Regular, zcoolqingkehuangyouti;
                        font-weight: 400;
                        text-align: right;
                        color: #FFFFFF;
                        .zuck {
                            font-size: 32px;
                            font-family: zcoolqingkehuangyouti-Regular, zcoolqingkehuangyouti;
                            font-weight: 400;
                            color: #FFFFFF;
                            line-height: 30px;
                            letter-spacing: 2px;
                        }
                    }
                }
                .number {
                    height: 78px;
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid #363636;
                    border-top: 0;
                    div {
                        width: 62px;
                        height: 100%;
                        font-size: 54px;
                        line-height: 78px;
                        letter-spacing: 4px;
                        font-family: zcoolqingkehuangyouti-Regular, zcoolqingkehuangyouti;
                        font-weight: 400;
                        text-align: center;
                        cursor: pointer;
                        color: #FFFFFF;
                        background: #1E1E1E;
                    }
                    input {
                        width: 471px;
                        line-height: 48px;
                        letter-spacing: 4px;
                        font-size: 50px;
                        font-family: zcoolqingkehuangyouti-Regular, zcoolqingkehuangyouti;
                        font-weight: 400;
                        color: #FFFFFF;
                        text-align: center;
                        background: #000;
                        &::-webkit-input-placeholder{
                            font-size:30px;
                        }
                    }
                }
                .total {
                    font-size: 18px;
                    line-height: 30px;
                    margin: 18px 0;
                    letter-spacing: 1px;
                    font-family: zcoolqingkehuangyouti-Regular, zcoolqingkehuangyouti;
                    font-weight: 400;
                    display: flex;
                    justify-content: space-between;
                    color: #FFFFFF;
                    .total-price {
                        font-size: 36px;
                        font-family: zcoolqingkehuangyouti-Regular, zcoolqingkehuangyouti;
                        font-weight: 400;
                        color: #06FEFE;
                        line-height: 30px;
                        letter-spacing: 2px;
                    }
                }
                .mint-btn {
                    height: 60px;
                    background: #06FEFE;
                    font-size: 32px;
                    letter-spacing: 2px;
                    font-family: zcoolqingkehuangyouti-Regular, zcoolqingkehuangyouti;
                    font-weight: 400;
                    text-align: center;
                    cursor: pointer;
                    color: #000000;
                    border:none;
                    width:100%;
                }  
            }
        }
        .min-icon-box {
            display: none;
        }
        .nav {
            width: 1200px;
            margin: 61px auto 0;
            font-size: 28px;
            line-height: 34px;
            font-family: zcoolqingkehuangyouti-Regular, zcoolqingkehuangyouti;
            font-weight: 400;
            color: #FFFFFF;
            display: flex;
            div {
                margin-right: 84px;
                cursor: pointer;
            }
            .on {
                padding-bottom: 10px;
                font-size: 28px;
                font-family: zcoolqingkehuangyouti-Regular, zcoolqingkehuangyouti;
                font-weight: 400;
                color: #06FEFE;
                line-height: 34px;
                text-shadow: 0px 0px 6px #04ECFF;
                border-bottom: 3px solid #06FEFE;
            }
        }
        .nav-view {
            width: 1200px;
            margin: 61px auto 150px;
            .nav-img {
                width: 1000px;
                margin: 123px auto 63px;
                display: flex;
                justify-content: space-between;
                img {
                    width: 168px;
                    height: 178px;
                }
            }
            .value {
                width: 1000px;
                margin: 0 auto 0;
                font-size: 26px;
                font-family: zcoolqingkehuangyouti-Regular, zcoolqingkehuangyouti;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 46px;
                text-align: left;
            }
            .details {
                width: 1200px;
                text-align: left;
                font-size: 22px;
                font-family: zcoolqingkehuangyouti-Regular, zcoolqingkehuangyouti;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 50px;
                .on-text {
                    color: #06FEFE;
                }
            }
            .series {
                width: 1200px;
                margin: 0 auto 0;
                table {
                    width: 100%;
                    font-size: 18px;
                    font-family: SFPro-Regular, SFPro;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 21px;
                    tr {
                        width: 100%;
                        height: 110px;
                        border-bottom: 1px dashed #545454;
                    }
                }
                .tab-header {
                    height: 64px;
                    background: #1A1A1A;
                    border-bottom: 0;
                }
                .tab-row {
                    font-size: 20px;
                    .rank-row1 {
                        font-size: 30px;
                        font-weight: 900;
                        color: #93B80A;
                    }
                    .rank-row2 {
                        font-size: 30px;
                        font-weight: 900;
                        color: #E26D0E;
                    }
                    .rank-row3 {
                        font-size: 30px;
                        font-weight: 900;
                        color: #05B4DB;
                    }
                    .rank-row4 {
                        font-size: 30px;
                        font-weight: 900;
                        color: #B42CE4;
                    }
                }
            }
        }
        .nft-maxs {
            width: 1200px;
            margin: 0 auto 102px;
            display: flex;
            flex-flow: column;
            align-items: center;
            .type {
                width: 333px;
                height: 77px;
                margin-bottom: 60px;
                font-size: 32px;
                line-height: 77px;
                font-weight: 400;
                font-family: zcoolqingkehuangyouti-Regular, zcoolqingkehuangyouti;
                color: #FFFFFF;
                text-align:center;
                background: url('../assets/myBox/box_bg3.png') no-repeat center/100% 100%;
            }
            .type_box {
                width: 100%;
                display: flex;
                justify-content: space-between;
                .max-type {
                    width: 276px;
                    height: 391px;
                    display: flex;
                    flex-flow: column;
                    align-items: center;
                    justify-content: center;
                    background: url('../assets/myBox/box_bg5.png') no-repeat center/100% 100%;
                    img {
                        width: 235px;
                        height: 285px;
                    }
                    .name {
                        margin-top: 20px;
                        font-size: 30px;
                        font-family: zcoolqingkehuangyouti-Regular, zcoolqingkehuangyouti;
                        font-weight: 400;
                        color: #FFFFFF;
                        line-height: 33px;
                        text-shadow: 0px 0px 6px #04ECFF;
                    }
                }
            }
            
        }
        .the-needs {
            width: 1200px;
            margin: 90px auto 0;
            display: flex;
            flex-flow: column;
            align-items: center;
            .title {
                width: 362px;
                height: 66px;
                font-size: 24px;
                font-family: zcoolqingkehuangyouti-Regular, zcoolqingkehuangyouti;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 66px;
                text-align:center;
                text-shadow: 0px 0px 6px #04ECFF;
                background: url('../assets/myBox/box_bg4.png') no-repeat center/100% 100%;
            }
            .func {
                margin: 34px 0 55px;
                font-size: 20px;
                font-family: zcoolqingkehuangyouti-Regular, zcoolqingkehuangyouti;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 23px;
            }
            .img-box {
                width: 1000px;
                display: flex;
                justify-content: space-between;
                flex-flow: wrap;
                img {
                    width: 220px;
                    height: 88px;
                }
            }
        }
    }
}
@media screen and (max-width:900px) {
    .mystery-boxes {
        width: 100%;
        height: 100%;
        .top-img {
            width: 100%;
            height: 50rem;
            background: url('../assets/myBox/min_top_bg.png') no-repeat center/100% 100%;
            .min-img {
                display: block;
                width: 2.74rem;
                position: absolute;
                bottom: 1rem;
                left: 50%;
                /* transform: translate(-50%， 0); */
            }
        }
        .content {
            width: 100%;
            padding: 0;
            padding-bottom: 2.36rem;
            background: url('../assets/myBox/box_bg1_min.png') no-repeat center;
            background-size: 100% 100%;
            .shop {
                width: 94%;
                flex-flow: column;
                align-items: center;
                .img-box {
                    width: 20rem;
                    height: 18.81rem;
                    .swiper-box {
                        width: 17rem;
                        height: 16.69rem;
                        overflow: hidden;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                .img-desc {
                    width: 100%;
                    text-align: left;
                    margin-top: 1rem;
                    .sale {
                        width: 100%;
                        font-size: .9rem;
                        line-height: 1.63rem;
                        letter-spacing: 1px;
                        .soon {
                            font-size: 0.75rem;
                            line-height: 0.88rem;
                            letter-spacing: 0;
                        }
                    }
                    .max {
                        width: 100%;
                        font-size: 1.94rem;
                        line-height: 2.25rem;
                        letter-spacing: 2px;
                        margin: 0.81rem 0 0.51rem;
                    }
                    .mint {
                        font-size: 1rem;
                        line-height: 1.5rem;
                        letter-spacing: 1px;
                    }
                    .price {
                        width: 100%;
                        height: 6rem;
                        margin-top: 1.38rem;
                        padding: 0;
                        border: 0.06rem solid #363636;
                        .swiper-box {
                            width: 5rem;
                            height: 5rem;
                            overflow: hidden;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .desc {
                            margin-right: 0.81rem;
                            font-size: 1rem;
                            line-height: 1.88rem;
                            .zuck {
                                font-size: 1.63rem;
                                line-height: 1.88rem;
                            }
                        }
                    }
                    .number {
                        width: 100%;
                        height: 3.94rem;
                        border: 0.06rem solid #363636;
                        border-top: 0;
                        div {
                            width: 3.88rem;
                            height: 100%;
                            font-size: 2rem;
                            line-height: 3.94rem;
                            letter-spacing: 2px;
                        }
                        input {
                            width: 14.56rem;
                            line-height: 3rem;
                            letter-spacing: 2px;
                            font-size: 2rem;
                            font-weight:bold;
                            
                        }
                    }
                    .total {
                        font-size: 1.13rem;
                        line-height: 1.88rem;
                        margin: .25rem 0 1.06rem;
                        .total-price {
                            font-size: 1.63rem;
                            line-height: 1.88rem;
                            letter-spacing: 2px;
                        }
                    }
                    .mint-btn {
                        height: 3.75rem;
                        font-size: 1.63rem;
                        line-height: 3.75rem;
                    }  
                }
            }
            .min-icon-box {
                display: block;
                width: 2.74rem;
                margin: 4.9rem auto 0;
                .min-icon {
                    width: 100%;
                }
            }
            .nav {
                width: 94%;
                margin: 2.13rem auto 0;
                font-size: .8rem;
                line-height: 1.5rem;
                display: flex;
                justify-content: space-between;
                div {
                    margin-right: 0;
                }
                .on {
                    padding-bottom: 0.625rem;
                    font-size: 1.2rem;
                    line-height: 1.5rem;
                    border-bottom: 0.19rem solid #06FEFE;
                }
            }
            .nav-view {
                width: 94%;
                margin: 3.31rem auto 2.75rem;
                .nav-img {
                    width: 90%;
                    margin: 0 auto 0;
                    flex-flow: wrap;
                    img {
                        width: 8rem;
                        height: 8.44rem;
                        margin-bottom: 3.31rem;
                    }
                }
                .value {
                    width: 90%;
                    margin: 0 auto 0;
                    font-size: 1rem;
                    line-height: 2.33rem;
                    font-weight: 600;
                    text-shadow: 0px 0px 10px #04ECFF;
                }
                .details {
                    width: 90%;
                    margin: 0 auto 0;
                    font-size: 1rem;
                    line-height: 2rem;
                    text-align: justify;
                }
                .series {
                    width: 100%;
                    margin: 0 auto 0;
                    table {
                        width: 100%;
                        font-size: .8rem;
                        font-family: SFPro-Regular, SFPro;
                        font-weight: 400;
                        color: #FFFFFF;
                        line-height: 1.5rem;
                        tr {
                            width: 100%;
                            height: 6.94rem;
                            border-bottom: 1px dashed #545454;
                        }
                    }
                    .tab-header {
                        height: 4rem;
                        background: #1A1A1A;
                        border-bottom: 0;
                    }
                    .tab-row {
                        font-size: 1rem;
                        .rank-row1 {
                            font-size: 1.2rem;
                        }
                        .rank-row2 {
                            font-size: 1.2rem;
                        }
                        .rank-row3 {
                            font-size: 1.2rem;
                        }
                        .rank-row4 {
                            font-size: 1.2rem;
                        }
                    }
                }
            }
            .nft-maxs {
                display: none;
            }
            .the-needs {
                width: 94%;
                margin: 3.19rem auto 0;
                display: flex;
                flex-flow: column;
                align-items: center;
                .title {
                    width: 16.38rem;
                    height: 4rem;
                    font-size: 1rem;
                    font-family: zcoolqingkehuangyouti-Regular, zcoolqingkehuangyouti;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 4rem;
                    text-shadow: 0px 0px 6px #04ECFF;
                    background: url('../assets/myBox/box_bg4.png') no-repeat center/100% 100%;
                }
                .func {
                    width: 90%;
                    margin: 1.19rem auto 1.38rem;
                    font-size: 1.5rem;
                    line-height: 2.63rem;
                    text-align: justify;
                }
                .img-box {
                    width: 100%;
                    display: flex;
                    justify-content: start;
                    flex-flow: wrap;
                    img {
                        width: 6.88rem;
                        height: 3.06rem;
                        margin-right: .4rem;
                        margin-bottom: 1rem;
                    }
                }
            }
        }
    }
}
</style>
