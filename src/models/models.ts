interface Taxonomy {
	kingdom: string;
	phylum: string;
	class: string;
	order: string;
	family: string;
	genus: string;
	scientific_name: string;
}

export type CharacteristicItem = {
	value: string;
	liked: boolean;
};

export interface FavoriteCharacteristics {
	[key: string]: CharacteristicItem;
	prey: CharacteristicItem;
	name_of_young: CharacteristicItem;
	group_behavior: CharacteristicItem;
	estimated_population_size: CharacteristicItem;
	biggest_threat: CharacteristicItem;
	most_distinctive_feature: CharacteristicItem;
	gestation_period: CharacteristicItem;
	habitat: CharacteristicItem;
	diet: CharacteristicItem;
	average_litter_size: CharacteristicItem;
	lifestyle: CharacteristicItem;
	common_name: CharacteristicItem;
	number_of_species: CharacteristicItem;
	location: CharacteristicItem;
	slogan: CharacteristicItem;
	group: CharacteristicItem;
	color: CharacteristicItem;
	skin_type: CharacteristicItem;
	top_speed: CharacteristicItem;
	lifespan: CharacteristicItem;
	weight: CharacteristicItem;
	height: CharacteristicItem;
	age_of_sexual_maturity: CharacteristicItem;
	age_of_weaning: CharacteristicItem;
}

export interface Characteristics {
	prey: string;
	name_of_young: string;
	group_behavior: string;
	estimated_population_size: string;
	biggest_threat: string;
	most_distinctive_feature: string;
	gestation_period: string;
	habitat: string;
	diet: string;
	average_litter_size: string;
	lifestyle: string;
	common_name: string;
	number_of_species: string;
	location: string;
	slogan: string;
	group: string;
	color: string;
	skin_type: string;
	top_speed: string;
	lifespan: string;
	weight: string;
	height: string;
	age_of_sexual_maturity: string;
	age_of_weaning: string;
}

export interface IAnimal {
	name: string;
	taxonomy: Taxonomy;
	locations: string[];
	characteristics: Characteristics;
	rating?: number;
	isFavorite?: boolean;
}

export interface IFavoriteAnimal {
	name: string;
	taxonomy: Taxonomy;
	locations: string[];
	characteristics: FavoriteCharacteristics;
	rating?: number;
	isFavorite?: boolean;
}
