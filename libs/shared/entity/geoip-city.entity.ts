import { Entity, Column } from "typeorm";


@Entity()
export class GeoIpCity {
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
		name: 'country_name',
	})
	countryName: string;

	@Column({
		name: 'subdivision_1_iso_code',
	})
	subdivisionOneIsoCode: string;

	@Column({
		name: 'subdivision_1_name',
	})
	subdivisionOneName: string;

	@Column({
		name: 'subdivision_2_iso_code',
	})
	subdivisionTwoIsoCode: string;

	@Column({
		name: 'subdivision_2_name',
	})
	subdivisionTwoName: string;

	@Column({
		name: 'city_name',
	})
	cityName: string;

	@Column({
		name: 'metro_code',
	})
	metroCode: string;

	@Column({
		name: 'time_zone',
	})
	timeZone: string;

	@Column({
		name: 'is_in_european_union',
	})
	isInEuropeanUnion: string;
}
