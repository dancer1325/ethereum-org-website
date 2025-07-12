---
title: Ethereum Improvement Proposals (EIPs)
description: The basic information you need to understand EIPs
lang: en
---

# Introduction to Ethereum Improvement Proposals (EIPs) {#introduction-to-ethereum-improvement-proposals}

## What are EIPs? {#what-are-eips}

* [Ethereum Improvement Proposals (EIPs)](https://eips.ethereum.org/)

## Why do EIPs matter? {#why-do-eips-matter}

* TODO: EIPs play a central role in how changes happen and are documented on Ethereum
* They are the way for people to propose, debate, and adopt changes
* There are [different types of EIPs](https://eips.ethereum.org/EIPS/eip-1#eip-types), including core EIPs for low-level protocol changes that affect consensus and require a network upgrade like [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559), and ERCs for application standards like [EIP-20](https://eips.ethereum.org/EIPS/eip-20) and [EIP-721](https://eips.ethereum.org/EIPS/eip-721).

Every network upgrade consists of a set of EIPs that need to be implemented by each [Ethereum client](/learn/#clients-and-nodes) on the network
* This means that to stay in consensus with other clients on the Ethereum Mainnet, client developers need to make sure they have all implemented the required EIPs.

Along with providing a technical specification for changes, EIPs are the unit around which governance happens in Ethereum: anyone is free to propose one, and then various stakeholders in the community will debate to determine if it should be adopted as a standard or included in a network upgrade
* Because non-core EIPs don't have to be adopted by all applications (for example, it is possible to create a fungible token that doesn't implement EIP-20), but core EIPs must be widely adopted (because all nodes must upgrade to stay part of the same network), core EIPs require a broader consensus within the community than non-core EIPs.

## History of EIPs {#history-of-eips}

* [Ethereum Improvement Proposals (EIPs) GitHub repository](https://github.com/ethereum/EIPs)
  * | October 2015,
    * created
    * editors
      * Martin Becze, Vitalik Buterin, Gavin Wood 
  * -- based on the -- [Bitcoin Improvement Proposals (BIPs)](https://github.com/bitcoin/bips)
    * -- based on the -- [Python Enhancement Proposals (PEPs)](https://www.python.org/dev/peps/) process

EIP editors decide when a proposal is ready to become an EIP, and help EIP authors move their proposals forward
* [Ethereum Cat Herders](https://www.ethereumcatherders.com/) help organize meetings between the EIP editors and the community (see [EIPIP](https://github.com/ethereum-cat-herders/EIPIP)).

Full standardization process alongside with chart is described in [EIP-1](https://eips.ethereum.org/EIPS/eip-1)

## Learn more {#learn-more}

### Community education projects {#community-projects}

- [PEEPanEIP](https://www.youtube.com/playlist?list=PL4cwHXAawZxqu0PKKyMzG_3BJV_xZTi1F) — *PEEPanEIP is an educational video series that discusses Ethereum Improvement Proposal (EIPs) and key features of upcoming upgrades.*
- [EIPs For Nerds](https://ethereum2077.substack.com/t/eip-research) — *EIPs For Nerds provides comprehensive, ELI5-style overviews of various Ethereum Improvement Proposals (EIPs), including core EIPs and application/infrastructure-layer EIPs (ERCs), to educate readers and shape consensus around proposed changes to the Ethereum protocol.* 
- [EIPs.wtf](https://www.eips.wtf/) — *EIPs.wtf provides extra information for Ethereum Improvement Proposals (EIPs), including their status, implementation details, related pull requests, and community feedback.* 
- [EIP.Fun](https://eipfun.substack.com/) — *EIP.Fun provides the latest news on Ethereum Improvement Proposals (EIPs), updates on EIP meetings, and more.*
- [EIPs Insight](https://eipsinsight.com/) — *EIPs Insight is a representation of state of Ethereum Improvement Proposals (EIPs) process & statistics as per information collected from different resources.*

## Participate {#participate}

Anyone can create an EIP
* Before submitting a proposal, one must read [EIP-1](https://eips.ethereum.org/EIPS/eip-1) which outlines the EIP process and how to write an EIP, and solicit feedback on [Ethereum Magicians](https://ethereum-magicians.org/), where proposals are first discussed with the community before a draft is submitted.

## References {#references}

Page content provided in part from [Ethereum Protocol Development Governance and Network Upgrade Coordination](https://hudsonjameson.com/2020-03-23-ethereum-protocol-development-governance-and-network-upgrade-coordination/) by Hudson Jameson
