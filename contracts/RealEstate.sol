// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract RealEstate is ERC721 {
  using Counters for Counters.Counter;

  address public owner;
  Counters.Counter private _tokenIds;

  constructor() ERC721("Real Estate", "RST") public {
    owner = msg.sender;
  }

  function listAllTokens() external view returns(uint[] memory) {
    uint nTokens = totalSupply();
    uint[] memory tokens = new uint[](nTokens);
    for (uint i = 0; i < nTokens; i++) {
      tokens[i] = tokenByIndex(i);
    }
    return tokens;
  }

  function mint(string calldata _tokenUri) external returns (uint) {
    _tokenIds.increment();
    uint newItemId = _tokenIds.current();
    _mint(msg.sender, newItemId);
    _setTokenURI(newItemId, _tokenUri);
    return newItemId;
  }
}