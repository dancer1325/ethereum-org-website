[pdf's Appendix H. VM specification](yellow-paper-berlin.pdf)

* | interpret 256-bit binary values -- as -- integers
  * representation == big-endian (BE)
* if 256-bit machine datum -- is -- converted to OR from a 160-bit address or hash 
  * ==
    * rightwards (low-order for BE) 20 bytes
    * leftmost 12 are
      * discarded or
      * filled with 0s
  * -> integer values (== bytes -- interpreted as -- big-endian) are EQUIVALENT

* `C(σ,µ,A,I)`
  * 💡general gas cost function 💡
  * see paper

* `Cmem`
  * == 💡memory cost function💡 /
    * | < 724B of memory,
      * linear -- TODO: why ❓ --
    * | >= 724B of memory,
      * quadratic
    
* `M`
  * == memory-expansion / range function

* `O`
  * == EVM state-progression function

* `0`
  * EXCEPTIONs | state transition rules
  * `0x0*`
    * Stop & Arithmetic Operations
  * `0x1*`
    * Comparison & Bitwise Logic Operations
  * `0x2*`
    * KECCAK256
      * == compute Keccak-256 hash
  * `0x3*`
    * environmental information
  * `0x4*`
    * block information
  * `0x5*`
    * Stack, Memory, Storage and Flow Operations
  * `0x6*` & `0x7*`
    * push operations
  * `0x8*`
    * duplication operations
  * `0x9*`
    * exchange operations
  * `0xa*`
    * logging operations
  * `0xf*`
    * system operations
