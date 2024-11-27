import Script from 'next/script'

export default function Analytics() {
  if (process.env.NODE_ENV !== 'production') return null

  return (
    <Script defer data-domain="nuit-detente.fr" src="https://analytics.lprieu.dev/js/script.js" />
  )
}
