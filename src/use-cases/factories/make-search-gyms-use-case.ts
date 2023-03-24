import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-ins-repository'
import { SearchGymUseCase } from '../search-gym'

export function makeSearchGymUseCase() {
  return new SearchGymUseCase(new PrismaGymsRepository())
}
