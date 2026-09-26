# Midnight Private Payroll

![CI](https://github.com/Dhanshree-atre/Level4NewMoon/actions/workflows/ci.yml/badge.svg)

> A confidential payroll protocol that lets organizations disburse funds on-chain without exposing individual salaries.

## Live Demo
[Preprod demo URL — I will paste after deploying frontend]

## Contract Address
| Network  | Address                              |
|----------|--------------------------------------|
| Preprod  | [ADDRESS — I will paste after deploy]|

## What This Product Does
In the current Web3 landscape, paying employees or contractors on a public blockchain exposes everyone's salary to the world. This leaks sensitive competitive information and violates employee privacy expectations. As a result, companies either avoid crypto payroll entirely, or use complex off-chain mixers.

Midnight Private Payroll solves this directly by leveraging the Midnight Network's zero-knowledge capabilities. An employer can commit a lump-sum payroll budget to a smart contract, along with cryptographic commitments (hashes) of each employee's salary. 

Employees can then generate a ZK proof locally on their machine to claim their portion of the funds. The protocol guarantees that no funds are double-spent and the total disbursed matches the budget, all while keeping individual salaries completely hidden from the public, coworkers, and competitors.

## Privacy Model
- **What is PUBLIC (on-chain, anyone can see):** The total payroll budget for the period, a set of cryptographic commitments (hashes), and whether a commitment has been claimed.
- **What is PRIVATE (private witness, never on-chain):** The individual employee's wallet address, their specific payment amount, and their secret salt.
- **What the user PROVES without revealing:** 
  - The employer proves that the sum of the individual private amounts matches the total public budget.
  - The employee proves they possess the correct preimage (address, amount, salt) corresponding to an unclaimed commitment on the ledger, authorizing the withdrawal.

## Tech Stack
- **Smart Contract:** Compact (Minokawa)
- **Frontend:** React, TypeScript, Vite, TailwindCSS
- **Blockchain:** Midnight Network (Preprod)
- **Testing:** Jest

## Prerequisites
- Node.js v22+
- Docker (for local proof server)
- Midnight `compact` CLI installed
- Lace Wallet browser extension

## Setup & Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dhanshree-atre/Level4NewMoon.git
   cd Level4NewMoon/private-payroll
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Compile the Smart Contract**
   ```bash
   compact compile contracts/private-payroll.compact managed/
   ```

4. **Start the Frontend**
   ```bash
   npm run dev
   ```

## Run Tests
Run the Jest test suite to verify the logic of the privacy protocol:
```bash
npm run test
```

## CI/CD
This repository is configured with a GitHub Actions workflow (`.github/workflows/ci.yml`) that automatically installs dependencies, compiles the Compact smart contract, and runs the test suite on every push to the `main` branch.

## Usage Guide
See [docs/USAGE.md](docs/USAGE.md) for a non-technical, step-by-step guide on how to fund and claim payroll.

## Product X Profile
https://x.com/DHANSHREEATRE
