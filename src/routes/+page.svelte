<script lang="ts">
	import { truth } from '$lib/shared.svelte';
	import Option from '$lib/components/Option.svelte';
	import Custom from '$lib/components/Custom.svelte';
	import TemplateButtons from '$lib/components/TemplateButtons.svelte';
	import Visibility from '$lib/components/Visibility.svelte';

	let currentTemplate = $derived(`template-${truth.template}`);

	function saveAsJSON() {
		const data = `data:text/json;charset=utf-8, ${JSON.stringify(truth)}`;
		const link = document.createElement('a');
		link.download = `${truth.title.trim()}.json`;
		link.href = data;
		link.click();
	}

	function loadJSON() {
		const input = document.createElement('input');
		input.type = 'file';
		input.accept = 'application/JSON';
		input.onchange = (e: any) => {
			const file = e.target.files[0];

			if (file) {
				const reader = new FileReader();
				reader.readAsText(file);

				reader.onload = (e) => {
					if (e.target?.result) {
						const loadedTruthRaw = e.target.result as string;
						const loadedTruth = JSON.parse(loadedTruthRaw);
						Object.assign(truth, loadedTruth);
					}
				};
			}
		};
		input.click();
	}

	function printPage() {
		window.print();
	}
</script>

<div class="wrapper">
	<div class="settings">
		<div class="main-btn">
			<button onclick={saveAsJSON}>Save as JSON</button>
			<button onclick={loadJSON}>Load JSON</button>
			<button onclick={printPage}>Print / Save as PDF</button>
		</div>
		<TemplateButtons />
		<Visibility />

		<hr />
	</div>

	<h1 contenteditable="true" bind:textContent={truth.title}>{truth.title}</h1>

	<div class={['grid', currentTemplate]}>
		{#each truth.options as option}
			<Option index={option.index} />
		{/each}

		<Custom />
	</div>
</div>

<style lang="scss">
	.wrapper {
		padding: 1rem;

		@media print {
			padding: 0;
		}
	}

	.settings {
		display: flex;
		flex-direction: column;
		gap: 12px;

		button {
			color: var(--black);
			border: solid var(--black) 2px;
			background: none;
			padding: 2px 4px;
			font-weight: bold;
			cursor: pointer;
		}

		hr {
			margin: 16px 0;
		}

		@media print {
			display: none;
		}
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 32px;
	}

	.template-1 {
		grid-template-areas:
			'option1 option3'
			'option2 notes';
	}

	.template-2 {
		grid-template-areas:
			'option1 notes'
			'option2 notes'
			'option3 notes';
	}

	.template-3 {
		grid-template-areas:
			'option1 option2'
			'option1 option3'
			'option1 notes';
	}

	h1 {
		text-transform: uppercase;
		font-family: var(--title);
	}
</style>
