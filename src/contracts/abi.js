import zuckToken from './zuckToken_abi.json'
import zuckFactory from './zuckNft_abi.json'
import zuckNft from './zuckNftmaster_abi.json'
export const abi = {
  zuckToken,
  zuckFactory,
  zuckNft
}
const addrKey = [
  'zuckToken',
  'zuckFactory',
  'zuckNft'
]
export const prodAddrs = fillZeroAddr({
  zuckToken: '0x03abf81d33e675b7df45ce832b1269cf7a4b3269',
  zuckFactory:'0x5698676eAC70218708c37f0B4966180322263174',
  zuckNft:'0x36290939e9ba6855f9825db776120e8339302c06'
})

export const testAddrs = fillZeroAddr({
  zuckToken: '0x03abf81d33e675b7df45ce832b1269cf7a4b3269',
  zuckFactory:'0x5698676eAC70218708c37f0B4966180322263174',
  zuckNft:'0x36290939e9ba6855f9825db776120e8339302c06'
})
function fillZeroAddr (addrs) {
  addrKey.forEach(item => {
      if (!addrs[item]) {
          addrs[item] = '0x0000000000000000000000000000000000000000'
      }
  })
  return addrs
}