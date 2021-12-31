/** 
 * ===================================================================
 * javascript ZUCK
 *
 * ------------------------------------------------------------------- 
 */

 var zuckTokenAddr = '0xC426b448f5F23C801E4aBb6FE264428E7A169aF6';
 var zuckTokenABI =[
	 {
		 "inputs": [],
		 "stateMutability": "nonpayable",
		 "type": "constructor"
	 },
	 {
		 "anonymous": false,
		 "inputs": [
			 {
				 "indexed": true,
				 "internalType": "address",
				 "name": "owner",
				 "type": "address"
			 },
			 {
				 "indexed": true,
				 "internalType": "address",
				 "name": "spender",
				 "type": "address"
			 },
			 {
				 "indexed": false,
				 "internalType": "uint256",
				 "name": "value",
				 "type": "uint256"
			 }
		 ],
		 "name": "Approval",
		 "type": "event"
	 },
	 {
		 "anonymous": false,
		 "inputs": [
			 {
				 "indexed": false,
				 "internalType": "string",
				 "name": "msg",
				 "type": "string"
			 }
		 ],
		 "name": "LogShow",
		 "type": "event"
	 },
	 {
		 "anonymous": false,
		 "inputs": [
			 {
				 "indexed": false,
				 "internalType": "uint256",
				 "name": "minTokensBeforeSwap",
				 "type": "uint256"
			 }
		 ],
		 "name": "MinTokensBeforeSwapUpdated",
		 "type": "event"
	 },
	 {
		 "anonymous": false,
		 "inputs": [
			 {
				 "indexed": true,
				 "internalType": "address",
				 "name": "previousOwner",
				 "type": "address"
			 },
			 {
				 "indexed": true,
				 "internalType": "address",
				 "name": "newOwner",
				 "type": "address"
			 }
		 ],
		 "name": "OwnershipTransferred",
		 "type": "event"
	 },
	 {
		 "anonymous": false,
		 "inputs": [
			 {
				 "indexed": false,
				 "internalType": "uint256",
				 "name": "tokensSwapped",
				 "type": "uint256"
			 },
			 {
				 "indexed": false,
				 "internalType": "uint256",
				 "name": "ethReceived",
				 "type": "uint256"
			 },
			 {
				 "indexed": false,
				 "internalType": "uint256",
				 "name": "tokensIntoLiqudity",
				 "type": "uint256"
			 }
		 ],
		 "name": "SwapAndLiquify",
		 "type": "event"
	 },
	 {
		 "anonymous": false,
		 "inputs": [
			 {
				 "indexed": false,
				 "internalType": "bool",
				 "name": "enabled",
				 "type": "bool"
			 }
		 ],
		 "name": "SwapAndLiquifyEnabledUpdated",
		 "type": "event"
	 },
	 {
		 "anonymous": false,
		 "inputs": [
			 {
				 "indexed": true,
				 "internalType": "address",
				 "name": "from",
				 "type": "address"
			 },
			 {
				 "indexed": true,
				 "internalType": "address",
				 "name": "to",
				 "type": "address"
			 },
			 {
				 "indexed": false,
				 "internalType": "uint256",
				 "name": "value",
				 "type": "uint256"
			 }
		 ],
		 "name": "Transfer",
		 "type": "event"
	 },
	 {
		 "inputs": [],
		 "name": "_liquidityDivide",
		 "outputs": [
			 {
				 "internalType": "uint256",
				 "name": "",
				 "type": "uint256"
			 }
		 ],
		 "stateMutability": "view",
		 "type": "function"
	 },
	 {
		 "inputs": [],
		 "name": "_marketDivide",
		 "outputs": [
			 {
				 "internalType": "uint256",
				 "name": "",
				 "type": "uint256"
			 }
		 ],
		 "stateMutability": "view",
		 "type": "function"
	 },
	 {
		 "inputs": [],
		 "name": "_maxTxAmount",
		 "outputs": [
			 {
				 "internalType": "uint256",
				 "name": "",
				 "type": "uint256"
			 }
		 ],
		 "stateMutability": "view",
		 "type": "function"
	 },
	 {
		 "inputs": [],
		 "name": "_positionDivide",
		 "outputs": [
			 {
				 "internalType": "uint256",
				 "name": "",
				 "type": "uint256"
			 }
		 ],
		 "stateMutability": "view",
		 "type": "function"
	 },
	 {
		 "inputs": [],
		 "name": "_taxFee",
		 "outputs": [
			 {
				 "internalType": "uint256",
				 "name": "",
				 "type": "uint256"
			 }
		 ],
		 "stateMutability": "view",
		 "type": "function"
	 },
	 {
		 "inputs": [
			 {
				 "internalType": "address",
				 "name": "owner",
				 "type": "address"
			 },
			 {
				 "internalType": "address",
				 "name": "spender",
				 "type": "address"
			 }
		 ],
		 "name": "allowance",
		 "outputs": [
			 {
				 "internalType": "uint256",
				 "name": "",
				 "type": "uint256"
			 }
		 ],
		 "stateMutability": "view",
		 "type": "function"
	 },
	 {
		 "inputs": [
			 {
				 "internalType": "address",
				 "name": "spender",
				 "type": "address"
			 },
			 {
				 "internalType": "uint256",
				 "name": "amount",
				 "type": "uint256"
			 }
		 ],
		 "name": "approve",
		 "outputs": [
			 {
				 "internalType": "bool",
				 "name": "",
				 "type": "bool"
			 }
		 ],
		 "stateMutability": "nonpayable",
		 "type": "function"
	 },
	 {
		 "inputs": [
			 {
				 "internalType": "address",
				 "name": "account",
				 "type": "address"
			 }
		 ],
		 "name": "balanceOf",
		 "outputs": [
			 {
				 "internalType": "uint256",
				 "name": "",
				 "type": "uint256"
			 }
		 ],
		 "stateMutability": "view",
		 "type": "function"
	 },
	 {
		 "inputs": [],
		 "name": "decimals",
		 "outputs": [
			 {
				 "internalType": "uint8",
				 "name": "",
				 "type": "uint8"
			 }
		 ],
		 "stateMutability": "view",
		 "type": "function"
	 },
	 {
		 "inputs": [
			 {
				 "internalType": "address",
				 "name": "account",
				 "type": "address"
			 }
		 ],
		 "name": "excludeBotFromFee",
		 "outputs": [],
		 "stateMutability": "nonpayable",
		 "type": "function"
	 },
	 {
		 "inputs": [
			 {
				 "internalType": "address",
				 "name": "account",
				 "type": "address"
			 }
		 ],
		 "name": "excludeFromFee",
		 "outputs": [],
		 "stateMutability": "nonpayable",
		 "type": "function"
	 },
	 {
		 "inputs": [],
		 "name": "getMarketDivideAddress",
		 "outputs": [
			 {
				 "internalType": "address",
				 "name": "",
				 "type": "address"
			 }
		 ],
		 "stateMutability": "view",
		 "type": "function"
	 },
	 {
		 "inputs": [],
		 "name": "getPositionDivideAddress",
		 "outputs": [
			 {
				 "internalType": "address",
				 "name": "",
				 "type": "address"
			 }
		 ],
		 "stateMutability": "view",
		 "type": "function"
	 },
	 {
		 "inputs": [],
		 "name": "getliquifyEnabled",
		 "outputs": [
			 {
				 "internalType": "bool",
				 "name": "",
				 "type": "bool"
			 }
		 ],
		 "stateMutability": "view",
		 "type": "function"
	 },
	 {
		 "inputs": [
			 {
				 "internalType": "address",
				 "name": "account",
				 "type": "address"
			 }
		 ],
		 "name": "includeFee",
		 "outputs": [],
		 "stateMutability": "nonpayable",
		 "type": "function"
	 },
	 {
		 "inputs": [
			 {
				 "internalType": "address",
				 "name": "account",
				 "type": "address"
			 }
		 ],
		 "name": "isExcludedFromReward",
		 "outputs": [
			 {
				 "internalType": "bool",
				 "name": "",
				 "type": "bool"
			 }
		 ],
		 "stateMutability": "view",
		 "type": "function"
	 },
	 {
		 "inputs": [
			 {
				 "internalType": "address",
				 "name": "account",
				 "type": "address"
			 }
		 ],
		 "name": "isIncludeFromFee",
		 "outputs": [
			 {
				 "internalType": "bool",
				 "name": "",
				 "type": "bool"
			 }
		 ],
		 "stateMutability": "view",
		 "type": "function"
	 },
	 {
		 "inputs": [],
		 "name": "liquifyEnabled",
		 "outputs": [
			 {
				 "internalType": "bool",
				 "name": "",
				 "type": "bool"
			 }
		 ],
		 "stateMutability": "view",
		 "type": "function"
	 },
	 {
		 "inputs": [],
		 "name": "name",
		 "outputs": [
			 {
				 "internalType": "string",
				 "name": "",
				 "type": "string"
			 }
		 ],
		 "stateMutability": "view",
		 "type": "function"
	 },
	 {
		 "inputs": [],
		 "name": "owner",
		 "outputs": [
			 {
				 "internalType": "address",
				 "name": "",
				 "type": "address"
			 }
		 ],
		 "stateMutability": "view",
		 "type": "function"
	 },
	 {
		 "inputs": [],
		 "name": "pancakeSwapV2Pair",
		 "outputs": [
			 {
				 "internalType": "address",
				 "name": "",
				 "type": "address"
			 }
		 ],
		 "stateMutability": "view",
		 "type": "function"
	 },
	 {
		 "inputs": [],
		 "name": "pancakeSwapV2Router",
		 "outputs": [
			 {
				 "internalType": "contract IPancakeSwapV2Router02",
				 "name": "",
				 "type": "address"
			 }
		 ],
		 "stateMutability": "view",
		 "type": "function"
	 },
	 {
		 "inputs": [],
		 "name": "renounceOwnership",
		 "outputs": [],
		 "stateMutability": "nonpayable",
		 "type": "function"
	 },
	 {
		 "inputs": [
			 {
				 "internalType": "address",
				 "name": "account",
				 "type": "address"
			 }
		 ],
		 "name": "setLiquidDivideAddress",
		 "outputs": [],
		 "stateMutability": "nonpayable",
		 "type": "function"
	 },
	 {
		 "inputs": [
			 {
				 "internalType": "uint256",
				 "name": "liquidityDivide",
				 "type": "uint256"
			 }
		 ],
		 "name": "setLiquidityDividePercent",
		 "outputs": [],
		 "stateMutability": "nonpayable",
		 "type": "function"
	 },
	 {
		 "inputs": [
			 {
				 "internalType": "bool",
				 "name": "_liquifyEnabled",
				 "type": "bool"
			 }
		 ],
		 "name": "setLiquifyEnableTrade",
		 "outputs": [],
		 "stateMutability": "nonpayable",
		 "type": "function"
	 },
	 {
		 "inputs": [
			 {
				 "internalType": "address",
				 "name": "account",
				 "type": "address"
			 }
		 ],
		 "name": "setMarketDivideAddress",
		 "outputs": [],
		 "stateMutability": "nonpayable",
		 "type": "function"
	 },
	 {
		 "inputs": [
			 {
				 "internalType": "uint256",
				 "name": "marketDivide",
				 "type": "uint256"
			 }
		 ],
		 "name": "setMarketingDividePercent",
		 "outputs": [],
		 "stateMutability": "nonpayable",
		 "type": "function"
	 },
	 {
		 "inputs": [
			 {
				 "internalType": "uint256",
				 "name": "maxTxPercent",
				 "type": "uint256"
			 }
		 ],
		 "name": "setMaxTxPercent",
		 "outputs": [],
		 "stateMutability": "nonpayable",
		 "type": "function"
	 },
	 {
		 "inputs": [
			 {
				 "internalType": "address",
				 "name": "account",
				 "type": "address"
			 }
		 ],
		 "name": "setPositionDivideAddress",
		 "outputs": [],
		 "stateMutability": "nonpayable",
		 "type": "function"
	 },
	 {
		 "inputs": [
			 {
				 "internalType": "uint256",
				 "name": "positionDivide",
				 "type": "uint256"
			 }
		 ],
		 "name": "setPositionDividePercent",
		 "outputs": [],
		 "stateMutability": "nonpayable",
		 "type": "function"
	 },
	 {
		 "inputs": [
			 {
				 "internalType": "uint256",
				 "name": "power",
				 "type": "uint256"
			 }
		 ],
		 "name": "setRadion",
		 "outputs": [],
		 "stateMutability": "nonpayable",
		 "type": "function"
	 },
	 {
		 "inputs": [
			 {
				 "internalType": "uint256",
				 "name": "_startMintDate",
				 "type": "uint256"
			 }
		 ],
		 "name": "setStartTradeDate",
		 "outputs": [],
		 "stateMutability": "nonpayable",
		 "type": "function"
	 },
	 {
		 "inputs": [
			 {
				 "internalType": "uint256",
				 "name": "taxFee",
				 "type": "uint256"
			 }
		 ],
		 "name": "setTaxFeePercent",
		 "outputs": [],
		 "stateMutability": "nonpayable",
		 "type": "function"
	 },
	 {
		 "inputs": [],
		 "name": "symbol",
		 "outputs": [
			 {
				 "internalType": "string",
				 "name": "",
				 "type": "string"
			 }
		 ],
		 "stateMutability": "view",
		 "type": "function"
	 },
	 {
		 "inputs": [],
		 "name": "totalFees",
		 "outputs": [
			 {
				 "internalType": "uint256",
				 "name": "",
				 "type": "uint256"
			 }
		 ],
		 "stateMutability": "view",
		 "type": "function"
	 },
	 {
		 "inputs": [],
		 "name": "totalSupply",
		 "outputs": [
			 {
				 "internalType": "uint256",
				 "name": "",
				 "type": "uint256"
			 }
		 ],
		 "stateMutability": "view",
		 "type": "function"
	 },
	 {
		 "inputs": [
			 {
				 "internalType": "address",
				 "name": "recipient",
				 "type": "address"
			 },
			 {
				 "internalType": "uint256",
				 "name": "amount",
				 "type": "uint256"
			 }
		 ],
		 "name": "transfer",
		 "outputs": [
			 {
				 "internalType": "bool",
				 "name": "",
				 "type": "bool"
			 }
		 ],
		 "stateMutability": "nonpayable",
		 "type": "function"
	 },
	 {
		 "inputs": [
			 {
				 "internalType": "address",
				 "name": "sender",
				 "type": "address"
			 },
			 {
				 "internalType": "address",
				 "name": "recipient",
				 "type": "address"
			 },
			 {
				 "internalType": "uint256",
				 "name": "amount",
				 "type": "uint256"
			 }
		 ],
		 "name": "transferFrom",
		 "outputs": [
			 {
				 "internalType": "bool",
				 "name": "",
				 "type": "bool"
			 }
		 ],
		 "stateMutability": "nonpayable",
		 "type": "function"
	 },
	 {
		 "inputs": [
			 {
				 "internalType": "address",
				 "name": "newOwner",
				 "type": "address"
			 }
		 ],
		 "name": "transferOwnership",
		 "outputs": [],
		 "stateMutability": "nonpayable",
		 "type": "function"
	 },
	 {
		 "inputs": [
			 {
				 "internalType": "uint256",
				 "name": "_var1",
				 "type": "uint256"
			 }
		 ],
		 "name": "updateVar1",
		 "outputs": [],
		 "stateMutability": "nonpayable",
		 "type": "function"
	 },
	 {
		 "inputs": [],
		 "name": "var1",
		 "outputs": [
			 {
				 "internalType": "uint256",
				 "name": "",
				 "type": "uint256"
			 }
		 ],
		 "stateMutability": "view",
		 "type": "function"
	 },
	 {
		 "inputs": [],
		 "name": "var2",
		 "outputs": [
			 {
				 "internalType": "uint256",
				 "name": "",
				 "type": "uint256"
			 }
		 ],
		 "stateMutability": "view",
		 "type": "function"
	 },
	 {
		 "inputs": [],
		 "name": "withdraw",
		 "outputs": [],
		 "stateMutability": "nonpayable",
		 "type": "function"
	 },
	 {
		 "stateMutability": "payable",
		 "type": "receive"
	 }
 ]

