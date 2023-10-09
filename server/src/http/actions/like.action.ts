import { Request, Response } from 'express';
import likeCommand from '../../application/commands/like.command';
import likeHandler from '../../application/handlers/like.handler';

class LikeAction {
  public async likeClaim(req: Request, res: Response) {
    const { userId, claimId } = req.body;

    try {
      const command = new likeCommand(userId, claimId);
      
      await likeHandler.execute(command);

      return res.status(201).json(
        { message: 'Reclamo likeado' }
      );
    } catch (error) {
        res.status(400).json(
          { message: error.message }
        );
    }
  }
}

export default new LikeAction();
