<script lang="ts">
	import Header from './Header.svelte';
  import Footer from './Footer.svelte';
	import '../app.css';

	let { children } = $props();

  import { onNavigate } from "$app/navigation";

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      })
    })
  })
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>

  <Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 0.5rem;
		width: 100%;
		max-width: 78rem;
		margin: 2rem auto;
		box-sizing: border-box;
	}
</style>
