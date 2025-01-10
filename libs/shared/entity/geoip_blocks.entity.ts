import { Entity, Column } from "typeorm";

@Entity()
export class GeoIpBlocks {
	@Column({
		name: 'network',
	})
	network: string;

	@Column({
		name: 'geoname_id',
	})
	geoNameId: string;

	@Column({
		name: 'registered_country_geoname_id',
	})
	registeredCountryGeonameId: number;

	@Column({
		name: 'represented_country_geoname_id',
	})
	representedCountryGeonameId: number;

	@Column({
		name: 'is_anonymous_proxy',
	})
	isAnonymousProxy: boolean;

	@Column({
		name: 'is_satellite_provider',
	})
	isSatelliteProvider: boolean;
}
    // network TEXT,
    // geoname_id BIGINT,
    // registered_country_geoname_id BIGINT,
    // represented_country_geoname_id BIGINT,
    // is_anonymous_proxy BOOLEAN,
    // is_satellite_provider BOOLEAN