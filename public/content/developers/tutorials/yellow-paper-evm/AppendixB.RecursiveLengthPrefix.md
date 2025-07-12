[pdf's Appendix B. Recursive Length Prefix](yellow-paper-berlin.pdf)

* RLP
  * == serialisation method 
    * -- for -- encoding arbitrarily structured binary data ( == byte arrays)
  * POSSIBLE structures `T`
    ```
    T ≡ L ⊎ B
    // ⊎  == disjoint union
    //    allows distinguish `() ∈B` (== empty byte array) -- from -- `() ∈L` (== empty list)
    //      Reason: 🧠needed, because `B`'s encoding != L's encoding🧠
    // T == ALL byte arrays + structural sequences
    
    L ≡ {t : t = (t[0],t[1],...) ∧ ∀n<∥t∥: t[n] ∈T}
    // L == ALL tree-like (sub-)structures / 👀!= 1! leaf (== tree's branch node)👀
    //   _Example:_  ["hello", "world"]
    
    B ≡ {b : b = (b[0],b[1],...) ∧ ∀n<∥b∥: b[n] ∈O}
    // O == set of (8-bit) bytes
    // B == set of ALL sequences of bytes == byte arrays
    //   == tree's leaf    -- Reason:🧠final data (!= tree's branches)🧠
    //   _Example:_  "hello"  
    ```
  * 
      ```
      RLP(x) ≡
        Rb(x) if x ∈B     // x == byte array 
          ≡
            x                                if ∥x∥= 1 ∧ x[0] <128        ==    byte array == 1! byte   &   1! byte < 128    
                      == 's values [0x00, 0x7f]  (== | decimal [0, 127])
            (128 + ∥x∥)·x                    else if ∥x∥<56              ==    byte array < 56 bytes
                      (128 + ∥x∥)  == [0x80, 0xb7]  (== | decimal [128, 183])
            (183 + BE(∥x∥))·BE(∥x∥)·x        else if ∥x∥<2^64
                      BE(x)                          see | paper,                == minimal-length byte array | big-endian integer format == length of the input byte array ()
                      (183 + BE(∥x∥))   ==  [0xb8, 0xbf] (== | decimal [184, 191])
                      _Example:_ 1024 byte long string -> (\xb9\x04\x00)* string -- TODO: ❓
            ∅                                otherwise                   == ❌byte arrays / > 2^64 bytes -> can NOT be encoded❌
                                                                         ->  encoded byte array's FIRST byte < 192 -> encoded byte arrays != encodings of sequences | L (TODO: ❓)
        Rl(x) otherwise   // x == sequence of values
          ≡
            (192 + ∥s(x)∥)·s(x)                 if s(x) ̸= ∅ ∧∥s(x)∥<56
              s(x).                             see | paper
            (247 + BE(∥s(x)∥)·BE(∥s(x)∥)·s(x)   else if s(x) ̸= ∅ ∧∥s(x)∥<2^64
            ∅                                   otherwise
      ```
      ```
      RLP(i: i∈N) ≡ RLP(BE(i))               == scalar / non-negative intege   
      ```
  * ❌NO exist canonical encoding format | 
    * signed values
    * floating-point values❌  

  * | interpret RLP data,
    * ⚠️if expected fragment is decoded -- as a -- scalar & leading zeroes found | byte sequence -> clients should consider -- as -- INVALID data⚠️


