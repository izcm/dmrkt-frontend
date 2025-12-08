import { ALCHEMY_API_KEY as apiKey } from './constants'
import { ALCHEMY_ENDPOINT_URL as endpoint } from './constants'

const baseUrl = `${endpoint}/${apiKey}`

export async function getNFTData() {
  try {
    // The wallet address we want to query for NFTs:
    const ownerAddr = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'
    console.log('fetching NFTs for address:', ownerAddr)
    console.log('...')

    // Get NFTs for owner
    const nftsResponse = await fetch(`${baseUrl}/getNFTsForOwner?owner=${ownerAddr}&pageSize=5`)
    const nftsData = await nftsResponse.json()

    console.log('number of NFTs found:', nftsData.totalCount)
    console.log('...')

    // Print contract address and tokenId for each NFT:
    for (const nft of nftsData.ownedNfts) {
      console.log('===')
      console.log('contract address:', nft.contract.address)
      console.log('token ID:', nft.id.tokenId)
    }
    console.log('===')

    // Fetch metadata for a particular NFT:
    console.log('fetching metadata for a Crypto Coven NFT...')
    const contractAddress = '0x5180db8F5c931aaE63c74266b211F580155ecac8'
    const tokenId = '1590'

    const metadataResponse = await fetch(
      `${baseUrl}/getNFTMetadata?contractAddress=${contractAddress}&tokenId=${tokenId}`
    )
    const response = await metadataResponse.json()

    // Print some commonly used fields:
    console.log('NFT name: ', response.name || response.title)
    console.log('token type: ', response.tokenType)
    console.log('tokenUri: ', response.tokenUri)
    console.log('image url: ', response.image?.originalUrl || response.rawMetadata?.image)
    console.log('time last updated: ', response.timeLastUpdated)
    console.log('===')
  } catch (error) {
    console.error('Request failed:', error)
  }
}
