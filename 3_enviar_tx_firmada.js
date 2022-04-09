const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${INFURA_ID}`)

const account1 = '' // sender

const account2 = '' // recipient

const privatekey1 = '' // Sender private Key
const wallet = new ethers.Wallet(privatekey1, provider)


const main = async () => {

    // Mostrar el balance de la cuenta 1 antes de la transferencia
    const senderBalanceBefore = await provider.getBalance(account1)
    console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}\n`)

    // Mostrar el balance de la cuenta 2 antes de la transferencia
    const recieverBalanceBefore = await provider.getBalance(account2)
    console.log(`\nReciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`)

    // Enviar ethers
    const tx = await wallet.sendTransaction({
        to: account2,
        value: ethers.utils.parseEther("0.025")
    })

    // Esperando por la transacción minada
    await tx.wait()
    console.log(tx)
    
    // Mostrar el balance de la cuenta 1 despues de la transferencia
    const senderBalanceAfter = await provider.getBalance(account1)
    console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}\n`)

    // Mostrar el balance de la cuenta 2 despues de la transferencia
    const recieverBalanceAfter = await provider.getBalance(account2)
    console.log(`\nReciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`)


}

main()