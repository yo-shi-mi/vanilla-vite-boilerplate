import { ethers } from 'ethers'

export async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' })
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const address = await signer.getAddress()
            console.log('Connected address:', address)
            alert(`Wallet connected: ${address}`)
            // 這裡可以更新 UI 顯示已連接的錢包地址
        } catch (error) {
            console.error('Failed to connect wallet:', error)
            alert('Failed to connect wallet. Please try again.')
        }
    } else {
        console.error('Metamask not detected')
        alert('Please install Metamask to use this feature')
    }
}