const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY
const ALCHEMY_ENDPOINT_URL = process.env.ALCHEMY_ENDPOINT_URL

async function getCollections() {
  const res = await fetch(`${ALCHEMY_ENDPOINT_URL}/something?something=`)
  const colData = await res.json()

  console.log('collections', colData)
}
