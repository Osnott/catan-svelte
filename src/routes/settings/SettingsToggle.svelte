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

  import Toggle from "./Toggle.svelte"

  export let settingId: Id
  export let settingContext: Context

  export let title: string

  $: setting = $settings[settingContext][settingId]
  $: isEnabled = !!setting
</script>

<div class="toggle-parent">
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
    <Toggle enabled={isEnabled} />
  </button>
</div>

<style>
.toggle-parent {
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
  transition: opacity 0.2s;
}

.toggle-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  text-align: start;
  transform: none;
  padding: 8px;
  overflow: hidden;
  cursor: pointer;
}
</style>
