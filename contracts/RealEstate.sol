// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;
pragma abicoder v2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract SupRealEstate is ERC721 {
  using Counters for Counters.Counter;

  address payable public owner;

  // Token data stored on the blockchain
  struct RealEstate {
    bool onSale;
    uint weiPrice;
  }

  // Maps token ID with its associated data
  mapping(uint => RealEstate) private _tokens;

  Counters.Counter private _tokenIds;

  constructor() ERC721("Real Estate", "RST") {
    owner = msg.sender;
  }

  modifier tokenExists(uint _tokenId) {
    require(_exists(_tokenId), 'Token does not exists.');
    _;
  }

  function tokenDataOf(uint _tokenId) tokenExists(_tokenId) external view returns (RealEstate memory) {
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

  function buy(uint _tokenId) tokenExists(_tokenId) external payable {
    require(ownerOf(_tokenId) != msg.sender, 'Token already owned.');
    require(_tokens[_tokenId].onSale == true, 'Token is not for sale.');
    require(msg.value >= _tokens[_tokenId].weiPrice, 'Not enough ETH has been sent.');

    address payable tokenOwner = payable(ownerOf(_tokenId));
    tokenOwner.transfer((msg.value * 90) / 100);

    _safeTransfer(tokenOwner, msg.sender, _tokenId, "");
    _tokens[_tokenId].onSale = false;
  }

  function setOnSale(uint _tokenId, bool _onSale) tokenExists(_tokenId) external {
    require(ownerOf(_tokenId) == msg.sender, 'Token not owned.');
    _tokens[_tokenId].onSale = _onSale;
  }
}
