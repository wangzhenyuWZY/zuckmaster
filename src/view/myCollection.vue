<template>
    <div class="place" @mousedown="mouseDown">
        <Header />
        <div class="colPanel">
            <div class="content" v-if="saleList.length>0">
                <div v-for="item, index of saleList" :key="index" class="item-box" :class="index !== 0 && parseInt((index + 1) / 5) == parseFloat((index + 1) / 5)  ? '' : 'item-five'" @click="toDetails(item)">
                    <img :src="item.imgurl" alt="">
                    <div class="max-rank">
                        <div class="max">{{item.edition}} #{{ item.id }}</div>
                        <div class="rank">Rank: <span :class="item.rank === 'N' ? 'n' : item.rank === 'R' ? 'r' : item.rank === 'SR' ? 'sr' : item.rank === 'SSR' ? 'ssr' : ''">{{ item.rank }}</span></div>
                    </div>
                    <div class="btn" @click.stop="toSell(item.id)" v-show="!item.isSell">For sale</div>
                    <div class="btn" @click.stop="cancelNft(item.id)" v-show="item.isSell">Cancel Listing</div>
                    <div class="price" v-show="false">
                        <span>Price</span>
                        <span>{{ item.price }} <img class="" src="../assets/myBox/b_an.png" alt=""></span>
                    </div>
                    <div class="price" v-show="false">
                        <span>Last Price</span>
                        <span>{{ item.lastPrice }} <img src="../assets/myBox/b_an.png" alt=""></span>
                    </div>
                </div>
            </div>
            <div class="page" v-show="false">
                <el-pagination
                    v-model="currentPage"
                    :page-size="10"
                    layout="prev, pager, next"
                    :total="100"
                    :pager-count="5"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                >
                </el-pagination>
            </div>
        </div>    
        <Footer />
        <Pop :tokenId="curTokenId" v-if="showPop" @onClose='showPop = false'/>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    import Pop from './pop.vue'
    import { ElMessage } from 'element-plus'
    export default {
        name: 'ShowAll',
        components: { Header, Footer, Pop },
        data() {
            return {
                showPop:false,
                curTokenId:'',
                navFor: 1,
                priceShow: false,
                editionShow: false,
                rankShow: false,
                bgShow: false,
                priceVal: 'Price',
                editionVal: 'Edition',
                rankVal: 'Rank',
                bgVal: 'Backgound',

                priceList: [ 'Highest price', 'Lowest price' ],
                editionList: [ 'Crazy MAX', 'Mad MAx', 'King MAX', 'Mars MAx' ],
                rankList: [ 'N', 'R', 'SR', 'SSR' ],
                bgList: [ 'Farm', 'Earth', 'Moon', 'Mar' ],

                saleList: [
                ],

                currentPage: 1,
                defaultAccount:'',
                sellList:[]
            }
        },
        methods: {
            async getInfos(){
                let res = await this.$axios.get('/api/all/maskpolling')
                let sellRes = await this.$axios.get('/api/getSellListing/0/0/0/0/0')
                if(sellRes.status === 200){
                    this.sellList = sellRes.data
                }
                if(res.status === 200){
                    this.nftList = res.data
                    this.getMyCol()
                }
            },
            async getMyCol(){
                // 查询用户拥有的卡牌
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
                    const tokenId = this.utils.toHex(item.value.tokenId)
                    myRes.push(tokenId)
                }
                if(myRes){
                    myRes.forEach((item,index) => {
                        let cur = this.nftList[parseInt(item) - 1]
                        let selldata = this.sellList.filter((ktem)=>{
                            return ktem.id == item
                        })
                        if(selldata.length>0){
                            cur.isSell = true
                        }else{
                            cur.isSell = false
                        }
                        this.saleList.push(cur)
                        console.log(this.saleList)
                    })
                }
            },
            async cancelNft(id){
                let res = await this.$eth.c.zuckFactory.cancelListingNFT(id)
                await res.wait()
                ElMessage({
                    message: 'Success',
                    type: 'success',
                })
                this.getInfos()
            },
            toSell(id){
                this.showPop = true
                this.curTokenId = id
            },
            // 获取本地指定文件夹所有图片
            src (name) {
                if (name) {
                    const picture = import.meta.globEager(`../../assets/myBox/*`) // 选择文件夹
                    return picture[`../../assets/img/other/${name}.png`].default // 返回图片绝对路径
                }
            },
            openValue(type) {
                this[type] = true;
            },
            changePrice(index) {
                this.priceVal = this.priceList[index]
                this.priceShow = false
            },
            changeEdite(index) {
                this.editionVal = this.editionList[index]
                this.editionShow = false
            },
            changeRank(index) {
                this.rankVal = this.rankList[index]
                this.rankShow = false
            },
            changebBg(index) {
                this.bgVal = this.bgList[index]
                this.bgShow = false
            },
            mouseDown(e) {
                if (this.$refs.filter && e.target.contains(this.$refs.filter)) {
                    this.priceShow = false
                    this.editionShow = false
                    this.rankShow = false
                    this.bgShow = false
                }
            },
    
            changeNav(nav) {
                this.navFor = nav
                if (nav === 1) {
                    this.saleList = [
                        { max: '23', rank: 'R', price: 2.18, lastPrice: 2.18 },
                        { max: '23', rank: 'N', price: 2.18, lastPrice: 2.18 },
                        { max: '23', rank: 'SR', price: 2.18, lastPrice: 2.18 },
                        { max: '23', rank: 'SSR', price: 2.18, lastPrice: 2.18 },
                        { max: '23', rank: 'R', price: 2.18, lastPrice: 2.18 },
                        { max: '23', rank: 'R', price: 2.18, lastPrice: 2.18 },
                        { max: '23', rank: 'R', price: 2.18, lastPrice: 2.18 },
                        { max: '23', rank: 'R', price: 2.18, lastPrice: 2.18 },
                        { max: '23', rank: 'R', price: 2.18, lastPrice: 2.18 },
                        { max: '23', rank: 'R', price: 2.18, lastPrice: 2.18 },
                        { max: '23', rank: 'R', price: 2.18, lastPrice: 2.18 }
                    ]
                } else {
                    this.saleList = [
                        { max: '23', rank: 'R', price: 2.18, lastPrice: 2.18 },
                        { max: '23', rank: 'N', price: 2.18, lastPrice: 2.18 },
                        { max: '23', rank: 'SR', price: 2.18, lastPrice: 2.18 },
                        { max: '23', rank: 'SSR', price: 2.18, lastPrice: 2.18 },
                        { max: '23', rank: 'R', price: 2.18, lastPrice: 2.18 }
                    ]
                }

            },
            toDetails(item) {
                this.$router.push({ path: '/saleDetail', query: { item:JSON.stringify(item) }})
            },
            handleSizeChange() {},
            handleCurrentChange() {}
        },
        async created(){
            this.defaultAccount = await this.$eth.signer.getAddress()
            this.getInfos()
        }
    }
