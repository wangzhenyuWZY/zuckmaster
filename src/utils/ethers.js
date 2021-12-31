import { ethers } from 'ethers'
// import('kaka721_abi.json')
import { prodAddrs, testAddrs, abi } from '../contracts/abi'

export function getEther () {
    let provider
    let signer
    if (!window.ethereum) {
        return
    }
    provider = new ethers.providers.Web3Provider(window.ethereum)
    signer = provider.getSigner()
    const rpcProvider = new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545/')

    let envAddrs = ''
    let myGasPrice = null
    let network = {
        '56': {
            envAddrs: prodAddrs,
            myGasPrice: ethers.utils.parseUnits('5.001', 9)
        },
        '97': {
            envAddrs: testAddrs,
            myGasPrice: ethers.utils.parseUnits('10.001', 9)
        }
    }
    const chainId = +window.ethereum.chainId || '56'
    envAddrs = network[chainId].envAddrs
    myGasPrice = network[chainId].myGasPrice
    // if (window.ethereum && (window.ethereum.chainId === '0x38' || window.ethereum.chainId === '0x61')) {
    //     envAddrs = window.ethereum && window.ethereum.chainId === '0x61' ? testAddrs : prodAddrs
    //     myGasPrice = window.ethereum && window.ethereum.chainId === '0x61' ? ethers.utils.parseUnits('10.001', 9) : ethers.utils.parseUnits('5.001', 9)

    // // okt
    // } else if (window.ethereum && (window.ethereum.chainId === '0x42' || window.ethereum.chainId === '0x41')) {
    //     envAddrs = window.ethereum && window.ethereum.chainId === '0x41' ? oktTestAddrs : oktAddrs
    //     myGasPrice = window.ethereum && window.ethereum.chainId === '0x41' ? ethers.utils.parseUnits('10.001', 9) : ethers.utils.parseUnits('5.001', 9)
    // }
    const MyContracts = {
        // Token
        zuckToken: new ethers.Contract(envAddrs.zuckToken, abi.zuckToken, signer),
        zuckFactory: new ethers.Contract(envAddrs.zuckFactory, abi.zuckFactory, signer),
        zuckNft: new ethers.Contract(envAddrs.zuckNft, abi.zuckNft, signer)
    }

    return {
        ...ethers,
        provider,
        signer,
        rpcProvider,
        c: MyContracts,
        gasPrice: myGasPrice
    }
}

const MyEthers = {}
MyEthers.install = function (app, options) {
    Object.defineProperties(app.config.globalProperties, {
        $eth: {
            get () {
                return getEther()
            }
        }
    })
}

export default MyEthers
