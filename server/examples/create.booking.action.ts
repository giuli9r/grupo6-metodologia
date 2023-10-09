import { Request, Response } from 'express';
import CreateBookingCommand from '../../../application/commands/booking/create.booking.command';
import createBookingHandler from '../../../application/handlers/booking/create.booking.handler';

class CreateBookingAction {

  public async run(req: Request, res: Response) {
    const { ownerId, passengerIds, accomodationId, from, to } = req.body;

    try {
      const command = new CreateBookingCommand(
        ownerId,
        passengerIds,
        accomodationId,
        from,
        to
      );
      
      await createBookingHandler.execute(command);

      return res.status(201).json(
        { message: 'Booking created successfully' }
      );
    } catch (error) {
      res.status(400).json(
        { message: error.message }
      );
    }
  }
  
}

export default new CreateBookingAction();
