// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract SupRealEstate is ERC721 {
  using Counters for Counters.Counter;

  address payable public owner;

  Counters.Counter private _tokenIds;
  struct RealEstate {
    bool onSale;
    uint weiPrice;
  }
  mapping(uint => RealEstate) private _tokens;

  constructor() ERC721("Real Estate", "RST") public {
    owner = msg.sender;
  }

  function allTokens() external view returns(uint[] memory) {
    uint nTokens = totalSupply();
    uint[] memory tokens = new uint[](nTokens);
    for (uint i = 0; i < nTokens; i++) {
      tokens[i] = tokenByIndex(i);
    }
    return tokens;
  }

  function mint(string memory _tokenURI, uint _weiPrice) external returns (uint) {
    _tokenIds.increment();
    uint newItemId = _tokenIds.current();
    _mint(msg.sender, newItemId);
    _setTokenURI(newItemId, _tokenURI);
    _tokens[newItemId] = RealEstate(true, _weiPrice);
    return newItemId;
  }

  function buy(uint _tokenId) external payable {
    require(_exists(_tokenId), 'Token does not exists.');
    require(ownerOf(_tokenId) != msg.sender, 'Token already owned.');
    require(_tokens[_tokenId].onSale == true, 'Token is not for sale.');
    require(msg.value >= _tokens[_tokenId].weiPrice, 'Not enough ETH has been sent.');

    address payable tokenOwner = payable(ownerOf(_tokenId));
    tokenOwner.transfer((msg.value * 90) / 100);

    _safeTransfer(tokenOwner, msg.sender, _tokenId, "");
    _tokens[_tokenId].onSale = false;
  }
}
