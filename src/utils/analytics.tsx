import Script from 'next/script'

export default function Analytics() {
  if (process.env.NODE_ENV !== 'production') return null

  return (
    <Script
      defer
      data-domain="nuit-detente.fr"
      src={`${process.env.NEXT_PUBLIC_ANALYTICS_URL}/js/script.js`}
    />
  )
}
