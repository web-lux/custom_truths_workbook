<script>
	import { truth } from '$lib/shared.svelte.js';
</script>

<div class="visibility-settings">
	<h2>Visibility Settings</h2>

	<fieldset>
		{#each { length: 3 }, index}
			<div>
				<label for={`quest-starter-${index + 1}`}>Truth {index + 1} - Quest Starter</label>
				<input
					type="checkbox"
					bind:checked={truth.options[index].visibility}
					id={`quest-starter-${index + 1}`}
				/>
			</div>
		{/each}
	</fieldset>

	<fieldset>
		<label for="character-background-visibility">Asset Suggestion</label>
		<input
			type="checkbox"
			bind:checked={truth.visibility.characterBackground}
			id="character-background-visibility"
		/>
	</fieldset>

	<fieldset>
		<label for="notes-visibility">Custom Truth / Notes</label>
		<input type="checkbox" bind:checked={truth.visibility.notes} id="notes-visibility" />
	</fieldset>
</div>

<style>
	h2 {
		font-family: var(--title);
		font-size: 16px;
	}

	fieldset {
		border: none;
	}

	.visibility-settings {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
</style>
