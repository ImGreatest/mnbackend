import { TMockReqUser } from "../types/mock-req-user.type";
import { MockDataReqUser } from "../const/mock-data-req-user";

export const MockReqUser: Record<string, TMockReqUser> = {
  firstExample: {
    summary: "First example",
    value: MockDataReqUser,
  },
  oneMoreExample: {
    summary: "One more example",
    value: MockDataReqUser,
  },
};
