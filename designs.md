## collections

```yaml
─────────────────────────────────────────────
Browse Collections
─────────────────────────────────────────────

[ SEARCH 🔍 ] (name, symbol, contract)

─────────────────────────────────────────────
[ FILTERS ]
Verified ▢
Storage ▾ (arweave / ipfs / onchain / http)
─────────────────────────────────────────────

[ COLLECTIONS ]

ClosedSea Elite Cats ✔️
• CEC • 2025 items
• storage: arweave
• 0x0000…9999
[ VIEW ]

─────────────────────────────────────────────

Degen Penguins
• DPENGS • 10000 items
• storage: ipfs
• 0xabcD…DeF0
[ VIEW ]

─────────────────────────────────────────────

Quantum Lotus ✔️
• LOTUS • 4096 items
• storage: onchain
• 0x7777…7777
[ VIEW ]

─────────────────────────────────────────────

Insomnia Bears
• Zzz • 7777 items
• storage: http
• 0x1111…1111
[ VIEW ]

─────────────────────────────────────────────
```

---

## /create-order

```yaml
─────────────────────────────────────────────
<slug> • Create Order
─────────────────────────────────────────────

Order Type
[ SELL ]   [ BUY ]

Token
[ #42 ▼ ]               (SELL)
[ Any Token ]           (BUY collection bid)
[ Specific # ▼ ]

Price (ETH)
[ 0.42 ]

Valid Until
[ 7 days ▼ ]

─────────────────────────────────────────────
Review
SELL • #42
Ξ0.42
7 days left
─────────────────────────────────────────────

[ SIGN ORDER ]
─────────────────────────────────────────────
```

#### Validation Flow

```yaml
CREATE ORDER FLOW
──────────────────────────────────────────────
User fills form
        ↓
if SELL:
    ownerOf(tokenId) == user ?
        yes → check NFT approval
        no  → block ("not yours")
        ↓
    approvedForAll ?
        yes → continue
        no  → prompt approval tx
        ↓
if BUY:
    WETH.allowance ≥ price ?
        yes → continue
        no  → prompt allowance tx
        ↓
All checks passed
        ↓
Sign EIP-712 Order
        ↓
Submit Order → indexer / backend
──────────────────────────────────────────────

```

---

## /collection/[slug]

```yaml
─────────────────────────────────────────────
COLLECTION: <slug>
ADDR: 0xABC...DEF • TOKEN SUPPLY: 2025
ROYALTY: 5% • ENGINE: [OB | AMM]
─────────────────────────────────────────────

[ PRICE — SNAPSHOT ]
Orderbook Floor: Ξ0.42
AMM Pool Price:  Ξ0.38
Spread:          Ξ0.04

─────────────────────────────────────────────
[ TOKENS ]
#42   AMM: Ξ0.38  OB: Ξ0.42   [ BUY ] [ SELL ]
#69   AMM: Ξ0.41  OB: Ξ0.47   [ BUY ] [ SELL ]
#1337 AMM: Ξ0.50  OB: Ξ0.55   [ BUY ] [ SELL ]

─────────────────────────────────────────────
[ ENGINE PARAMS ]
Curve: Linear
k: 0.01
Pool NFTs: 12
Pool ETH:  Ξ24.5
OB Listings: 3 active

─────────────────────────────────────────────
[ EVENT FEED ]
03:12  POOL_BUY    #69   Ξ0.41
10:08  ORDER_EXEC  #42   Ξ0.44
22:31  POOL_SELL   #1337 Ξ0.49
1:14h  ORDER_CANCEL #42

─────────────────────────────────────────────
[ LINKS ]
Contract | GitHub | Etherscan | IPFS
─────────────────────────────────────────────
```

## /home

```yaml
─────────────────────────────────────────────
D:mrkt • Home
─────────────────────────────────────────────

[ MARKET SNAPSHOT ]
24h Volume: Ξ128.4
Active Collections: 12
Active Orders: 87
AMM Pools: 4

─────────────────────────────────────────────
[ PRICE TREND — 24H ]
(line chart here: global avg NFT price)
• y-axis: ETH
• x-axis: 24h time
─────────────────────────────────────────────

[ MARKET DEPTH ]
(bar chart here: OB bids vs asks across all collections)
• Bids: 312 ETH
• Asks: 540 ETH
Spread: Ξ0.03 avg
─────────────────────────────────────────────

[ TOP MOVERS ]
#42    +12%   (Ξ0.42 → Ξ0.47)
#1337  -8%    (Ξ0.55 → Ξ0.50)
#69    +3%    (Ξ0.41 → Ξ0.41)

─────────────────────────────────────────────
[ RECENT EVENTS ]
03:12   ORDER_EXEC    #42     Ξ0.47
02:52   POOL_BUY      #69     Ξ0.41
02:11   NEW_LISTING   #1337   Ξ0.55
00:44   ORDER_CANCEL  #42
─────────────────────────────────────────────
```

## /analytics

```yaml
─────────────────────────────────────────────
Analytics
─────────────────────────────────────────────

[ GLOBAL VOLUME ]
(Line chart — volume per hour or per day)
• OB volume
• AMM volume

─────────────────────────────────────────────
[ ENGINE SHARE ]
(Pie chart)
Orderbook: 68%
AMM:       32%

─────────────────────────────────────────────
[ FLOOR PRICE INDEX ]
(Line chart)
• global floor across all collections
• optional: weighted by liquidity

─────────────────────────────────────────────
[ COLLECTION LEADERBOARD ]
Slug        Floor   24hVol   Sales
────        ────    ──────   ─────
coolkitz    Ξ0.42   Ξ18.5    41
cybercats   Ξ0.19   Ξ6.3     12
ghosts      Ξ1.55   Ξ2.0      2

─────────────────────────────────────────────
[ AMM LIQUIDITY ]
(Line or Bar)
• total pool ETH
• total pool NFTs
• avg pool price
─────────────────────────────────────────────
```
