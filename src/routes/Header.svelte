<script lang="ts">
	import { page } from '$app/state';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={page.url.pathname == '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={page.url.pathname === '/settings' ? 'page' : undefined}>
				<a href="/settings">Settings</a>
			</li>
			<li aria-current={page.url.pathname.startsWith('/board') ? 'page' : undefined}>
				<a href="/board">Board</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: left;
		padding: 0em 0.5em 0em 0.5em;
	}

	nav {
		display: flex;
		justify-content: center;
		padding: 0em 0.25em 0em 0.25em;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--color-surface-0);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--color-surface-0);
		background-size: contain;
		border-radius: 0em 0em 1em 1em;
	}

	li {
		position: relative;
		height: 90%;
		border-radius: 1em;
		border-style: solid;
		border-width: 2px;
		border-color: transparent;
    cursor: pointer;
	}

	li[aria-current='page'] {
		border-radius: 1em;
		background: var(--color-highlight-0);
		border-color: var(--color-theme-1);
		animation: pressButton 0.3s;
    transform: none;
    transition: none;
    cursor: default;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.6rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: lowercase;
		letter-spacing: 0.1em;
		text-decoration: none;
    cursor: inherit;
		transition: color 0.2s linear, transform 0.2s ease;
	}

  li[aria-current='page'] a {
    transition: none;
  }

  li[aria-current='page'] a:hover {
    transform: none;
		color: inherit;
  }

	a:hover {
		color: var(--color-theme-1);
    transform: scale(0.95);
	}

	@keyframes pressButton {
		0% {
			transform: scale(0.9);
		}
		50% {
			transform: scale(1.015);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
