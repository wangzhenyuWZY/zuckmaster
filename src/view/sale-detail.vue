<template>
    <div class="detail">
        <Header />
        <div class="content">
            <div class="back" @click="back"> &lt;&lt; Back to Market</div>
            <div class="info">
                <div class="img-box">
                    <img :src="saleData.imageurl" alt="">
                </div>
                <div class="info-cont">
                    <div class="max-rank">
                        <div class="max">{{saleData.edition}} #{{ saleData.tokenId }}</div>
                        <div class="rank">Rank：<span :class="saleData.rank === 'N' ? 'n' : saleData.rank === 'R' ? 'r' : saleData.rank === 'SR' ? 'sr' : saleData.rank === 'SSR' ? 'ssr' : ''">{{ saleData.rank }}</span></div>
                    </div>
                    <div class="btn-box" v-if="!isSell">
                        <div v-show="isMe" @click="showPop = true">For sale</div>
                    </div>
                    <div class="btn-box" v-if="isSell">
                        <div @click="cancelNft" v-show="isMe">Cancel Listing</div>
                        <div class="buy" v-show="!isMe" @click="buyNft">BUY</div>
                    </div>
                    <div class="price-desc">
                        <div class="price">{{saleData.bnbPrice}} BNB <img src="../assets/myBox/b_an.png" alt=""></div>
                        <div class="desc">
                            Zuckerberg's MAX series will include Crazy MAX,Mad MAX ,King MAX  and Mars MAX.Their rank is N, R, SR and SSR . Each N, R, SR and SSR used to offset  single transaction tax and ZUCKSwap'fee dividend and also Get dividends from ZUCK Mammon.
                        </div>
                    </div>
                    <div class="chain">Blockchain Details</div>
                    <div class="contract">
                        Contract Address :{{contract}}
                        <br>Token ID :{{ saleData.tokenId }}
                        <br>Blockchain:Binance Smart Chain
                    </div>
                    <div class="history">
                        <div class="title">History</div>
                        <div class="hiy-info">
                            <div>
                                <span class="type">MintedBy</span>
                                <span class="para">0X5968…00bFG</span>
                            </div>
                            <div>
                                <span class="type">CurrentOwner</span>
                                <span class="para">0X5968…00bFG</span>
                            </div>
                            <div>
                                <span class="type">Last Price</span>
                                <span class="last-price">1.5 BNB <img src="../assets/myBox/b_an.png" alt=""></span>
                            </div>
                            <!-- <div>
                                <span class="type">Transfers</span>
                                <span class="transfers">1</span>
                            </div> -->
                            <div>
                                <span class="type">Sale Status</span>
                                <span class="sale-status">For sale</span>
                            </div>
                            <div>
                                <span class="type">Listing Price</span>
                                <span class="last-price">1.5 BNB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        <Pop :tokenId="saleData.id" v-if="showPop" @onClose='showPop = false' @sellSuc="sellSuc"/>
        <!-- <div class="dialog-box">
            <el-dialog
                v-model="dialog"
                title="List for sell"
                :show-close="false"
                :before-close="handleClose"
            >
                <div>
                    <div class="text">Price</div>
                    <input v-model="priceVal" type="text">
                    <div class="text-in">Now, you will list your MAX.</div>
                    <div class="bnb">
                        <span>You Get</span>
                        <span class="bnb-price">1.5 BNB</span>
                    </div>
                </div>
                <template #footer>
                <span class="dialog-footer">
                    <el-button type="primary" @click="handleClose"
                    >Post your Listing</el-button
                    >
                </span>
                </template>
            </el-dialog>
        </div> -->
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    import { defineComponent, ref } from 'vue'
    import { ElMessage } from 'element-plus'
    import Pop from './pop.vue'
    import BigNumber from 'bignumber.js'
    export default {
        name: 'saleDetail',
        components: { Header, Footer, Pop },
        data() {
            return {
                saleData: {},
                defaultAccount:'',
                dialog: false,
                priceVal: '',
                isMe:false,
                isSell:false,
                contract:null,
                showPop:false,
                buyprice:0
            }
        },
        methods: {
            back() {
                this.$router.go(-1)
            },

            openDialog() {
                this.dialog = true
            },
            handleClose() {
                this.priceVal = ''
                this.dialog = false
            },
            sellSuc(){
                this.getMyCol()
            },
            async getMyCol(){
                this.myRes = []
                let balance = await this.$eth.c.zuckNft.balanceOf(this.defaultAccount)
                balance = parseInt(balance)
                if (!balance) return
                const promises = []
                for (let i = 0; i < balance; i++) {
                    const p = async () => {
                        let tokenId = await this.$eth.c.zuckNft.tokenOfOwnerByIndex(this.defaultAccount, i)
                        return { tokenId }
                    }
                    promises.push(p())
                }
                const res = await Promise.allSettled(promises)
                let myRes = []
                for (let item of res) {
                    // console.log(item)
                    if (item.status !== 'fulfilled') continue
                    const tokenId = parseInt(item.value.tokenId)
                    myRes.push(tokenId)
                }
                if(myRes){
                    let thiscol = myRes.filter((item) => {
                        return parseInt(item) == this.saleData.tokenId
                    })
                    if(thiscol.length>0){
                        this.isMe = true
                    }
                }
                let sellRes = await this.$axios.get('/api/getsellListing/showall/0/editon/0/rank/0/price/0/background/0/page/0')
                if(sellRes.status === 200){
                    let thiscol = sellRes.data.filter((item)=>{
                        return item.tokenId == this.saleData.tokenId
                    })
                    if(thiscol.length>0){
                        this.isSell = true
                    }
                }
            },
            async cancelNft(){
                let res = await this.$eth.c.zuckFactory.cancelListingNFT(this.saleData.tokenId)
                await res.wait()
                this.$emit('onClose')
                ElMessage({
                    message: 'Success',
                    type: 'success',
                })
                this.getMyCol()
            },
            async buyNft(){
                // if(this.isApproved){
                    // let price = this.$eth.utils.parseEther(this.buyprice)
                    // console.log(price)
                    let price = new BigNumber(this.buyprice)
                    price = price.times(Math.pow(10,18))
                    price = price.plus(1)
                    let res = await this.$eth.c.zuckFactory.purchaseNFT(this.saleData.tokenId,{value:price.toFixed()})
                    await res.wait()
                    this.$emit('onClose')
                    ElMessage({
                        message: 'Success',
                        type: 'success',
                    })
                    this.getMyCol()
                    this.$router.push('/myCollection')
                // }else{
                //     let res = await this.$eth.c.zuckToken.approve(this.$eth.c.zuckFactory.address, '100000000000000000000000000000000000000000000000')
                //     await res.wait()
                //     this.isApproved = true
                // }
            }
        },
        async created () {
            this.defaultAccount = await this.$eth.signer.getAddress()
            this.saleData = JSON.parse(this.$route.query.item);
            this.getMyCol()
            this.contract = this.$eth.c.zuckFactory.address
            console.log(this.saleData.edition)
        },
    }
