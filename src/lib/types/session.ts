import type { Quests } from '$lib/types/quests';

export interface Session {
	readme: string;
	quests: Quests;
}
