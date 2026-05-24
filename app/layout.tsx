import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PriceLab — SaaS Pricing Experiment Tracker',
  description: 'A/B test pricing strategies, track conversion rates by cohort, and calculate revenue impact. Built for SaaS founders with $5k+ MRR.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9e2bdbe6-e386-4238-9d67-5e52f7c5716f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
