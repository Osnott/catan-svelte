<!-- implementation taken from cobalt @ https://github.com/imputnet/cobalt -->
<script 
  lang="ts"
  generics="
    Context extends Exclude<keyof Settings, 'schemaVersion'>,
    Id extends keyof Settings[Context]
  "
>
  import settings, { updateSetting } from "$lib/state/settings"
  import type { Settings } from "$lib/types/settings"

  export let settingId: Id
  export let settingContext: Context

  export let title: string

  $: setting = $settings[settingContext][settingId]
  $: isEnabled = !!setting
</script>

<div>
  <button
    class="toggle-container"
    role="switch"
    aria-checked={isEnabled}
    aria-label="setting-toggle-{settingContext}-{String(settingId)}"
    on:click={() => updateSetting({
      [settingContext]: {
        [settingId]: !isEnabled,
      }
    })}
  >
    <h4 class="toggle-title">{title}</h4>
  </button>
</div>
