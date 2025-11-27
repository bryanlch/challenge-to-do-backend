import { db } from "../../config/firebase";
import { User } from "../../domain/models/user.model";
import { UserRepository } from "../../domain/repositories/user.repository";

export class FirestoreUserRepository implements UserRepository {
   private collection = db.collection('users');

   async findByEmail(email: string): Promise<User | null> {
      try {
         const snapshot = await this.collection.doc(email).get();
         if (!snapshot.exists) return null;
         return snapshot.data() as User;
      } catch (error) {
         console.log('🔥 ~ :14 ~ FirestoreUserRepository ~ error ~ 🔥', error)

         throw error;
      }
   }

   async create(user: User): Promise<User> {
      await this.collection.doc(user.email).set({
         ...user,
         createdAt: new Date()
      });
      return user;
   }
}