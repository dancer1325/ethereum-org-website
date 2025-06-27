---
title: Node architecture
description: Introduction to how Ethereum nodes are organized.
lang: en
---

* Ethereum node
  * == 
    * | was using [proof-of-work](/developers/docs/consensus-mechanisms/pow/),
      * execution client
    * | implements [proof-of-stake](/developers/docs/consensus-mechanisms/pow/)
      * [execution client](/developers/docs/nodes-and-clients/#execution-clients) + [consensus client](/developers/docs/nodes-and-clients/#consensus-clients)
        * 👀if you want that it proposes a NEW block -> MUST ALSO run a [validator client](#validators)👀
        * EACH client is connected -- to -- their own RESPECTIVE (== SEPARATE) peer-to-peer (P2P) networks
          * Reason: 🧠SEPARATE P2P networks
            * execution clients gossip transactions -- over -- their P2P network
              * enable them -- to manage -- their local transaction pool
            * consensus clients gossip blocks -- over -- their P2P network
              * enable consensus & chain growth🧠

      ![](node-architecture-text-background.png)

* consensus clients
  * pass bundles of transactions -- to the -- execution client

* execution client
  * executes the transactions locally / validate that
    * transactions do NOT violate any Ethereum rules
    * proposed update -- to -- Ethereum’s state is correct

* consensus client
  * drives the execution client -- via the -- [Engine API](https://github.com/ethereum/execution-apis/blob/main/src/engine/common.md)
    * == local RPC connection  
  * uses
    * if a node is selected as block producer -> its consensus client instance requests bundles of transactions -- from the -- execution client
      * Reason:🧠 
        * include | NEW block
        * execute them -- to -- update the global state🧠

## What does the execution client do? {#execution-client}

* responsible for
  * transaction
    * validation,
    * handling
    * gossip
    * re-executing | NEW blocks
      * Reason: 🧠ensure they are valid🧠
  * managing state
  * supporting the [EVM](/developers/docs/evm/)

* ❌NOT responsible for❌
  * block building,
  * block gossiping
  * handling consensus logic

* creates 💡execution payloads💡
  * == list of transactions + updated state trie + OTHER execution-related data
  * uses
    * consensus clients include them | EVERY block

* executing transactions
  * done | [EVM](/developers/docs/evm)
    * == execution client's embedded computer 

* provides
  * UI to Ethereum -- through -- [RPC methods](/developers/docs/apis/json-rpc) / enable users
    * query the Ethereum blockchain
    * submit transactions
    * deploy smart contracts

* RPC calls
  * handled it -- by --
    * libraries 
      * _Example:_ [Web3js](https://docs.web3js.org/), [Web3py](https://web3py.readthedocs.io/en/v5/)
    * UI
      * _Example:_ browser wallet

* execution client
  * == ⭐️user gateway to Ethereum + home to the EVM + Ethereum's state & transaction pool⭐️

## What does the consensus client do? {#consensus-client}

* responsible for
  * ALL logic / node stay in sync -- with the -- Ethereum network
    * _Example:_
      * receive blocks -- from -- peers
      * run a fork choice algorithm / ensure the node ALWAYS follows the chain -- with the -- greatest accumulation of attestations
  * share blocks & attestations -- through -- their OWN P2P network  

* NOT participate in
  * validating blocks
  * proposing blocks 

## Validators {#validators}

* == 💡optional add-on | consensus client💡
  * steps
    * deposit 32 ETH | deposit contract
  * ALLOWED added | ANY time

* responsible for
  * validating blocks
  * proposing blocks
  * accrue rewards or lose ETH -- via -- penalties or slashing

* requirements / can propose a NEW block
  * staking
  * running the validator software

## Components of a node comparison {#node-comparison}

| Execution Client                                   | Consensus Client                                         | Validator                    |
|----------------------------------------------------|----------------------------------------------------------|------------------------------|
| Gossips transactions -- over -- its P2P network    | Gossips blocks & attestations -- over -- its P2P network | Proposes blocks              |
| Executes/re-executes transactions                  | Runs the fork choice algorithm                           | Accrues rewards/penalties    |
| Verifies incoming state changes                    | Keeps track the chain's head                             | Makes attestations           |
| Manages state and receipts tries                   | Manages the Beacon state (== consensus & execution info) | Requires 32 ETH to be staked |
| Creates execution payload                          | Keeps track of accumulated randomness \|  RANDAO         | Can be slashed               |
| Exposes JSON-RPC API for interacting with Ethereum | Keeps track of justification & finalization              |                              |

## Further reading {#further-reading}

- [Proof-of-stake](/developers/docs/consensus-mechanisms/pos)
- [Block proposal](/developers/docs/consensus-mechanisms/pos/block-proposal)
- [Validator rewards and penalties](/developers/docs/consensus-mechanisms/pos/rewards-and-penalties)
