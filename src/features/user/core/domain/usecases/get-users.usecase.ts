import type { IUserRepository } from "../i-repository"
import type { User } from "../entity"

export async function getUserByIdUseCase(repository: IUserRepository, id: string): Promise<User | null> {
  return repository.getById(id)
}

export async function getUsersUseCase(repository: IUserRepository): Promise<User[]> {
  return repository.getAll()
}
