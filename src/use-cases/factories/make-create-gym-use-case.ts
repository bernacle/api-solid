import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-ins-repository'
import { CreateGymUseCase } from '../create-gym'

export function makeCreateGymUseCase() {
  return new CreateGymUseCase(new PrismaGymsRepository())
}
