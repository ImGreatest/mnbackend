import { ERole } from "@prisma/client";

/**
 * User entity
 *
 * @export
 * @interface
 * @name IUser
 * @property { string } id
 * @property { string? } login
 * @property { string } email
 * @property { string? } phone
 * @property { string } password
 * @property { string } role
 * @property { Date } createdAt
 * @property { Date? } updatedAt
 * @see { ERole }
 */
export interface IUser {
  id: string;
  login?: string;
  email: string;
  phone?: string;
  password: string;
  role: ERole;
  createdAt: Date;
  updatedAt?: Date;
}
