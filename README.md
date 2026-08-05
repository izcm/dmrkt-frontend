# Trading terminal

This app was made to serve as a component of the `dmrkt` interactive Web3 demo. With small refactors it can be made to work with other systems / indexers — see [Coupling](#coupling) for what that would involve.

NFT marketplace frontend built with Next.js, wagmi/viem, and RainbowKit. Orders are signed
off-chain (EIP-712) and matched against an on-chain marketplace contract, with live data served by the [dmrkt indexer](#).

> [!NOTE]
> Reusable components, hooks, and logic are being extracted into standalone `npm` packages at [izcm/iz-packages](https://github.com/izcm/iz-packages), where they'll be documented once the extraction is complete.
>
> Until then, this README stays intentionally light on those details.

**Contents** — [Tech stack](#tech-stack) · [Getting started](#getting-started) · [Scripts](#scripts) · [Supported chains](#supported-chains) · [Docker](#docker) · [Testing](#testing) · [License](#license) · [Coupling](#coupling) · [References](#references)

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router) + React 19
- [wagmi](https://wagmi.sh) / [viem](https://viem.sh) + [RainbowKit](https://www.rainbowkit.com) for wallet connection and on-chain calls
- [TanStack Query](https://tanstack.com/query) for data fetching/caching
- Tailwind CSS 4
- [Vitest](https://vitest.dev) + Testing Library for tests

## Getting started

### Prerequisites

- Node.js (see `package.json` engines / `.nvmrc` if present)
- npm

### Install

```bash
npm install
```

### Environment variables

Create a `.env.local` in the project root:

| Variable                               | Required?                                                                                              | Default if unset                                                                            |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_INDEXER_API_CLIENT`       | **Required** — indexer base URL used by the browser                                                    | none, throws at runtime                                                                     |
| `INDEXER_API_SERVER`                   | **Required** — indexer base URL used by server components/SSR                                          | none, throws at runtime                                                                     |
| `NEXT_PUBLIC_INDEXER_WS`               | **Required** — indexer websocket URL for realtime updates                                              | none, throws at runtime                                                                     |
| `NEXT_PUBLIC_MODE`                     | Optional — set to `DEMO` to restrict the app to the local Anvil chain (31337) only                     | unset = normal mode, all non-Anvil chains active                                            |
| `NEXT_PUBLIC_ANVIL_MARKETPLACE`        | Conditionally required — only needed when Anvil (chain 31337) is active (e.g. `NEXT_PUBLIC_MODE=DEMO`) | not needed for Sepolia/production-only setups                                               |
| `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` | Optional                                                                                               | unset = falls back to injected-wallet-only connector (no WalletConnect/MetaMask/Base group) |
| `DEV_ORIGIN`                           | Optional — LAN IP for testing on mobile devices                                                        | unset = no extra allowed dev origins                                                        |

### Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script          | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the dev server              |
| `npm run build` | Production build                  |
| `npm start`     | Run the production build          |
| `npm test`      | Run tests (Vitest)                |
| `npm run lint`  | Lint with ESLint                  |
| `npm run fmt`   | Format with Prettier              |
| `npm run clean` | Remove `.next` and `node_modules` |

## Supported chains

Chains are configured in [`chains.json`](chains.json): local Anvil (`31337`) for development/demo,
and Sepolia (`11155111`) for testnet. Add a chain by adding an entry with its `chainId`, `weth`,
`marketplace`, and RPC `url`.

## Docker

```bash
docker build \
  --build-arg INDEXER_API_CLIENT=http://localhost:5000 \
  --build-arg INDEXER_WS=ws://localhost:5000 \
  --build-arg ANVIL_MARKETPLACE=<marketplace-address> \
  --build-arg MODE=DEMO \
  -t dmrkt-frontend .
```

## Testing

```bash
npm test
```

## License

MIT — see [LICENSE](LICENSE).

## Coupling

To decouple this app from the `dmrkt` indexer service and contracts, one would have to:

- Swap out the indexer client for one matching the new service's API.
- Swap out the marketplace contract's ABI, EIP-712 order-signing scheme, and on-chain error messages for the new contract's.
- Update the chain config to point at the new marketplace deployment(s).

The terminal supports multichain, but to have it support several marketplaces per chain you'd have to move from the current implementation that incorporates the marketplace address in each chain's config and redesign calls to pass the marketplace at call sites.

## References

### Project structure

```
app/                  Next.js routes, layout, providers
features/             UI + hooks by domain (marketplace, orders, trade, wallet, realtime)
domain/               Core types/models (listing, trade, nft, nft-collection)
lib/blockchain/       wagmi config, contract actions, ABIs
lib/dmrkt-indexer/    Indexer API client (actions, DTOs, config)
protocol/             EIP-712 order signing (domain, types, order)
chains.json           Supported chain definitions (RPC url, WETH, marketplace address)
```

### Features

#### Marketplace

The marketplace core behaviour. Navigation elementt.

Browsing UI — listings, tabs, filters, and NFT/listing/trade detail panels.

Most UI elements wrap reusable components from root's `ui/`.

**UI**

| Component        | Description                             |
| ---------------- | --------------------------------------- |
| `Header`         | Top bar, incl. network switcher         |
| `MobileNavBar`   | Mobile nav + search                     |
| `Tabs`           | Tab navigation menu                     |
| `Manual`         | In-app help/instructions panel          |
| `NFTPreview`     | Fetches and renders an NFT by token URI |
| `ListingDetails` | Detail panel for a listing              |
| `TradeDetails`   | Detail panel for a trade                |

**Hooks**

| Hook                                                  | Description                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------------ |
| `useMarketplaceData`                                  | Loads and keeps listings/trades/orders in sync over the websocket  |
| `useFresh`                                            | Tracks newly-arrived items per tab (pending/flushed)               |
| `useMine`                                             | Filters marketplace data down to the connected wallet's own items  |
| `useOwnedTokenIds`                                    | Reads token IDs owned by the connected wallet on-chain             |
| `useSearchFilters`                                    | Search/filter state per tab                                        |
| `useTabActions` / `useTabMutations` / `useMainAction` | Per-tab actions (buy/cancel/etc.) and their mutation/loading state |

**Lib**

| Module                       | Description                                    |
| ---------------------------- | ---------------------------------------------- |
| `field-config`               | Field definitions used to render detail panels |
| `listing-status-ui`          | Maps listing status to UI classes/labels       |
| `logic/matches-filters`      | Filter-matching predicate for search           |
| `logic/build-search-default` | Builds default search/filter state             |

#### Orders

Creating and cancelling orders (off-chain signed, submitted to the indexer).

**UI**

| Component         | Description                                 |
| ----------------- | ------------------------------------------- |
| `CreateOrderFlow` | Multi-step flow for creating an order       |
| `OrderForm`       | Price/duration form used by the create flow |

**Hooks**

| Hook             | Description                                          |
| ---------------- | ---------------------------------------------------- |
| `useCreateOrder` | Signs an order (EIP-712) and posts it to the indexer |
| `useCancelOrder` | Cancels an order on-chain via the orderbook contract |

#### Trade

Filling orders — simulation, validation, and execution against the marketplace contract.

**UI** — none; trade state is surfaced through the marketplace/orders UI.

**Hooks**

| Hook                 | Description                                              |
| -------------------- | -------------------------------------------------------- |
| `useTradeSimulation` | Simulates filling an order via `useSimulateContract`     |
| `useTradeValidation` | Turns simulation/revert errors into user-facing messages |
| `useFillOrder`       | Executes the fill transaction                            |

#### Wallet

Wallet connection, network/marketplace status, and settings.

**UI**

| Component      | Description                  |
| -------------- | ---------------------------- |
| `WalletWidget` | RainbowKit connect button    |
| `SettingsMenu` | Theme and other app settings |

**Hooks**

| Hook                   | Description                                                          |
| ---------------------- | -------------------------------------------------------------------- |
| `useWallet`            | Wraps wagmi account/connect/disconnect state                         |
| `useMarketplaceStatus` | Reads approvals/allowances needed to trade on the active marketplace |

#### Realtime

Live order and trade updates over the indexer websocket.

**UI**

| Component   | Description                               |
| ----------- | ----------------------------------------- |
| `TxTracker` | Shows in-flight/recent transaction status |

**Hooks**

| Hook          | Description                                                           |
| ------------- | --------------------------------------------------------------------- |
| `useWsSub`    | Base subscription hook — adds/updates tab items from websocket events |
| `useWsOrders` | Subscribes to order events, fetching full listings on update          |
| `useWsTrades` | Subscribes to trade events                                            |

### Lib

| Module          | Description                                                            |
| --------------- | ---------------------------------------------------------------------- |
| `blockchain`    | wagmi config, contract ABIs/actions, chain-related hooks and utils     |
| `dmrkt-indexer` | Indexer HTTP client — actions and DTOs for listings/trades/orders      |
| `realtime`      | Websocket connection helper used by the `realtime` feature's hooks     |
| `hooks`         | Small cross-cutting hooks (theme, keyboard shortcuts, toast dismissal) |
| `utils`         | General helpers (formatting, images, hex, http, json, strings)         |

### Protocol

EIP-712 domain, types, and order signing/hashing shared by the `orders` and `trade` features.

### UI

Shared, feature-agnostic design system: `atoms` (buttons, inputs, spinner…), `molecules`
(composed pieces like panels and gallery items), `organisms` (cards, receipts, larger rows), and
a thin `chartjs` wrapper.
