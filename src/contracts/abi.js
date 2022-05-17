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
  zuckNft:'0xE1F5Ee1972B2f41a5A94acEdEf3598f40C1A7162'
})

export const testAddrs = fillZeroAddr({
  zuckToken: '0x8b86a6A52db5A5fb3B29e52E7d1dBC4e3A5a72b9',
  zuckFactory:'0xa5Dad7F858e2B0D3d348872d1786039534c61594',
  zuckNft:'0xAE877164fa843E347D78EdEE1A9c48FC1add94bE'
})
function fillZeroAddr (addrs) {
  addrKey.forEach(item => {
      if (!addrs[item]) {
          addrs[item] = '0x0000000000000000000000000000000000000000'
      }
  })
  return addrs
}