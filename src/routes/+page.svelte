<script lang="ts">
	import Button from './Button.svelte';
</script>

<svelte:head>
	<title>catan builder</title>
	<meta name="description" content="a website that helps you build catan boards" />
</svelte:head>

<section>
	<h1>catan builder</h1>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	/* a { */
	/*   display: flex; */
	/*   flex-direction: column; */
	/*   align-items: center; */
	/*   justify-content: center; */
	/*   width: 100%; */
	/*   color: var(--color-dark-text); */
	/* font-weight: 700; */
	/* font-size: 2rem; */
	/* text-transform: lowercase; */
	/* letter-spacing: 0.1em; */
	/* text-decoration: none; */
	/*   text-align:center; */
	/* } */

	/* .hexagon { */
	/*   display: flex; */
	/*   flex-direction: column; */
	/*   align-items: center; */
	/*   justify-content: center; */
	/*   height: 175px; /* adjust to control the size  */
	/*   margin: 4rem; */
	/*   aspect-ratio: cos(30deg); */
	/*   clip-path: polygon(-50% 50%,50% 100%,150% 50%,50% 0); */
	/*   background-color: rgb(246, 193, 119); */
	/*   border-style: solid; */
	/* } */
</style>
