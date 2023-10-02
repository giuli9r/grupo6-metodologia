import { Booking } from '../../../domain/entities/booking.entity';
import { CreateBookingCommand } from '../../commands/booking/create.booking.command';
import accommodationRepository from '../../../infrastructure/repositories/mongodb/accomodation.repository';
import bookingRepository from '../../../infrastructure/repositories/mongodb/booking.repository';
import passengerRepository from '../../../infrastructure/repositories/mongodb/passenger.repository';
import { Passenger } from '../../../domain/entities/passenger.entity';

class CreateBookingHandler {
  async execute(command: CreateBookingCommand) {
    
    //Check if owner is in passengers list
    if (!command.getPassengers().includes(command.getOwner())) {
      throw new Error('Owner must be in passengers list');
    }
    //Check if dates are valid
    if (command.getFrom() > command.getTo()) {
      throw new Error('(From) date must be before (to) date');
    }

    //Check if owner exists
    const owner = await passengerRepository.findOneById(command.getOwner());
    if (!owner) {
      throw new Error('Owner does not exist');
    }

    //Check if passengers exist
    const passengers = command.getPassengers();
    const passengersFromDb: Passenger[] = [];
    for (let i = 0; i < passengers.length; i++) {
      const passenger = await passengerRepository.findOneById(passengers[i]);
      if (!passenger) {
        throw new Error('Passenger does not exist');
      } else {
        passengersFromDb.push(passenger);
      }
    }
    
    //Check if accommodation exists
    const accommodation = await accommodationRepository.findOneById(command.getAccomodation());
    if (!accommodation) {
      throw new Error('Accommodation does not exist');
    }

    const booking = Booking.create(owner, passengersFromDb, accommodation, command.getFrom(), command.getTo());

    await bookingRepository.save(booking);
  }
}

export default new CreateBookingHandler();
