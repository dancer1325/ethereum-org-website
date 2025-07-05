---
title: Spin up your own Ethereum node
description: General introduction to running your own instance of an Ethereum client.
lang: en
sidebarDepth: 2
---

* goal
  * how to run an Ethereum node
    * == how to install + configure + connect
      * EL client
      * CL client

* running your OWN node
  * provides
    * benefits,
    * NEW possibilities, 
    * helps to support the ecosystem

* AFTER [The Merge](/roadmap/merge),
  * if you want to run an Ethereum node -> it's required 2 clients
    * **execution layer (EL)** client
    * **consensus layer (CL)** client

## Prerequisites {#prerequisites}

* [Nodes and clients](/developers/docs/nodes-and-clients/)
* [running an Ethereum node](/ethereum-org-website/src/intl/en/page-run-a-node.md)

## Choosing an approach {#choosing-approach}

* choose
  * client implementation (== execution & consensus clients),
    * see [client diversity](../client-diversity) 
  * the [environment](#environment-and-hardware-environment-and-hardware) (hardware, system)
  * [way to install the client](#spinning-up-the-node-spinning-up-node)
    * -- via -- [UI](#automatized-setup)
    * -- via --[CL](#manual-setup)
  * client settings' parameters

![Client setup](./diagram.png)

### Environment and hardware {#environment-and-hardware}

#### Local or cloud {#local-vs-cloud}

* Ethereum clients
  * NOT require special hardware

- Cloud
  - providers
    - offer 
      - HIGH server uptime
      - static public IP addresses
  - vs build your own
    - MORE comfortable 
  - cons
    - trust | third party (==server provider)
  - if you use a rented server -> price could be high
    - Reason:🧠FULL node's storage size: HIGH🧠 
  - [nodes as a service](../nodes-as-a-service/) 
  - [statistics about nodes / run | cloud](https://www.ethernodes.org/networkType/Hosting) 
- OWN hardware
  - trustless & sovereign approach
  - 1! time investment
  - cons
    - maintenance (physical & networking)

#### Requirements {#requirements}

* Hardware requirements
  * -- depend on -- client
  * 's bottleneck
    * disk space
      * Reason:🧠 sync the Ethereum blockchain requires space🧠
      * recommendations
        * SSD
        * free space: 100x GBs

* DDBB's speed & initial synchronization 
  * -- depends on --
    * chosen client,
    * client's configuration
    * [sync strategy](../nodes-and-clients/#sync-modes)

##### Operating system

* ALL clients
  * support
    * MAJOR OS (Linux, MacOS, Windows)

* recommendations
  * OS is up to date

##### Minimum requirements

- CPU with 2+ cores
- 8 GB RAM
- 2TB SSD
- 10+ MBit/s bandwidth

##### Recommended specifications

- Fast CPU with 4+ cores
- 16 GB+ RAM
- Fast SSD with 2+TB
- 25+ MBit/s bandwidth

* | Execution client
  
  | Execution Client | Disk size (snap sync) | Disk size (full archive) |
  |------------------| --------------------- | ------------------------ |
  | Besu             | 800GB+                | 12TB+                    |
  | Erigon           | N/A                   | 2.5TB+                   |
  | Geth             | 500GB+                | 12TB+                    |
  | Nethermind       | 500GB+                | 12TB+                    |
  | Reth             | N/A                   | 2.2TB+                   |

* | consensus clients,
  * == | execution clients + 200GB
  * [here](https://mirror.xyz/0x934e6B4D7eee305F8C9C42b46D6EEA09CcFd5EDc/b69LBy8p5UhcGJqUAmT22dpvdkU-Pulg2inrhoS9Mbc)

#### Ethereum | single-board computer {#ethereum-on-a-single-board-computer}

* single board computer
  * ALSO supports [ARM architecture](https://ethereum-on-arm-documentation.readthedocs.io/en/latest/)
  * pros
    * Small
    * affordable efficient
  * cons
    * limited performance 
  * _Example:_ Raspberry Pi

## Spinning up the node {#spinning-up-node}

* ways to set up the actual client
  * with AUTOMATED launchers
    * recommended | less advanced users 
  * MANUALLY

### Guided setup {#automatized-setup}

* launchers
  * provide
    * AUTOMATIC client installation & configuration
    * UI

* _Example:_
  - [DappNode](https://docs.dappnode.io/docs/user/getting-started/choose-your-path)
  - [eth-docker](https://eth-docker.net/)
    - AUTOMATED setup -- via -- Docker
    - focus on staking
      - easy & 
      - secure 
    - requirements
      - BASIC terminal
      - Docker knowledge
    - recommendations
      - MORE ADVANCED users
  - [Stereum](https://stereum.net/ethereum-node-setup/)
    - launcher /
      - install clients | remote server
      - provides
        - SSH connection
        - GUI setup guide
        - control center
  - [NiceNode](https://www.nicenode.xyz/) 
    * launcher / straightforward user experience
    * STILL in development
  - [Sedge](https://docs.sedge.nethermind.io/docs/intro) 
    * node setup tool / AUTOMATICALLY generates a Docker configuration -- via -- CLI wizard
    * written | Go

### Manual clients setup {#manual-setup}

#### Getting the client software {#getting-the-client}

* obtain your preferred [execution client](/developers/docs/nodes-and-clients/#execution-clients) & [consensus client](/developers/docs/nodes-and-clients/#consensus-clients) software /
  * verify the signatures & checksums

##### Execution clients

- [Besu](https://github.com/hyperledger/besu/releases)
- [Erigon](https://github.com/ledgerwatch/erigon/releases)
- [Geth](https://geth.ethereum.org/downloads/)
- [Nethermind](https://downloads.nethermind.io/)
- [Reth](https://reth.rs/installation/installation.html)

* client diversity -> [issue | execution layer](../client-diversity/#execution-layer)

##### Consensus clients

- [Lighthouse](https://github.com/sigp/lighthouse/releases/latest)
- [Lodestar](https://chainsafe.github.io/lodestar/install/source/)
- [Nimbus](https://github.com/status-im/nimbus-eth2/releases/latest)
- [Prysm](https://github.com/prysmaticlabs/prysm/releases/latest)
- [Teku](https://github.com/ConsenSys/teku/releases)

* [Client diversity](/developers/docs/nodes-and-clients/client-diversity/)
  * ⚠️critical -- for -- consensus nodes running validators⚠️
    * Reason: 🧠if the MAJORITY of validators are running 1! client implementation -> network security🧠
  * recommendation
    * 👀choose a minority client👀
  * [statistics](https://clientdiversity.org/)

##### Verifying the software

* | download software,
  * verify its integrity

* OPTIONAL

* ways to verify / released binaries are trust
  * signed -- with -- developer's PGP keys
  * software's hash == software / provided -- by -- developers

###### PGP
* steps
  * obtain public keys / used -- by -- developers
    * | client release pages OR documentation
  * use a PGP implementation
    * _Example:_ [GnuPG](https://gnupg.org/download/index.html)
      * follow `gpg` | [linux](https://www.tecmint.com/verify-pgp-signature-downloaded-software/) OR [Windows/MacOS](https://freedom.press/training/verifying-open-source-software/)

###### Hash
* steps
  * | downloaded software, run the hash function

    ```sh
    sha256sum teku-22.6.1.tar.gz
    
    9b2f8c1f8d4dab0404ce70ea314ff4b3c77e9d27aff9d1e4c1933a5439767dde
    ```

  * has value got it vs hash | release page

#### Client setup {#client-setup}

* run the execution client
  * == execute it -- with the -- proper configuration

* configurations / set up
  * [Sync modes](index.md#sy)
    * == methods of download & validate blockchain data
    * 👀choose | BEFORE starting the node👀
    * requirements to consider
      * disk space
      * sync time
  * prune 
    * enables deleting outdated data
      * _Example:_ remove state trie nodes / are unreachable -- from -- recent blocks
  * choose the network
  * enable HTTP endpoint -- for -- RPC or WebSockets

#### Starting the execution client {#starting-the-execution-client}

* | BEFORE starting the Ethereum client software, LAST check /
  - enough disk space
  - Memory and CPU is NOT halted -- by -- OTHER programs
  - OS is updated -- to the -- latest version
  - System has the correct time and date
  - router & firewall accept connections | listening ports
    * by default, Ethereum clients use 
      * listener (TCP) port
        * by default, 30303 
      * discovery (UDP) port
        * by default, 30303
  
* Execution clients communicate -- , via [Engine API's authenticated endpoint](https://github.com/ethereum/execution-apis/tree/main/src/engine), with -- consensus clients 
  * requirements
    * execution client MUST 
      * generate a [`jwtsecret`](https://jwt.io/) | known path
        * used to authenticate a LOCAL RPC connection BETWEEN BOTH clients
        * ways
          * AUTOMATICALLY
          * MANUALLY -- via -- [OpenSSL](https://www.openssl.org/) 
          
            ```sh
            openssl rand -hex 32 > jwtsecret
            ```

      * define a listening port -- for -- authenticated APIs 

* recommendations
  * BOTH clients 
    * run | SAME machine
    * know path | `jwtsecret` is generated
    * Reason:🧠security & stability reasons🧠

#### Running an execution client {#running-an-execution-client}

* goal
  * 👀EXAMPLE of execution client's basic configuration👀
    * connect -- to -- Mainnet
    * defines 
      * data directory | ALL data are stored
      * path -- to -- `jwtsecret` 
    * enables interfaces -- for communicating with -- client
    * include JSON-RPC & Engine API -- for communicating with -- consensus client

##### Running Besu

* TODO: This example starts Besu on Mainnet, stores blockchain data in default format at `/data/ethereum`, enables JSON-RPC and Engine RPC for connecting consensus client
* Engine API is authenticated with token `jwtsecret` and only calls from `localhost` are allowed.

```sh
besu --network=mainnet \
    --data-path=/data/ethereum \
    --rpc-http-enabled=true \
    --engine-rpc-enabled=true \
    --engine-host-allowlist="*" \
    --engine-jwt-enabled=true \
    --engine-jwt-secret=/path/to/jwtsecret
```

Besu also comes with a launcher option which will ask a series of questions and generate the config file
* Run the interactive launcher using:

```sh
besu --Xlauncher
```

[Besu's documentation](https://besu.hyperledger.org/en/latest/HowTo/Get-Started/Starting-node/) contains additional options and configuration details.

##### Running Erigon

This example starts Erigon on Mainnet, stores blockchain data at `/data/ethereum`, enables JSON-RPC, defines which namespaces are allowed and enables authentication for connecting the consensus client which is defined by the `jwtsecret` path.

```sh
erigon --chain mainnet \
    --datadir /data/ethereum  \
    --http --http.api=engine,eth,web3,net \
    --authrpc.jwtsecret=/path/to/jwtsecret
```

Erigon by default performs a full sync with 8GB HDD which will result in more than 2TB of archive data
* Make sure `datadir` is pointing to disk with enough free space or look into `--prune` flag which can trim different kinds of data
* Check the Erigon's `--help` to learn more.

##### Running Geth

This example starts Geth on Mainnet, stores blockchain data at `/data/ethereum`, enables JSON-RPC and defines which namespaces are allowed
* It also enables authentication for connecting consensus client which requires path to `jwtsecret` and also option defining which connections are allowed, in our example only from `localhost`.

```sh
geth --mainnet \
    --datadir "/data/ethereum" \
    --http --authrpc.addr localhost \
    --authrpc.vhosts="localhost" \
    --authrpc.port 8551
    --authrpc.jwtsecret=/path/to/jwtsecret
```

Check [docs for all configuration options](https://geth.ethereum.org/docs/fundamentals/command-line-options) and learn more about [running Geth with a consensus client](https://geth.ethereum.org/docs/getting-started/consensus-clients).

##### Running Nethermind

Nethermind offers various [installation options](https://docs.nethermind.io/nethermind/first-steps-with-nethermind/getting-started)
* The package comes with various binaries, including a Launcher with a guided setup, which will help you to create the configuration interactively
* Alternatively, you find Runner which is the executable itself and you can just run it with config flags
* JSON-RPC is enabled by default.

```sh
Nethermind.Runner --config mainnet \
    --datadir /data/ethereum \
    --JsonRpc.JwtSecretFile=/path/to/jwtsecret
```

Nethermind docs offer a [complete guide](https://docs.nethermind.io/nethermind/first-steps-with-nethermind/running-nethermind-post-merge) on running Nethermind with consensus client.

An execution client will initiate its core functions, chosen endpoints, and start looking for peers
* After successfully discovering peers, the client starts synchronization
* The execution client will await a connection from consensus client
* Current blockchain data will be available once the client is successfully synced to the current state.

##### Running Reth

This example starts Reth on Mainnet, using default data location
* Enables JSON-RPC and Engine RPC authentication for connecting the consensus client which is defined by the `jwtsecret` path, with only calls from `localhost` are allowed.

```sh
reth node \
    --authrpc.jwtsecret /path/to/jwtsecret \
    --authrpc.addr 127.0.0.1 \
    --authrpc.port 8551
```

See [Configuring Reth](https://reth.rs/run/config.html?highlight=data%20directory#configuring-reth) to learn more about default data directories
* [Reth's documentation](https://reth.rs/run/mainnet.html) contains additional options and configuration details.

#### Starting the consensus client {#starting-the-consensus-client}

* consensus client
  * steps
    * start -- with the -- right port configuration
      * Reason: 🧠establish a local RPC connection -- to the -- execution client🧠
    * run with the exposed execution client port -- as -- configuration argument
    * path -- to the -- execution client's `jwt-secret`
      * Reason: 🧠to authenticate the RPC connection BETWEEN them🧠
      * configured -- via -- flag
      * == `jwtsecret` / provided | execution client

* if you plan to run a validator -> add a configuration flag / specify fee recipient's Ethereum address 
  * place |  validator accumulate ether rewards
  * `--suggested-fee-recipient=0xabcd1`

* | start a Beacon Node | testnet,
  * you can save significant syncing time -- via using a -- public endpoint | [Checkpoint sync](https://notes.ethereum.org/@launchpad/checkpoint-sync)

#### Running a consensus client {#running-a-consensus-client}

##### Running Lighthouse

* TODO: Before running Lighthouse, learn more on how to install and configure it in [Lighthouse Book](https://lighthouse-book.sigmaprime.io/installation.html).

```sh
lighthouse beacon_node \
    --network mainnet \
    --datadir /data/ethereum \
    --http \
    --execution-endpoint http://127.0.0.1:8551 \
    --execution-jwt /path/to/jwtsecret
```

##### Running Lodestar

Install Lodestar software by compiling it or downloading the Docker image. Learn more in [docs](https://chainsafe.github.io/lodestar/) and more comprehensive [setup guide](https://hackmd.io/@philknows/rk5cDvKmK).

```sh
lodestar beacon \
    --rootDir="/data/ethereum" \
    --network=mainnet \
    --eth1.enabled=true \
    --execution.urls="http://127.0.0.1:8551" \
    --jwt-secret="/path/to/jwtsecret"
```

##### Running Nimbus

Nimbus comes with both consensus and execution clients. It can be run on various devices even with very modest computing power.
After [installing dependencies and Nimbus itself](https://nimbus.guide/quick-start.html), you can run its consensus client:

```sh
nimbus_beacon_node \
    --network=mainnet \
    --web3-url=http://127.0.0.1:8551 \
    --rest \
    --jwt-secret="/path/to/jwtsecret"
```

##### Running Prysm

Prysm comes with script which allows easy automatic installation. Details can be found in the [Prysm docs](https://docs.prylabs.network/docs/install/install-with-script).

```sh
./prysm.sh beacon-chain \
    --mainnet \
    --datadir /data/ethereum  \
    --execution-endpoint=http://localhost:8551  \
    --jwt-secret=/path/to/jwtsecret
```

##### Running Teku

```sh
teku --network mainnet \
    --data-path "/data/ethereum" \
    --ee-endpoint http://localhost:8551 \
    --ee-jwt-secret-file "/path/to/jwtsecret"
```

When a consensus client connects to the execution client to read the deposit contract and identify validators, it also connects to other Beacon Node peers and begins syncing consensus slots from genesis. Once the Beacon Node reaches the current epoch, the Beacon API becomes usable for your validators. Learn more about [Beacon Node APIs](https://eth2docs.vercel.app/).

### Adding Validators {#adding-validators}

* consensus client
  * has its OWN validator software

* run your OWN validator
  * 👀enable [solo staking](/staking/solo/)👀
    * == MOST impactful & trustless method -- to support the -- Ethereum network
    * requirements
      * deposit 32 ETH
  * recommendations
    * ways of easy getting started
      * decentralized pool / permissionless node operators
        * _Exmaple:_ [Rocket Pool](https://rocketpool.net/node-operators)
      * [Holesky Testnet Staking Launchpad](https://holesky.launchpad.ethereum.org/)
        * == [run nodes | Holesky](https://notes.ethereum.org/@launchpad/holesky)
      * [Mainnet Staking Launchpad](https://launchpad.ethereum.org/)

### Using the node {#using-the-node}

* TODO: Execution clients offer [RPC API endpoints](/developers/docs/apis/json-rpc/) that you can use to submit transactions, interact with or deploy smart contracts on the Ethereum network in various ways:

- Manually calling them with a suitable protocol (e.g. using `curl`)
- Attaching a provided console (e.g. `geth attach`)
- Implementing them in applications using web3 libraries, e.g. [web3.py](https://web3py.readthedocs.io/en/stable/overview.html#overview), [ethers](https://github.com/ethers-io/ethers.js/)

Different clients have different implementations of the RPC endpoints. But there is a standard JSON-RPC which you can use with every client. For an overview [read the JSON-RPC docs](/developers/docs/apis/json-rpc/). Applications that need information from the Ethereum network can use this RPC. For example, popular wallet MetaMask lets you [connect to your own RPC endpoint](https://metamask.zendesk.com/hc/en-us/articles/360015290012-Using-a-Local-Node) which has strong privacy and security benefits.

The consensus clients all expose a [Beacon API](https://ethereum.github.io/beacon-APIs) that can be used to check the status of the consensus client or download blocks and consensus data by sending requests using tools such as [Curl](https://curl.se). More information on this can be found in the documentation for each consensus client.

#### Reaching RPC {#reaching-rpc}

The default port for the execution client JSON-RPC is `8545` but you can modify the ports of local endpoints in the configuration. By default, the RPC interface is only reachable on the localhost of your computer. To make it remotely accessible, you might want to expose it to the public by changing the address to `0.0.0.0`. This will make it reachable over local network and public IP addresses. In most cases you'll also need to set up port forwarding on your router.

Approach exposing ports to the internet with caution as this will let anyone on the internet control your node. Malicious actors could access your node to bring down your system or steal your funds if you're using your client as a wallet.

A way around this is to prevent potentially harmful RPC methods from being modifiable. For example, with Geth, you can declare modifiable methods with a flag: `--http.api web3,eth,txpool`.

Access to the RPC interface can be extended through the development of edge layer APIs or web server applications, like Nginx, and connecting them to your client's local address and port. Leveraging a middle layer can also allow developers the ability to setup a certificate for secure `https` connections to the RPC interface.

Setting up a web server, a proxy, or external facing Rest API is not the only way to provide access to the RPC endpoint of your node. Another privacy-preserving way to set up a publicly reachable endpoint is to host the node on your own [Tor](https://www.torproject.org/) onion service. This will let you reach the RPC outside your local network without a static public IP address or opened ports. However, using this configuration may only allow the RPC endpoint to be accessible via the Tor network which is not supported by all the applications and might result in connection issues.

To do this, you have to create your own [onion service](https://community.torproject.org/onion-services/). Checkout [the documentation](https://community.torproject.org/onion-services/setup/) on onion service setup to host your own. You can point it to a web server with proxy to the RPC port or just directly to the RPC.

Lastly, and one of the most popular ways to provide access to internal networks is through a VPN connection. Depending on your use case and the quantity of users needing access to your node, a secure VPN connection might be an option. [OpenVPN](https://openvpn.net/) is a full-featured SSL VPN which implements OSI layer 2 or 3 secure network extension using the industry standard SSL/TLS protocol, supports flexible client authentication methods based on certificates, smart cards, and/or username/password credentials, and allows user or group-specific access control policies using firewall rules applied to the VPN virtual interface.

### Operating the node {#operating-the-node}

You should regularly monitor your node to make sure it's running properly. You may need to do occasional maintenance.

#### Keeping a node online {#keeping-node-online}

Your node doesn't have to be online all the time, but you should keep it online as much as possible to keep it in sync with the network. You can shut it down to restart it, but keep in mind that:

- Shutting down can take a few minutes if the recent state is still being written on disk.
- Forced shut downs can damage the database requiring you to resync the entire node.
- Your client will go out of sync with the network and will need to resync when you restart it. While the node can begin syncing from were it was last shutdown, the process can take time depending on how long it has been offline.

_This doesn't apply on consensus layer validator nodes._ Taking your node offline will affect all services dependent on it. If you are running a node for _staking_ purposes you should try to minimize downtime as much as possible.

#### Creating client services {#creating-client-services}

Consider creating a service to run your clients automatically on startup. For example, on Linux servers, good practice would be to create a service, e.g. with `systemd`, that executes the client with proper config, under a user with limited privileges and automatically restarts.

#### Updating clients {#updating-clients}

You need to keep your client software up-to-date with the latest security patches, features, and [EIPs](/eips/). Especially before [hard forks](/history/), make sure you are running the correct client versions.

> Before important network updates, EF publishes a post on its [blog](https://blog.ethereum.org). You can [subscribe to these announcements](https://blog.ethereum.org/category/protocol#subscribe) to get a notification to your mail when your node needs an update.

Updating clients is very simple. Each client has specific instructions in their documentation, but the process is generally just to download the latest version and restart the client with the new executable. The client should pick up where it left off, but with the updates applied.

Each client implementation has a human-readable version string used in the peer-to-peer protocol but is also accessible from the command line. This version string lets users check they are running the correct version and allows block explorers and other analytical tools interested in quantifying the distribution of specific clients over the network. Please refer to the individual client documentation for more information about version strings.

#### Running additional services {#running-additional-services}

Running your own node lets you use services that require direct access to Ethereum client RPC. These are services built on top of Ethereum like [layer 2 solutions](/developers/docs/scaling/#layer-2-scaling), backend for wallets, block explorers, developer tools and other Ethereum infrastructure.

#### Monitoring the node {#monitoring-the-node}

To properly monitor your node, consider collecting metrics. Clients provide metrics endpoints so you can get comprehensive data about your node. Use tools like [InfluxDB](https://www.influxdata.com/get-influxdb/) or [Prometheus](https://prometheus.io/) to create databases which you can turn into visualizations and charts in software like [Grafana](https://grafana.com/). There are many setups for using this software and different Grafana dashboards for you to visualise your node and the network as a whole. For example, check out [tutorial on monitoring Geth](/developers/tutorials/monitoring-geth-with-influxdb-and-grafana/).

As part of your monitoring, make sure to keep an eye on your machine's performance. During your node's initial sync, the client software may be very heavy on CPU and RAM. In addition to Grafana, you can use the tools your OS offers like `htop` or `uptime` to do this.

## Further reading {#further-reading}

- [Ethereum Staking Guides](https://github.com/SomerEsat/ethereum-staking-guides) - _Somer Esat, updated often_
- [Guide | How to setup a validator for Ethereum staking on mainnet](https://www.coincashew.com/coins/overview-eth/guide-or-how-to-setup-a-validator-on-eth2-mainnet) _– CoinCashew, updated regularly_
- [ETHStaker guides on running validators on testnets](https://github.com/remyroy/ethstaker#guides) – _ETHStaker, updated regularly_
- [The Merge FAQ for node operators](https://notes.ethereum.org/@launchpad/node-faq-merge) - _July 2022_
- [Analyzing the hardware requirements to be an Ethereum full validated node](https://medium.com/coinmonks/analyzing-the-hardware-requirements-to-be-an-ethereum-full-validated-node-dc064f167902) _– Albert Palau, 24 September 2018_
- [Running Ethereum Full Nodes: A Guide for the Barely Motivated](https://medium.com/@JustinMLeroux/running-ethereum-full-nodes-a-guide-for-the-barely-motivated-a8a13e7a0d31) _– Justin Leroux, 7 November 2019_
- [Running a Hyperledger Besu Node on the Ethereum Mainnet: Benefits, Requirements, and Setup](https://pegasys.tech/running-a-hyperledger-besu-node-on-the-ethereum-mainnet-benefits-requirements-and-setup/) _– Felipe Faraggi, 7 May 2020_
- [Deploying Nethermind Ethereum Client with Monitoring Stack](https://medium.com/nethermind-eth/deploying-nethermind-ethereum-client-with-monitoring-stack-55ce1622edbd) _– Nethermind.eth, 8 July 2020_

## Related topics {#related-topics}

- [Nodes and clients](/developers/docs/nodes-and-clients/)
- [Blocks](/developers/docs/blocks/)
- [Networks](/developers/docs/networks/)
