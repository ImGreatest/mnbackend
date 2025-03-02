import { DateTime } from "luxon";

export interface IReferral {
  id: string;
  referralId: string;
  referrerId: string;
  createdAt: DateTime;
  updatedAt?: DateTime;
  deletedAt?: DateTime;
}
