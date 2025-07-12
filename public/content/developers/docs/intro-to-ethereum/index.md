---
title: Intro to Ethereum
description: A dapp developer's introduction to the core concepts of Ethereum.
lang: en
---

## What is a blockchain? {#what-is-a-blockchain}

* blockchain
  * == public database /
    * updated
    * shared ACROSS MANY computers | network

* "Block"
  * == consecutive groups
  * uses
    * store data & state
  * If you send ETH to someone else, the transaction data needs to be added to a block to be successful.

* "Chain"
  * == EACH block -- cryptographically references -- its parent
  * if you change the data | block -> change ALL subsequent blocks
    * requirements
      * consensus of the ENTIRE network

* Nodes
  * ensure
    * ALL / interact with the blockchain -> has the SAME data

* [proof-of-stake-based consensus mechanism](/developers/docs/consensus-mechanisms/pos/)
  * used by Ethereum

* validators 
  * can
    * propose NEW blocks | chain
    * verify POSSIBLE NEW blocks
  * requirements
    * stake ETH
    * run validator software

* [Youtube video](https://www.youtube.com/watch?v=_160oMzblY8)
  * [Hash | Sha256](https://andersbrownworth.com/blockchain/hash)
    * inputs
      * `data`
        * alphanumeric
    * output
      * `Hash`
        * ALWAYS SAME input's data -> SAME output's hash
        * INDEPENDENTLY of input's size -> FIXED output's size
  * 💡[Block](https://andersbrownworth.com/blockchain/block) 💡
    * inputs
      * `Block`
        * number
      * `Nonce`
        * number
      * `Data`
    * output
      * `Hash`
        * 👀if it starts `0000` == signed or valid 👀
    * "Mine" button
      * identifies the necessary `Nonce` value / `Hash` is valid
  * [Blockchain](https://andersbrownworth.com/blockchain/blockchain)
    * == chain of blocks
      * if you modify a NON FINAL block ->
        * NEXT blocks are broken
        * you need to mine / validate 1 by 1
    * inputs
      * `Block`
        * number
      * `Nonce`
        * number
      * `Data`
        * alphanumeric
      * `Previous`
        * == 👀PREVIOUS block's output hash👀
    * output
      * `Hash`
        * 👀if it starts `0000` == signed or valid 👀
  * [Distributed](https://andersbrownworth.com/blockchain/distributed)
    * SEVERAL peers of blockchain / 👀ALL peers have IDENTICAL blockchains👀
    * 👀if you want to check if a peer is corrupted -> compare peer1's LAST block's output hash vs peer2's LAST block's output hash👀 
  * [Tokens](https://andersbrownworth.com/blockchain/tokens)
    * == Distributed, 
      * EXCEPT TO
        * `Tx` 
          * -- replacement of --`Data`
          * == 💡transactionS BETWEEN accounts💡== accounting book💡
            * Problem: ⚠️NOT know if sender has ENOUGH money⚠️
  * [Coinbase](https://andersbrownworth.com/blockchain/coinbase)
    * == Tokens, 
      * EXCEPT TO
        * `Coinbase` 
          * | mine EACH block, create token
          * | FIRST block,
            * create token 
            * ❌NO `Tx`❌
              * Reason: 🧠NOBODY had got money 🧠

## What is Ethereum? {#what-is-ethereum}

Ethereum is a blockchain with a computer embedded in it. It is the foundation for building apps and organizations in a decentralized, permissionless, censorship-resistant way.

In the Ethereum universe, there is a single, canonical computer (called the Ethereum Virtual Machine, or EVM) whose state everyone on the Ethereum network agrees on. Everyone who participates in the Ethereum network (every Ethereum node) keeps a copy of the state of this computer. Additionally, any participant can broadcast a request for this computer to perform arbitrary computation. Whenever such a request is broadcast, other participants on the network verify, validate, and carry out ("execute") the computation. This execution causes a state change in the EVM, which is committed and propagated throughout the entire network.

Requests for computation are called transaction requests; the record of all transactions and the EVM's present state gets stored on the blockchain, which in turn is stored and agreed upon by all nodes.

Cryptographic mechanisms ensure that once transactions are verified as valid and added to the blockchain, they can't be tampered with later. The same mechanisms also ensure that all transactions are signed and executed with appropriate "permissions" (no one should be able to send digital assets from Alice's account, except for Alice herself).

## What is ether (ETH)? {#what-is-ether}

* == Ethereum's NATIVE cryptocurrency 
  * uses
    * 👀computation market👀
      * Reason:🧠economic incentive -- for -- participants -- to --
        * verify transactions
        * execute transaction requests🧠
    * staked -- by -- validators
      * 👀== if validators want to participate | network -> need to deposit 32 ETH👀
        * if they behave
          * honestly -> keep stake + earn rewards
          * dishonestly -> lose stake 
    * | propose NEW blocks,
      * weigh 'votes'
  * use cases
    * 💡participant / broadcasts a transaction request -> offer ETH -- as a -- bounty💡
      * network burn part of the bounty -- to -- award whoever 
        * verify the transaction
        * execute it
        * commit it | blockchain
        * broadcast it -- to the -- network
      * -> prevent malicious participants -- by requesting -- execution of infinite computation
        * Reason: 🧠participants MUST pay for computation resources🧠

## What are smart contracts? {#what-are-smart-contracts}

In practice, participants don't write new code every time they want to request a computation on the EVM. Rather, application developers upload programs (reusable snippets of code) into EVM state, and users make requests to execute these code snippets with varying parameters. We call the programs uploaded to and executed by the network smart contracts.

At a very basic level, you can think of a smart contract like a sort of vending machine: a script that, when called with certain parameters, performs some actions or computation if certain conditions are satisfied. For example, a simple vendor smart contract could create and assign ownership of a digital asset if the caller sends ETH to a specific recipient.

Any developer can create a smart contract and make it public to the network, using the blockchain as its data layer, for a fee paid to the network. Any user can then call the smart contract to execute its code, again for a fee paid to the network.

Thus, with smart contracts, developers can build and deploy arbitrarily complex user-facing apps and services such as: marketplaces, financial instruments, games, etc.

## Terminology {#terminology}

### Blockchain {#blockchain}

The sequence of all blocks that have been committed to the Ethereum network in the history of the network. So named because each block contains a reference to the previous block, which helps us maintain an ordering over all blocks (and thus over the precise history).

### ETH {#eth}

* **Ether (ETH)**
  * == Ethereum's NATIVE cryptocurrency
  * uses
    * users pay ETH -- , to execute code, to -- OTHER users

* [More on ETH](/developers/docs/intro-to-ether/)

### EVM {#evm}

The Ethereum Virtual Machine is the global virtual computer whose state every participant on the Ethereum network stores and agrees on. Any participant can request the execution of arbitrary code on the EVM; code execution changes the state of the EVM.

[More on the EVM](/developers/docs/evm/)

### Nodes {#nodes}

The real-life machines which are storing the EVM state. Nodes communicate with each other to propagate information about the EVM state and new state changes. Any user can also request the execution of code by broadcasting a code execution request from a node. The Ethereum network itself is the aggregate of all Ethereum nodes and their communications.

[More on nodes](/developers/docs/nodes-and-clients/)

### Accounts {#accounts}

* uses
  * store ETH | account
  * users can initialize them,
  * transfer ETH from accounts -- to -- other users

* Accounts & account balances
  * 👀stored | EVM's big table👀
  * == part of the EVM state

[More on accounts](/developers/docs/accounts/)

### Transactions {#transactions}

* "transaction request"
  * == request for code execution | EVM
    * -- from -- a node
  * 👀steps to agreed | EVM state, 👀
    * validate
    * execute
      * -> change state | EVM
    * "committed to the network" -- by -- ANOTHER node 
      * -> broadcast | ALL network's nodes 

* "transaction"
  * == fulfilled transaction request + associated change | EVM state
  * _Examples:_
    - send X ETH from my account -- to -- Alice's account
    - publish some smart contract code | EVM state
    - execute the smart contract's code
      - | EVM's address X
      - -- with -- arguments Y

[More on transactions](/developers/docs/transactions/)

### Blocks {#blocks}

* Blocks
  * == dozens OR hundreds of transactions
    * == batches of transactions
    * Reason: 🧠volume of transactions is very high🧠

* [More on blocks](/developers/docs/blocks/)

### Smart contracts {#smart-contracts}

A reusable snippet of code (a program) which a developer publishes into EVM state. Anyone can request that the smart contract code be executed by making a transaction request. Because developers can write arbitrary executable applications into the EVM (games, marketplaces, financial instruments, etc.) by publishing smart contracts, these are often also called [dapps, or Decentralized Apps](/developers/docs/dapps/).

[More on smart contracts](/developers/docs/smart-contracts/)

## Further reading {#further-reading}

- [Ethereum Whitepaper](/whitepaper/)
- [How does Ethereum work, anyway?](https://medium.com/@preethikasireddy/how-does-ethereum-work-anyway-22d1df506369)
  - ⚠️OLD resource⚠️
    - predates [The Merge](/roadmap/merge)
    - refers to Ethereum's proof-of-work mechanism 

## Related tutorials {#related-tutorials}

- [A developer's guide to Ethereum, part 1](/developers/tutorials/a-developers-guide-to-ethereum-part-one/)