</script>

<style lang="less" scoped>
.detail {
    text-align: left;
    padding-top: 88px;
    background: url('../assets/myBox/det_bg.jpg') no-repeat center/100% 100%;
    .content {
        width: 1200px;
        margin: 0 auto 65px;
        .back {
            width: 203px;
            height: 58px;
            margin: 45px 0 34px;
            background: #1D1D1D;
            border-radius: 0.63rem;
            font-size: 16px;
            font-family: SFPro-Semibold, SFPro;
            font-weight: 600;
            color: #FFFFFF;
            line-height: 58px;
            text-align: center;
            cursor: pointer;
        }
        .info {
            display: flex;
            .img-box {
                width: 495px;
                height: 598px;
                flex: none;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .info-cont {
                flex: none;
                width: 668px;
                margin-left: 49px;
                font-family: PingFangSC-Semibold, PingFang SC;
                .max-rank {
                    .max {
                        font-size: 26px;
                        line-height: 37px;
                        font-weight: 600;
                        color: #06FEFE;
                        text-align: left;
                    }
                    .rank {
                        font-size: 20px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #FFFFFF;
                        line-height: 28px;
                        text-align: left;
                        .n {
                            font-size: 24px;
                            font-weight: 900;
                            color: #93B80A;
                        }
                        .r {
                            font-size: 24px;
                            font-weight: 900;
                            color: #E26D0E;
                        }
                        .sr {
                            font-size: 24px;
                            font-weight: 900;
                            color: #05B4DB;
                        }
                        .ssr {
                            font-size: 24px;
                            font-weight: 900;
                            color: #B42CE4;
                        }
                    }
                }
                .btn-box {
                    display: flex;
                    margin-top: 20px;
                    font-size: 14px;
                    font-family: SFPro-Bold, SFPro;
                    font-weight: bold;
                    color: #000000;
                    line-height: 36px;
                    div {
                        width: 211px;
                        height: 36px;
                        background: #06FEFE;
                        border-radius: 18px;
                        margin-right: 20px;
                        text-align: center;
                        cursor: pointer;
                    }
                    .buy {
                        background-color: #DCDCDC;
                    }
                }
                .price-desc {
                    width: 656px;
                    margin-top: 22px;
                    .price {
                        font-size: 20px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #FFB800;
                        line-height: 28px;
                        img {
                            width: 15px;
                            height: 14px;
                            margin-bottom: 3px;
                        }
                    }
                    .desc {
                        font-size: 16px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #FFFFFF;
                        line-height: 30px;
                    }
                }
                .chain {
                    width: 100%;
                    height: 51px;
                    background: url('../assets/myBox/dace_bg1.png') no-repeat center/100% 100%;
                    font-size: 28px;
                    font-family: zcoolqingkehuangyouti-Regular, zcoolqingkehuangyouti;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 51px;
                    padding-left: 18px;
                }
                .contract {
                    margin-top: 20px;
                    margin-left: 24px;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 30px;
                }
                .history {
                    margin-top: 22px;
                    margin-left: 24px;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 30px;
                    .title {
                        margin-bottom: 7px;
                        font-size: 20px;
                        font-weight: 400;                        
                        color: #06FEFE;
                    }
                    .hiy-info {
                        width: 638px;
                        height: auto;
                        padding: 15px 0 15px 22px;
                        background: rgba(0, 0, 0, 0.5);
                        font-size: 12px;
                        .type {
                            width: 154px;
                            display: inline-block;
                        }
                        .para {
                            height: 30px;
                            padding: 0 32px;
                            background: #3B3B3B;
                            border-radius: 10px;
                            color: #FFFFFF;
                        }
                        .last-price {
                            height: 30px;
                            padding: 0 7px;
                            color: #FFB800;
                            background: #3B3B3B;
                            border-radius: 10px;
                            img {
                                width: 10px;
                                height: 10px;
                                margin-bottom: 3px;
                            }
                        }
                        .transfers {
                            color: #06FEFE;
                        }
                        .sale-status {
                            height: 40px;
                            line-height: 40px;
                            padding: 0 20px;
                            font-family: SFPro-Bold, SFPro;
                            font-weight: bold;
                            color: #000000;
                            background: #06FEFE;
                            border-radius: 10px;
                        }
                    }
                }
            }
        }
    }

    .dialog-box /deep/ .el-dialog {
        background-color: #232323;
        width: 25% !important;
    }
    .dialog-box {
        .text {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #C1C1C1;
            line-height: 20px;
        }
        .text-in {
            margin-bottom: 30px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #5D7578;
            line-height: 20px;
        }
        input {
            width: 100%;
            height: 36px;
            border-radius: 6px;
            text-indent: 10px;
            font-size: 16px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            line-height: 20px;
        }
        .bnb {
            border-top: 1px solid #353535;
            border-bottom: 1px solid #353535;
            background-color: #232323;
            font-size: 12px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #5D7578;
            line-height: 36px;
            padding: 6px 0;
            display: flex;
            justify-content: space-between;
            .bnb-price {
                color: #FFB800;
            }
        }
    }
    .dialog-box /deep/ .el-dialog__header {
        font-size: 16px;
        font-family: SFPro-Bold, SFPro;
        font-weight: bold;
        line-height: 19px;
        .el-dialog__title {
            color: #C1C1C1;
        }
    }
    .dialog-box /deep/ .el-dialog__footer {
        text-align: center;
        .el-button {
            width: 211px;
            height: 36px;
            background: #06FEFE;
            border-radius: 18px;
            border: none;
            font-size: 14px;
            font-family: SFPro-Bold, SFPro;
            font-weight: bold;
            color: #000000;
            line-height: 16px;
        }
    }
    
}
@media screen and (max-width: 1200px) {
    .detail {
        text-align: left;
        padding-top: 3.75rem;
        background: url('../assets/myBox/det_bg_min.png') no-repeat center/100% 100%;
        .content {
            width: 90%;
            margin: 0 auto 4rem;
            .back {
                width: 100%;
                height: 0.94rem;
                margin: 1.13rem 0 0.88rem;
                background: none;
                border-radius: 0.63rem;
                font-size: 0.81rem;
                line-height: 0.94rem;
                text-align: left;
                font-weight: 400;
            }
            .info {
                width: 100%;
                display: flex;
                flex-flow: column;
                .img-box {
                    width: 100%;
                    height: 13.81rem;
                    flex: none;
                    background: url('../assets/myBox/detail_img_min.png') no-repeat center/100% 100%;
                    img {
                        display: none;
                    }
                }
                .info-cont {
                    flex: none;
                    width: 100%;
                    margin-left: 0;
                    .max-rank {
                        display: flex;
                        align-items: end;
                        justify-content: space-between;
                        .max {
                            font-size: 1.63rem;
                            line-height: 2.31rem;
                            margin-top: 0.38rem;
                            font-weight: 600;
                        }
                        .rank {
                            font-size: 1rem;
                            line-height: 2.31rem;
                            .n {
                                font-size: 1.63rem;
                            }
                            .r {
                                font-size: 1.63rem;
                            }
                            .sr {
                                font-size: 1.63rem;
                            }
                            .ssr {
                                font-size: 1.63rem;
                            }
                        }
                    }
                    .btn-box {
                        display: flex;
                        margin-top: 0.44rem;
                        font-size: 0.88rem;
                        font-family: SFPro-Bold, SFPro;
                        font-weight: bold;
                        color: #000000;
                        line-height: 2.09rem;
                        div {
                            width: 8.8rem;
                            height: 2.09rem;
                            margin-right: 1rem;
                        }
                    }
                    .price-desc {
                        width: 100%;
                        margin-top: 0.5rem;
                        .price {
                            font-size: 1.25rem;
                            line-height: 1.75rem;
                            img {
                                width: 1.25rem;
                                height: 1.31rem;
                                margin-bottom: 0.18rem;
                            }
                        }
                        .desc {
                            font-size: 0.88rem;
                            line-height: 1.38rem;
                            text-align: justify;
                        }
                    }
                    .chain {
                        width: 100%;
                        height: 2.56rem;
                        margin-top: 0.8rem;
                        font-size: 1rem;
                        line-height: 2.56rem;
                        padding-left: 0.81rem;
                    }
                    .contract {
                        margin-top: 0.25rem;
                        margin-left: 0.31rem;
                        font-size: 0.88rem;
                        line-height: 1.38rem;
                    }
                    .history {
                        margin-top: 0.5rem;
                        margin-left: 0.31rem;
                        font-size: 0.88rem;
                        line-height: 1.88rem;
                        .title {
                            margin-bottom: 0.13rem;
                            font-size: 1.25rem;
                        }
                        .hiy-info {
                            width: 96%;
                            height: auto;
                            padding: .44rem 0 0 1.25rem;
                            font-size: 0.75rem;
                            .type {
                                width: 8.5rem;
                                display: inline-block;
                            }
                            .para {
                                height: 1.25rem;
                                padding: 0 0.88rem;
                            }
                            .last-price {
                                height: 1.25rem;
                                padding: 0 7px;
                                img {
                                    width: 0.63rem;
                                    height: 0.63rem;
                                    margin-bottom: 3px;
                                }
                            }
                            .transfers {
                                padding-left: 0.44rem;
                                color: #06FEFE;
                            }
                            .sale-status {
                                width: 4.47rem;
                                height: 1.5rem;
                                line-height: 1.5rem;
                                padding: 0 1rem;
                            }
                        }
                    }
                }
            }
        }

        .dialog-box /deep/ .el-dialog {
            background-color: #232323;
            width: 90% !important;
        }
    }
}
</style>
