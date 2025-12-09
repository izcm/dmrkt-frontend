export const getLooksRareOrders = async () => {
  const res = await fetch(`https://api-sepolia.looksrare.org/api/v2/orders`)
  console.log('The result from looksrare: ')
  console.log(res)
}
