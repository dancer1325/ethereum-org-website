* staking
  * := deposit 32 ETH -- to -- activate a validator software
  * allows
    * | secure Ethereum, earn rewards
      * secure Ethereum -- via -- helping the network reach consensus
      * as MORE ETH is staked, stronger against attacks
        * Reason:🧠MORE ETH required -- to -- control majority of the network🧠
    * MORE sustainable
      * Reason: 🧠staking nodes can run | relatively modest hardware🧠
      * != PoW energy-intensive computations
      * [here](../../../public/content/energy-consumption)
  * [statistics](https://ethereum.org/en/staking/)
    * Total ETH staked
      * := | Beacon Chain, sum of ETH | stake / NOT include balances > 32 ETH
    * Total validators
      * := | Beacon Chain, # of validator accounts / CURRENTLY activated
    * Current APR
      * := average annualized financial return / validator | past 24-hour 

  
# ways to stake
* -- depends on -- risks + rewards + trust assumptions + decentralization degree

## Home staking

* == 👀staking's gold standard👀
* pros
  * MOST impactful
    * Reason: 🧠improves the decentralization🧠
  * FULL 
    * control
    * rewards
  * Trustless
    * Reason: 🧠you do NOT trust anyone else with your funds🧠
* requirements
  * own ETH
  * dedicated computer / connected to internet ~24/7
* ways
  * pool their funds -- with -- OTHERS
  * solo / require >= 32 ETH
* if you want to maintain access to DeFi -> use liquid staking token solutions 
* [MORE](../../../public/content/staking/solo)

## Staking -- as a -- service (SaaS)

* ALTERNATIVE to [home staking](#home-staking)
* requirements
  * stake your 32 ETH
  * your validator keys
  * entrusted node operation
* use cases
  * you do NOT want to deal with hardware 
* allow
  * delegating the hardware & validation
  * earning native block rewards
* steps
  * create a set of validator credentials,
  * upload your signing keys | them
    * == ⚠️trust | provider ⚠️
  * deposit your 32 ETH
* [MORE](../../../public/content/staking/saas)

## Pooled staking

* allows
  * stake any amount
  * earn rewards
  * keep it simple
  * users can hold custody of their assets | their OWN Ethereum's wallet 
* Popular
* EXIST SEVERAL pooling solutions /
  * SOME include 'liquid staking'
* ❌NOT native | Ethereum network❌

* 'liquid staking'
  * == ERC-20 liquidity token / -- represents your -- staked ETH
  * -> staking & unstaking == token swap
  * enables
    * the use of staked capital | DeFi
* [MORE](../../../public/content/staking/pools)

## Centralized exchanges

* allow
  * earn some yield | your ETH holdings / MINIMAL oversight or effort
  * avoid
    * holding your OWN keys
* pros
  * least impactful
* cons
  * highest trust assumptions
  * large centralized target & point of failure == network MORE vulnerable to attack or bugs
    * Reason: 🧠centralized providers have large ETH pools / run large numbers of validators🧠

| Aspect           | Home Staking                                                                                                                                                                                                                                                          | Staking as a Service                                                                                                                                            | Pooled Staking |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|
| **Rewards**      | • MAXIMUM rewards <br/> • Rewards for proposing blocks, including unburnt transaction fees, and attesting regularly to the state of the network<br>• Option to mint a liquid staking token against your home node to be used in DeFi                                  | • Usually involves full protocol rewards minus monthly fee for node operations<br>• Dashboards often available to easily track your validator client            | • Pooled stakers accrue rewards differently, depending on which method of pooled staking is chosen<br>• Many pooled staking services offer one or more liquidity tokens that represents your staked ETH plus your share of the validator rewards<br>• Liquidity tokens can be held in your own wallet, used in DeFi and sold if you decide to exit |
| **Risks**        | • your ETH is \| stake<br> • if you go offline -> penalties / cost ETH <br> • slashing (larger penalties and ejection from the network) for malicious behaviour<br>• Minting a liquid staking token will introduce smart contract risk, but this is entirely optional | • Same risks as solo staking plus counter-party risk of service provider<br>• Use of your signing keys is entrusted to someone else who could behave maliciously | • Risks vary depending on the method used<br>• In general, risks consist of a combination of counter-party, smart contract and execution risk |
| **Requirements** | • deposit 32 ETH <br> • maintain hardware / runs \| Ethereum execution client & Ethereum consensus client -- connected to the -- internet <br> • Staking Launchpad will walk you -- through the -- process & hardware requirements                                    | • deposit 32 ETH & generate your keys -- with -- assistance <br> • store your keys securely <br> • rest is taken care of though specific services will vary | • Lowest ETH requirements, some projects require as little as 0.01 ETH<br>• Deposit directly from your wallet to different pooled staking platforms or simply trade for one of the staking liquidity tokens |




  "page-staking-section-comparison-rewards-title": "Rewards",
  "page-staking-section-comparison-solo-rewards-li1": "Maximum rewards - receive full rewards directly from the protocol",
  "page-staking-section-comparison-solo-rewards-li2": "Rewards for proposing blocks, including unburnt transaction fees, and attesting regularly to the state of the network",
  "page-staking-section-comparison-solo-rewards-li3": "Option to mint a liquid staking token against your home node to be used in DeFi",
  "page-staking-section-comparison-saas-rewards-li1": "Usually involves full protocol rewards minus monthly fee for node operations",
  "page-staking-section-comparison-saas-rewards-li2": "Dashboards often available to easily track your validator client",
  "page-staking-section-comparison-pools-rewards-li1": "Pooled stakers accrue rewards differently, depending on which method of pooled staking is chosen",
  "page-staking-section-comparison-pools-rewards-li2": "Many pooled staking services offer one or more <a href=\"/glossary/#liquidity-tokens\">liquidity tokens</a> that represents your staked ETH plus your share of the validator rewards",
  "page-staking-section-comparison-pools-rewards-li3": "Liquidity tokens can be held in your own wallet, used in <a href=\"/glossary/#defi\">DeFi</a> and sold if you decide to exit",
  "page-staking-section-comparison-risks-title": "Risks",
  "page-staking-section-comparison-solo-risks-li1": "Your ETH is at stake",
  "page-staking-section-comparison-solo-risks-li2": "There are penalties, which cost ETH, for going offline",
  "page-staking-section-comparison-solo-risks-li3": "Slashing (larger penalties and ejection from the network) for malicious behaviour",
  "page-staking-section-comparison-solo-risks-li4": "Minting a liquid staking token will introduce smart contract risk, but this is entirely optional",
  "page-staking-section-comparison-saas-risks-li1": "Same risks as solo staking plus counter-party risk of service provider",
  "page-staking-section-comparison-saas-risks-li2": "Use of your signing keys is entrusted to someone else who could behave maliciously",
  "page-staking-section-comparison-pools-risks-li1": "Risks vary depending on the method used",
  "page-staking-section-comparison-pools-risks-li2": "In general, risks consist of a combination of counter-party, <a href=\"/glossary/#smart-contract\">smart contract</a> and execution risk",
  "page-staking-section-comparison-requirements-title": "Requirements",
  "page-staking-section-comparison-solo-requirements-li1": "You must deposit 32 ETH",
  "page-staking-section-comparison-solo-requirements-li2": "Maintain hardware that runs both an Ethereum <a href=\"/glossary/#execution-client\">execution client</a> and <a href=\"/glossary/#consensus-client\">consensus client</a> while connected to the internet",
  "page-staking-section-comparison-solo-requirements-li3": "The <a href=\"https://holesky.launchpad.ethereum.org\" target=\"_blank\">Staking Launchpad</a> will walk you through the process and hardware requirements",
  "page-staking-section-comparison-saas-requirements-li1": "Deposit 32 ETH and generate your keys with assistance",
  "page-staking-section-comparison-saas-requirements-li2": "Store your keys securely",
  "page-staking-section-comparison-saas-requirements-li3": "The rest is taken care of, though specific services will vary",
  "page-staking-section-comparison-pools-requirements-li1": "Lowest ETH requirements, some projects require as little as 0.01 ETH",
  "page-staking-section-comparison-pools-requirements-li2": "Deposit directly from your wallet to different pooled staking platforms or simply trade for one of the staking liquidity tokens",



{
  "comp-withdrawal-comparison-current-title": "Current stakers",
  "comp-withdrawal-comparison-current-li-1": "Some users may have provided a withdrawal address when initially setting up their staking deposit—these users have nothing more they need to do",
  "comp-withdrawal-comparison-current-li-2": "The majority of stakers did not provide a withdrawal address on initial deposit, and will need to update their withdrawal credentials. The <a href=\"https://launchpad.ethereum.org/withdrawals\" target=\"_blank\" rel=\"noopener noreferrer\">Staking Launchpad</a> has instructions on how to do this",
  "comp-withdrawal-comparison-current-p": "You can enter your validator index number here to see if you still need to update your credentials <Text as=\"span\" fontWeight=\"normal\">(this can be found in your client logs):</Text>",
  "comp-withdrawal-comparison-new-title": "New stakers (not yet deposited)",
  "comp-withdrawal-comparison-new-li-1": "By default, new stakers looking to automatically enable reward payments and withdrawal functionality should provide an Ethereum withdrawal address they control when generating their validator keys using the Staking Deposit CLI tool",
  "comp-withdrawal-comparison-new-li-2": "This is not required at time of deposit, but will prevent the need to update these keys at a later date to unlock your funds",
  "comp-withdrawal-comparison-new-p": "The Staking Launchpad will guide you through staking onboarding.",
  "comp-withdrawal-comparison-new-link": "Visit Staking Launchpad",
  "comp-withdrawal-credentials-placeholder": "Validator index",
  "comp-withdrawal-credentials-error": "Oops! Double check validator index number and try again.",
  "comp-withdrawal-credentials-upgraded-1": "Validator index {validatorIndex} is ready to start receiving rewards!",
  "comp-withdrawal-credentials-upgraded-2": "Withdrawal credentials linked to execution address:",
  "comp-withdrawal-credentials-not-upgraded-1": "This validator needs to be upgraded.",
  "comp-withdrawal-credentials-not-upgraded-1-testnet": "This Holesky testnet validator needs to be upgraded.",
  "comp-withdrawal-credentials-not-upgraded-2": "Instructions on how to upgrade can currently be found at <a href=\"https://launchpad.ethereum.org/withdrawals\" target=\"_blank\" rel=\"noopener noreferrer\">Staking Launchpad</a>",
  "comp-withdrawal-credentials-verify-mainnet": "Verify on Mainnet",
  "comp-withdrawal-credentials-verify-holesky": "Verify on Holesky",
  "page-staking-withdrawals-when": "Shipped!",
  "page-staking-image-alt": "Image of the Rhino mascot for the staking launchpad.",

  
  



  "page-staking-learn-more-solo": "Learn more about solo staking",
  "page-staking-dropdown-saas": "Staking as a service",
  "page-staking-saas-with-abbrev": "Staking as a service (SaaS)",
  "page-staking-more-on-saas": "More on staking as a service",
  "page-staking-learn-more-saas": "Learn more about staking as a service",
  "page-staking-dropdown-pools": "Pooled staking",
  "page-staking-dropdown-withdrawals": "About withdrawals",
  "page-staking-dropdown-dvt": "Distributed validator tech",
  "page-staking-more-on-pools": "More on pooled staking",
  "page-staking-learn-more-pools": "Learn more about pooled staking",

  "page-staking-section-what-title": "What is staking?",


  "page-staking-guide-title-coincashew-ethereum": "CoinCashew's Ethereum 2.0 Guide",
  "page-staking-guide-title-somer-esat": "Somer Esat",
  "page-staking-guide-title-rocket-pool": "Rocket Pool Node Operators",
  "page-staking-guide-title-stakewise": "StakeWise Node Operators",
  "page-staking-guide-description-linux": "Linux (CLI)",
  "page-staking-guide-description-mac-linux": "Linux, macOS (CLI)",
  "page-staking-guide-description-mac-linux-windows": "Linux, Windows, MacOS (CLI)",
  


  
  "page-staking-comparison-solo-saas": "With SaaS providers you're still required to deposit 32 ETH, but don't have to run hardware. You typically maintain access to your validator keys, but also need to share your signing keys so the operator can act on behalf of your validator. This introduces a layer of trust not present when running your own hardware, and unlike solo staking at home, SaaS does not help as much with geographic distribution of nodes. If you're uncomfortable operating hardware but still looking to stake 32 ETH, using a SaaS provider may be a good option for you.",
  "page-staking-comparison-solo-pools": "Solo staking is significantly more involved than staking with a pooling service, but offers full access to ETH rewards, and full control over the setup and security of your validator. Pooled staking has a significantly lower barrier to entry. Users can stake small amounts of ETH, are not required to generate validator keys, and have no hardware requirements beyond a standard internet connection. Liquidity tokens enable the ability to exit from staking before this is enabled at the protocol level. If you're interested in these features, pooled staking may be a good fit.",
  "page-staking-comparison-saas-solo": "Similarities include having your own validator keys without having to pool funds, but with SaaS you must trust a third-party, who may potentially act maliciously or become a target of attack or regulation themselves. If these trust assumptions or centralization risks concern you, the gold standard of self-sovereign staking is solo staking.",
  "page-staking-comparison-saas-pools": "These are similar in that you're generally relying on someone else to run the validator client, but unlike SaaS, pooled staking allows you to participate with smaller amounts of ETH. If you're looking to stake with less than 32 ETH, consider checking these out.",
  "page-staking-comparison-pools-solo": "Pooled staking has a significantly lower barrier to entry when compared to home staking, but comes with additional risk by delegating all node operations to a third-party, and with a fee. Home staking gives full sovereignty and control over the choices that go into choosing a staking setup. Stakers never have to hand over their keys, and they earn full rewards without any middlemen taking a cut.",
  "page-staking-comparison-pools-saas": "These are similar in that stakers do not run the validator software themselves, but unlike pooling options, SaaS requires a full 32 ETH deposit to activate a validator. Rewards accumulate to the staker, and usually involve a monthly fee or other stake to use the service. If you'd prefer your own validator keys and are looking to stake at least 32 ETH, using a SaaS provider may be a good option for you.",
  "page-staking-considerations-dropdown-text": "Staking Considerations",
  "page-staking-considerations-dropdown-aria-label": "Dropdown menu for staking considerations",
  "page-staking-considerations-solo-1-title": "Open source",
  "page-staking-considerations-solo-1-description": "Essential code is 100% open source and available to the public to fork and use",
  "page-staking-considerations-solo-1-warning": "Closed source",
  "page-staking-considerations-solo-2-title": "Audited",
  "page-staking-considerations-solo-2-description": "Essential code has undergone formal auditing with results published and available publicly",
  "page-staking-considerations-solo-2-warning": "None",
  "page-staking-considerations-solo-3-title": "Bug bounty",
  "page-staking-considerations-solo-3-description": "A public bug bounty has been performed on any essential code to rewards users for safely reporting and/or fixing vulnerabilities",
  "page-staking-considerations-solo-3-valid": "Currently active",
  "page-staking-considerations-solo-3-caution": "Completed",
  "page-staking-considerations-solo-4-title": "Battle tested",
  "page-staking-considerations-solo-4-description": "Software has been available and used by the public for the indicated period of time",
  "page-staking-considerations-solo-4-valid": "Live > 1 year",
  "page-staking-considerations-solo-4-caution": "Live > 6 months",
  "page-staking-considerations-solo-4-warning": "Newly released",
  "page-staking-considerations-solo-5-title": "Trustless",
  "page-staking-considerations-solo-5-description": "Validator keys are not entrusted to any other human at any time in the validator lifecycle. Any smart contracts involved are free of back doors, without reliance on privileged permissions for execution.",
  "page-staking-considerations-solo-5-warning": "Trusted",
  "page-staking-considerations-solo-6-title": "Permissionless",
  "page-staking-considerations-solo-6-description": "Users do not require any special permission to operate a validator using the software or service",
  "page-staking-considerations-solo-6-valid": "No permission",
  "page-staking-considerations-solo-6-warning": "Permission required",
  "page-staking-considerations-solo-7-title": "Multi-client",
  "page-staking-considerations-solo-7-description": "Software enables users to pick from and switch between at least two or more execution clients, and two or more consensus layer clients",
  "page-staking-considerations-solo-7-valid": "Easy client switching",
  "page-staking-considerations-solo-7-warning": "Limited to a majority client",
  "page-staking-considerations-solo-8-title": "Self custody",
  "page-staking-considerations-solo-8-description": "User maintains custody of any validator credentials, including signing and withdrawal keys",
  "page-staking-considerations-solo-8-warning": "Third-party custodian",
  "page-staking-considerations-solo-9-title": "Economical",
  "page-staking-considerations-solo-9-description": "Users can operate a validator by staking less than 32 ETH, utilizing pooled funds from others",
  "page-staking-considerations-solo-9-valid": "< 32 ETH",
  "page-staking-considerations-solo-9-warning": "32 ETH",
  "page-staking-considerations-saas-4-description": "Service has been available and used by the public for the indicated period of time",
  "page-staking-considerations-saas-6-description": "Users do not require any special permission, account sign up or KYC to participate with the service",
  "page-staking-considerations-saas-6-valid": "Anyone can join",
  "page-staking-considerations-saas-6-warning": "Permission required",
  "page-staking-considerations-saas-7-title": "Execution diversity",
  "page-staking-considerations-saas-7-description": "Service should not run more than 50% of their aggregate validators with a majority execution client",
  "page-staking-considerations-saas-7-valid": "Less than 50%",
  "page-staking-considerations-saas-7-caution": "Currently unknown",
  "page-staking-considerations-saas-7-warning": "More than 50%",
  "page-staking-considerations-saas-8-title": "Consensus diversity",
  "page-staking-considerations-saas-8-description": "Service should not run more than 50% of their aggregate validators with a majority consensus client",
  "page-staking-considerations-saas-8-valid": "Less than 50%",
  "page-staking-considerations-saas-8-caution": "Currently unknown",
  "page-staking-considerations-saas-8-warning": "More than 50%",
  "page-staking-considerations-pools-5-description": "Service does not require trusting any humans to custody your keys or distribute rewards",
  "page-staking-considerations-pools-6-title": "Permissionless nodes",
  "page-staking-considerations-pools-6-description": "Service allows anyone to join as a node operator for the pool, without permission",
  "page-staking-considerations-pools-7-description": "Service should not run more than 50% of their aggregate validators with a majority execution client",
  "page-staking-considerations-pools-8-title": "Liquidity token",
  "page-staking-considerations-pools-8-description": "Offers tradable liquidity token representing your staked ETH, held in your own wallet",
  "page-staking-considerations-pools-8-valid": "Liquidity token(s)",
  "page-staking-considerations-pools-8-warning": "No liquidity token",
  "page-staking-considerations-pools-9-description": "Service should not run more than 50% of their aggregate validators with a majority consensus client",
  "page-staking-how-solo-works-item-1": "Get some hardware: You need to <a href=\"/run-a-node/\">run a node</a> to stake",
  "page-staking-how-solo-works-item-2": "Sync an execution layer client",
  "page-staking-how-solo-works-item-3": "Sync a consensus layer client",
  "page-staking-how-solo-works-item-4": "Generate your keys and load them into your validator client",
  "page-staking-how-solo-works-item-5": "Monitor and maintain your node",
  "page-staking-launchpad-widget-testnet-label": "Holesky testnet",
  "page-staking-launchpad-widget-testnet-start": "Start staking on Holesky testnet",
  "page-staking-launchpad-widget-mainnet-label": "Mainnet",
  "page-staking-launchpad-widget-mainnet-start": "Start staking on Mainnet",
  "page-staking-launchpad-widget-span": "Choose network",
  "page-staking-launchpad-widget-p1": "Solo validators are expected to <strong>test their setup</strong> and operational skills on the Holesky testnet before risking funds. Remember it is important to choose a <a href=\"/developers/docs/nodes-and-clients/client-diversity/\">minority client</a> as it improves the security of the network and limits your risk.",
  "page-staking-launchpad-widget-p2": "If you're comfortable with it, you can set up everything needed from the command line using the Staking Launchpad alone.",
  "page-staking-launchpad-widget-p3": "To make things easier, check out some of the tools and guides below that can help you alongside the Staking Launchpad to get your clients set up with ease.",
  "page-staking-launchpad-widget-link": "Software tools and guide",
  "page-staking-products-get-started": "Get started",
  "page-staking-products-follow": "Visit on",
  "page-staking-dropdown-staking-options": "Staking Options",
  "page-staking-dropdown-staking-options-alt": "Staking options dropdown menu",



  
  
"page-staking-faq-1-question": "What is a validator?",
  "page-staking-faq-1-answer": "A <em>validator</em> is a virtual entity that lives on Ethereum and participates in the consensus of the Ethereum protocol. Validators are represented by a balance, public key, and other properties. A <em>validator client</em> is the software that acts on behalf of the validator by holding and using its private key. A single validator client can hold many key pairs, controlling many validators.",
  "page-staking-faq-2-question": "Why do I need to have funds at stake?",
  "page-staking-faq-2-answer": "A validator has the ability to propose and attest to blocks for the network. To prevent dishonest behavior, users must have their funds at stake. This allows the protocol to penalize malicious actors. Staking is a means to keep you honest, as your actions will have financial consequences.",
  "page-staking-faq-3-question": "Can I buy 'Eth2'?",
  "page-staking-faq-3-answer-p1": "There is no 'Eth2' token native to the protocol, as the native token ether (ETH) did not change when Ethereum switched to proof-of-stake.",
  "page-staking-faq-3-answer-p2": "There are derivative tokens/tickers that may represent staked ETH (ie. rETH from Rocket Pool, stETH from Lido, ETH2 from Coinbase). Learn more about <a href=\"/staking/pools/\">staking pools</a>",
  "page-staking-faq-4-question": "Is staking already live?",
  "page-staking-faq-4-answer-p1": "Yes. Staking has been live since December 1, 2020",
  "page-staking-faq-4-answer-p2": "This means that staking is currently live for users to deposit their ETH, run a validator client, and start earning rewards.",
  "page-staking-faq-4-answer-p3": "The Merge also took place on September 15, 2022, and Ethereum has been fully secured by staked ETH ever since.",
  "page-staking-faq-4-answer-p3": "The Shanghai/Capella upgrade was completed April 12, 2023, enabling staking withdrawals, closing the loop on staking liquidity.",
  "page-staking-faq-5-question": "When can I withdraw my staked ETH?",
  "page-staking-faq-5-answer-p1": "Right now! Stakers are free to withdraw their rewards and/or principle deposit from their validator balance if they choose.",
  "page-staking-faq-5-answer-p2": "Stakers will also earn rewards in the form of fees and MEV when proposing blocks, which are made available immediately via the set fee recipient address.",
  "page-staking-faq-5-answer-link": "More on staking withdrawals",
  "page-staking-further-reading-author-vitalik-buterin": "Vitalik Buterin",
  "page-staking-further-reading-2-link": "Serenity Design Rationale",
  "page-staking-further-reading-4-link": "Eth2 News",
  "page-staking-further-reading-4-author": "Ben Edgington",
  "page-staking-further-reading-5-link": "Finalized no. 33, the Ethereum consensus-layer (Jan 2022)",
  "page-staking-further-reading-5-author": "Danny Ryan",
  "page-staking-further-reading-6-link": "Attestant Posts",
  "page-staking-further-reading-8-link": "Beaconcha.in Community-Contributed Educational Materials",
  "page-staking-further-reading-9-link": "Ethereum Staking Launchpad FAQ",
  "page-staking-further-reading-10-link": "EthStaker knowledge base",
  "page-staking-toc-how-to-stake-your-eth": "How to stake your ETH",
  
  "page-staking-toc-faq": "FAQ",
  "page-staking-toc-further": "Further reading",
  "page-staking-dom-info-title": "Staking with Ethereum",
  "page-staking-join-community": "Join the staker community",
  "page-staking-join-community-desc": "EthStaker is a community for everyone to discuss and learn about staking on Ethereum. Join tens of thousands of members from around the globe for advice, support, and to talk all things staking.",
  "page-staking-meta-description": "An overview of Ethereum staking: the risks, rewards, requirements, and where to do it.",
  "page-staking-meta-title": "Ethereum staking: How does it work?",
  "page-staking-withdrawals-important-notices": "Important notices",
  "page-staking-withdrawals-important-notices-desc": "Withdrawals are not yet available. Please read the <a href=\"https://blog.ethereum.org/2021/12/01/eth2-merge-and-post-merge-faq/\" target=\"_blank\">Eth2 Merge and post-merge FAQ</a> for more information.",
  "page-upgrades-merge-btn": "More on The Merge",
  "subscribe-to-ef-blog": "<a href=\"https://blog.ethereum.org/category/protocol/#subscribe\" target=\"_blank\">Subscribe to the EF Blog</a> to receive email notifications for the latest protocol announcements.",
  "page-staking-comparison-with-other-options": "Comparison with other options",
  "page-staking-any-amount": "Any amount",
  "page-staking-testnet": "testnet"
}
