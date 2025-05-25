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
  * or Beacon Node or CL client or Eth2 client
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

* TODO: Multiple trackers offer a real-time overview of nodes in the Ethereum network
* Note that due to the nature of decentralized networks, these crawlers can only provide a limited view of the network and might report different results.

- [Map of nodes](https://etherscan.io/nodetracker) by Etherscan
- [Ethernodes](https://ethernodes.org/) by Bitfly
- [Nodewatch](https://www.nodewatch.io/) by Chainsafe, crawling consensus nodes
- [Monitoreth](https://monitoreth.io/) - by MigaLabs, A distributed network monitoring tool

## Node types {#node-types}

If you want to [run your own node](/developers/docs/nodes-and-clients/run-a-node/), you should understand that there are different types of node that consume data differently
* In fact, clients can run three different types of nodes: light, full and archive
* There are also options of different sync strategies which enable faster synchronization time
* Synchronization refers to how quickly it can get the most up-to-date information on Ethereum's state.

### Full node {#full-node}

Full nodes do a block-by-block validation of the blockchain, including downloading and verifying the block body and state data for each block
* There are different classes of full node - some start from the genesis block and verify every single block in the entire history of the blockchain
* Others start their verification at a more recent block that they trust to be valid (e.g. Geth's 'snap sync')
* Regardless of where the verification starts, full nodes only keep a local copy of relatively recent data (typically the most recent 128 blocks), allowing older data to be deleted to save disk space
* Older data can be regenerated when it is needed.

- Stores full blockchain data (although this is periodically pruned so a full node does not store all state data back to genesis)
- Participates in block validation, verifies all blocks and states.
- All states can be either retrieved from local storage or regenerated from 'snapshots' by a full node.
- Serves the network and provides data on request.

### Archive node {#archive-node}

Archive nodes are full nodes that verify every block from genesis and never delete any of the downloaded data.

- Stores everything kept in the full node and builds an archive of historical states
* It is needed if you want to query something like an account balance at block #4,000,000, or simply and reliably test your own transactions set without mining them using tracing.
- This data represents units of terabytes, which makes archive nodes less attractive for average users but can be handy for services like block explorers, wallet vendors, and chain analytics.

Syncing clients in any mode other than archive will result in pruned blockchain data
* This means, there is no archive of all historical states but the full node is able to build them on demand.

Learn more about [Archive nodes](/developers/docs/nodes-and-clients/archive-nodes).

### Light node {#light-node}

Instead of downloading every block, light nodes only download block headers
* These headers contain summary information about the contents of the blocks
* Any other information the light node requires gets requested from a full node
* The light node can then independently verify the data they receive against the state roots in the block headers
* Light nodes enable users to participate in the Ethereum network without the powerful hardware or high bandwidth required to run full nodes
* Eventually, light nodes might run on mobile phones or embedded devices
* The light nodes do not participate in consensus (i.e. they cannot be miners/validators), but they can access the Ethereum blockchain with the same functionality and security guarantees as a full node.

Light clients are an area of active development for Ethereum and we expect to see new light clients for the consensus layer and execution layer soon.
There are also potential routes to providing light client data over the [gossip network](https://www.ethportal.net/)
* This is advantageous because the gossip network could support a network of light nodes without requiring full nodes to serve requests.

Ethereum does not support a large population of light nodes yet, but light node support is an area expected to develop rapidly in the near future
* In particular, clients like [Nimbus](https://nimbus.team/), [Helios](https://github.com/a16z/helios), and [LodeStar](https://lodestar.chainsafe.io/) are currently heavily focused on light nodes.

## Why should I run an Ethereum node? {#why-should-i-run-an-ethereum-node}

Running a node allows you to directly, trustlessly and privately use Ethereum while supporting the network by keeping it more robust and decentralized.

### Benefits to you {#benefits-to-you}

Running your own node enables you to use Ethereum in a private, self-sufficient and trustless manner
* You don't need to trust the network because you can verify the data yourself with your client
* "Don't trust, verify" is a popular blockchain mantra.

- Your node verifies all the transactions and blocks against consensus rules by itself. This means you don’t have to rely on any other nodes in the network or fully trust them.
- You can use an Ethereum wallet with your own node. You can use dapps more securely and privately because you won't have to leak your addresses and balances to intermediaries. Everything can be checked with your own client. [MetaMask](https://metamask.io), [Frame](https://frame.sh/), and [many other wallets](/wallets/find-wallet/) offer RPC-importing, allowing them to use your node.
- You can run and self-host other services which depend on data from Ethereum. For example, this might be a Beacon Chain validator, software like layer 2, infrastructure, block explorers, payment processors, etc.
- You can provide your own custom [RPC endpoints](/developers/docs/apis/json-rpc/). You could even offer these endpoints publicly to the community to help them avoid big centralized providers.
- You can connect to your node using **Inter-process Communications (IPC)** or rewrite the node to load your program as a plugin. This grants low latency, which helps a lot, e.g. when processing a lot of data using web3 libraries or when you need to replace your transactions as fast as possible (i.e. frontrunning).
- You can directly stake ETH to secure the network and earn rewards. See [solo staking](/staking/solo/) to get started.

![How you access Ethereum via your application and nodes](./nodes.png)

### Network benefits {#network-benefits}

A diverse set of nodes is important for Ethereum’s health, security and operational resiliency.

- Full nodes enforce the consensus rules so they can’t be tricked into accepting blocks that don't follow them. This provides extra security in the network because if all the nodes were light nodes, which don't do full verification, validators could attack the network.
- In case of an attack which overcomes the crypto-economic defenses of [proof-of-stake](/developers/docs/consensus-mechanisms/pos/#what-is-pos), a social recovery can be performed by full nodes choosing to follow the honest chain.
- More nodes in the network result in a more diverse and robust network, the ultimate goal of decentralization, which enables a censorship-resistant and reliable system.
- Full nodes provide access to blockchain data for lightweight clients that depend on it. Light nodes don't store the whole blockchain, instead they verify data via the [state roots in block headers](/developers/docs/blocks/#block-anatomy). They can request more information from full nodes if they need it.

If you run a full node, the whole Ethereum network benefits from it, even if you don't run a validator.

## Running your own node {#running-your-own-node}

Interested in running your own Ethereum client?

For a beginner-friendly introduction visit our [run a node](/run-a-node) page to learn more.

If you're more of a technical user, dive into more details and options on how to [spin up your own node](/developers/docs/nodes-and-clients/run-a-node/).

## Alternatives {#alternatives}

Setting up your own node can cost you time and resources but you don’t always need to run your own instance. In this case, you can use a third party API provider
* For an overview of using these services, check out [nodes as a service](/developers/docs/nodes-and-clients/nodes-as-a-service/).

If somebody runs an Ethereum node with a public API in your community, you can point your wallets to a community node via Custom RPC and gain more privacy than with some random trusted third party.

On the other hand, if you run a client, you can share it with your friends who might need it.

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

Hyperledger Besu is an enterprise-grade Ethereum client for public and permissioned networks. It runs all of the Ethereum Mainnet features, from tracing to GraphQL, has extensive monitoring and is supported by ConsenSys, both in open community channels and through commercial SLAs for enterprises. It is written in Java and is Apache 2.0 licensed.

Besu's extensive [documentation](https://besu.hyperledger.org/en/stable/) will guide you through all details on its features and setups.

### Erigon {#erigon}

Erigon, formerly known as Turbo‐Geth, started as a fork of Go Ethereum oriented toward speed and disk‐space efficiency. Erigon is a completely re-architected implementation of Ethereum, currently written in Go but with implementations in other languages under development. Erigon's goal is to provide a faster, more modular, and more optimized implementation of Ethereum. It can perform a full archive node sync using around 2TB of disk space, in under 3 days.

### Go Ethereum {#geth}

Go Ethereum (Geth for short) is one of the original implementations of the Ethereum protocol. Currently, it is the most widespread client with the biggest user base and variety of tooling for users and developers. It is written in Go, fully open source and licensed under the GNU LGPL v3.

Learn more about Geth in its [documentation](https://geth.ethereum.org/docs/).

### Nethermind {#nethermind}

Nethermind is an Ethereum implementation created with the C# .NET tech stack, licensed with LGPL-3.0, running on all major platforms including ARM. It offers great performance with:

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

To follow and verify current data in the network, the Ethereum client needs to sync with the latest network state. This is done by downloading data from peers, cryptographically verifying their integrity, and building a local blockchain database.

Synchronization modes represent different approaches to this process with various trade-offs. Clients also vary in their implementation of sync algorithms. Always refer to the official documentation of your chosen client for specifics on implementation.

### Execution layer sync modes {#execution-layer-sync-modes}

The execution layer may be run in different modes to suit different use cases, from re-executing the blockchain's world state to only syncing with the tip of the chain from a trusted checkpoint.

#### Full sync {#full-sync}

A full sync downloads all blocks (including headers and block bodies) and regenerates the state of the blockchain incrementally by executing every block from genesis.

- Minimizes trust and offers the highest security by verifying every transaction.
- With an increasing number of transactions, it can take days to weeks to process all transactions.

[Archive nodes](#archive-node) perform a full sync to build (and retain) a complete history of the state changes made by every transaction in every block.

#### Fast sync {#fast-sync}

Like a full sync, a fast sync downloads all blocks (including headers, transactions, and receipts). However, instead of re-processing the historical transactions, a fast sync relies on the receipts until it reaches a recent head, when it switches to importing and processing blocks to provide a full node.

- Fast sync strategy.
- Reduces processing demand in favor of bandwidth usage.

#### Snap sync {#snap-sync}

Snap syncs also verify the chain block-by-block. However, instead of starting at the genesis block, a snap sync starts at a more recent 'trusted' checkpoint that is known to be part of the true blockchain. The node saves periodic checkpoints while deleting data older than a certain age. These snapshots are used to regenerate state data as needed, rather than storing it forever.

- Fastest sync strategy, currently default in Ethereum Mainnet.
- Saves a lot of disk usage and network bandwidth without sacrificing security.

[More on snap sync](https://github.com/ethereum/devp2p/blob/master/caps/snap.md).

#### Light sync {#light-sync}

Light client mode downloads all block headers, block data, and verifies some randomly. Only syncs tip of the chain from the trusted checkpoint.

- Gets only the latest state while relying on trust in developers and consensus mechanism.
- Client ready to use with current network state in a few minutes.

**NB** Light sync does not yet work with proof-of-stake Ethereum - new versions of light sync should ship soon!

[More on light clients](/developers/docs/nodes-and-clients/light-clients/)

### Consensus layer sync modes {#consensus-layer-sync-modes}

#### Optimistic sync {#optimistic-sync}

Optimistic sync is a post-merge synchronization strategy designed to be opt-in and backwards compatible, allowing execution nodes to sync via established methods. The execution engine can _optimistically_ import beacon blocks without fully verifying them, find the latest head, and then start syncing the chain with the above methods. Then, after the execution client has caught up, it will inform the consensus client of the validity of the transactions in the Beacon Chain.

[More on optimistic sync](https://github.com/ethereum/consensus-specs/blob/dev/sync/optimistic.md)

#### Checkpoint sync {#checkpoint-sync}

A checkpoint sync, also known as weak subjectivity sync, creates a superior user experience for syncing a Beacon Node. It's based on assumptions of [weak subjectivity](/developers/docs/consensus-mechanisms/pos/weak-subjectivity/) which enables syncing the Beacon Chain from a recent weak subjectivity checkpoint instead of genesis. Checkpoint syncs make the initial sync time significantly faster with similar trust assumptions as syncing from [genesis](/glossary/#genesis-block).

In practice, this means your node connects to a remote service to download recent finalized states and continues verifying data from that point. The third party providing the data is trusted and should be picked carefully.

More on [checkpoint sync](https://notes.ethereum.org/@djrtwo/ws-sync-in-practice)

## Further reading {#further-reading}

- [Ethereum 101 - Part 2 - Understanding Nodes](https://kauri.io/ethereum-101-part-2-understanding-nodes/48d5098292fd4f11b251d1b1814f0bba/a) _– Wil Barnes, 13 February 2019_
- [Running Ethereum Full Nodes: A Guide for the Barely Motivated](https://medium.com/@JustinMLeroux/running-ethereum-full-nodes-a-guide-for-the-barely-motivated-a8a13e7a0d31) _– Justin Leroux, 7 November 2019_

## Related topics {#related-topics}

- [Blocks](/developers/docs/blocks/)
- [Networks](/developers/docs/networks/)

## Related tutorials {#related-tutorials}

- [Turn your Raspberry Pi 4 into a validator node just by flashing the MicroSD card – Installation guide](/developers/tutorials/run-node-raspberry-pi/) _– Flash your Raspberry Pi 4, plug in an ethernet cable, connect the SSD disk and power up the device to turn the Raspberry Pi 4 into a full Ethereum node running the execution layer (Mainnet) and / or the consensus layer (Beacon Chain / validator)._
