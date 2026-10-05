import type { IAuthRepository } from "../i-repository"
import type { AuthSession } from "../entity"

export async function getSessionUseCase(repository: IAuthRepository): Promise<AuthSession> {
  return repository.getSession()
}

export async function signInUseCase(
  repository: IAuthRepository,
  email: string,
  password: string,
): Promise<AuthSession> {
  return repository.signIn(email, password)
}

export async function signOutUseCase(repository: IAuthRepository): Promise<void> {
  return repository.signOut()
}

export async function registerUseCase(
  repository: IAuthRepository,
  email: string,
  password: string,
  name: string,
): Promise<AuthSession> {
  return repository.register(email, password, name)
}
