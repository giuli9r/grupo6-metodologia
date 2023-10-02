import { Request, Response } from 'express';


class DislikeAction {
  public async run(req: Request, res: Response) {
    const { claimId } = req.body; 

    try {
      
      const claim = claims.find((r) => r.id === claimId);

      if (claim) {
        claim.likes += 1;

        return res.status(201).json(
          { message: 'Reclado likeado' }
        );
      } 
      
    } 
    catch (error) {
      res.status(400).json(
        { message: error.message }
    );
    }
  }
}

export default new DislikeAction();
