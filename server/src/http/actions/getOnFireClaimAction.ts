import { Request, Response } from 'express';
import ClaimRepository from 'infrastructure/repositories/claim.repository'; 

class GetOnFireClaimsAction {
  public async run(_req: Request, res: Response) {
    try {
      const claims = await ClaimRepository.findOnFireClaimsLastHour();

      res.status(200).json({ claims });
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener reclamos "on fire"' });
    }
  }
}

export default new GetOnFireClaimsAction();
