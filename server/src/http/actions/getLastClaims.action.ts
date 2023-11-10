import { Request,  Response } from 'express';
import ClaimRepository from '../../infrastructure/repositories/claim.repository';

class GetLastClaimsAction {
  public async run(_req: Request, res: Response): Promise<void> {
    try {
      const lastClaims = await ClaimRepository.findLast5Claims(); 

      if (lastClaims) {
        res.status(200).json(lastClaims); 
      } else {
        res.status(404).json({ message: 'No claims found.' });
      }
    } catch (error:any) {
      res.status(500).json({ message: 'Error retrieving claims', error: error.message }); 
    }
  }
}

export default new GetLastClaimsAction();
