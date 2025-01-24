import { TMockReqCreateReservationExample } from "../../types/mock-req-create-reservation-example.type";
import { MockDataReqReservation } from "../const/mock-data-req-reservation.const";

export const MockReqReservationDto: Record<
  string,
  TMockReqCreateReservationExample
> = {
  firstExample: {
    summary: "First example",
    value: MockDataReqReservation,
  },
  secondExample: {
    summary: "Second Example",
    value: MockDataReqReservation,
  },
};
