[pdf's Appendix G. Fee schedule](yellow-paper-berlin.pdf)

* fee schedule G
  * := tuple of scalar values / 
    * about transaction's abstract operations' relative costs (gas)

| Name               | Value  | Description                                                                                   |
|--------------------|--------|-----------------------------------------------------------------------------------------------|
| Gzero              | 0      | Wzero's operations <br/> == FREE                                                              |
| Gjumpdest          | 1      | JUMPDEST operation                                                                            |
| Gbase              | 2      | Wbase operations                                                                              |
| Gverylow           | 3      | Wverylow operations                                                                           |
| Glow               | 5      | Wlow operations                                                                               |
| Gmid               | 8      | Wmid operations                                                                               |
| Ghigh              | 10     | Whigh operations                                                                              |
| Gwarmaccess        | 100    | warm account OR storage access                                                                |
| Gaccesslistaddress | 2400   | warming up an account -- with the -- access list                                              |
| Gaccessliststorage | 1900   | warming up a storage -- with the -- access list                                               |
| Gcoldaccountaccess | 2600   | cold account access                                                                           |
| Gcoldsload         | 2100   | cold storage access                                                                           |
| Gsset              | 20000  | SSTORE operation / storage value = 0 -- is set to -- NON-0                                    |
| Gsreset            | 2900   | SSTORE operation / storage value's remains 0 or set to 0                                      |
| Rsclear            | 15000  | Refund given (added \| refund counter) \| storage value !=0 -- is set to -- 0                 |
| Rselfdestruct      | 24000  | Refund given (added \| refund counter) \| self-destructing an account                         |
| Gselfdestruct      | 5000   | to pay -- for a -- SELFDESTRUCT operation                                                     |
| Gcreate            | 32000  | Paid -- for a -- CREATE operation                                                             |
| Gcodedeposit       | 200    | Paid / byte -- for a -- SUCEED CREATE operation / place code \| state                         |
| Gcallvalue         | 9000   | TODO: Paid for a non-zero value transfer as part of the CALL operation.                       |
| Gcallstipend       | 2300   | A stipend for the called contract subtracted from Gcallvalue for a non-zero value transfer.   |
| Gnewaccount        | 25000  | Paid for a CALL or SELFDESTRUCT operation which creates an account.                           |
| Gexp               | 10     | Partial payment for an EXP operation.                                                         |
| Gexpbyte           | 50     | Partial payment when multiplied by the number of bytes in the exponent for the EXP operation. |
| Gmemory            | 3      | Paid for every additional word when expanding memory.                                         |
| Gtxcreate          | 32000  | Paid by all contract-creating transactions after the Homestead transition.                    |
| Gtxdatazero        | 4      | Paid for every zero byte of data or code for a transaction.                                   |
| Gtxdatanonzero     | 16     | Paid for every non-zero byte of data or code for a transaction.                               |
| Gtransaction       | 21000  | Paid for every transaction.                                                                   |
| Glog               | 375    | Partial payment for a LOG operation.                                                          |
| Glogdata           | 8      | Paid for each byte in a LOG operation's data.                                                 |
| Glogtopic          | 375    | Paid for each topic of a LOG operation.                                                       |
| Gkeccak256         | 30     | Paid for each KECCAK256 operation.                                                            |
| Gkeccak256word     | 6      | Paid for each word (rounded up) for input data to a KECCAK256 operation.                      |
| Gcopy              | 3      | Partial payment for *COPY operations, multiplied by words copied, rounded up.                 |
| Gblockhash         | 20     | Payment for each BLOCKHASH operation.                                                         |
