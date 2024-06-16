import { tonMnemonic } from '../private/tonweb.js'
import { loadHighloadWallet } from "../_modules/loadHighloadWallet.js"
import { loadWallet } from '../_modules/loadWallet.js';
import { VERSION_TYPES } from '../private/config.js'
import { mnemonicToWalletKey } from "@ton/crypto";

const mnemonic = await tonMnemonic.generateMnemonic()
console.log("phrase:\n", mnemonic.join(" "))

const seed = await tonMnemonic.mnemonicToSeed(mnemonic);
const seed_hex = Buffer.from(seed).toString('hex')
console.log("seed hex: ", seed_hex)

const wallet =  await loadHighloadWallet({seed: seed})
console.log("wallet", wallet)

const keys = await mnemonicToWalletKey(mnemonic);
console.log("keys", keys)