import { User } from "../models/user.model";

export interface UserRepository {
   findByEmail(email: string): Promise<User | null>;
   create(user: User): Promise<User>;
}