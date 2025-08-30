<script>
	import { truth } from '$lib/shared.svelte';
</script>

<aside>
	{#if truth.visibility.notes}
		<div class="custom">
			<hgroup>
				<img src="/hex_clear.svg" alt="" />
				<h2>Custom Truth / Notes</h2>
			</hgroup>

			<p class="textarea" contenteditable="true"></p>
		</div>
	{/if}

	{#if truth.visibility.characterBackground}
		<div class="background">
			<img src="/person.svg" alt="" class="icon" />
			<p
				class="character-background"
				contenteditable="true"
				bind:textContent={truth.characterBackground}
			>
				{truth.characterBackground}
			</p>
		</div>
	{/if}
</aside>

<style>
	aside {
		display: flex;
		flex-direction: column;
		grid-area: notes;
	}

	.custom {
		display: flex;
		flex-direction: column;
		flex: 1;

		hgroup {
			display: flex;
			column-gap: 8px;
			align-items: center;
		}

		.textarea {
			background-color: var(--blue);
			flex: 1;
			margin: 16px 0;
			padding: 8px;
		}
	}

	.icon {
		float: left;
		margin-top: 3px;
		margin-right: 5px;
		width: 15px;
		aspect-ratio: 1/1;
	}
</style>
