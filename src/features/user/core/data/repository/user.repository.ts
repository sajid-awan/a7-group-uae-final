import type { User } from "../../domain/entity"
import type { IUserRepository } from "../../domain/i-repository"

const DEMO_USERS: User[] = [
  { id: "1", name: "Demo User" },
]

class UserRepository implements IUserRepository {
  async getById(id: string): Promise<User | null> {
    return DEMO_USERS.find((user) => user.id === id) ?? null
  }

  async getAll(): Promise<User[]> {
    return [...DEMO_USERS]
  }
}

export const userRepository: IUserRepository = new UserRepository()

export async function fetchUserById(id: string): Promise<User | null> {
  return userRepository.getById(id)
}

export async function fetchUsers(): Promise<User[]> {
  return userRepository.getAll()
}
