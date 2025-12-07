'use client'

import { WagmiProvider } from 'wagmi'
import { config } from '@/blockchain/config/wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RainbowKitProvider, getDefaultConfig, midnightTheme } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'

const CYBER_VOID = {
  accent: '#6d75ff',
  accentForeground: 'rgba(245, 247, 255, 0.94)',
  borderDefault: 'rgba(130, 150, 255, 0.35)',
  borderSoft: 'rgba(130, 150, 255, 0.18)',
  accentWeak: 'rgba(109, 117, 255, 0.24)',
}

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={midnightTheme({
            accentColor: CYBER_VOID.accent,
            accentColorForeground: CYBER_VOID.accentForeground,
            borderRadius: 'medium',
            fontStack: 'system',
            overlayBlur: 'small',
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
