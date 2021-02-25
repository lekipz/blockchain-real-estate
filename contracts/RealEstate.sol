// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;
pragma abicoder v2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract RealEstate is ERC721 {
  using Counters for Counters.Counter;

  // Token data stored on the blockchain
  struct RealEstate {
    bool onSale;
    uint weiPrice;
  }

  address public owner;

  // Maps token ID with its associated data
  mapping(uint => RealEstate) private _tokens;

  Counters.Counter private _tokenIds;

  constructor() ERC721("Real Estate", "RST") {
    owner = msg.sender;
  }

  function tokenDataOf(uint _tokenId) external view returns (RealEstate memory) {
    require(_exists(_tokenId), 'Token does not exist.');
    return _tokens[_tokenId];
  }

  function mint(string memory _tokenURI, uint _weiPrice) external returns (uint) {
    _tokenIds.increment();
    uint newItemId = _tokenIds.current();
    _mint(msg.sender, newItemId);
    _setTokenURI(newItemId, _tokenURI);
    _tokens[newItemId] = RealEstate(true, _weiPrice);
    return newItemId;
  }
}
