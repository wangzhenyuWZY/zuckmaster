<template>
  <div class="homeContainer">
    <div class="banner">
      <img src="../assets/home_banner.png">
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
    <div class="mintPanel">
      <div class="basiCon mintCon">
        <div class="bigImg">
            <img class="" src="../assets/home_zuck.gif" alt="">
          <!-- <div class="swiper-box">
              <div class="swiper-container">
                  <div class="swiper-wrapper">
                      <div class="swiper-slide">
                          <img class="" src="../assets/home_zuck.gif" alt="">
                      </div>
                  </div>
              </div>
          </div> -->
        </div>
        <div class="img-desc">
          <div class="sale">MINT YOUR MAX <span class="soon">COMING SOON</span></div>
            <!-- <div class="max">CLAIM YOUR MAX</div> -->
            <div class="mint">
                Enter how many MAXs you would like to mint here
                <br>MAX minted: {{mintNum}} / 1,000
            </div>
            <div class="price">
                <div class="swiper-box-min">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img class="" src="../assets/home_zuck.gif" alt="">
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
            <el-button class="mint-btn" @click="checkMint" :loading="isDoing" :disabled="isDoing">{{isApproved?'Mint Now':'Approve Zuck'}}</el-button>
            <!-- <el-button class="mint-btn" @click="checkMint" :loading="isDoing" :disabled="isDoing">Mint Now</el-button> -->
        </div>
      </div>
      <div class="titleBox">
        <h2>TOKENOMICS</h2>
        <p><span>8%</span> TRANSACTION TAX</p>
      </div>
    </div>
    <div class="tokenomicsPanel">
        <div class="basiCon tokenCon">
            <div class="tokenItem">
                <div class="percen"><span>3%</span></div>
                <div class="wrap">
                    <h2 class="tokenTitle">Marketing and Brand</h2>
                    <p class="tokenInfo">3% of all transactions are used for marketing expenses to establish the project more globally</p>
                </div>
            </div>
            <div class="tokenItem">
                <div class="percen"><span>2%</span></div>
                <h2 class="tokenTitle">Redistributions</h2>
                <p class="tokenInfo">2% fee of each transaction (sell/buy) is redistributed to ZUCK holders.</p>
            </div>
            <div class="tokenItem">
                <div class="percen"><span>3%</span></div>
                <h2 class="tokenTitle">Auto Liquidity Pool </h2>
                <p class="tokenInfo">3% of all transactions will be added to liquidity to create an ever-increasing price floor</p>
            </div>
            <div class="tokenItem">
                <div class="tokenImg"><img src="../assets/home_tokenImg1.png"></div>
                <h2 class="zuckTitle">$ZUCK  Meta</h2>
                <p class="zuckTokenInfo">Total Supply:1,000,000,000,000</p>
                <div class="distribute">
                    <div class="disItem">
                        <div class="percen"><div class="perInner"><span>47<a>%</a></span></div></div>
                        <p class="disInfo">Presale IDO</p>
                    </div>
                    <div class="disItem">
                        <div class="percen"><div class="perInner"><span>33<a>%</a></span></div></div>
                        <p class="disInfo">Initial Liquidity Pool</p>
                    </div>
                    <div class="disItem">
                        <div class="percen"><div class="perInner"><span>3<a>%</a></span></div></div>
                        <p class="disInfo">ZuckSwap</p>
                    </div>
                    <div class="disItem">
                        <div class="percen"><div class="perInner"><span>15<a>%</a></span></div></div>
                        <p class="disInfo">ZUCK DAO</p>
                    </div>
                    <div class="disItem">
                        <div class="percen"><div class="perInner"><span>2<a>%</a></span></div></div>
                        <p class="disInfo">ZUCK Mammon</p>
                    </div>
                </div>
            </div>
            <div class="tokenItem">
                <div class="tokenImg"><img src="../assets/home_tokenImg2.png"></div>
                <h2 class="zuckTitle">LIQUIDITY LOCKED</h2>
                <p class="zuckTokenInfo">50 YEAR VIA PINKSALE</p>
                <a class="proofBtn"><img src="../assets/home_proof.png"></a>
            </div>
            <div class="tokenItem">
                <div class="tokenImg"><img src="../assets/home_tokenImg3.png"></div>
                <h2 class="zuckTitle">ZUCK DAO</h2>
                <p class="zuckTokenInfo">15% of the $ZUCK tokens have been allocated to theZUCKDAO to:</p>
                <p class="support">Support DAO communities
                    <br>Support NFT communities
                    <br>Support ZUCK brand building
                    <br>Support our Developer Grant for participating in the $ZUCK ecosystem</p>
            </div>
        </div>
    </div>
    <div class="whyZuckPanel">
        <div class="basiCon whyZuckCon">
            <div class="titleBox">
                <h2>WHY zuck ?</h2>
            </div>
            <p class="whyZuck">
                In the world of Crypto, meme coins are the best way to catch the attention of the mainstream. We felt the best way to brand our project to gain the most amount of eyes and in doing so, help the most amount of metaverse user was to make it something similar to #DOGE & #SHIB which caught huge mainstream attention. What better fit than Zuckerberg, the founder of META –explorers of the metaverse and of course he is also deeply involved in the ZUCKcommunity. This way, we have the attention of the meme coin investors as well as the ZUCK community to create one giant combined positive community involving ZUCK, meme coins & the legend that is Zuckerberg.ZuckMeta is the first Zuckerberg's meme,and it is an open-world metaverse.Zuckerberg's favorite crypto pet is a goat named Max，we have created 10000  Max that exist in NFT form.
            </p>
        </div>
    </div>
    <div class="maxNftPanel">
        <div class="basiCon maxNftCon">
            <div class="maxInfo">
                <h2 class="maxTitle">Max, max, max!</h2>
                <p class="maxInfoText bigfont">The MAX NFT</p>
                <p class="maxInfoText">Till now, many NFTs have been created for reasons such as hype and have only been created as art and a picture in hopes they become valuable. MAX NFT are built to be valuable. Only 10,000 born，sold in 10 rounds, and all of ZUCKs in each round will be destroyed in batches.
                    <br><br>
                    What can a MAX NFT do?
                    1. Reduce ZUCK single transaction tax slippage
                    2. Obtain ZUCKSWAP's fee dividend privilege
                    3. Obtain the governance privileges of ZUCKDAO
                    4. Get dividends from ZUCK Mammon</p>
            </div>
            <div class="maxImgList">
                <div class="maxImgItem"><img src="../assets/home_nftBigImg1.png"></div>
                <div class="maxImgItem"><img src="../assets/home_nftBigImg1.png"></div>
                <div class="maxImgItem"><img src="../assets/home_nftBigImg1.png"></div>
                <div class="maxImgItem"><img src="../assets/home_nftBigImg1.png"></div>
                <div class="maxImgItem"><img src="../assets/home_nftBigImg1.png"></div>
                <div class="maxImgItem"><img src="../assets/home_nftBigImg1.png"></div>
                <div class="maxImgItem"><img src="../assets/home_nftBigImg1.png"></div>
                <div class="maxImgItem"><img src="../assets/home_nftBigImg1.png"></div>
                <div class="maxImgItem"><img src="../assets/home_nftBigImg1.png"></div>
            </div>
        </div>
    </div>
    <div class="metaversePanel">
        <div class="basiCon metaCon">
            <div class="titleBox">
                <h2>ZUCK Metaverse</h2>
                <p>If you can do it in the real world <br>you can do it in the Metaverse</p>
            </div>
            <div class="videoBox">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5TJ5ENxCUQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
    <div class="ecosyPanel">
        <div class="basiCon ecosyCon">
            <div class="ecosyList">
                <div class="ecosyItem">
                    <div class="ecoTitle"><p>ZUCK MEME</p></div>
                    <p class="ecoText">The First Zuckerberg's MEME. <br>ZUCK's meme culture is strong.</p>
                </div>
                <div class="ecosyItem">
                    <div class="ecoTitle"><p>ZUCK DAO</p></div>
                    <p class="ecoText">The First DAO on the BNB CHAIN.<br>ZUCK’s DAO community is strong.</p>
                </div>
                <div class="ecosyItem">
                    <div class="ecoTitle"><p>ZUCK NFT</p></div>
                    <p class="ecoText">ZUCK's soon-to-launch NFT  will let you trade NFTs  with crypto.<br>NFT holders have a lot of ZUCK ecological rights.</p>
                </div>
            </div>
            <p class="panelTitle">THE ZUCK ECOSYSTEM</p>
            <div class="ecosyList">
                <div class="ecosyItem">
                    <div class="ecoTitle"><p>ZUCK SWAP</p> </div>
                    <p class="ecoText">We are committed to building a simple, friendly, and open  Metaverse Tokens trading platform for everyone.</p>
                </div>
                <div class="ecosyItem">
                    <div class="ecoTitle"><p>ZUCK GAME</p></div>
                    <p class="ecoText">ZUCK's PlayToEarn NFT Metaverse game will feature A-level game mechanics on the blockchain and upgradeable NFTs.</p>
                </div>
                <div class="ecosyItem">
                    <div class="ecoTitle"><p>ZUCK SOCIAl</p> </div>
                    <p class="ecoText">Building a SocialFi Metaverse The First Social Trading Network on Web3.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="teamPanel">
        <div class="basiCon teamCon">
            <div class="titleBox">
                <h2>ZUCK Metaverse</h2>
            </div>
            <div class="teamList">
                <div class="teamItem">
                    <img src="../assets/home_team1.png">
                    <p class="name">Amos </p>
                    <p class="job">concept artist, illustration, scripts</p>
                </div>
                <div class="teamItem">
                    <img src="../assets/home_team2.png">
                    <p class="name">Mark Elliot</p>
                    <p class="job">marketing, community, outreach</p>
                </div>
                <div class="teamItem">
                    <img src="../assets/home_team3.png">
                    <p class="name">Esteban Ordano</p>
                    <p class="job">goat enthusiast, community, support</p>
                </div>
            </div>
        </div>
    </div>
    <div class="roadMapPanel">
        <div class="basiCon roadmapCon">
            <div class="titleBox">
                <h2>DEVELOPMENT ROADMAP</h2>
            </div>
            <div class="roadmapBox">
                <div class="line"></div>
                <div class="roadmapList">
                    <div class="roadmapItem">
                        <div class="mapInfo">
                            <h2>2021 Q4</h2>
                            <p>Conceptualisation And Team Assembly</p> 
                        </div>
                        <i></i>    
                    </div>
                    <div class="roadmapItem">
                        <i></i>
                        <div class="mapInfo">
                            <h2>2022 Q1</h2>
                            <p>Whitepaper, Homepage Open</p> 
                        </div>
                    </div>
                    <div class="roadmapItem">
                        <div class="mapInfo">
                            <h2>2022 Q2</h2>
                            <p>ZUCKDAO Community Launch</p> 
                        </div>
                        <i></i>    
                    </div>
                    <div class="roadmapItem">
                        <i></i> 
                        <div class="mapInfo">
                            <h2>2022 Q3</h2>
                            <p>NFT Application Launch</p> 
                        </div>
                    </div>
                    <div class="roadmapItem">
                        <div class="mapInfo">
                            <h2>2022 Q4</h2>
                            <p>ZUCKSwap Launch</p> 
                        </div>
                        <i></i>    
                    </div>
                    <div class="roadmapItem">
                        <i></i> 
                        <div class="mapInfo">
                            <h2>2023 Q1-Q2</h2>
                            <p>ZUCK Metaverse  Game</p> 
                        </div>
                    </div>
                    <div class="roadmapItem">
                        <div class="mapInfo">
                            <h2>2023 Q4</h2>
                            <p>ZUCK Metaverse Social </p> 
                        </div>
                        <i></i>    
                    </div>
                </div>
            </div>
            <div class="partnerBox">
                <div class="partnerImg"><img src="../assets/home_partner1.png"></div>
                <div class="partnerImg"><img src="../assets/home_partner2.png"></div>
                <div class="partnerImg"><img src="../assets/home_partner3.png"></div>
                <div class="partnerImg"><img src="../assets/home_partner4.png"></div>
                <div class="partnerImg"><img src="../assets/home_partner5.png"></div>
                <div class="partnerImg"><img src="../assets/home_partner6.png"></div>
                <div class="partnerImg"><img src="../assets/home_partner7.png"></div>
                <div class="partnerImg"><img src="../assets/home_partner8.png"></div>
            </div>
            <div class="footerBox">
                <div class="logo"><img src="../assets/logo.png"></div>
                <div class="copyright">
                    <img src="../assets/home_foot1.png">
                    <img src="../assets/home_foot2.png">
                </div>
                <div class="footLink">
                    <a><img src="../assets/home_link1.png"></a>
                    <a><img src="../assets/home_link2.png"></a>
                    <a><img src="../assets/home_link3.png"></a>
                    <a><img src="../assets/home_link4.png"></a>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
 @font-face { // 正常
    font-family: STSongti-TC-Regular; 
    src:url('../assets/AnyConv.com__STSongti-TC-Regular.otf');
}
.homeContainer{
    font-family: STSongti-TC-Regular, STSongti-TC;
  .basiCon{
    width:1250px;
    margin:0 auto;
  }
  .titleBox{
    text-align:center;
    padding:26px 0 35px;
    h2{
      font-family: STSongti-TC-Regular, STSongti-TC;
      line-height:100%;
      color: #FCDAFF;
      background: linear-gradient(90deg, #EF2AFE 0%, #6E33FD 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
      font-size: 70px;
    }
    p{
        font-size:36px;
        color:#FCDAFF;
        line-height:100%;
        padding-top:20px;
        span{
            font-size:48px;
            font-weight:bold;
        }
    }
  }
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
  .mintPanel{
    background:url(../assets/home_bg2.png) no-repeat center;
    background-size:100% 100%;
    padding-bottom:30px;
    .mintCon{
      display:flex;
      justify-content: space-between;
      align-items: flex-start;
      padding-bottom:240px;
      .bigImg{
          width:476px;
          height:476px;
          img{
              width:100%;
              height:100%;
          }
      }
      .img-desc {
          text-align: left;
          width:595px;
          .sale {
              font-size: 46px;
              font-family: STSongti-TC-Regular, STSongti-TC;
              font-weight: bold;
              color: #FFFFFF;
              line-height: 100%;
              background: linear-gradient(90deg, #EF2AFE 0%, #6E33FD 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              .soon {
                  font-size: 18px;
                  font-family: STSongti-TC-Regular, STSongti-TC;
                  font-weight: 400;
                  color: #FCDAFF;
                  line-height: 25px;
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
              font-size: 21px;
              font-family: STSongti-TC-Regular, STSongti-TC;
              font-weight: 400;
              color: #FCDAFF;
              line-height: 40px;
              letter-spacing: 1px;
          }
          .price {
              height: 110px;
              margin-top: 10px;
              padding: 0 20px 0 10px;
              border: 1px solid #363636;
              display: flex;
              justify-content: space-between;
              align-items: center;
              background: rgba(0,0,0,0.51);
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
                  font-family: STSongti-TC-Regular, STSongti-TC;
                  font-weight: 400;
                  text-align: right;
                  color: #FCDAFF;
                  .zuck {
                      font-size: 32px;
                      font-family: STSongti-TC-Regular, STSongti-TC;
                      font-weight: 400;
                      color: #FCDAFF;
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
              background: rgba(0,0,0,0.51);
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
                  color: #FCDAFF;
              }
              input {
                  width: 471px;
                  line-height: 48px;
                  letter-spacing: 4px;
                  font-size: 50px;
                  font-family: STSongti-TC-Regular, STSongti-TC;
                  font-weight: 400;
                  color: #FFFFFF;
                  text-align: center;
                  background: rgba(0,0,0,0.51);
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
              font-family: STSongti-TC-Regular, STSongti-TC;
              font-weight: 400;
              display: flex;
              justify-content: space-between;
              color: #FCDAFF;
              .total-price {
                  font-size: 36px;
                  font-family: STSongti-TC-Regular, STSongti-TC;
                  font-weight: 400;
                  color: #C122CE;
                  line-height: 30px;
                  letter-spacing: 2px;
              }
          }
          .mint-btn {
              height: 60px;
              background: rgba(0, 0, 0, 0.24);
              border: 3px solid;
              border-image: linear-gradient(90deg, rgba(239, 42, 254, 1), rgba(110, 51, 253, 1)) 3 3;
              font-size: 42px;
              font-family: STSongti-TC-Regular, STSongti-TC;
              font-weight: 400;
              text-align: center;
              cursor: pointer;
              color: #FCDAFF;
              width:100%;
              padding:0;
          }  
      }
    }
  }
  .tokenomicsPanel{
      background:url(../assets/home_bg3.png) no-repeat center;
      background-size:cover;
      height:920px;
      .tokenCon{
          position:relative;
          height:100%;
          .tokenItem{
              position:absolute;
              &:nth-child(1){
                  display:flex;
                  justify-content: start;
                  top:0;
                  left:25%;
                  flex-wrap: wrap;
                  .wrap{
                      width:580px;
                      margin-left:20px;
                  }
              }
              &:nth-child(2){
                  width:400px;
                  top:14%;
                  .percen{
                      position:relative;
                      left:180px;
                  }
              }
              &:nth-child(3){
                  width:400px;
                  top:16%;
                  right:-70px;
              }
              &:nth-child(4){
                  width:400px;
                  top:42%;
                  .tokenImg{
                      position:relative;
                      left:170px;
                      margin-bottom:0;
                  }
              }
              &:nth-child(5){
                  width:360px;
                  bottom:18%;
                  left:35%;
                  .tokenImg{
                      position:relative;
                      margin:0 auto 20px;
                  }
                  .zuckTitle{
                      color: #FFB975;
                      background: linear-gradient(83deg, #2EBBEF 0%, #2EBBEF 0%, #2D62DF 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                  }
                  .zuckTokenInfo{
                      color:#2EBBEF;
                  }
              }
              &:nth-child(6){
                  width:360px;
                  top:42%;
                  right:-70px;
                  .zuckTitle{
                      background: linear-gradient(83deg, #22FA7B 0%, #22FA7B 0%, #18BBDC 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                  }
                  .zuckTokenInfo{
                      color:#21F078;
                  }
              }
              .percen{
                  margin-bottom:8px;
                  width:86px;
                  height:86px;
                  font-size:36px;
                  font-weight:bold;
                  text-align:center;
                  color: #FCDAFF;
                  line-height: 86px;
                  background-image: linear-gradient(#ef2afe, #6e33fd);
                  border-radius:50%;
                  box-sizing: border-box;
                  padding:3px;
                  span{
                      display:block;
                      width:100%;
                      height:100%;
                      background: #000;
                      border-radius:50%;
                  }  
              }
              .tokenTitle{
                  font-size:36px;
                  font-weight:bold;
                    color: #FCDAFF;
                    line-height: 26px;
                    background: linear-gradient(90deg, #EF2AFE 0%, #6E33FD 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    padding-bottom:4px;
              }
              .tokenInfo{
                  font-size:22px;
                  color:#FCDAFF;
                  line-height:26px;
                  font-weight:bold;
              }
              .tokenImg{
                  width:94px;
                  height:94px;
                  margin-bottom:20px;
                  img{
                      width:100%;
                  }
              }
              .zuckTitle{
                    font-size: 36px;
                    font-family: STSongti-TC-Bold, STSongti-TC;
                    font-weight: bold;
                    color: #FFB975;
                    line-height: 35px;
                    background: linear-gradient(90deg, #A6136B 0%, #C38232 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
              }
              .zuckTokenInfo{
                    font-size: 22px;
                    font-family: STSongti-TC-Bold, STSongti-TC;
                    font-weight: bold;
                    color: #FFB975;
                    line-height: 35px;
              }
              .distribute{
                  display:flex;
                  justify-content: center;
                  flex-wrap: wrap;
                  .disItem{
                      margin:10px 0;
                      &:nth-child(2){
                          .percen{
                              background-image: linear-gradient(#22FA7B, #18BBDC);
                                span{
                                    color: #18BDD9;
                                    background:#000 linear-gradient(125deg, #22FA7B 0%, #18BBDC 100%);
                                    -webkit-background-clip: text;
                                    -webkit-text-fill-color: transparent;
                                }
                          }
                          .disInfo{
                                color: #18BDD9;                    
                                background: linear-gradient(90deg, #22FA7B 0%, #18BBDC 100%);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                          }
                      }
                      &:nth-child(3){
                          .percen{
                              background-image: linear-gradient(#2EBBEF, #2D62DF);
                                span{
                                    color: #18BDD9;
                                    background:#000 linear-gradient(125deg, #2EBBEF 0%, #2D62DF 100%);
                                    -webkit-background-clip: text;
                                    -webkit-text-fill-color: transparent;
                                }
                          }
                          .disInfo{
                                color: #18BDD9;                    
                                background: linear-gradient(90deg, #2EBBEF 0%, #2D62DF 100%);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                          }
                      }
                       &:nth-child(4){
                          .percen{
                              background-image: linear-gradient(#EF2AFE, #6E33FD);
                                span{
                                    color: #18BDD9;
                                    background:#000 linear-gradient(125deg, #EF2AFE 0%, #6E33FD 100%);
                                    -webkit-background-clip: text;
                                    -webkit-text-fill-color: transparent;
                                }
                          }
                          .disInfo{
                                color: #18BDD9;                    
                                background: linear-gradient(90deg, #EF2AFE 0%, #6E33FD 100%);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                          }
                      }
                      &:nth-child(5){
                          .percen{
                              background-image: linear-gradient(#717171, #575757);
                                span{
                                    color: #18BDD9;
                                    background:#000 linear-gradient(125deg, #717171 0%, #575757 100%);
                                    -webkit-background-clip: text;
                                    -webkit-text-fill-color: transparent;
                                }
                          }
                          .disInfo{
                                color: #18BDD9;                    
                                background: linear-gradient(90deg, #717171 0%, #575757 100%);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                          }
                      }
                      .percen{
                          width:72px;
                          height:72px;
                          font-size:30px;
                          line-height:72px;
                          margin:0 auto;
                          background-image: linear-gradient(#C38232, #A6136B);
                          .perInner{
                              width:100%;
                              height:100%;
                              background:#000;
                              border-radius:50%;
                          }
                          span{
                            font-family: STSongti-TC-Bold, STSongti-TC;
                            font-weight: bold;
                            color: #18BDD9;
                            line-height: 66px;
                            background:#000 linear-gradient(125deg, #C38232 0%, #A6136B 100%);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                          }
                          a{
                              font-size:18px;
                          }
                      }
                      .disInfo{
                          font-size:18px;
                          width:125px;
                          text-align:center;
                          padding-top:10px;
                            background: linear-gradient(125deg, #C38232 0%, #A6136B 100%);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            color: #18BDD9;
                            font-weight: bold;
                      }
                  }
              }
              .proofBtn{
                  width:124px;
                  height:46px;
                  display:block;
                  margin:10px auto;
                  img{
                      width:100%;
                  }
              }
              .support{
                  font-size:22px;
                  color:#FCDAFF;
                  font-weight: bold;
                  line-height:30px;
              }
          }
      }
  }
  .whyZuckPanel{
      background:url(../assets/home_bg4.png) no-repeat center;
      background-size:cover;
      height:884px;
      .whyZuckCon{
          .titleBox{
              position: relative;
                top: -40px;
          }
          .whyZuck{
            font-size: 20px;
            font-weight: bold;
            color: #FCDAFF;
            line-height: 31px;
            margin-top:40%;
          }
      }
  }
  .maxNftPanel{
      background:url(../assets/home_bg5.png) no-repeat center;
      background-size:cover;
      height:788px;
      .maxNftCon{
          display:flex;
          justify-content: space-between;
          .maxInfo{
              width:45%;
              .maxTitle{
                font-size: 70px;
                font-weight: bold;
                color: #FCDAFF;
                line-height: 55px;
                background: linear-gradient(90deg, #EF2AFE 0%, #6E33FD 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                padding:36px 0 20px;
              }
              .maxInfoText{
                font-size: 28px;
                font-weight: bold;
                color: #FCDAFF;
                line-height: 40px;
                &.bigfont{
                    font-size:32px;
                    padding-bottom:20px;
                }
              }
          }
          .maxImgList{
              width:49%;
              height:588px;
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              margin-top:20px;
              .maxImgItem{
                  width:196px;
                  height:196px;
                  img{
                      width:100%;
                  }
              }
          }
      }
  }
  .metaversePanel{
      background:url(../assets/home_bg6.png) no-repeat center;
      background-size:cover;
      min-height:810px;
      padding-bottom:60px;
      .videoBox{
          width: 1149px;
            height: 561px;
            border: 7px solid;
            border-image: linear-gradient(135deg, rgba(239, 42, 254, 1), rgba(110, 51, 253, 1)) 7 7;
            margin:30px auto;
      }
  }
  .ecosyPanel{
      background:url(../assets/home_bg7.png) no-repeat center;
      background-size:cover;
      min-height:640px;
      .ecosyCon{
          .panelTitle{
            font-size: 50px;
            font-weight: bold;
            color: #FCDAFF;
            line-height: 55px;
            text-align:center;
            padding:58px 0 72px;
          }
          .ecosyList{
              display:flex;
              justify-content: space-between;
              .ecosyItem{
                width:360px;  
                height:175px;
                background: rgba(216, 216, 216, 0);
                border: 4px solid;
                border-image: linear-gradient(135deg, rgba(239, 42, 254, 1), rgba(110, 51, 253, 1)) 4 4;
                position:relative;
                .ecoTitle{
                    position:absolute;
                    top:-34px;
                    left:22px;
                    z-index:9;
                    width: 199px;
                    height: 62px;
                    background: #000000;
                    border: 4px solid;
                    border-image: linear-gradient(135deg, rgba(239, 42, 254, 1), rgba(110, 51, 253, 1)) 4 4;
                    box-sizing: border-box;
                    p{
                        text-align:center;
                        line-height:62px;
                        font-size:26px;
                        font-weight: bold;
                        color: #FCDAFF;
                        background: linear-gradient(90deg, #EF2AFE 0%, #6E33FD 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                    
                }
                .ecoText{
                    font-size: 22px;
                    font-weight: bold;
                    color: #FCDAFF;
                    line-height: 28px;
                    padding-top:36px;
                    padding-left:22px;
                }
              }
          }
      }
  }
  .teamPanel{
      background:url(../assets/home_bg8.png) no-repeat center;
      background-size:cover;
      min-height:678px;
      .teamCon{
          padding:90px 0;
          .teamList{
              padding-top:35px;
              display:flex;
              justify-content: space-between;
              .teamItem{
                  width: 315px;
                    height: 391px;
                    border: 4px solid;
                    border-image: linear-gradient(135deg, rgba(239, 42, 254, 1), rgba(110, 51, 253, 1)) 4 4;
                    padding:20px;
                    box-sizing: border-box;
                    img{
                        width:267px;
                        height:267px;
                    }
                    .name{
                        font-size: 32px;
                        font-weight: bold;
                        color: #EE2AFE;
                        line-height: 39px;
                        padding-top:10px;
                        text-align:center;
                    }
                    .job{
                        font-size: 16px;
                        font-weight: 300;
                        color: #B79AFF;
                        line-height: 25px;
                        text-align:center;
                    }
              }
          }
      }
  }
  .roadMapPanel{
      background:url(../assets/home_bg9.png) no-repeat center;
      background-size:cover;
      min-height:1424px;
      .roadmapBox{
          padding:60px 0;
          position:relative;
          .line{
              width: 8px;
            height: 823px;
            background: #000000;
            border-radius: 12px;
            opacity: 0.3;
            margin:0 auto;
          }
          .roadmapList{
              .roadmapItem{
                  position:absolute;
                  display:flex;
                  align-items: center;
                  &:nth-child(1){
                      top:85px;
                      right:48.9%;
                  }
                  &:nth-child(2){
                      top:198px;
                      left:48.9%;
                  }
                  &:nth-child(3){
                      top:310px;
                      right:48.9%;
                  }
                  &:nth-child(4){
                      top:423px;
                      left:48.9%;
                  }
                  &:nth-child(5){
                      top:536px;
                      right:48.9%;
                  }
                  &:nth-child(6){
                      top:653px;
                      left:48.9%;
                  }
                  &:nth-child(7){
                      top:778px;
                      right:48.9%;
                  }
                  i{
                      display:block;
                      width: 16px;
                        height: 16px;
                        background: linear-gradient(110deg, #EF2AFE 0%, #6E33FD 100%);
                        border: 4px solid rgba(48, 37, 37, 0.66);
                        border-radius:50%;
                  }
                  .mapInfo{
                      width: 391px;
                        height: 95px;
                        background: rgba(0, 0, 0, 0.8);
                        border: 4px solid;
                        border-image: linear-gradient(135deg, rgba(239, 42, 254, 1), rgba(110, 51, 253, 1)) 4 4;
                        padding:14px 0 0 24px;
                        box-sizing: border-box;
                        h2{
                            font-size: 29px;
                            font-weight: bold;
                            color: #EE2AFE;
                            line-height: 39px;
                        }
                        p{
                            font-size: 18px;
                            font-weight: 300;
                            color: #FFFFFF;
                            line-height: 23px;
                        }
                  }
              }
          }
      }
      .partnerBox{
          display:flex;
          justify-content: space-between;
          flex-wrap: wrap;
          padding-top:32px;
          padding-bottom:7px;
          border-top:2px solid #7360CD;
          border-bottom:2px solid #7360CD;
          .partnerImg{
              width:221px;
              height:73px;
              margin: 0 20px 25px;
              img{
                  width:100%;
              }
          }
      }
      .footerBox{
          display:flex;
          justify-content: space-between;
          align-items: center;
          padding:36px 0 60px;
          .copyright{
              img{
                  display:block;
                  margin:0 auto;
              }
          }
          .footLink{
              display:flex;
              justify-content: center;
              a{
                  display:block;
                  margin:0 10px;
              }
          }
      }
  }
}
</style>
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
                nftList:[
                  {imgurl:'../assets/home_nftBigImg1.png'}
                ],
                defaultAccount:null,
                isApproved:false,
                isDoing:false,
                price:15000000,
                totalPrice:0,
                mintNum:0
            }
        },
        watch:{
            number (v) {
                if (parseInt(v)>5) {
                    this.number = 5
                }else if(parseInt(v)<1){
                    this.number = 1
                }else{
                    this.totalPrice = v * this.price
                }
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
                // ElMessage({
                //     message: 'Coming Soon',
                //     type: 'success',
                // })
                // return
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