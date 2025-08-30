interface OptionI {
	range: string;
	filled: boolean;
	hook: string;
	details: string;
	questStarter: string;
	index: number;
	visibility: boolean;
}

interface TruthI {
	title: string;
	characterBackground: string;
	options: OptionI[];
	visibility: {
		characterBackground: boolean;
		notes: boolean;
	};
	template: number;
}

const options: OptionI[] = [
	{
		range: '1–33',
		filled: true,
		hook: 'When the Exodus fleet set off on a ponderous journey to a new home outside our galaxy, they marked the Forge as their destination. Countless generations lived out their lives aboard those titanic ships during the millennia-long passage.',
		details:
			'The refugees built a rich legacy of culture and tradition during the Exodus. Some even remained in the ships after their arrival in the Forge, unwilling or unable to leave their familiar confines. Those vessels, the Ironhomes, still sail the depths of this galaxy.',
		questStarter:
			'Quest Starter: Your dreams are plagued by visions of a lost and crippled Exodus ship. What do you see? Why does it call to you?',
		index: 0,
		visibility: true
	},
	{
		range: '34–67',
		filled: false,
		hook: 'A ragtag fleet of ships—propelled at tremendous speeds byexperimental FTL drives—carried our ancestors to the Forge.But the technology that powered the ships is said to be thesource of the Sundering, a fracturing of reality that plagues ushere today.',
		details:
			'The experimental drives used by the Exodus fleet are forbidden,but the damage is done. The Sundering spreads across our realitylike cracks on the surface of an icy pond. Those fissures unleasheven more perilous realities upon our own. Did we flee onecataclysm, only to inadvertently create another?',
		questStarter:
			'Quest Starter: A malfunctioning drive sent one of the refugeeships through space and time. Centuries later, they have finallyarrived. For them, only weeks have passed. Why are thesepeople mistrusted? Do you aid or oppose them?',
		index: 1,
		visibility: true
	},
	{
		range: '68–100',
		filled: false,
		hook: 'Mysterious alien gates provided instantaneous one-way passage to the Forge.',
		details:
			'In the midst of the cataclysm, our ancestors found a strange metal pillar on our homeworld’s moon. A map on the surface of this alien relic detailed the deep-space locations of the Iron Gates—massive devices that powered artificial wormholes. With no other options, the Exodus ships fled through the gates and emerged here in the Forge',
		questStarter:
			'Quest Starter: An explorer brings news. They’ve located an active gate in the depths of the Forge. Why do you swear to travel there? Which power or foe seeks to take control of the gate?',
		index: 2,
		visibility: true
	}
];

export const truth: TruthI = $state({
	title: '2. Exodus',
	characterBackground:
		'Does your family or cultural history offer any stories of the Exodus? How does this legacy impact you today? If you are dedicated to expanding the reach of your people within the Forge, you might be an EXPLORER. If you are exiled or reviled, you might be an OUTCAST.',
	options: options,
	visibility: {
		characterBackground: true,
		notes: true
	},
	template: 2
});
