<template>
  <div class="popWrap" @click="closePop">
    <div class="popInner" @click.stop>
      <h2 class="title">List for sell</h2>
      <div class="pricebox">
        <p class="puttitle">Price</p>
        <input v-model="price">
        <p class="pricetip">Now, you will list your MAX.</p>
      </div>
      <div class="willget">
        <span class="left">You Get</span>
        <span class="right">{{price}} BNB</span>
      </div>
      <el-button class="btn" @click="sellNft" :loading="isDoing" :disabled="isDoing">{{isApprovedForAll?'Post your Listing':'Approve'}}</el-button>
    </div>
  </div>
</template>
<script>
import { ElMessage } from 'element-plus'
export default {
  name: 'Home',
  props: {
      tokenId: {
          type: String,
          default: ''
      }
  },
  data() {
    return {
      defaultAccount:'',
      price:'',
      isDoing:false,
      isApprovedForAll:false,
      bnbBalance:0
    }
  },
  methods: {
    async getInfo(){
      this.isApprovedForAll = await this.$eth.c.zuckNft.isApprovedForAll(this.defaultAccount, this.$eth.c.zuckFactory.address)
      // let isApproved = await this.$eth.c.zuckToken.allowance(this.defaultAccount, this.$eth.c.zuckFactory.address)
      // if(parseInt(isApproved)){
      //   this.isApproved = true
      // }
      let buyprice = await this.$eth.c.zuckFactory.getListingNFTPrice(this.tokenId)
      this.buyprice = this.$eth.utils.formatEther(buyprice)
      console.log(this.buyprice)
    },
    async sellNft(){
      if(!this.price){
        ElMessage({
            message: 'Please enter the price',
            type: 'error',
        })
        return
      }
      this.isDoing = true
      if(this.isApprovedForAll){
        try{
          let res = await this.$eth.c.zuckFactory.addListingNFT(this.tokenId,this.$eth.utils.parseEther(String(this.price)))
          await res.wait()
          this.$emit('onClose')
          ElMessage({
              message: 'Success',
              type: 'success',
          })
          this.isDoing = false
          this.$emit('sellSuc')
        }catch{
          this.isDoing = false
        }
      }else{
        try{
          let res = await this.$eth.c.zuckNft.setApprovalForAll(this.$eth.c.zuckFactory.address, true)
          await res.wait()
          this.isApprovedForAll = true
          this.isDoing = false
        }catch{
          this.isDoing = false
        }
      }
    },
    closePop(){
      this.$emit('onClose')
    }
  },
  async created(){
    console.log(this.$eth.signer)
    this.defaultAccount = await this.$eth.signer.getAddress()
    this.getInfo();
  },
  mounted(){
    
  }
}
</script>
<style lang="less" scoped>
.popWrap{
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
  background:rgba(0,0,0,0.6);
  .popInner{
    position:absolute;
    top:10%;
    left:50%;
    width:360px;
    margin-left:-180px;
    background:#232323;
    padding:16px 20px;
    box-sizing: border-box;
    .title{
      font-size:16px;
      color:#C1C1C1;
      line-height:100%;
      font-weight:bold;
      text-transform: uppercase;
      padding-bottom:30px;
    }
    .pricebox{
      .puttitle{
        font-size:14px;
        color:#C1C1C1;
        line-height:100%;
      }
      input{
        width:100%;
        height:36px;
        border:none;
        background:#fff;
        border-radius:6px;
        margin-bottom:4px;
        text-indent:10px;
        font-size:14px;
        color:#000000;
        line-height:36px;
      }
      .pricetip{
        font-size:12px;
        color:#5D7578;
        line-height:100%;
        padding-top:4px;
      }
    }
    .willget{
      margin:30px 0 50px;
      padding:6px 0;
      border-top:1px solid #353535;
      border-bottom:1px solid #353535;
      display:flex;
      justify-content: space-between;
      .left{
        font-size:12px;
        color:#5D7578;
        line-height:20px;
        font-weight:600;
      }
      .right{
        font-size:12px;
        color:#FFB800;
        line-height:20px;
      }
    }
    .btn{
      width:210px;
      height:36px;
      background:#06FEFE;
      border-radius:18px;
      margin:0 auto;
      display: block;
      border:none;
      outline: none;
      padding:0;
      min-height:0;
      font-weight: bold;
    }
  }
}
</style>