</script>

<style lang="less" scoped>
.place {
    width: 100%;
    padding-top: 140px;
    background: url('../assets/myBox/place_bg1.png') no-repeat center/100% 100%;
    .colPanel{
        min-height:60vh;
    }
    .search-item {
        width: 668px;
        height: 58px;
        margin: 0 auto 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 16px;
        border: 4px solid rgba(151, 151, 151, 0.25);
        .type-box {
            display: flex;
            text-align: center;
        }
        .type-num {
            width: 110px;
            height: 37px;
            border-right: 1px solid rgba(151, 151, 151, 0.25);
            color: #fff;
            .num {
                font-size: 18px;
                font-family: SFPro-Semibold, SFPro;
                font-weight: 600;
                color: #06FEFE;
                line-height: 21px;
                img {
                    width: 13px;
                    height: 13px;
                    margin-bottom: 5px;
                }
            }
        }
        .input-box {
            position: relative;
        }
        .icon {
            position: absolute;
            right: 20px;
            top: 5px;
            width: 25px;
            height: 25px;
        }
        .search-input {
            width: 222px;
            height: 38px;
            margin-right: 9px;
            padding: 0 38px 0 20px;
            flex: none;
            background: #FFFFFF;
            border-radius: 19px;
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 600;
            color: #000000;
            line-height: 38px;
        }
    }
    .nav {
        width: 566px;
        margin: 0 auto 40px;
        font-size: 24px;
        font-family: SFPro-Semibold, SFPro;
        font-weight: 600;
        color: #889FA1;
        line-height: 34px;
        .sales {
            margin: 20px 0 16px;
            text-align: center;
            color: #06FEFE;
        }
        .nav-box {
            width: 566px;
            height: 44px;
            background: rgba(0, 0, 0, 0.8);
            border-radius: 22px;
            border: 2px solid rgba(255, 255, 255, 0.21);
            border-radius: 22px;
            display: flex;
            div {
                width: 50%;
                text-align: center;
                line-height: 44px;
                cursor: pointer;
            }
            .left {
                background: #06FEFE;
                color: #000000;
                border-top-left-radius: 22px;
                border-bottom-left-radius: 22px;
            }
            .right {
                background: #06FEFE;
                color: #000000;
                border-top-right-radius: 22px;
                border-bottom-right-radius: 22px;
            }
        }
    }
    .select-box {
        width: 1200px;
        margin: 0 auto;
        .filter {
            text-align: left;
            margin-bottom: 15px;
            font-size: 20px;
            font-family: SFPro-Regular, SFPro;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 24px;
        }
        .select-input {
            width: 100%;
            display: flex;
            justify-content: space-between;
            .pt-re {
                position: relative;
            }
            .select {
                width: 248px;
                height: 53px;
                font-size: 16px;
                display: inline-block;
                font-family: SFPro-Semibold, SFPro;
                font-weight: 600;
                color: #FFFFFF;
                line-height: 19px;
                background: none;
                border: none;
                outline: none;
                padding: 0 20px;
                background: url('../assets/myBox/box_bg6.png') no-repeat center/105% 100%;
            }
            .list {
                width: 288px;
                overflow: hidden;
                position: absolute;
            }
            .list ul li{
                width: 92%;
                height: 50px;
                padding-left: 20px;
                cursor: pointer;
                line-height: 30px;
                background: #0D353A;
                font-size: 16px;
                font-family: SFPro-Semibold, SFPro;
                font-weight: 600;
                color: #FFFFFF;
                line-height: 50px;
                text-align: left;
                border: 1px solid #09A6A8;
            }
            .list ul li:hover {
                background-color: hsla(180, 99%, 51%, 0.8);
            }
        }   
    }

    .content {
        width: 1200px;
        min-height: 976px;
        margin: 54px auto 0;
        display: flex;
        flex-flow: wrap;
        justify-content: start;
        .item-five {
            margin-right: 44px;
        }
        .item-box {
            width: 174px;
            height: 267px;
            padding: 0 15px;
            margin-bottom: 51px;
            background: url('../assets/myBox/box_bg7.png') no-repeat center/100% 100%;
            font-size: 12px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #FFFFFF;
            line-height: 20px;
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            img {
                width: 174px;
                height: 105px;
                margin-top: 10px;
            }
            .max {
                margin: 7px 0;
                font-size: 14px
            }
            .rank {
                margin-bottom: 5px;
                .n {
                    font-size: 16px;
                    font-weight: 900;
                    color: #93B80A;
                }
                .r {
                    font-size: 16px;
                    font-weight: 900;
                    color: #E26D0E;
                }
                .sr {
                    font-size: 16px;
                    font-weight: 900;
                    color: #05B4DB;
                }
                .ssr {
                    font-size: 16px;
                    font-weight: 900;
                    color: #B42CE4;
                }
            }
            .btn {
                width: 100%;
                height: 28px;
                background: #06FEFE;
                box-shadow: 0px 2px 0px 0px rgba(43, 168, 25, 0.21);
                border-radius: 16px;
                font-size: 14px;
                line-height: 28px;
                color: #000000;
                cursor: pointer;
                text-align: center;
            }
            .price {
                width: 100%;
                margin-top: 5px;
                display: flex;
                justify-content: space-between;
                img {
                    width: 11px;
                    height: 11px;
                    margin-top: 0;
                }
            }
        }
    }

    .page {
        width: 490px;
        margin: 0px auto 50px;
    }
    .page /deep/ .el-pagination {
        text-align: center;
        background: #000000;
        border-radius: 22px;
        border: 1px solid rgba(6, 254, 254, 0.45);
        padding: 0 12px;
        &.btn-prev {
            background: #000000;
        }
    }
    .page /deep/ .btn-prev, .page /deep/ .btn-next {
        color: #fff;
        background: #000000;
        &:hover {
            color: hsla(180, 99%, 51%, 0.8);
        }
    }
    .page /deep/ .el-pager {
        color: #fff;
        li {
            background: #000000;
            &:hover {
                color: hsla(180, 99%, 51%, 0.8);
            }
        }
        .active {
            color: hsla(180, 99%, 51%, 0.8);
        }
    }
}

