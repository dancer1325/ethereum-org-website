---
title: Data structures and encoding
description: An overview of the fundamental Ethereum data structures.
lang: en
sidebarDepth: 2
---

* Ethereum
  * manage (creates, stores & transfers) large volumes of data /
    * formatted | standardized & memory-efficient ways
      * Reason: 🧠allow anyone can [run a node](/run-a-node/) | relatively modest consumer-grade hardware🧠
      * == use 💡data structures 💡

## Prerequisites {#prerequisites}

* read PREVIOUSLY
  * [networking layer](../networking-layer)
  * [Ethereum whitepaper](/whitepaper/)

## Data structures {#data-structures}

### Patricia merkle tries {#patricia-merkle-tries}

* Patricia Merkle Tries
  * == structures / 
    * key-value pairs are encoded -- into a -- trie
      * deterministic
      * cryptographically authenticated 
  * uses
    * Ethereum's execution layer
  * [MORE](patricia-merkle-trie)

### Recursive Length Prefix {#recursive-length-prefix}

* Recursive Length Prefix (RLP)
  * == 👀serialization method👀
  * uses
    * Ethereum's execution layer
  * [MORE](rlp)

### Simple Serialize {#simple-serialize}

* Simple Serialize (SSZ)
  * == serialization format
  * uses
    * Ethereum's consensus layer
      * MORE common one
        * Reason: 🧠compatibile with merklelization🧠
  * [MORE](ssz)
