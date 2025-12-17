import { AlchemyCollection } from '@/lib/alchemy'

export const MOCK_COLLECTIONS: Record<string, AlchemyCollection> = {
  '0x6FE69253967982531bDe0C06476e7fe427f3F56c': {
    address: '0x6FE69253967982531bDe0C06476e7fe427f3F56c',
    name: 'DMrktGremlin',
    symbol: 'DNFT',
    totalSupply: '2025',
    tokenType: 'ERC721',
    contractDeployer: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    deployedBlockNumber: 1,
    openSeaMetadata: {
      imageUrl: '/mockNFTs/DMrktGremlin.svg',
      description: 'Local dev NFT collection',
      collectionName: 'DMrkt Gremlin',
    },
  },
}
