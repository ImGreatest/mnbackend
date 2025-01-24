import { DateTime } from "luxon";

export interface IBooking {
  id: string;
  userId: string;
  timeStart: DateTime;
  timeEnd: DateTime;
  comment?: string;
  address?: string;
  createdAt: DateTime;
  updatedAt?: DateTime;
  deletedAt?: DateTime;
}
