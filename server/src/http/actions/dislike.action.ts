import { Request, Response } from 'express';
import dislikeCommand from '../../application/commands/dislike.command';
import dislikeHandler from 'application/handlers/dislike.handler';


class DislikeAction {
  public async run(req: Request, res: Response) {
    const {userId, claimId } = req.body; 

    try {
      const command = new dislikeCommand(userId,claimId) 
      
      await dislikeHandler.execute(command)

      return res.status(201).json(
        { message: 'Dislike' }
      );
    } 
    catch (error:any)
    {
      const e = error as Error;
      res.status(400).json(
      { message: e.message }
      );
        
    }
  }
}


export default new DislikeAction();
