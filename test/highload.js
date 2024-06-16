import { createHighloadWallet, highloadTransfers } from '../index.js'

async function exampleWallet() {
  const { address, seed } = await createHighloadWallet()
  console.log({ address, seed })
  process.exit(0)
}

async function exampleTransfer() {
  /* https://tonscan.org/address/EQD2Ub5nOuXcNoXHBhHCRgqn5ytOGS7NjxysRexEQd4sa794  */

  /* Wallet seed and address from exampleWallet, address is to check it is matched with transfers sender wallet */
  const seed = ''
  const address = ''
  /* Don't forget to deposit some TONs to the address ↑ */

  /* Put your test transfer here */
  const recipient = ''
  const sendMessage = 'hello world'
  const tonAmount = 0.001

  /* Amount less than 0.001 TON will likely fail with code -14 */

  /* Safe transfers count is 50, max is 254 per one request */

  /* For provider using ton-lite-server */

  /* Example of multiple transactions in one blockchain request */
  const transfersCount = 3
  const transfers = []
  const transfer = { recipient, sendMessage, tonAmount }
  for (let i = 0; i < transfersCount; i++) transfers.push(transfer)
  await highloadTransfers({ transfers, seed })
  process.exit(0)
}

// exampleWallet()
// exampleTransfer()