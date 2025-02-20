// implementation taken from cobalt @ https://github.com/imputnet/cobalt

import { derived, readable, type Updater } from 'svelte/store'
import { browser } from '$app/environment'
import { merge } from 'ts-deepmerge'
import type { PartialSettings, AllPartialSettingsWithSchema, Settings } from '$lib/types/settings'
import defaultSettings from "../settings/defaults"

const writeToStorage = (settings: PartialSettings) => {
  localStorage.setItem(
    "settings",
    JSON.stringify(settings)
  )

  return settings
}

const loadFromStorage = () => {
  if (!browser)
    return {}

  const settings = localStorage.getItem("settings")

  if (!settings)
    return {}

  return loadFromString(settings)
}

export const loadFromString = (settings: string): PartialSettings => {
  const parsed = JSON.parse(settings) as AllPartialSettingsWithSchema

  return parsed as PartialSettings
  
}

let update: (_: Updater<PartialSettings>) => void

const mergeWithDefaults = (partial: PartialSettings) => {
  return merge(defaultSettings, partial) as Settings
}

export const storedSettings = readable<PartialSettings>(
  loadFromStorage(),
  (_, _update) => { update = _update }
)

export function updateSetting(partial: PartialSettings) {
  update((current) => {
    const updated = writeToStorage(
      merge(
        current,
        partial,
        { schemaVersion: defaultSettings.schemaVersion }
      )
    )

    return updated
  })
}

export function resestSettings() {
  update(() => {
    localStorage.removeItem('settings');
    return {};
  })
}

export default derived(
  storedSettings,
  $settings => mergeWithDefaults($settings)
)
