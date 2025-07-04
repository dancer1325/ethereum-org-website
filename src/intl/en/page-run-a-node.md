* run your OWN node
  * == run software /
    * downloads a copy of the Ethereum blockchain
    * verifies the validity of EVERY block
    * keeps it up-to-date -- with -- NEW blocks & transactions
    * helps OTHERS -- to -- download & update their own copies
  * | hardware
    * AVERAGE computers can run a node
      * Reason: 🧠Ethereum's design🧠
    * recommendations
      * run | dedicated hardware
        * Reason: 🧠eliminate the performance impact | their machine & minimize node downtime🧠
  * online
    * == ⚠️CONTINUOUSLY running client software / connected -- to the -- internet⚠️
    * if your node is offline == inactive
  * [benefits](#benefits)

# Benefits
* ALTHOUGH WITHOUT validators -> 
  * benefits
    * [privacy & security](#privacy--security)
    * [censorship resistance](#censorship-resistance)
    * participate | Ethereum
    * [improve network's health & decentralization](#decentralization) 
    * [choose](#choice)
    * [sovereignty](#sovereignty)
  * NO get
    * financial rewards

## Privacy & Security
* allows
  * 👀stop leaking your personal information -- to -- TP nodes👀
    * Reason: 🧠
      * | send transactions -- via -- public nodes,
        * personal information can be leaked -- to -- these TP services
          * _Example:_ your IP address, Ethereum addresses / you own
      * | point compatible wallets -- to -- your own node,
        * your wallet can interact -- , privately & securely, with the -- blockchain
  * if a malicious node distributes an INVALID transaction -> your node disregard it
    * Reason: 🧠ALL transaction is verified locally | your OWN machine
      * == NOT need to trust anyone🧠
    * == reduced reliance | third-party servers

## Censorship resistance
* == ensure access 
* use cases
  * 3rd-party node could refuse transactions
    * -- from -- specific IP addresses
    * / involve specific accounts

## Decentralization
* -> NO centralized points of failure
* as MORE nodes -> stronger network

## Choice
* use cases
  * 👀| chain fork, you can choose the blockchain / follow👀
    * if you use TP node -> you -- depend on -- TP's decision
  * choose client / run -- by your -- node

## Sovereignty
* run your OWN node vs own your Ethereum wallet
  * | own your Ethereum wallet,
    * you hold the private keys
    * ❌NOT know the CURRENT state of the blockchain (_Example:_ your wallet balance)❌
      * -> Ethereum wallets typically reach out -- to a -- 3rd-party node (_Example:_ Infura or Alchemy)
  * | run your OWN node
    * == have your OWN copy of the Ethereum blockchain

# Who should run a node?
* Everyone!
  * ❌NO need❌
    * ETH
    * stake ETH

# How to build your own?
## Step 1 – Hardware
* MINIMUM specs
  * [4, 8] GB RAM
    * see
      * [staking](#stake-your-eth)
      * [Raspberry Pi](#raspberry-pi-arm-processor)
  * 2 TB SSD
    * Reason:🧠SSD -- for -- required write speeds🧠

* recommendations
  * Intel NUC, 7th gen+ / x86 processor
  * Wired internet connection
    * Reason: 🧠MOST consistent connection🧠

## Step 2 – Software
* ways to operate an Ethereum node  
  * | earlier days of the network,
    * -- via -- CL
      * REQUIRED
  * | CURRENTLY,
    * -- via --
      * CL
      * app-like experience (_Example:_ DAppNode or Avado)

* see [here](/ethereum-org-website/public/content/developers/docs/nodes-and-clients/run-a-node)
### Option 1
* [DAppNode OS](https://docs.dappnode.io/) 
  * == free & open-source software /
    * allows
      * manage a node & dapps & P2P networks -- as -- app-like experience (== via -- few taps)
  * steps
    * download it 
    * install it

* [Avado](https://ava.do/)

### Option 2 – CL
* see [here](/ethereum-org-website/public/content/developers/docs/nodes-and-clients/run-a-node)

# Further reading
* [Mastering Ethereum - Should I Run a Full Node](https://github.com/ethereumbook/ethereumbook/blob/develop/03clients.asciidoc#should-i-run-a-full-node)
* [Ethereum | ARM](https://ethereum-on-arm-documentation.readthedocs.io/en/latest/)
* [The Limits to Blockchain Scalability](https://vitalik.eth.limo/general/2021/05/23/scaling.html)

# Raspberry Pi (ARM processor)

* Raspberry Pis
  * == computers
    * lightweight
    * affordable
    * limitations
  * use
    * run a node
  * ❌NOT use❌
    * for staking
  * recommendations
    * \>= 8 GB of RAM
  * [how to set up a node -- via the -- CL | Raspberry Pi](https://ethereum-on-arm-documentation.readthedocs.io/en/latest)
  * [tutorial](/ethereum-org-website/public/content/developers/tutorials/run-node-raspberry-pi)

# Stake your ETH
* [staking](page-staking.md)
* recommendations
  * \>= 16GB RAM
  * [CPU benchmark / 's score: 6667+](https://cpubenchmark.net) 
  * unlimited high-speed internet bandwidth

* [how to choose CORRECT Ethereum validator hardware?](https://youtu.be/C2wwu1IlhDc)
  * TODO:
