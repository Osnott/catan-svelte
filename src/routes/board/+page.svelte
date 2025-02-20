<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Board from './Board.svelte';
	import { PerfMonitor } from '@threlte/extras';
  import settings from "$lib/state/settings"

  $: threlteDebug = !!$settings['debug']['threlteDebug']
</script>

<svelte:head>
	<title>catan builder ~ board</title>
</svelte:head>

<div class="board-wrapper">
	<Canvas>
    {#if threlteDebug}
      <PerfMonitor
        anchorX={'left'}
        anchorY={'bottom'}
        logsPerSecond={30}
      />
    {/if}
		<Board />
	</Canvas>
</div>

<style>
.board-wrapper {
  border-style: solid;
  border-width: 2px;
  border-color: var(--color-overlay);
  border-radius: 1em;
  width: 100%;
  aspect-ratio: 16/9;
}
</style>
