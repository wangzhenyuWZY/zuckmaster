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
  zuckFactory:'0xa5Dad7F858e2B0D3d348872d1786039534c61594',
  zuckNft:'0xA986230Cf9419eC0434A6AAE42Cf817850288Ae9'
})

export const testAddrs = fillZeroAddr({
  zuckToken: '0x03abf81d33e675b7df45ce832b1269cf7a4b3269',
  zuckFactory:'0xa5Dad7F858e2B0D3d348872d1786039534c61594',
  zuckNft:'0xA986230Cf9419eC0434A6AAE42Cf817850288Ae9'
})
function fillZeroAddr (addrs) {
  addrKey.forEach(item => {
      if (!addrs[item]) {
          addrs[item] = '0x0000000000000000000000000000000000000000'
      }
  })
  return addrs
}