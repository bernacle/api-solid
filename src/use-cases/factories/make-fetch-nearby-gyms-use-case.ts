import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-ins-repository'
import { FetchNearbyGymUseCase } from '../fetch-nearby-gyms'

export function makeFetchNearbyGymUseCase() {
  return new FetchNearbyGymUseCase(new PrismaGymsRepository())
}
