import { Request, Response } from 'express'; 
import  ClaimRepository  from '../../infrastructure/repositories/claim.repository'; 

class GetLastClaimsByVisitorAction  {
  public  async run(req: Request, res: Response): Promise<void> {
    

    try {
      const visitorId = req.params['visitorId'];

      if (visitorId !== undefined) {
        const lastClaims = await ClaimRepository.findLastClaimsByVisitor(visitorId as string);

        if (lastClaims) {
          res.status(201).json(lastClaims);
        } else {
          res.status(404).json({ message: 'No claims found for the specified visitor.' });
        }
      } else {
        res.status(400).json({ message: 'Invalid visitor ID provided' });
      }
    } catch (error:any) {
      res.status(500).json({ message: 'Error retrieving claims', error: error.message });
    }
  }
}


export default new GetLastClaimsByVisitorAction();
