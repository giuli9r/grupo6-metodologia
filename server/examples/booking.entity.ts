import { v4 } from 'uuid';
import { Passenger } from './passenger.entity';
import { Accommodation } from './accommodation.entity';
import BookingStatus from "../enums/booking-status.enum";

class Booking {
  private id: string;
  private owner: Passenger;
  private passengers: Passenger[];
  private accommodation: Accommodation;
  private from: Date;
  private to: Date;
  private status: BookingStatus = BookingStatus.pending;

  private constructor(
    id: string,
    owner: Passenger,
    passengers: Passenger[],
    accommodation: Accommodation,
    from: Date,
    to: Date,
    status: BookingStatus,
  ) {
    this.id = id;
    this.owner = owner;
    this.passengers = passengers;
    this.accommodation = accommodation;
    this.from = from;
    this.to = to;
    this.status = status;
  }

  public static create(
    owner: Passenger,
    passengers: Passenger[],
    accommodation: Accommodation,
    from: Date,
    to: Date
  ): Booking {
    return new Booking(
      v4(),
      owner,
      passengers,
      accommodation,
      from,
      to,
      BookingStatus.pending
    );
  }

  public changeOwner(owner: Passenger): void {
    this.owner = owner;
  }
  
  public changePassengers(passengers: Passenger[]): void {
    this.passengers = passengers;
  }
  
  public changeAccomodation(accommodation: Accommodation): void {
    this.accommodation = accommodation;
  }
  
  public changeFrom(from: Date): void {
    this.from = from;
  }
  
  public changeTo(to: Date): void {
    this.to = to;
  }
  
  public changeStatus(status: BookingStatus): void {
    if (status === this.status) {
      throw new Error('Status is already "' + status + '"');
    }

    this.status = status;
  }

  public getId(): string {
    return this.id;
  }

  public getStatus(): BookingStatus {
    return this.status;
  }

  public getOwner(): Passenger {
    return this.owner;
  }

  public getPassengers(): Passenger[] {
    return this.passengers;
  }
  
  public getAccommodation(): Accommodation {
    return this.accommodation;
  }
  
  public getFrom(): Date {
    return this.from;
  }

  public getTo(): Date {
    return this.to;
  }

  //Calculate the total price of the booking
  public getFinalPrice(): number {
    const diff = this.to.getTime() - this.from.getTime();
    const days = diff / (1000 * 60 * 60 * 24);
    
    const finalPrice = days * this.accommodation.getPricePerNight();
    
    return finalPrice;
  }
}

export default Booking;
