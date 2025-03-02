import { Injectable } from "@nestjs/common";
import { logger } from "../../../logger/logger";
import { ResSuggestsAddressDto } from "./dto/res-dto/res-suggests-address.dto";
import { ResCityByIpDto } from "./dto/res-dto/res-city-by-ip.dto";
import { DADATA_HEADER } from "../../shared/const";
import { dadataConfig } from "../../../config/config";
import { ResSuggestsEmailDto } from "./dto/res-dto/res-suggests-email.dto";
import { ReqSuggestsAddressDto } from "./dto/req-dto/req-suggests-address.dto";
import { ReqCityByIpDto } from "./dto/req-dto/req-city-by-ip.dto";
import { ReqStandardizationEmailDto } from "./dto/req-dto/req-standardization-email.dto";
import { ReqSuggestsEmailDto } from "./dto/req-dto/req-suggests-email.dto";
import { ReqStandardizationPhoneDto } from "./dto/req-dto/req-standardization-phone.dto";

@Injectable()
export class DadataService {
  constructor() {
    logger.info("DadataService was init");
  }

  async suggestsAddress(
    query: ReqSuggestsAddressDto,
  ): Promise<ResSuggestsAddressDto> {
    logger.verbose(
      `DadataService was called suggestsAddress with param - ${JSON.stringify(query.address)}`,
    );

    return await fetch(
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
      {
        method: "POST",
        ...DADATA_HEADER,
        body: JSON.stringify({ ...query }),
      },
    )
      .then((res) => res.json())
      .catch((e) => logger.error(e));
  }

  async cityByIp(query: ReqCityByIpDto): Promise<ResCityByIpDto> {
    logger.verbose(
      `DadataService was called cityByIp with param - ${JSON.stringify(query)}`,
    );

    return (
      await fetch(
        `https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=` +
          query.ip,
        {
          method: "GET",
          ...DADATA_HEADER,
        },
      )
    )
      .json()
      .then((res) => res)
      .catch((e) => logger.error(e));
  }

  async standardizationEmail(query: ReqStandardizationEmailDto): Promise<[]> {
    logger.verbose(
      `DadataService was called standardizationEmail with param - ${JSON.stringify(query.email)}`,
    );

    return await fetch("https://cleaner.dadata.ru/api/v1/clean/email", {
      method: "POST",
      mode: DADATA_HEADER.mode,
      headers: {
        "Content-Type": DADATA_HEADER.headers["Content-Type"],
        Authorization: DADATA_HEADER.headers["Authorization"],
        "X-Secret": dadataConfig.secretKey,
      },
      body: JSON.stringify([query.email]),
    })
      .then((res) => res.json())
      .catch((e) => logger.error(e));
  }

  async suggestsEmail(
    query: ReqSuggestsEmailDto,
  ): Promise<ResSuggestsEmailDto> {
    logger.verbose(
      `DadataService was called suggestsEmail with param - ${JSON.stringify(query.email)}`,
    );

    return await fetch(
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/email",
      {
        method: "POST",
        ...DADATA_HEADER,
        body: JSON.stringify({ query: query.email }),
      },
    )
      .then((res) => res.json())
      .catch((e) => logger.error(e));
  }

  async standardizationPhone(query: ReqStandardizationPhoneDto): Promise<[]> {
    logger.verbose(
      `DadataService was called standardizationPhone with param - ${JSON.stringify(query.phone)}`,
    );

    return await fetch("https://cleaner.dadata.ru/api/v1/clean/phone", {
      method: "POST",
      mode: DADATA_HEADER.mode,
      headers: {
        "Content-Type": DADATA_HEADER.headers["Content-Type"],
        Authorization: DADATA_HEADER.headers["Authorization"],
        "X-Secret": dadataConfig.secretKey,
      },
      body: JSON.stringify([query.phone]),
    })
      .then((res) => res.json())
      .catch((e) => logger.error(e));
  }
}
