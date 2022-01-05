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
  zuckFactory:'0x6dbAd0B710D745f5dEf7Ba9d80B46776Af76911b',
  zuckNft:'0x30aa83cc667BbC8F3C6A9991ad39fA11080E7500'
})

export const testAddrs = fillZeroAddr({
  zuckToken: '0x03abf81d33e675b7df45ce832b1269cf7a4b3269',
  zuckFactory:'0x6dbAd0B710D745f5dEf7Ba9d80B46776Af76911b',
  zuckNft:'0x30aa83cc667BbC8F3C6A9991ad39fA11080E7500'
})
function fillZeroAddr (addrs) {
  addrKey.forEach(item => {
      if (!addrs[item]) {
          addrs[item] = '0x0000000000000000000000000000000000000000'
      }
  })
  return addrs
}