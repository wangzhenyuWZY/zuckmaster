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
  zuckFactory:'0xff2B8CCd2358320da21DAd1E9E4b4641f03F5ae4',
  zuckNft:'0x97f5FEd1c9fe1Ca68ac7938a319aEB4eD85A5680'
})

export const testAddrs = fillZeroAddr({
  zuckToken: '0x03abf81d33e675b7df45ce832b1269cf7a4b3269',
  zuckFactory:'0xff2B8CCd2358320da21DAd1E9E4b4641f03F5ae4',
  zuckNft:'0x97f5FEd1c9fe1Ca68ac7938a319aEB4eD85A5680'
})
function fillZeroAddr (addrs) {
  addrKey.forEach(item => {
      if (!addrs[item]) {
          addrs[item] = '0x0000000000000000000000000000000000000000'
      }
  })
  return addrs
}