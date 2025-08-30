<script lang="ts">
	import { truth } from '$lib/shared.svelte.js';
	let { index } = $props();
	const className = `option-${index + 1}`;

	function toggleFilled(index: number) {
		truth.options[index].filled = !truth.options[index].filled;
	}
</script>

<div class={['option', className]}>
	<aside class="left-column">
		{#if truth.options[index].filled}
			<button onclick={() => toggleFilled(index)}
				><img src="/hex_filled.svg" alt="selected" /></button
			>
		{:else}
			<button onclick={() => toggleFilled(index)}
				><img src="/hex_clear.svg" alt="unselected" /></button
			>
		{/if}
		{truth.options[index].range}
	</aside>

	<main class="right-column">
		<p class="hook" contenteditable="true" bind:textContent={truth.options[index].hook}>
			{truth.options[index].hook}
		</p>
		<p contenteditable="true" bind:textContent={truth.options[index].details}>
			{truth.options[index].details}
		</p>
		{#if truth.options[index].visibility}
			<p
				class="quest-starter"
				contenteditable="true"
				bind:textContent={truth.options[index].questStarter}
			>
				{truth.options[index].questStarter}
			</p>
		{/if}
	</main>
</div>

<style>
	button {
		border: none;
		background: none;
	}

	.option {
		display: grid;
		grid-template-columns: 80px 1fr;
		align-items: start;
		padding: 12px 0;
		text-align: justify;
	}

	.option-1 {
		grid-area: option1;
	}

	.option-2 {
		grid-area: option2;
	}

	.option-3 {
		grid-area: option3;
	}

	.left-column {
		display: flex;
		align-items: center;
		gap: 4px;
	}

	.right-column {
		display: flex;
		flex-direction: column;
		row-gap: 6px;

		.hook {
			font-weight: bold;
		}

		.quest-starter {
			font-style: italic;
			display: flex;
			column-gap: 8px;
			min-height: 1rem;

			&::before {
				content: '';
				display: block;
				background-color: var(--blue);
				min-width: 6px;
				border-radius: 6px;
			}
		}
	}
</style>
