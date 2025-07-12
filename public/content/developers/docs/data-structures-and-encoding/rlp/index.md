---
title: Recursive-length prefix (RLP) serialization
description: A definition of the rlp encoding in Ethereum's execution layer.
lang: en
sidebarDepth: 2
---

* Recursive Length Prefix (RLP) serialization
  * 👀standardizes the transfer of data BETWEEN nodes 👀
    * | space-efficient format (TODO: ❓)
  * uses
    * | Ethereum's execution clients,
      * serialize objects | Ethereum's execution layer 
  * goal
    * 👀encode arbitrarily nested arrays of binary data👀
      * EXCEPTION
        * positive integers
          * Reason: 🧠represented -- by -- big-endian binary form / NO leading 0's🧠
            * _Example:_ 0 (integer value) == [] (== empty byte array)
        * specific data types (_Example:_ strings, floats)
          * Reason: 🧠delegated -- to -- higher-order protocols🧠

* see [Ethereum yellow paper (Appendix B)](https://ethereum.github.io/yellowpaper/paper.pdf#page=19)

* if you want to use RLP / encode a dictionary -> 2 suggested canonical forms
  - `[[k1,v1],[k2,v2]...]` / keys | lexicographic order
  - higher-level Patricia Tree encoding -- as -- Ethereum does

## RLP encoding {#definition}

* RLP encoding function
  * 1 argument / 
    * ALLOWED
      - string (== byte array)
        - _Examples:_ "", "cat"
        - | this page, == bytes of binary data 
      - list of items
        - _Example:_ ["cat", ["puppy", "cow"], "horse", [[]], "pig", [""], "sheep"] 
      - positive integer
  * [mathematical definition](/ethereum-org-website/public/content/developers/tutorials/yellow-paper-evm/AppendixB.RecursiveLengthPrefix.md)
    - TODO: For example, a 1024 byte long string would be encoded as `\xb9\x04\x00` (dec. `185, 4, 0`) followed by the string. Here, `0xb9` (183 + 2 = 185) as the first byte, followed by the 2 bytes `0x0400` (dec. 1024) that denote the length of the actual string. 
    - If the total payload of a list (i.e. the combined length of all its items being RLP encoded) is 0-55 bytes long, the RLP encoding consists of a single byte with value **0xc0** plus the length of the payload followed by the concatenation of the RLP encodings of the items. The range of the first byte is thus `[0xc0, 0xf7]` (dec. `[192, 247]`).
    - If the total payload of a list is more than 55 bytes long, the RLP encoding consists of a single byte with value **0xf7** plus the length in bytes of the length of the payload in binary form, followed by the length of the payload, followed by the concatenation of the RLP encodings of the items. The range of the first byte is thus `[0xf8, 0xff]` (dec. `[248, 255]`).

  * code definition

    ```python
    def rlp_encode(input):
        if isinstance(input,str):
            if len(input) == 1 and ord(input) < 0x80:
                return input
            return encode_length(len(input), 0x80) + input
        elif isinstance(input, list):
            output = ''
            for item in input:
                output += rlp_encode(item)
            return encode_length(len(output), 0xc0) + output
  
    def encode_length(L, offset):
        if L < 56:
             return chr(L + offset)
        elif L < 256**8:
             BL = to_binary(L)
             return chr(len(BL) + offset + 55) + BL
         raise Exception("input too long")
  
    def to_binary(x):
        if x == 0:
            return ''
        return to_binary(int(x / 256)) + chr(x % 256)
    ```

### Examples {#examples}

- the string "dog" = [ 0x83, 'd', 'o', 'g' ]
- the list [ "cat", "dog" ] = `[ 0xc8, 0x83, 'c', 'a', 't', 0x83, 'd', 'o', 'g' ]`
- the empty string ('null') = `[ 0x80 ]`
- the empty list = `[ 0xc0 ]`
- the integer 0 = `[ 0x80 ]`
- the byte '\\x00' = `[ 0x00 ]`
- the byte '\\x0f' = `[ 0x0f ]`
- the bytes '\\x04\\x00' = `[ 0x82, 0x04, 0x00 ]`
- the [set theoretical representation](http://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers) of three, `[ [], [[]], [ [], [[]] ] ] = [ 0xc7, 0xc0, 0xc1, 0xc0, 0xc3, 0xc0, 0xc1, 0xc0 ]`
- the string "Lorem ipsum dolor sit amet, consectetur adipisicing elit" = `[ 0xb8, 0x38, 'L', 'o', 'r', 'e', 'm', ' ', ... , 'e', 'l', 'i', 't' ]`

## RLP decoding {#rlp-decoding}

According to the rules and process of RLP encoding, the input of RLP decode is regarded as an array of binary data. The RLP decoding process is as follows:

1.  according to the first byte (i.e. prefix) of input data and decoding the data type, the length of the actual data and offset;

2.  according to the type and offset of data, decode the data correspondingly, respecting the minimal encoding rule for positive integers;

3.  continue to decode the rest of the input;

Among them, the rules of decoding data types and offset is as follows:

1.  the data is a string if the range of the first byte (i.e. prefix) is [0x00, 0x7f], and the string is the first byte itself exactly;

2.  the data is a string if the range of the first byte is [0x80, 0xb7], and the string whose length is equal to the first byte minus 0x80 follows the first byte;

3.  the data is a string if the range of the first byte is [0xb8, 0xbf], and the length of the string whose length in bytes is equal to the first byte minus 0xb7 follows the first byte, and the string follows the length of the string;

4.  the data is a list if the range of the first byte is [0xc0, 0xf7], and the concatenation of the RLP encodings of all items of the list which the total payload is equal to the first byte minus 0xc0 follows the first byte;

5.  the data is a list if the range of the first byte is [0xf8, 0xff], and the total payload of the list whose length is equal to the first byte minus 0xf7 follows the first byte, and the concatenation of the RLP encodings of all items of the list follows the total payload of the list;

In code, this is:

```python
def rlp_decode(input):
    if len(input) == 0:
        return
    output = ''
    (offset, dataLen, type) = decode_length(input)
    if type is str:
        output = instantiate_str(substr(input, offset, dataLen))
    elif type is list:
        output = instantiate_list(substr(input, offset, dataLen))
    output += rlp_decode(substr(input, offset + dataLen))
    return output

def decode_length(input):
    length = len(input)
    if length == 0:
        raise Exception("input is null")
    prefix = ord(input[0])
    if prefix <= 0x7f:
        return (0, 1, str)
    elif prefix <= 0xb7 and length > prefix - 0x80:
        strLen = prefix - 0x80
        return (1, strLen, str)
    elif prefix <= 0xbf and length > prefix - 0xb7 and length > prefix - 0xb7 + to_integer(substr(input, 1, prefix - 0xb7)):
        lenOfStrLen = prefix - 0xb7
        strLen = to_integer(substr(input, 1, lenOfStrLen))
        return (1 + lenOfStrLen, strLen, str)
    elif prefix <= 0xf7 and length > prefix - 0xc0:
        listLen = prefix - 0xc0;
        return (1, listLen, list)
    elif prefix <= 0xff and length > prefix - 0xf7 and length > prefix - 0xf7 + to_integer(substr(input, 1, prefix - 0xf7)):
        lenOfListLen = prefix - 0xf7
        listLen = to_integer(substr(input, 1, lenOfListLen))
        return (1 + lenOfListLen, listLen, list)
    raise Exception("input does not conform to RLP encoding form")

def to_integer(b):
    length = len(b)
    if length == 0:
        raise Exception("input is null")
    elif length == 1:
        return ord(b[0])
    return ord(substr(b, -1)) + to_integer(substr(b, 0, -1)) * 256
```

## Further reading {#further-reading}

- [RLP in Ethereum](https://medium.com/coinmonks/data-structure-in-ethereum-episode-1-recursive-length-prefix-rlp-encoding-decoding-d1016832f919)
- [Ethereum under the hood: RLP](https://medium.com/coinmonks/ethereum-under-the-hood-part-3-rlp-decoding-df236dc13e58)
- [Coglio, A. (2020). Ethereum's Recursive Length Prefix in ACL2. arXiv preprint arXiv:2009.13769.](https://arxiv.org/abs/2009.13769)
