import { Accommodation } from '../../domain/entities/accommodation.entity';
import accommodationRepository from '../repositories/memory/accommodation.repository';

class AccommodationSeeder {
  private accommodations: Array<Accommodation> = [];
  
  public constructor() {
    this.accommodations.push(Accommodation.create('Cabanas Los montes', 2525));
    this.accommodations.push(Accommodation.create('Hotel First Class', 2750));
    this.accommodations.push(Accommodation.create('first class', 3100));
    this.accommodations.push(Accommodation.create('first class', 2525));
    this.accommodations.push(Accommodation.create('tourist', 1233));
  }

  public async generate(): Promise<void> {
    for (const accomodation of this.accommodations) {
      await accommodationRepository.save(accomodation);
    }
  }
}

export default new AccommodationSeeder();
