import {GatsbyBrowser} from 'gatsby'
import * as Sentry from '@sentry/gatsby'
import {JaenPluginOptions} from './types'

export const onClientEntry: GatsbyBrowser['onClientEntry'] = async (
  _,
  pluginOptions: JaenPluginOptions
) => {
  // Get access to the cookie consent
  let cc = window.cookieConsent

  if (!cc) {
    cc = window.initCookieConsent()
  }

  // Check if analytics is enabled
  if (!cc.allowedCategory('analytics')) {
    const googleAnaltyticsTrackingId =
      pluginOptions.googleAnalytics?.trackingIds?.[0]

    if (googleAnaltyticsTrackingId) {
      // @ts-ignore
      window[`ga-disable-${googleAnaltyticsTrackingId}`] = true
    }
  }

  Sentry.addIntegration(
    Sentry.browserTracingIntegration({
      enableInp: true,
      _experiments: {
        enableInteractions: true
      }
    })
  )
  Sentry.addIntegration(Sentry.browserProfilingIntegration())
  Sentry.addIntegration(Sentry.replayIntegration())

  if (pluginOptions.sentry?.feedbackIntegration) {
    Sentry.addIntegration(
      Sentry.feedbackIntegration({
        colorScheme: 'light',
        showBranding: false,
        formTitle: 'Give Feedback',
        buttonLabel: 'Feedback',
        submitButtonLabel: 'Send Feedback',
        messagePlaceholder: 'Report an issue or share your ideas.',
        // Allows for customizing the feedback form
        ...pluginOptions.sentry.feedbackIntegration
      })
    )
  }
}
