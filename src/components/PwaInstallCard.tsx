import { useEffect, useState } from 'react'

type InstallChoice = { outcome: 'accepted' | 'dismissed'; platform: string }
type InstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<InstallChoice>
}

const DISMISSED_KEY = 'petsbutler-pwa-install-dismissed'
const INSTALLED_KEY = 'petsbutler-pwa-installed'

function isInstalledMode() {
  const nav = window.navigator as Navigator & { standalone?: boolean }
  return window.matchMedia('(display-mode: standalone)').matches || nav.standalone === true
}

function savePreference(key: string) {
  try { window.localStorage.setItem(key, 'yes') } catch { /* optional browser preference */ }
}

function getPreference(key: string) {
  try { return window.localStorage.getItem(key) === 'yes' } catch { return false }
}

function isAppleMobile() {
  return /iPhone|iPad|iPod/.test(window.navigator.userAgent) ||
    (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1)
}

export function PwaInstallCard() {
  const [visible, setVisible] = useState(() => {
    if (isInstalledMode()) {
      savePreference(INSTALLED_KEY)
      return false
    }
    return !getPreference(DISMISSED_KEY) && !getPreference(INSTALLED_KEY)
  })
  const [promptEvent, setPromptEvent] = useState<InstallPromptEvent | null>(null)
  const [showInstructions, setShowInstructions] = useState(false)
  const [appleMobile] = useState(isAppleMobile)

  useEffect(() => {
    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault()
      setPromptEvent(event as InstallPromptEvent)
    }
    const onInstalled = () => {
      savePreference(INSTALLED_KEY)
      setVisible(false)
    }
    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt)
    window.addEventListener('appinstalled', onInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  if (!visible) return null

  const dismiss = () => {
    savePreference(DISMISSED_KEY)
    setVisible(false)
  }

  const install = async () => {
    if (!promptEvent) {
      setShowInstructions(true)
      return
    }
    try {
      await promptEvent.prompt()
      const choice = await promptEvent.userChoice
      setPromptEvent(null)
      if (choice.outcome === 'accepted') {
        savePreference(INSTALLED_KEY)
        setVisible(false)
      }
    } catch {
      setPromptEvent(null)
      setShowInstructions(true)
    }
  }

  const markInstalled = () => {
    savePreference(INSTALLED_KEY)
    setVisible(false)
  }

  return (
    <section className="section section--tight pwa-promo-section">
      <div className="container">
        <div className="pwa-card" aria-labelledby="pwa-card-title">
          <div className="pwa-card__icon" aria-hidden="true">🐾</div>
          <div className="pwa-card__copy">
            <div className="eyebrow">A little quicker to reach</div>
            <h2 id="pwa-card-title">Add The Pet's Butler to your phone</h2>
            <p>Keep booking, care details and WhatsApp contact close at hand. Add the free app icon to your Home Screen—no app-store account needed.</p>
            {showInstructions && (
              <div className="pwa-card__instructions" role="status">
                {appleMobile
                  ? 'In Safari, tap Share, choose “Add to Home Screen”, then tap Add. Open The Pet’s Butler from the new Home Screen icon.'
                  : 'Open your browser menu and choose “Install app” or “Add to Home Screen”. Follow the prompt, then open The Pet’s Butler from its new app icon.'}
                <button className="pwa-card__installed" type="button" onClick={markInstalled}>I've added it</button>
              </div>
            )}
          </div>
          <div className="pwa-card__actions">
            <button className="btn btn--primary" type="button" onClick={install}>
              {promptEvent ? 'Install app' : appleMobile ? 'How to add it' : 'Add to Home Screen'}
            </button>
            <button className="pwa-card__dismiss" type="button" onClick={dismiss}>Not now</button>
          </div>
        </div>
      </div>
    </section>
  )
}
