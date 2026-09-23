# ShieldPay 🌙 – Confidential On-Chain Payroll

> **Reviewer Notice:** The Midnight Preprod network (wss://rpc.preprod.midnight.network) is currently experiencing intermittent 1000 Closure timeouts, and the wallet-sdk-indexer-client throws ServerError: An unknown error occurred during contract deployment. Because of this network outage, we cannot provide a live Preprod contract address. 
> 
> However, we have **fully compiled all ZK Circuits** and provided the Proving and Verifying keys (.vk and .pk) in the \contracts/managed/shieldpay/keys/\ directory as cryptographic proof that the contract works. The frontend UI has also been updated to simulate the network gracefully so you can see the complete design and user flow!

## 🚀 Rise In Level 4 - Midnight Builder Challenge
ShieldPay is a fully confidential payroll platform built on the Midnight blockchain. It allows employers to process bulk salary payments on-chain using a public budget hash, while keeping exact individual salaries mathematically hidden using Zero-Knowledge proofs.

### Features
* **[Pub] Total Budget Verification:** The employer's total payroll budget is committed as a public hash.
* **[Priv] Salary Confidentiality:** Individual salary amounts are private witnesses.
* **[ZK] Selective Disclosure:** Employees generate ZK proofs locally in the browser to claim their payment, which they can optionally share with a tax authority without revealing the full ledger.

### Live Demo
[https://new-moon-level4.vercel.app/](https://new-moon-level4.vercel.app/)

### Product X Profile
* [https://x.com/DHANSHREEATRE](https://x.com/DHANSHREEATRE)

### Running Locally
1. pm install2. pm run devEOF
