export type { User } from "@/features/user/core/domain/entity"
export { fetchUserById, fetchUsers } from "@/features/user/core/data/repository/user.repository"
export { getUserByIdUseCase, getUsersUseCase } from "@/features/user/core/domain/usecases/get-users.usecase"
