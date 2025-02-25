import { TMockReqUser } from "../types/mock-req-user.type";
import { MockDataReqUser } from "../const/mock-data-req-user";

/**
 * @export
 * @const
 * @name MockReqUser
 * @property { summary: string, value: MockDataReqUser } firstExample
 * @property { summary: string, value: MockDataReqUser } oneMoreExample
 * @see { TMockReqUser, MockDataReqUser }
 */
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
