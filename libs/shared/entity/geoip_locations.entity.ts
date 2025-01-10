import { Entity, Column } from "typeorm";

@Entity()
export class GeoIpLocations {
	@Column({
		name: 'geoname_id',
		primary: true,
	})
	geoNameId: string;

	@Column({
		name: 'local_code',
	})
	localCode: string;

	@Column({
		name: 'continent_code',
	})
	continentCode: string;

	@Column({
		name: 'continent_name',
	})
	continentName: string;

	@Column({
		name: 'country_iso_code',
	})
	countryIsoCode: string;

	@Column({
		name: 'country_name',
	})
	countryName: string;

	@Column({
		name: 'is_in_european_union',
	})
	isInEuropeanUnion: boolean;
}
