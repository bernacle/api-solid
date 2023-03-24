import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { ValidateCheckinUseCase } from '../validate-check-in'

export function makeValidateCheckinUseCase() {
  return new ValidateCheckinUseCase(new PrismaCheckInsRepository())
}
