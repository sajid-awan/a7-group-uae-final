import type { AuthSession, AuthUser } from "./entity"

export interface IAuthRepository {
  getSession(): Promise<AuthSession>
  signIn(email: string, password: string): Promise<AuthSession>
  signOut(): Promise<void>
  register(email: string, password: string, name: string): Promise<AuthSession>
}

export type { AuthUser, AuthSession }
