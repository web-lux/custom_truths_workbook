<script lang="ts">
	import { truth } from '$lib/shared.svelte.js';

	function handleClick(index: number) {
		truth.template = index;
	}
</script>

<div>
	<h2 id="template-label">Change columns placement</h2>

	<div id="template-btn">
		{#each { length: 3 }, index}
			<button
				class={[
					'template',
					`template-${index + 1}`,
					index + 1 === truth.template ? 'selected' : ''
				]}
				aria-labelledby="template-label"
				onclick={() => handleClick(index + 1)}
			>
				<div>1</div>
				<div>2</div>
				<div>3</div>
			</button>
		{/each}
	</div>
</div>

<style lang="scss">
	h2 {
		font-family: var(--title);
		font-size: 16px;
	}

	#template-btn {
		display: flex;
		gap: 16px;
	}

	.template {
		display: grid;
		width: 30px;
		gap: 2px;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 12px 12px;
		background: var(--blue);
		padding: 4px;
		border: none;
		cursor: pointer;

		&.selected {
			border: solid var(--black) 1px;
		}

		div {
			width: 10px;
			aspect-ratio: 1/1;
			border: 1px solid var(--black);
			font-size: 9px;
		}
	}

	.template-1 {
		div:nth-child(2) {
			grid-row: 2 / 3;
		}
	}

	.template-2 {
		div {
			grid-column: 1 / 2;
		}
	}

	.template-3 div {
		&:nth-child(2),
		&:nth-child(3),
		&:nth-child(4) {
			grid-column: 2 / 3;
		}
	}
</style>
