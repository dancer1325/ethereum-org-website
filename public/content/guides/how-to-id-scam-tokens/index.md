---
title: How to identify scam tokens
description: Understanding scam tokens, how they make themselves look legitimate, and how to avoid them.
lang: en
---

* goal
  * What are scam tokens?
  * how do scam tokens make themselves look legitimate?
  * how to identify them -- to -- 
    * protect yourself
    * avoid being scammed

# How to identify scam tokens {#identify-scam-tokens}

* Ethereum's MOST common uses
  * create a tradable token / follow [ERC-20](/developers/docs/standards/tokens/erc-20/)
    * used for 
      * legitimate use cases OR
      * criminal market

* ways to cheat you
  - **selling you a scam token** / may look like legitimate
  - **sign bad transactions** /
    * expose sensitive information / gives them -- access to -- your assets
    * UI clones honest sites

* _Example:_ [`wARB`](https://etherscan.io/token/0xb047c8032b99841713b8e3872f06cf32beb27b82)
  * tries to look like the legitimate [`ARB`](https://etherscan.io/address/0xb50721bcf8d664c30412cfbc6cf7a15145234ad1) token

* Arbitrum
  * == organization / 
    * develops & manages [optimistic rollups](../../developers/docs/scaling/optimistic-rollups/)
    * | INITIALLY, 
      * for-profit company
    * | NOWADAYS,
      * they issued a tradeable [governance token](../../dao/index.md#token-based-membership-token-based-membership)

* Ethereum's convention
  * 👀if an asset is NOT ERC-20 compliant -> we create a "wrapped" version of it / name's prefix == "w"👀
    * _Example:_ 
      * | bitcoin, wBTC
      * | ether, [wETH](https://cointelegraph.com/news/what-is-wrapped-ethereum-weth-and-how-does-it-work)
  * if an asset is ERC-20 compliant -> NOT sense to create a wrapped version of an ERC-20 token
    * Reason: 🧠it's ALREADY | Ethereum🧠
    * scammers will try to copy the appearance

## How do scam tokens work? {#how-do-scam-tokens-work}

* scammers
  * can deploy ANY smart contract
    * Reason: 🧠there is NO central authority / prevent it🧠

* [Smart contracts](../../developers/docs/smart-contracts)
  * == programs / run | Ethereum blockchain
  * uses
    * EVERY ERC-20 token is implemented -- as a -- smart contract

* Arbitrum
  * deployed a contract / uses the symbol `ARB`
    * ANYONE could ALSO deploy a contract / uses `ARB`

## Appearing legitimate {#appearing-legitimate}

* tricks / scam token creators do to appear legitimate
  - **Legitimate name & symbol**
    * == ANY ERC-20 contracts can have the SAME symbol & name
    * ❌NOT use those fields -- for -- security purposes❌
  - **Legitimate owners**
    * Scam tokens send significant balances -- to -- reputation addresses
    * _Example:_ let's look at `wARB` again
      * [16% of the tokens](https://etherscan.io/token/0xb047c8032b99841713b8e3872f06cf32beb27b82?a=0x1c8db745abe3c8162119b9ef2c13864cd1fdd72f) are held by an address / public tag == [Arbitrum Foundation: Deployer](https://etherscan.io/address/0x1c8db745abe3c8162119b9ef2c13864cd1fdd72f)
  - **Legitimate transfers**
    * Legitimate owners pay -- to -- transfer a scam token to others
      * Reason:🧠try to legitimate the scam token🧠
    * `Transfer` events 
      * produced -- by the -- ERC-20 contract

* address' ERC-20 balance == part of the ERC-20 contract's storage
  * can be specified -- by the -- contract
* contract can forbid transfers
  * -> legitimate users will NOT be able to get rid of those scam tokens

## Scammy websites {#websites}

* Scammers
  * can ALSO produce CONVINCING websites /
    * redirect to external scam site,
    * add incorrect instructions / user expose their keys ...

* recommendations
  * check the website URL
  * save trusted addresses | your bookmarks

## How can you protect yourself? {#protect-yourself}

1. **Check the contract address**
   * Reason: 🧠legitimate tokens come -- from -- legitimate organizations🧠
   * you can find them | organization's website
   * _Example:_ [`ARB` legitimate addresses](https://docs.arbitrum.foundation/deployment-addresses#token)

2. **Real tokens have liquidity**
   * _Example:_ `ARB`/`ETH` Uniswap pool [holds about a million dollars](https://info.uniswap.org/#/pools/0x755e5a186f0469583bd2e80d1216e02ab88ec6ca)  
   * if you try to buy the legitimate token -> would barely change the price
     
     ![Buying a legitimate token](./uniswap-real.png)
   * Scam tokens (normally) have SMALL liquidity pools
     * Reason: 🧠scammers do NOT want to risk real assets🧠
     * _Example:_ `wARB`
       * if you try to buy (EVEN SMALL) the scam token -> would change HIGHLY the price

         ![Buying a scam token](./uniswap-scam.png)

3. **Look in Etherscan**
   * LOT of scam tokens have ALREADY been identified & reported -- by the -- community
     * [marked | Etherscan](https://info.etherscan.com/etherscan-token-reputation/)

   ![Scam token in Etherscan](./etherscan-scam.png)

* [Uniswap](https://uniswap.org/)
  * MOST common token swapping protocols
  * works -- via -- liquidity pools
    * investors deposit their tokens | liquidity pools
      * Reason: 🧠get from trading fees🧠

## Conclusion {#conclusion}

* | decentralized world,
  * NOBODY protects you
  * ⚠️you need to protect for yourself⚠️

- Scam tokens
  - impersonate legitimate tokens / ⚠️use SAME name, symbol, etc.⚠️
  - ❌can NOT use the SAME contract address❌
- legitimate token's address
  - check the organization / owns the token is
- use popular applications
  - [Uniswap](https://app.uniswap.org/#/swap)
  - [Etherscan](https://etherscan.io/)