var zuckFactoryContract;
var zuckTokenContract;
var zuckNFTFactoryAddr = '0xC99ABeF3e868c918043084Ee853513e6fEfBA567'
var zuckNFTFactoryABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "addWhiteList",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "freezeSmartContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "_mintMaxAmount",
				"type": "uint16"
			}
		],
		"name": "getCardNum",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_mintMaxAmount",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_payZuckAmount",
				"type": "uint8"
			}
		],
		"name": "mint",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "removeWhiteList",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_lockStatus",
				"type": "bool"
			}
		],
		"name": "setContractLockStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_enableWhitelist",
				"type": "bool"
			}
		],
		"name": "setEnablewhitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract MAXNFT",
				"name": "_maxAddr",
				"type": "address"
			}
		],
		"name": "setMaxNFTContractAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_startMintDate",
				"type": "uint256"
			}
		],
		"name": "setStartMintDate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_zuckMintPrice",
				"type": "uint256"
			}
		],
		"name": "setZuckMintPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_zuckAddr",
				"type": "address"
			}
		],
		"name": "setZuckTokenAddr",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_zuckAddr",
				"type": "address"
			}
		],
		"name": "updateZuckAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "withdrawZuck",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "checkIfExistInWhiteList",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "getTokenIdsByAccount",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxAddr",
		"outputs": [
			{
				"internalType": "contract MAXNFT",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "zuckAddr",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "zuckMintPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
var currentAddr;

window.addEventListener('load', async function() {
	console.log('load')
	if(window.ethereum) {
		window.web3 = new Web3(ethereum);
		try {
			await ethereum.enable(); 
			let accounts = await web3.eth.getAccounts()
			currentAddr = accounts[0]
			console.log('currentAddress is: ' + currentAddr)

			zuckTokenContract = await new web3.eth.Contract(zuckTokenABI,zuckTokenAddr)
			zuckFactoryContract = await new web3.eth.Contract(zuckNFTFactoryABI,zuckNFTFactoryAddr)
			await zuckTokenContract.methods.approve(zuckNFTFactoryAddr, 100000).send({from:currentAddr}).then(ret=>{
				console.log(ret);
			})
			
			zuckTokenContract.methods.allowance(currentAddr, 0x55E0B9fdb06e481eF2958DA9c14E2De3cC1EEc51).call().then(ret=>{
				if(ret == 0 ){
					console.log('Not Approved!!')
				}else if(ret > 0){
					console.log('have Approved')
				}
			});

			var wallet_address_doc = document.getElementById('connectWalletBtn')
			if(wallet_address_doc != null) {
				wallet_address_doc.innerHTML = currentAddr.slice(0, 8);
				$("#connectWalletBtn").attr({
					"disabled": "disabled"
				});
			}

		} catch(error) {
			console.log(error)
		}
	}
	// Legacy dapp browsers...
	else if(window.web3) {
		window.web3 = new Web3(web3.currentProvider);
		presaleContract = await new web3.eth.Contract(kittyOHMNFTABI, kittyOHMNFTAddress)
		let accounts = await web3.eth.getAccounts()
		currentAddr = accounts[0]
		console.log('currentAddress is: ' + currentAddr)
		var wallet_address_doc = document.getElementById('connectWalletBtn');
		if(wallet_address_doc != null) {
			wallet_address_doc.innerHTML = currentAddr.slice(0, 8);
			$("#connectWalletBtn").attr({
				"disabled": "disabled"
			});
		}
	} else {
		console.log('Can not get wallet address, Please refresh it');
	}
})

window.ethereum.on('accountsChanged', function(accounts) {
	location.reload();
})

window.ethereum.on('networkChanged', function(networkId) {
	location.reload();
})


function showMintBtn() {
	$("#mint-btn").html("Mint Kitty NFT");
	$("#mint-btn").removeAttr("disabled");
}

function mintNFTToken() {

	$("#mint-btn").html("Waiting");
	$("#mint-btn").attr({
		"disabled": "disabled"
	});

	var amount = 2;
	var zuckAmount = 10;
	zuckFactoryContract.methods.mint(amount,zuckAmount.toString()).send({
		from: currentAddr
	}).then(result => {
		alertify.success("mint success");
		showMintBtn();
	}).catch((err) => {
		alertify.error(JSON.stringify(err).slice(0, 100));
		console.log(err);
		showMintBtn();
	});
}

async function getNftTokenIdsFromCurrentAccount(){
	var tokenIds =await zuckFactoryContract.methods.getTokenIdsByAccount(currentAddr).call()
	console.log(tokenIds);
}

var endtime = new Date('2021-11-25 20:00:00').getTime();
var starttime = new Date().getTime();
$(document).ready(function () {
  	//TimeDown("showTime", (endtime - starttime));
  	countTime();
})




function TimeDown(id, value) {
	var totalSeconds = parseInt(value / 1000);
	var modulo = totalSeconds % (60 * 60 * 24);
	var hours = Math.floor(modulo / (60 * 60));
	modulo = modulo % (60 * 60);
	var minutes = Math.floor(modulo / 60);
	var seconds = modulo % 60;
	hours = hours.toString().length == 1 ? '0' + hours : hours;
	minutes = minutes.toString().length == 1 ? '0' + minutes : minutes;
	seconds = seconds.toString().length == 1 ? '0' + seconds : seconds;
	document.getElementById(id).innerHTML = hours + ":" + minutes + ":" + seconds;
	if(hours == "00" && minutes == "00" && parseInt(seconds) - 1 < 0) {

	} else {
		setTimeout(function() {
			TimeDown(id, value - 1000);
		}, 1000)
	}
}

function countTime() {
	var date = new Date();
	var now = date.getTime();
	var endDate = new Date("2021-12-25 08:00:00"); //设置截止时间
	var end = endDate.getTime();
	var leftTime = end - now; //时间差                              
	var d, h, m, s, ms;
	if(leftTime >= 0) {
		// d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
		h = Math.floor(leftTime / 1000 / 60 / 60);
		m = Math.floor(leftTime / 1000 / 60 % 60);
		s = Math.floor(leftTime / 1000 % 60);
		ms = Math.floor(leftTime % 1000);
		if(ms < 100) {
			ms = "0" + ms;
		}
		if(s < 10) {
			s = "0" + s;
		}
		if(m < 10) {
			m = "0" + m;
		}
		if(h < 10) {
			h = "0" + h;
		}
	} else {
		console.log('已截止')
	}
	
	document.getElementById("showTime").innerHTML = h + ":" + m + ":" + s;

	setTimeout(countTime, 50);
}

