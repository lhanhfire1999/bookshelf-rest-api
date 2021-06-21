import { bookshelf } from "../config/database";

export interface User {
  id: string;
  username: string;
  email?: string;
  phone?: string;
  dateOfBirth?: Date;
}

export const userModel = bookshelf.Model.extend({
  tableName: "users"
});
