https://ethereum.org/en/layer-2/learn/

* Layer 1 (L1)
  * == L2's underlying foundation
  * _Examples:_ 
    * Ethereum  
      * as L1, 
        * provide
          * blockchain itself
          * network 
            * of node operators -- to -- secure & validate the network
            * of block producers
            * 's consensus mechanism
        * works
          * as data availability layer -- for -- Layer 2s 
            * _Example:_ if there are disputes on previous transactions data -> provided from Ethereum
    * Bitcoin
  * | PREVIOUS to sharding,
    * Ethereum Mainnet (L1) could ONLY process roughly 15 transactions / second

* 👀blockchain'S desirable properties👀
  * decentralized,
  * secure,
  * scalable
    * ⚠️Ethereum needed ⚠️
      * Ethereum network's current capacity == 1+ million transactions / day
        * -> Ethereum's HIGH demand -> rise gas prices 
    * 's main goalS
      * increase transaction speed (faster finality)
      * transaction throughput (high transactions / second)
        * WITHOUT sacrificing decentralization or security

* blockchain trilemma
  * ⚠️simple blockchain architecture -- can -- ONLY achieve 2/3 desireable properties⚠️

* Layer 2 (L2)
  * == set of Ethereum scaling solutions / ⭐️solves blockchain trilemma ⭐️
  * == 👀separate blockchain 👀/
    * extends Ethereum
      * _Example:_ OWN trade-offs & security models
    * inherits the security guarantees of Ethereum
  * _Examples:_ 
    * | Ethereum,
      * zero-knowledge rollups
      * optimistic rollups
    * | Bitcoin,
      * Lighting Network 
  * allows
    * ⭐️scaling blockchains⭐️
      * -- via -- transactional burden away -- from the -- layer 1
    * lower transactions fees
      * -> Ethereum MORE accessible -- for -- ALL 
      * -- via --
        * combine MULTIPLE transactions -- into -- 1! transaction | layer 1
    * maintain security
      * Reason: 🧠L2 blockchains settle their transactions | Ethereum Mainnet🧠
    * expand use cases
      * == projects -- will expand into -- NEW applications
      * Reason: 🧠-- thanks to -- higher transactions / second, lower fees, & NEW technology🧠 
  * risks
    * MANY projects are STILL young (born | 2021) & experimental
      * NOT properly battle tested
    * [L2BEAT](https://l2beat.com/scaling/summary)
      * comprehensive risk assessment framework / EACH project

* Rollups
  * Rollups bundle 
    * := 👀hundreds of transactions -- into -- 1! transaction | L1👀 
  * transaction data
    * fees -- are distributed ACROSS -- everyone | rollup
      * -> cheaper / EACH user
    * 's steps
      * execution -- , by the rollup, -- | L2
      * submitted -- to -- L1
  * -- inherit the -- security of Ethereum
    * _Example:_ if you submit transaction data | L1 & you want to revert a rollup transaction -> requires reverting Ethereum
  * approaches
    * optimistic rollup
      * if an invalid transaction is suspected & want to check if it happened -> run a fault proof
    * zero-knowledge rollup
      * submit -- , via validity proofs, to -- L1

![](/ethereum-org-website/public/images/layer-2/rollup-2.png)

* ALTERNATIVE L1s
  * vs Ethereum
    * pros
      * higher throughput
      * lower transaction fees
    * cons
      * ⚠️sacrifice on security OR decentralization⚠️

* Sidechains & validiums
  * == blockchains / 
    * allow
      * assets | blockchain, are
        * bridged over
        * used | ANOTHER blockchain
    * run in parallel -- with the -- MAIN chain
    * interact -- , through bridges, with the -- main chain
    * 's security or data availability NOT derive -- from the -- main chain
    * vs L2
      * == scaling
        * ⚠️BUT DIFFERENT trust assumptions⚠️
      * lower transaction fees
      * higher transaction throughput
