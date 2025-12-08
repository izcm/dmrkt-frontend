export type DummyCollection = {
  name: string
  contract: string
  symbol?: string
  totalSupply?: number
  image?: string
  banner?: string
  verified?: boolean
  description?: string
  community?: {
    twitter?: string
    website?: string
    discord?: string
  }
  storage?: {
    type: 'arweave' | 'ipfs' | 'http' | 'onchain'
  }
}

export const dummyCollections: DummyCollection[] = [
  {
    name: 'ClosedSea Elite Cats',
    contract: '0x0000111122223333444455556666777788889999',
    symbol: 'CEC',
    totalSupply: 2025,
    image:
      'https://i.guim.co.uk/img/media/b8a75934f827bdaf02a3814d1669c8da19886881/0_727_3500_2100/master/3500.jpg?width=620&dpr=1&s=none&crop=none',
    verified: true,
    description: 'Elite Arweave-only digital felines. ClosedSea approved only 😌',
    community: {
      twitter: 'https://twitter.com/closedseacats',
      website: 'https://closedseacats.com',
    },
    storage: {
      type: 'arweave',
    },
  },
  {
    name: 'Degen Penguins',
    contract: '0xabcDeFdEFdEfdEFDefdeFDEFdefdEfDEFDEfDeF0',
    symbol: 'DPENGS',
    totalSupply: 10000,
    image:
      'https://i.guim.co.uk/img/media/b8a75934f827bdaf02a3814d1669c8da19886881/0_727_3500_2100/master/3500.jpg?width=620&dpr=1&s=none&crop=none',
    verified: false,
    description: 'Penguins but probably broken metadata after founder got bored',
    community: {
      twitter: 'https://twitter.com/degenpengs',
    },
    storage: {
      type: 'ipfs',
    },
  },
  {
    name: 'Quantum Lotus',
    contract: '0x7777777777777777777777777777777777777777',
    symbol: 'LOTUS',
    totalSupply: 4096,
    image:
      'https://i.guim.co.uk/img/media/b8a75934f827bdaf02a3814d1669c8da19886881/0_727_3500_2100/master/3500.jpg?width=620&dpr=1&s=none&crop=none',
    verified: true,
    description: 'Quantum-grown SVG lotuses living fully on chain',
    community: {
      website: 'https://quantumlotus.xyz',
    },
    storage: {
      type: 'onchain',
    },
  },
  {
    name: 'Insomnia Bears',
    contract: '0x1111111111111111111111111111111111111111',
    symbol: 'Zzz',
    totalSupply: 7777,
    image:
      'https://i.guim.co.uk/img/media/b8a75934f827bdaf02a3814d1669c8da19886881/0_727_3500_2100/master/3500.jpg?width=620&dpr=1&s=none&crop=none',
    verified: false,
    description: 'HTTP hosted because dev was too sleepy to use proper storage',
    community: {
      twitter: 'https://twitter.com/sleepybears',
    },
    storage: {
      type: 'http',
    },
  },
]
