---
title: Web3 secret storage definition
description: Formal definition for web3 secret storage
lang: en
sidebarDepth: 2
---

* goal
  * Web3 Secret Storage Definition's v3

* `web3` object
  * allows
    * your app can work | Ethereum
      * Reason:🧠communicates -- , through RPC calls, to a -- local node🧠
  * provided by
    * [web3.js library](https://github.com/ethereum/web3.js/)
      * ⚠️deprecated⚠️
  * use cases
    * ANY Ethereum node / exposes an RPC layer
  * `web3.eth`

## Definition {#definition}

* Web3 Secret Storage
  * v3 vs v1
    * 's encoding & decoding file | 
      * crypto algorithm
        * | v1, AES-128-CBC
        * | v3, AES-128-CTR
    * 's meanings/algorithm
      * EXCEPT `mac` 
        * == SHA3(derived key1's second-leftmost 16 bytes + derived key2's second-leftmost 16 bytes + ... + FULL `ciphertext`)
          * SHA3 == keccak-256

* Secret key files
  * stored |
    * Unix-like systems: `~/.web3/keystore`
    * Windows: `~/AppData/Web3/keystore` 
  * naming
    * recommendation
      * "<uuid>.json"
        * `<uuid>` == secret key's 128-bit UUID /
          * privacy-preserving -- for the -- secret key's address
  * 's associated password

* 👀steps to get ".json" file's secret key👀
  * get ".json" file's encryption key
    * key derivation function(file's password) / specified | 
      * file's .json `crypto.kdf`
      * file's .json `crypto.kdfparams`
  * verify -- through -- derive MAC vs `crypto.mac`

* `crypto.kdf`
  * ALLOWED values
    * `PBKDF2`
      * ⚠️supported by ALL minimally-compliant implementations⚠️
      * 's kdfparams (==`crypto.kdfparams`)
        * `prf`
          * requirements
            * == `hmac-sha256`
              * | future, may be extended 
        * `c`
          * number of iterations
        * `salt`
          * salt / passed -- to -- PBKDF
        * `dklen`
          * derived key's length 
          * requirements
            * ⚠️\>= 32⚠️


* MAC
  * == SHA3(derived key[second-leftmost 16 bytes] + `ciphertext`'s contents)
    * SHA3 == keccak-256

    ```js
    KECCAK(DK[16..31] ++ <ciphertext>)          // ++  ==  concatenation operator
    ```

* `crypto.ciphertext`
  * way to decrypt
    * `crypto.cipher` & `crypto.cipherparams`

* if derived key's size != algorithm's key size -> add 0's | derived key's rightmost bytes

* `crypto.cipher`
  * requirements
    * ⚠️must support AES-128-CTR algorithm⚠️
      ```
      cipher: aes-128-ctr
      ```
      * 's cipherparams (== `crypto.cipherparams`)
        * `iv`
          * == cipher's 128-bit initialisation vector
  * 's key
    * == derived key's leftmost 16 bytes
      ```
      DK[0..15]
      ```

* secret key's creation/encryption
  * == reverse of PREVIOUS instructions

* recommendations
  * `uuid`, `salt` and `iv` are ACTUALLY random

* `minorversion`
  * OPTIONAL
  * uses
    * track format changes
      * smaller,
      * non-breaking 

## Test Vectors {#test-vectors}

- `Address`: `008aeeda4d805471df9b2a5b0f38a0c3bcba786b`
- `ICAP`: `XE542A5PZHH8PYIZUBEJEO0MFWRAPPIL67`
- `UUID`: `3198bc9c-6672-5ab3-d9954942343ae5b6`
- `Password`: `testpassword`
- `Secret`: `7a28b5ba57c53603b0b07b56bba752f7784bf506fa95edc395f5cf6c7514fe9d`

### PBKDF2-SHA-256 {#PBKDF2-SHA-256}

* `AES-128-CTR` + `PBKDF2-SHA-256`

// TODO: how to calculate the next file❓
["3198bc9c-6672-5ab3-d9954942343ae5b6.json"](examples/3198bc9c-6672-5ab3-d9954942343ae5b6.json)

**Intermediates**:

`Derived key`: `f06d69cdc7da0faffb1008270bca38f5e31891a3a773950e6d0fea48a7188551`
`MAC Body`: `e31891a3a773950e6d0fea48a71885515318b4d5bcd28de64ee5559e671353e16f075ecae9f99c7a79a38af5f869aa46`
`MAC`: `517ead924a9d0dc3124507e3393d175ce3ff7c1e96529c6c555ce9e51205e9b2`
`Cipher key`: `f06d69cdc7da0faffb1008270bca38f5`

### Scrypt {#scrypt}

* AES-128-CTR + Scrypt

// TODO: how to calculate the next file❓
[3198bc9c-6672-5ab3-d995-4942343ae5b6.json](examples/3198bc9c-6672-5ab3-d995-4942343ae5b6.json)

**Intermediates**:

`Derived key`: `7446f59ecc301d2d79bc3302650d8a5cedc185ccbb4bf3ca1ebd2c163eaa6c2d`
`MAC Body`: `edc185ccbb4bf3ca1ebd2c163eaa6c2ddd8a1132cf57db67c038c6763afe2cbe6ea1949a86abc5843f8ca656ebbb1ea2`
`MAC`: `337aeb86505d2d0bb620effe57f18381377d67d76dac1090626aa5cd20886a7c`
`Cipher key`: `7446f59ecc301d2d79bc3302650d8a5c`

## vs Web3 Secret Storage Definition's v1 {#alterations-from-v2}

* TODO: This version fixes several inconsistencies with the version 1 published [here](https://github.com/ethereum/homestead-guide/blob/master/old-docs-for-reference/go-ethereum-wiki.rst/Passphrase-protected-key-store-spec.rst). In brief these are:

- Capitalisation is unjustified and inconsistent (scrypt lowercase, Kdf mixed-case, MAC uppercase).
- Address unnecessary and compromises privacy.
- `Salt` is intrinsically a parameter of the key derivation function and deserves to be associated with it, not with the crypto in general.
- _SaltLen_ unnecessary (just derive it from Salt).
- The key derivation function is given, yet the crypto algorithm is hard specified.
- `Version` is intrinsically numeric yet is a string (structured versioning would be possible with a string, but can be considered out of scope for a rarely changing configuration file format).
- `KDF` and `cipher` are notionally sibling concepts yet are organised differently.
- `MAC` is calculated through a whitespace agnostic piece of data(!)

Changes have been made to the format to give the following file, functionally equivalent to the example given on the previously linked page:

```json
{
  "crypto": {
    "cipher": "aes-128-cbc",
    "ciphertext": "07533e172414bfa50e99dba4a0ce603f654ebfa1ff46277c3e0c577fdc87f6bb4e4fe16c5a94ce6ce14cfa069821ef9b",
    "cipherparams": {
      "iv": "16d67ba0ce5a339ff2f07951253e6ba8"
    },
    "kdf": "scrypt",
    "kdfparams": {
      "dklen": 32,
      "n": 262144,
      "p": 1,
      "r": 8,
      "salt": "06870e5e6a24e183a5c807bd1c43afd86d573f7db303ff4853d135cd0fd3fe91"
    },
    "mac": "8ccded24da2e99a11d48cda146f9cc8213eb423e2ea0d8427f41c3be414424dd",
    "version": 1
  },
  "id": "0498f19a-59db-4d54-ac95-33901b4f1870",
  "version": 2
}
```

## vs Web3 Secret Storage Definition's v2 {#alterations-from-v2}

* v2
  * C++ implementation
  * lot of bugs
