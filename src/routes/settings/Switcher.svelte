// implementation taken from cobalt @ https://github.com/imputnet/cobalt
<script lang="ts">
  export let description: string = "";
</script>

<div class="switcher-parent">
  <div class="switcher">
    <slot></slot>
  </div>
  {#if description}
    <div class="settings-content-description">{description}</div>
  {/if}
</div>