@media screen and (max-width: 1200px) {
    .place {
        padding-top: 4rem;
        background: url('../assets/myBox/place_bg1_min.png') no-repeat center/100% 100%;
        .search-item {
            width: 17.63rem;
            height: auto;
            flex-flow: column;
            background: none;
            border-radius: 0;
            border: 0;
            .type-box {
                width: 100%;
                display: flex;
                justify-content: space-around;
            }
            .type-num {
                width: 3.8rem;
                height: 2.19rem;
                border-right: 0;
                margin-bottom: 0.63rem;
                color: #fff;
                font-size: .8rem;
                .num {
                    font-size: 1.13rem;
                    line-height: 1.31rem;
                }
            }
            .input-box {
                position: relative;
            }
            .icon {
                position: absolute;
                right: 1.25rem;
                top: 5px;
                width: 1.63rem;
                height: 1.5rem;
            }
            .search-input {
                width: 17.63rem;
                height: 2.38rem;
                margin-right: 9px;
                padding: 0 2.375rem 0 1.25rem;
                flex: none;
                background: #FFFFFF;
                border-radius: 1.185rem;
                font-size: .875rem;
                line-height: 2.375rem;
            }
        }
        .nav {
            width: 12.15rem;
            margin: 1.25rem auto 1.63rem;
            font-size: 0.75rem;
            line-height: 0.88rem;
            .sales {
                display: none;
            }
            .nav-box {
                width: 12.15rem;
                height: 1.81rem;
                border-radius: 1.375rem;
                display: flex;
                div {
                    width: 50%;
                    line-height: 1.81rem;
                }
                .left {
                    border-top-left-radius: 22px;
                    border-bottom-left-radius: 22px;
                }
                .right {
                    border-top-right-radius: 22px;
                    border-bottom-right-radius: 22px;
                }
            }
        }
        .select-box {
            width: 94%;
            margin: 0 auto;
            .filter {
                text-align: left;
                margin-bottom: 0.31rem;
                font-size: 0.75rem;
                font-family: SFPro-Regular, SFPro;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 0.88rem;
                img {
                    width: .8rem;
                }
            }
            .select-input {
                width: 100%;
                display: flex;
                justify-content: space-between;
                .pt-re {
                    position: relative;
                }
                .select {
                    width: 4.2rem;
                    height: 2.19rem;
                    font-size: 0.75rem;
                    line-height: 0.88rem;
                    padding: 0 0.55rem;
                }
                .list {
                    width: 5.3rem;
                    overflow: hidden;
                    position: absolute;
                }
                .list ul li{
                    width: 5.1rem;
                    height: 2.19rem;
                    padding: 0;
                    text-align: center;
                    cursor: pointer;
                    line-height: 2.19rem;
                    background: #0D353A;
                    font-size: 0.75rem;
                }
                .list ul li:hover {
                    background-color: hsla(180, 99%, 51%, 0.8);
                }
            }   
        }

        .content {
            width: 94%;
            min-height: 61rem;
            margin: 1rem auto 0;
            display: flex;
            flex-flow: wrap;
            justify-content: space-between;
            .item-five {
                margin-right: 0;
            }
            .item-box {
                width: 43%;
                height: 14rem;
                padding: 0 .55rem;
                margin-bottom: .75rem;
                background: url('../assets/myBox/box_bg7.png') no-repeat center/100% 100%;
                font-size: 0.75rem;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 1.2rem;
                display: flex;
                flex-flow: column;
                justify-content: center;
                align-items: center;
                img {
                    width: 9rem;
                    height: 5.2rem;
                    margin-top: 0;
                }
                .max-rank {
                    width: 100%;
                    margin: 0.2rem 0;
                    display: flex;
                    justify-content: space-between;
                }
                .max {
                    margin: 0;
                    font-size: 0.75rem;
                }
                .rank {
                    margin-bottom: 5px;
                    .n {
                        font-size: 0.75rem;
                        font-weight: 900;
                        color: #93B80A;
                    }
                    .r {
                        font-size: 0.75rem;
                        font-weight: 900;
                        color: #E26D0E;
                    }
                    .sr {
                        font-size: 0.75rem;
                        font-weight: 900;
                        color: #05B4DB;
                    }
                    .ssr {
                        font-size: 0.75rem;
                        font-weight: 900;
                        color: #B42CE4;
                    }
                }
                .btn {
                    width: 100%;
                    height: 1.55rem;
                    font-size: 0.75rem;
                    line-height: 1.55rem;
                }
                .price {
                    width: 100%;
                    margin-top: 0.3rem;
                    display: flex;
                    justify-content: space-between;
                }
            }
        }

        .page {
            width: 94%;
            margin: 3.125rem auto 3.125rem;
        }
        .page /deep/ .el-pagination {
            border-radius: 22px;
        }
        .page /deep/ .btn-prev {
            width: 1rem;
            padding-right: 0.3rem;
        }
        .page /deep/ .btn-next {
            width: 1rem;
            padding-left: 0.3rem;
            &:hover {
                color: hsla(180, 99%, 51%, 0.8);
            }
        }
        .page /deep/ .el-pager {
            color: #fff;
            li {
                width: 1.1rem;
                height: 100%;
                background: #000000;
                &:hover {
                    color: hsla(180, 99%, 51%, 0.8);
                }
            }
            .active {
                color: hsla(180, 99%, 51%, 0.8);
            }
        }
    }
}
</style>
