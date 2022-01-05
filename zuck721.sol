// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract MAXNFT is ERC721Enumerable{

    uint16 public totalTokens = 1000;
    uint16 public _totalSupply = 0;

    mapping(uint16 => uint16) private tokenMatrix;

    constructor() ERC721("Zuckerberg's Goats", "ZuckGoat") {}
    
    function mint(address account, uint16 amount) public returns (uint256[] memory){
        require(amount > 0, "At least one token should be minted");

        uint16 tokensLeft = getAvailableTokens();
        require(tokensLeft > 0, "No tokens left to be minted");

        if (amount > tokensLeft) {
            amount = uint8(tokensLeft);
        }

        uint256[] memory tokenIds = new uint256[](amount);
        _totalSupply +=  amount;

        for (uint256 i; i < amount; i++) {
            tokenIds[i] = _getTokenToBeMinted(_totalSupply);
        }
        _batchMint(account,tokenIds);        
        require(tokenIds.length>0, "The gift token id can't be empty");
        return tokenIds;
    }

    function getAvailableTokens() public view returns (uint16) {
        return totalTokens - _totalSupply;
    }

    function _getTokenToBeMinted(uint16 _totalMintedTokens)
        private
        returns (uint16)
    {
        uint16 maxIndex = totalTokens - _totalMintedTokens;
        uint16 random = _getRandomNumber(maxIndex, _totalMintedTokens);

        uint16 tokenId = tokenMatrix[random];
        if (tokenMatrix[random] == 0) {
            tokenId = random;
        }

        tokenMatrix[maxIndex - 1] == 0
            ? tokenMatrix[random] = maxIndex - 1
            : tokenMatrix[random] = tokenMatrix[maxIndex - 1];

        return tokenId;
    }

    /**
     * @dev Generates a pseudo-random number.
     */
    function _getRandomNumber(uint16 _upper, uint16 _totalMintedTokens)
        private
        view
        returns (uint16)
    {
        uint16 random = uint16(
            uint256(
                keccak256(
                    abi.encodePacked(
                        _totalMintedTokens,
                        blockhash(block.number - 1),
                        block.coinbase,
                        block.difficulty,
                        msg.sender
                    )
                )
            )
        );

        return random % _upper;
    }


       
}