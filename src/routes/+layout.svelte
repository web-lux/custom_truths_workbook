<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<style>
	@font-face {
		font-family: 'Proxima Nova Condensed';
		font-style: normal;
		font-weight: normal;
		src: url('/fonts/ProximaNovaCondensedRegular.woff') format('opentype');
	}

	@font-face {
		font-family: 'Proxima Nova Condensed';
		font-style: normal;
		font-weight: bold;
		src: url('/fonts/ProximaNovaCondensedBold.woff') format('woff');
	}

	@font-face {
		font-family: 'Poster Gothic';
		font-style: normal;
		font-weight: bold;
		src: url('/fonts/PosterGothicRoundATFHeavy.otf') format('opentype');
	}

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(html) {
		--black: #221f21;
		--blue: #d0dae1;
		--white: #ffffff;
		--title: 'Poster Gothic';
		--text: 'Proxima Nova Condensed';
		font-family: var(--text);
	}
</style>
