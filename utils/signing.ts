const contract_addr = process.env.ORDERBOOK_CONTRACT_ADDR

const domain = {
  name: 'dmrkt',
  version: '0',
  chainId: 31337,
  verifyingContract: contract_addr,
}

const fields = [
  { name: 'side', type: 'uint8' },
  { name: 'actor', type: 'address' },
  { name: 'isCollectionBid', type: 'bool' },
  { name: 'collection', type: 'address' },
  { name: 'tokenId', type: 'uint256' },
  { name: 'price', type: 'uint256' },
  { name: 'currency', type: 'address' },
  { name: 'start', type: 'uint64' },
  { name: 'end', type: 'uint64' },
  { name: 'nonce', type: 'uint256' },
]
