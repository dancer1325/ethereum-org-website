---
title: Nodes and clients
description: An overview of Ethereum nodes and client software, plus how to set up a node and why you should do it.
lang: en
sidebarDepth: 2
---

* Ethereum
  * 💡== distributed network of computers (nodes) / run software 💡/
    * can 
      * verify blocks & transaction data
    * == if your computer run this software -> your computer == Ethereum node
    * 👀software == 2 separate pieces (known as 'clients')👀

## What are nodes and clients? {#what-are-nodes-and-clients}

* network
  * == set of nodes / connected
* "node"
  * == Ethereum client software's instance / connected -- to -- OTHER computers / ALSO run Ethereum software
  * requirements
    * 👀run 2 clients👀/
      * work together -- to --
        * keep track of the Ethereum chain's head
        * enable users -- to interact with the -- Ethereum network
      * are
        * consensus client
        * execution client 
      * have [encapsulated complexity](https://vitalik.eth.limo/general/2022/02/28/complexity.html)
      * 💡made easier 💡
        * execute [The Merge](/ethereum-org-website/public/content/roadmap/merge) 
        * makes client software easier to maintain & develop
        * reuse of individual clients
          * _Example:_ | [layer 2 ecosystem](/layer-2/)

* client
  * == implementation of Ethereum / 
    * verifies data -- against the -- protocol rules
    * keeps the network secure

* execution client  
  * or Execution Engine or EL client or Eth1 client
  * in charge of
    * listening to NEW transactions broadcasted | network,
    * executing transactions | EVM,
    * holds of ALL current Ethereum data
      * the latest state
      * the latest database 

* consensus client
  * 👀or Beacon Node or CL client or Eth2 client 👀
  * 👀implements the proof-of-stake consensus algorithm👀 
    * -> network can achieve agreement -- based on -- validated data -- from the -- execution client

* 'validator'
  * ⚠️3th piece of software⚠️
  * 👀can be added | consensus client👀
  * enable
    * node can participate -- to -- secure the network

![Coupled execution and consensus clients](./eth1eth2client.png)

### Client diversity {#client-diversity}

* WIDE diversity 
  * -- for -- 
    * [execution clients](./client-diversity/index.md#execution-clients-execution-clients) & 
    * [consensus clients](./client-diversity/index.md#consensus-clients-consensus-clients)
  * / 
    * EACH one -- focused on -- DIFFERENT features & user audiences
      * Reason: 🧠NO client dominating🧠
    * 👀ALL follow the specifications 👀
      - [Ethereum Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf)
      - [Execution specs](https://github.com/ethereum/execution-specs/)
      - [Consensus specs](https://github.com/ethereum/consensus-specs)
      - [EIPs](https://eips.ethereum.org/) implemented -- through -- [network upgrades](/ethereum-org-website/public/content/history/)

* [client diversity](client-diversity/)

### Tracking nodes | network {#network-overview}

* Tracking nodes
  * display real-time overview of nodes | Ethereum network /
    * limited view of the network
      * Reason: 🧠decentralized networks🧠
    * 👀might report DIFFERENT results 👀
 

- [Map of nodes](https://etherscan.io/nodetracker)
- [Ethernodes](https://ethernodes.org/)
- [Nodewatch](https://www.nodewatch.io/)
  - crawl consensus nodes
- [Monitoreth](https://monitoreth.io/)
  - distributed network monitoring tool

## Node types {#node-types}

* EACH node type
  * consume DIFFERENTLY data 
  * has DIFFERENT sync strategies / enable faster synchronization

* synchronization
  * == how quickly up-to-date information | Ethereum's state

### Full node {#full-node}

* 👀validate block-by-block the blockchain 👀
  * ==
    * download the blocks
    * verify / EACH block,
      * block body
      * state data 

* full node's classes
  * classes / verify [genesis block, ENTIRE history of the blockchain]
  * classes / verify MORE recent block
    * _Example:_ Geth's 'snap sync

* ONLY store local copy of relatively RECENT data (last 128 blocks)
  * older data are deleted
    * Reason: 🧠
      * save disk space
      * if you need it -> you can regenerate it🧠
  * if you want to get ALL states
    * retrieve -- from -- local storage or
    * regenerate -- from -- 'snapshots' 
* provides
  * data | request (TODO: ❓)

### Archive node {#archive-node}

* == full nodes / 
  * verify every block -- from -- genesis
  * NEVER delete any downloaded data

* stores everything kept | full node
* builds an archive of historical states
  * terabytes
  * uses 
    * query something
      * _Example:_ account balance | block #4,000,000
    * test your own transactions set
      * WITHOUT mining them
      * -- via -- tracing
    * by services
      * _Example:_ block explorers, wallet vendors, and chain analytics

* ⚠️if you sync clients | mode != archive -> pruned blockchain data⚠️
  * Reason: 🧠if you do NOT build full node / build ALL historical states -> there is NO archive of ALL historical states🧠

* [Archive nodes](/developers/docs/nodes-and-clients/archive-nodes)

### Light node {#light-node}

* ⚠️ONLY download block headers⚠️
  * if light node requires ANOTHER information -> gets requested -- from a -- full node 
  * -> ❌NOT require (vs full nodes) ❌
    * powerful hardware or
    * high bandwidth 

* can
  * verify data independently
  * access | Ethereum blockchain / 
    * SAME functionality
    * SAME security guarantees

* block headers
  * == block's content's summary information
 
* devices | can run
  * mobile phones
  * embedded devices

* ❌NOT participate | consensus❌   
  * == can NOT be miners/validators

* ACTIVELY under development
  * == there are NOT so many
  * _Example:_ 
    * [Nimbus](https://nimbus.team/),
    * [Helios](https://github.com/a16z/helios),
    * [LodeStar](https://lodestar.chainsafe.io/)

* [gossip network](https://www.ethportal.net/)
  * portal network of light clients 
    * WITHOUT requiring full nodes -- to -- serve requests

## Why should I run an Ethereum node? {#why-should-i-run-an-ethereum-node}

* allows you to
  * use Ethereum
    * directly,
      * == ❌NOT need to use OTHER nodes❌
    * trustlessly
    * privately 

* support the network
  * Reason: 🧠keeping it MORE robust and decentralized🧠

* "Don't trust, verify"
  * FAMOUS quote

### Benefits to you {#benefits-to-you}

* use 
  * Ethereum wallet | your OWN node
  * dapps MORE securely & privately 
    * Reason: 🧠NOT leak your addresses & balances | intermediaries🧠
* OWN client / check everything 
* [MetaMask](https://metamask.io), [Frame](https://frame.sh/), and [many other wallets](/wallets/find-wallet/) 
  * can use your node
    * Reason: 🧠thanks to RPC-importing🧠
* run & self-host other services / -- depend on -- Ethereum's data
  * _Examples:_ Beacon Chain validator, software L2, infrastructure, block explorers, payment processors, etc.
* customize [RPC endpoints](/developers/docs/apis/json-rpc/)
  * offered publicly -- to the -- community
* connect -- , via Inter-process Communications (IPC), to -- your node
* rewrite the node / load your program -- as a -- plugin
  * -> low latency -> make easier
    * | process a lot of data -- via -- web3 libraries or 
    * | replace FASTLY your transactions
* DIRECTLY stake ETH
  * -- to --
    * secure the network
    * earn rewards
  * see [solo staking](/staking/solo/)

![How you access Ethereum via your application and nodes](./nodes.png)

### Network benefits {#network-benefits}

* DIVERSE set of nodes
  * enable Ethereum’s 
    * health
    * security
    * operational resiliency

* FULL nodes 
  * enforce the consensus rules
  * provides 
    * EXTRA security | network
      * Reason: 🧠if ALL the nodes were light nodes (== NOT full verify) -> validators could attack the network🧠
    * provide, for lightweight clients, access -- to -- blockchain data 
* if an attack overcomes [proof-of-stake](/developers/docs/consensus-mechanisms/pos/#what-is-pos) -> social recovery -- can be performed by -- FULL nodes / choose to follow the honest chain
* if MORE nodes | network -> MORE diverse and robust network 
* if you run a FULL node -> whole Ethereum network benefits from it

## Running your own node {#running-your-own-node}

* [run a node](/run-a-node)
* [spin up your own node](/developers/docs/nodes-and-clients/run-a-node/)

## Alternatives {#alternatives}

* cons of setting up your OWN node
  * time
  * resources

* use a third party API provider
  * [nodes -- as a -- service](/developers/docs/nodes-and-clients/nodes-as-a-service/)

* run a 
  * Ethereum node / has public API
    * uses
      * point your wallets -- , via Custom RPC, to a -- community node
  * client
    * uses
      * by anyone

## Execution clients {#execution-clients}

* maintained -- by -- Ethereum community
* PREVIOUSLY known -- as -- 'Eth1 clients'
* clients /
  * pass [client tests](https://github.com/ethereum/tests)
  * ACTIVELY maintained

| Client                                                                   | Language   | Operating systems     | Networks                  | Sync strategies                                                | State pruning   |
| ------------------------------------------------------------------------ | ---------- | --------------------- | ------------------------- | -------------------------------------------------------------- | --------------- |
| [Geth](https://geth.ethereum.org/)                                       | Go         | Linux, Windows, macOS | Mainnet, Sepolia, Holesky | [Snap](#snap-sync), [Full](#full-sync)                         | Archive, Pruned |
| [Nethermind](https://www.nethermind.io/)                                 | C#, .NET   | Linux, Windows, macOS | Mainnet, Sepolia, Holesky | [Snap](#snap-sync) (without serving), Fast, [Full](#full-sync) | Archive, Pruned |
| [Besu](https://besu.hyperledger.org/en/stable/)                          | Java       | Linux, Windows, macOS | Mainnet, Sepolia, Holesky | [Snap](#snap-sync), [Fast](#fast-sync), [Full](#full-sync)     | Archive, Pruned |
| [Erigon](https://github.com/ledgerwatch/erigon)                          | Go         | Linux, Windows, macOS | Mainnet, Sepolia, Holesky | [Full](#full-sync)                                             | Archive, Pruned |
| [Reth](https://reth.rs/)                                                 | Rust       | Linux, Windows, macOS | Mainnet, Sepolia, Holesky | [Full](#full-sync)                                             | Archive, Pruned |
| [EthereumJS](https://github.com/ethereumjs/ethereumjs-monorepo) _(beta)_ | TypeScript | Linux, Windows, macOS | Sepolia, Holesky          | [Full](#full-sync)                                             | Pruned          |

### Besu {#besu}

Hyperledger Besu is an enterprise-grade Ethereum client for public and permissioned networks
* It runs all of the Ethereum Mainnet features, from tracing to GraphQL, has extensive monitoring and is supported by ConsenSys, both in open community channels and through commercial SLAs for enterprises
* It is written in Java and is Apache 2.0 licensed.

Besu's extensive [documentation](https://besu.hyperledger.org/en/stable/) will guide you through all details on its features and setups.

### Erigon {#erigon}

Erigon, formerly known as Turbo‐Geth, started as a fork of Go Ethereum oriented toward speed and disk‐space efficiency. Erigon is a completely re-architected implementation of Ethereum, currently written in Go but with implementations in other languages under development. Erigon's goal is to provide a faster, more modular, and more optimized implementation of Ethereum. It can perform a full archive node sync using around 2TB of disk space, in under 3 days.

### Go Ethereum {#geth}

* Ethereum protocol's original implementations 
* MOST widespread client
* the biggest
  * user base
  * variety of tooling

* [documentation](https://geth.ethereum.org/docs/)

### Nethermind {#nethermind}

Nethermind is an Ethereum implementation created with the C# .NET tech stack, licensed with LGPL-3.0, running on all major platforms including ARM
* It offers great performance with:

- an optimized virtual machine
- state access
- networking and rich features like Prometheus/Grafana dashboards, seq enterprise logging support, JSON-RPC tracing, and analytics plugins.

Nethermind also has [detailed documentation](https://docs.nethermind.io), strong dev support, an online community and 24/7 support available for premium users.

### Reth {#reth}

Reth (short for Rust Ethereum) is an Ethereum full node implementation that is focused on being user-friendly, highly modular, fast and efficient. Reth was originally built and driven forward by Paradigm, and is licensed under the Apache and MIT licenses.

Reth is production ready, and suitable for usage in mission-critical environments such as staking or high-uptime services. Performs well in use cases where high performance with great margins is required such as RPC, MEV, indexing, simulations, and P2P activities.

Learn more by checking out the [Reth Book](https://reth.rs/), or the [Reth GitHub repo](https://github.com/paradigmxyz/reth?tab=readme-ov-file#reth).

### In development {#execution-in-development}

These clients are still in earlier stages of development and are not yet recommended for production use.

#### EthereumJS {#ethereumjs}

The EthereumJS Execution Client (EthereumJS) is written in TypeScript and composed of a number of packages, including core Ethereum primitives represented by the Block, Transaction, and Merkle-Patricia Trie classes and core client components including an implementation of the Ethereum Virtual Machine (EVM), a blockchain class, and the DevP2P networking stack.

Learn more about it by reading its [documentation](https://github.com/ethereumjs/ethereumjs-monorepo/tree/master)

## Consensus clients {#consensus-clients}

There are multiple consensus clients (previously known as 'Eth2' clients) to support the [consensus upgrades](/roadmap/beacon-chain/). They are responsible for all consensus-related logic including the fork-choice algorithm, processing attestations and managing [proof-of-stake](/developers/docs/consensus-mechanisms/pos) rewards and penalties.

| Client                                                        | Language   | Operating systems     | Networks                                                  |
| ------------------------------------------------------------- | ---------- | --------------------- | --------------------------------------------------------- |
| [Lighthouse](https://lighthouse.sigmaprime.io/)               | Rust       | Linux, Windows, macOS | Beacon Chain, Holesky, Pyrmont, Sepolia, and more         |
| [Lodestar](https://lodestar.chainsafe.io/)                    | TypeScript | Linux, Windows, macOS | Beacon Chain, Holesky, Sepolia, and more                  |
| [Nimbus](https://nimbus.team/)                                | Nim        | Linux, Windows, macOS | Beacon Chain, Holesky, Sepolia, and more                  |
| [Prysm](https://docs.prylabs.network/docs/getting-started/)   | Go         | Linux, Windows, macOS | Beacon Chain, Gnosis, Holesky, Pyrmont, Sepolia, and more |
| [Teku](https://consensys.net/knowledge-base/ethereum-2/teku/) | Java       | Linux, Windows, macOS | Beacon Chain, Gnosis, Holesky, Sepolia, and more          |
| [Grandine](https://docs.grandine.io/)                         | Rust       | Linux, Windows, macOS | Beacon Chain, Holesky, Sepolia, and more                  |

### Lighthouse {#lighthouse}

Lighthouse is a consensus client implementation written in Rust under the Apache-2.0 license. It is maintained by Sigma Prime and has been stable and production-ready since Beacon Chain genesis. It is relied upon by various enterprises, staking pools and individuals. It aims to be secure, performant and interoperable in a wide range of environments, from desktop PCs to sophisticated automated deployments.

Documentation can be found in [Lighthouse Book](https://lighthouse-book.sigmaprime.io/)

### Lodestar {#lodestar}

Lodestar is a production-ready consensus client implementation written in Typescript under the LGPL-3.0 license. It is maintained by ChainSafe Systems and is the newest of the consensus clients for solo-stakers, developers and researchers. Lodestar consists of a beacon node and validator client powered by JavaScript implementations of Ethereum protocols. Lodestar aims to improve Ethereum usability with light clients, expand accessibility to a larger group of developers and further contribute to ecosystem diversity.

More information can be found on our [Lodestar website](https://lodestar.chainsafe.io/)

### Nimbus {#nimbus}

Nimbus is a consensus client implementation written in Nim under the Apache-2.0 license. It is a production-ready client in use by solo-stakers and staking pools. Nimbus is designed for resource efficiency, making it easy to run on resource-restricted devices and enterprise infrastructure with equal ease, without compromising stability or reward performance. A lighter resource footprint means the client has a greater margin of safety when the network is under stress.

Learn more in [Nimbus docs](https://nimbus.guide/)

### Prysm {#prysm}

Prysm is a full-featured, open source consensus client written in Go under the GPL-3.0 license. It features an optional webapp UI and prioritizes user experience, documentation, and configurability for both stake-at-home and institutional users.

Visit [Prysm docs](https://docs.prylabs.network/docs/getting-started/) to learn more.

### Teku {#teku}

Teku is one of the original Beacon Chain genesis clients. Alongside the usual goals (security, robustness, stability, usability, performance), Teku specifically aims to comply fully with all the various consensus client standards.

Teku offers very flexible deployment options. The beacon node and validator client can be run together as a single process, which is extremely convenient for solo stakers, or nodes can be run separately for sophisticated staking operations. In addition, Teku is fully interoperable with [Web3Signer](https://github.com/ConsenSys/web3signer/) for signing key security and slashing protection.

Teku is written in Java and is Apache 2.0 licensed. It is developed by the Protocols team at ConsenSys that is also responsible for Besu and Web3Signer. Learn more in [Teku docs](https://docs.teku.consensys.net/en/latest/).

### Grandine {#grandine}

Grandine is a consensus client implementation, written in Rust under the GPL-3.0 license. It is maintained by the Grandine Core Team and is fast, high-performance and lightweight. It fits a wide range of stakers from solo stakers running on low-resource devices such as Raspberry Pi to large institutional stakers running tens of thousands of validators.

Documentation can be found in the [Grandine Book](https://docs.grandine.io/)

## Synchronization modes {#sync-modes}

* Ethereum client 
  * 👀sync -- with the -- latest network state👀
    * Reason: 🧠follow & verify CURRENT data | network🧠 
    * steps
      * download data -- , cryptographically verifying their integrity, from -- peers 
      * build a local blockchain database
    * have their OWN sync algorithms

* Synchronization modes
  * == DIFFERENT sync approaches

### Execution layer sync modes {#execution-layer-sync-modes}

#### Full sync {#full-sync}

* steps
  * downloads ALL blocks (ALSO headers & block bodies)
  * 👀regenerates the state of the blockchain incrementally👀
    * executing ALL block -- from -- genesis

* pros
  * minimizes trust
  * the highest security
    * Reason: 🧠verify EVERY transaction🧠

* can take [days, weeks]

* _Example:_ [Archive nodes](#archive-node)

#### Fast sync {#fast-sync}

* steps
  * downloads ALL blocks (ALSO headers + transactions + receipts)
  * relies | receipts / reaches a RECENT head

* pros
  * fast sync strategy
  * reduces processing demand -- in favor of -- bandwidth usage

#### Snap sync {#snap-sync}

* verify the chain 👀block-by-block👀

* steps
  * verifies -- from -- MORE recent 'trusted' checkpoint ( / part of the blockchain)
    * == ❌NOT start | genesis block❌ 

* checkpoints
  * saved PERIODICALLY -- by -- node
    * node remove data / older than certain age
  * uses
    * regenerate state data
  * NOT uses
    * storing it FOREVER

* | NOWADAYS,
  * by default, | Ethereum Mainnet

* pros
  * fast sync strategy
  * saves disk usage & network bandwidth - WITHOUT sacrificing -- security

* [More on snap sync](https://github.com/ethereum/devp2p/blob/master/caps/snap.md)

#### Light sync {#light-sync}

* steps
  * downloads ALL block headers & block data
  * verify RANDOMLY SOME of PREVIOUS information 
  * syncs top of the chain -- from the -- trusted checkpoint
    * == 
      * gets ONLY the LATEST state
      * rely on developers & consensus mechanism 
   
* pros
  * client is ready to use | FEW minutes

* **NB** Light sync (TODO: ❓) 
  * ❌NOT YET work with proof-of-stake Ethereum❌

* [More on light clients](/developers/docs/nodes-and-clients/light-clients/)

### Consensus layer sync modes {#consensus-layer-sync-modes}

#### Optimistic sync {#optimistic-sync}

* == post-merge synchronization strategy
* design
  * 👀opt-in & backwards compatible👀
* allow
  * execution nodes can -- , via established methods, -- sync 

* steps
  * execution engine 
    * _optimistically_ import beacon blocks / WITHOUT fully verifying them
    * find the latest head
    * start -- , with the above methods (TODO: ❓), -- syncing the chain 
    * | being updated,
      * inform -- , about the validity of the transactions | Beacon Chain, to the -- consensus client  

* [More on optimistic sync](https://github.com/ethereum/consensus-specs/blob/dev/sync/optimistic.md)

#### Checkpoint sync {#checkpoint-sync}

* == weak subjectivity sync
* steps
  * creates a superior user experience -- for -- syncing a Beacon Node
    * == node
      * download -- , connecting to a remote service, -- recent finalized states
        * ⚠️choose CAREFULLY the remote service ⚠️
      * 👀verify data -- from -- recent finalized states👀 

* assumptions
  * [weak subjectivity](/developers/docs/consensus-mechanisms/pos/weak-subjectivity/) /
    * sync the Beacon Chain -- from a -- recent weak subjectivity checkpoint (!= genesis)

* 's INITIAL sync time vs sync from [genesis](/glossary/#genesis-block)'s INITIAL sync time 
  * faster

* [checkpoint sync](https://notes.ethereum.org/@djrtwo/ws-sync-in-practice)

## Further reading {#further-reading}

- [Ethereum 101 - Part 2 - Understanding Nodes](https://kauri.io/ethereum-101-part-2-understanding-nodes/48d5098292fd4f11b251d1b1814f0bba/a) _
- [Running Ethereum Full Nodes: A Guide for the Barely Motivated](https://medium.com/@JustinMLeroux/running-ethereum-full-nodes-a-guide-for-the-barely-motivated-a8a13e7a0d31) _

## Related topics {#related-topics}

- [Blocks](/developers/docs/blocks/)
- [Networks](/developers/docs/networks/)

## Related tutorials {#related-tutorials}

- [Turn your Raspberry Pi 4 -- into a -- validator node](/developers/tutorials/run-node-raspberry-pi/) 
  - steps
    - flash the MicroSD card
