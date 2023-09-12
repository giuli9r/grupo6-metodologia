import Booking from '../../domain/entities/booking.entity';

class BookingRepository {
  private bookings: Booking[];
  
  public constructor() {
    this.bookings = [];
  }

  public async save(booking: Booking): Promise<void> {
    const saveBooking = this.bookings.find(a => a.getId() === booking.getId());

    if (saveBooking) {
      this.bookings.splice(this.bookings.indexOf(saveBooking), 1);
    }
    
    this.bookings.push(booking);
  }

  public async findOneById(id: string): Promise<Booking | null> {
    const booking = this.bookings.find(a => a.getId() === id);
    
    return booking ? booking : null;
  }

  public async findOneByNameAndFromDate(name: string, from: Date): Promise<Booking | null> {
    const booking = this.bookings.find(
      ((a: { passengers: { getName: () => string } }) => a.passengers.getName() === name) &&
        (a => a.getFrom() === from),
    );

    return booking ? booking : null;
  }
}

export default new BookingRepository();
