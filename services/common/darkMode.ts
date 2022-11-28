export function setInitialColorMode () {
  const darkTheme = getInitialColorMode()
  if (darkTheme === 'dark') { document.documentElement.setAttribute('class', 'dark') }

  return darkTheme
}

function getInitialColorMode () {
  const persistedPreferenceMode = localStorage.getItem('theme')
  const hasPersistedPreference = typeof persistedPreferenceMode === 'string'
  if (hasPersistedPreference) {
    return persistedPreferenceMode
  }
  const preference = matchMedia('(preference-color-scheme: dark)')
  const hasMediaQueryPreference = typeof preference.matches === 'boolean'

  if (hasMediaQueryPreference) {
    return preference.matches ? 'dark' : 'light'
  }

  return 'light'
}
