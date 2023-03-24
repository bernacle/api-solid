import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-ins-repository'
import { CheckinUseCase } from '../check-in'

export function makeCheckinUseCase() {
  return new CheckinUseCase(
    new PrismaCheckInsRepository(),
    new PrismaGymsRepository(),
  )
}
