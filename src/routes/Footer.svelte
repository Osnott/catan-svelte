<script>
	import github from '$lib/images/github.svg';
</script>

<footer>
	<div class="corner"></div>

  <div class="corner"></div>

	<div class="corner">
		<a href="https://github.com/Osnott/catan-svelte">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</footer>

<style>
	footer {
		display: flex;
		justify-content: space-between;
		padding: 4px;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}
</style>
