<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { currentQuest } from '$lib/_workshop-internals/stores/quest-log-store';

	const currentQuestMarker = 'data-quest-current';
	const currentQuestClass = 'active-quest-indicator';

	let observer: MutationObserver;
	let questToDisplay: string = undefined;

	const renderQuestIndicators = (): void => {
		const activeIndicators = document.body.querySelectorAll(`[${currentQuestMarker}]`);
		activeIndicators?.forEach((node) => {
			node.removeAttribute(currentQuestMarker);
			node.classList.remove(currentQuestClass);
		});

		const questNodes = document.body.querySelectorAll(`[data-quest-${questToDisplay}]`);
		questNodes?.forEach((node) => {
			node.setAttribute(currentQuestMarker, '');
			node.classList.add(currentQuestClass);
		});
	};

	onMount(() => {
		observer = new MutationObserver(() => {
			renderQuestIndicators();
		});
		observer.observe(document.body, {
			childList: true,
			subtree: true,
			attributes: false,
			characterData: false,
		});

		currentQuest.subscribe((current) => {
			questToDisplay = current;
			renderQuestIndicators();
		});
	});

	onDestroy(() => {
		observer?.disconnect();
	});
</script>
