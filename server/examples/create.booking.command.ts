export class CreateBookingCommand {
  private readonly owner: string;
  private readonly passengers: string[];
  private readonly accomodation: string;
  private readonly from: Date;
  private readonly to: Date;

  constructor(owner: string, passengers: string[], accomodation: string, from: Date, to: Date) {
    this.owner = owner;
    this.passengers = passengers;
    this.accomodation = accomodation;
    this.from = from;
    this.to = to;
  }
  getOwner(): string {
    return this.owner;
  }

  getPassengers(): string[] {
    return this.passengers;
  }

  getAccomodation(): string {
    return this.accomodation;
  }

  getFrom(): Date {
    return this.from;
  }

  getTo(): Date {
    return this.to;
  }

  toPrimitives() {
    return {
      owner: this.owner,
      passengers: this.passengers,
      accomodation: this.accomodation,
      from: this.from,
      to: this.to,
    };
  }
}
