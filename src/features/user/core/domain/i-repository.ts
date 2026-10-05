import type { User } from "./entity"

export interface IUserRepository {
  getById(id: string): Promise<User | null>
  getAll(): Promise<User[]>
}
