export class ResCityByIpDto {
  locations: ResLocations | null;
}

export interface ResLocations {
  value: string;
  unrestricted_value: string;
  data: Record<string, unknown>;
}
