import { dadataConfig } from "../../../config/config";

export const DADATA_HEADER: RequestInit = {
	mode: "cors",
	headers: {
		'Content-Type': "application/json",
		'Accept': "application/json",
		'Authorization': `Token ` + dadataConfig.apiKey,
	}
}
