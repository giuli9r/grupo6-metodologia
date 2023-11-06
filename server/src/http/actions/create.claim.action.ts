import { Request, Response } from 'express';
import CreateClaimCommand from '../../application/commands/create.claim.command';
import CreateClaimHandler from '../../application/handlers/create.claim.handler';

class CreateClaimAction {
    public async run(req: Request, res: Response) {
        const { ownerId, title, description, category, location, createdAt, cloneOf } = req.body;
        
        try {
            const command = new CreateClaimCommand(
              ownerId,
              title,
              description,
              category,
              location,
              createdAt,
              cloneOf,
            );
            await CreateClaimHandler.execute(command);

            return res.status(201).json(
                {message: 'Claim created succesfully'}
            )
        } catch (error:any)
            {
                const e = error as Error;
                return res.status(400).json(
                    { message: e.message }
                );
            
            
        }
    }
}

export default new CreateClaimAction();