<svelte:head>
	<title>catan builder ~ about</title>
	<meta name="description" content="about catan builder" />
</svelte:head>

<div class="text-column">
	<h1>about</h1>

  <p class="blurb">
    Catan Builder is a website that allows you to generate "fair" Catan boards!
  </p>

  <h2>what is catan?</h2>

  <p>
    Catan (a.k.a. <a href="https://www.catan.com/">The Settlers of CATAN</a>) is a board game played with 3-4 people. The game involves placing settlements and roads, rolling dice, collecting resources, spending resources, and trading with other players. Catan also has an incredible amount of expansions, ranging from expanding upon existing game mechanics, inventing new ones, and completely changing the progression of the game.
  </p>

  <h2>so what's the problem?</h2>

  <p>
    Although Catan has a focus on tatics and strategy, the game is inherently very luck-based. How the dice roll can't be entirely accounted for by strategy and in my opinion the biggest source of unfair games is the game board setup.
  </p>

  <h2>generating "fair" game boards</h2>

  <p>
    The biggest problems are land tile placement and number token placement. Land tiles are the different hexagonal pieces that make up the game board where number tokens are game piece that dictate how often a resource is produced from its land tile.
  </p>
  <p>
    To generate a fair board, there are two basic rules
  </p>
  <ol>
    <li>1. No more than 2 land tiles that produce the same resource should be next to each other.</li>
    <li>2. Common number tokens should be distributed evenly over land tiles that produce the same resource.</li>
  </ol>
  <p>
    Using these two rules (and some others), we can generate Catan boards that reduce the importance of early settlement placement.
  </p>
</div>

<style>
.blurb {
  font-style: italic;
}
</style>
