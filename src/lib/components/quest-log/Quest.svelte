<script lang="ts">
	import type { Quest } from '$lib/types/quest';
	import SvelteMarkdown from 'svelte-markdown';
	import QuestAccordion from '$lib/components/quest-log/Accordion.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let quest: Quest = undefined;
	export let completed = false;

	const toggleCompleted = ({ detail: completed }): void => {
		dispatch('toggleCompleted', completed);
	};
</script>

<div class="quest">
	<QuestAccordion
		id={quest.id}
		title={quest.title}
		{completed}
		on:toggleCompleted={toggleCompleted}
	>
		<span class="lore"><SvelteMarkdown source={quest.lore} /></span>
		<span class="intro"><SvelteMarkdown source={quest.intro} /></span>
		<h2>File</h2>
		<span class="files"><SvelteMarkdown source={quest.files} /></span>
		<h2>Goal</h2>
		<h2>Links</h2>
		<span class="goal"><SvelteMarkdown source={quest.goal} /></span>
		<span class="links"><SvelteMarkdown source={quest.links} /></span>
		<span class="hints"><SvelteMarkdown source={quest.hints} /></span>
	</QuestAccordion>
</div>

<style>
	.quest {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.quest:not(:first-child) {
		margin-top: 10px;
	}

	.lore {
		font-size: 0.75em;
	}
</style>
