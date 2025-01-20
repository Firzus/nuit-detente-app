import Plausible from 'plausible-tracker'

const plausible = Plausible({
  domain: process.env.NEXT_PUBLIC_BASE_URL,
  apiHost: process.env.NEXT_PUBLIC_ANALYTICS_URL,
})

export function trackEvent(eventName: string, props?: Record<string, string | number | boolean>) {
  plausible.trackEvent(eventName, { props })
}
