import { Request, Response } from 'express';
import likeCommand from '../../application/commands/like.command';
import likeHandler from '../../application/handlers/like.handler';

class LikeAction {
  public async run(req: Request, res: Response) {
    const { userId, claimId, visitorPin } = req.body;

    try {
      const command = new likeCommand(userId, claimId, visitorPin);
      
      await likeHandler.execute(command);

      return res.status(201).json(
        { message: 'Reclamo likeado' }
      );
    } 
    catch (error:any)
    {
      const e = error as Error;
      return res.status(400).json(
      { message: e.message }
      );
        
    }
    
  }
}

export default new LikeAction();
