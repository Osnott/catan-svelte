<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Board from './Board.svelte';
</script>

<svelte:head>
	<title>catan builder ~ board</title>
</svelte:head>

<div class="board-wrapper">
	<Canvas>
		<Board />
	</Canvas>
</div>

<style>
.board-wrapper {
  border-style: solid;
  border-width: 2px;
  border-color: var(--color-surface-0);
  border-radius: 1em;
  height: 100%;
  width: 100%;
}
</style>
