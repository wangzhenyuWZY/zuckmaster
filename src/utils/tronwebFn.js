
// var ethers = require('ethers');
import {ethers} from 'ethers'
const initWeb3 = () => {
  return new Promise(function (resolve, reject) {
      // const web3 = new Web3('https://http-testnet.hecochain.com')
      var web3Provider
      if (window.ethereum) {
          web3Provider = window.ethereum
          try {
              // 请求用户授权
              window.ethereum.enable().then(res => {
                let provider = new ethers.providers.Web3Provider(window.ethereum)
                let signer = provider.getSigner()
                const rpcProvider = new ethers.providers.JsonRpcProvider()
                let con = {provider,signer}
                  resolve(con)
              })
          } catch (error) {
              // 用户不授权时
              console.error('User denied account access')
          }
      }
  })
}
const plusXing = (str,frontLen,endLen) => { 
  var len = str.length-frontLen-endLen;
  var xing = '';
  for (var i=0;i<len;i++) {
    xing ='...';
  }
  return str.substring(0,frontLen)+xing+str.substring(str.length-endLen);
}
export {
  plusXing
}
export default initWeb3
