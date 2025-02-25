import { MockDataResUser } from "../const/mock-data-res-user";
import { IMockResUsers } from "../interface/mock-res-users.interface";

/**
 * @export
 * @const
 * @name MockResUsers
 * @property users
 * @see { IMockResUsers, MockDataResUser }
 */
export const MockResUsers: IMockResUsers = {
  users: [MockDataResUser, MockDataResUser],
};
