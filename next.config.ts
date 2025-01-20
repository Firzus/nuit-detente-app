import { withPlausibleProxy } from 'next-plausible'
import type { NextConfig } from 'next'

/**
 * Configuration Next.js de base
 */
const nextConfig: NextConfig = {}

export default withPlausibleProxy({
  customDomain: process.env.NEXT_PUBLIC_ANALYTICS_URL,
})({
  ...nextConfig,
})
