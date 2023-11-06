import { Request, Response } from 'express';
import CreateVisitorCommand from '../../application/commands/create.visitor.command';
import createVisitorHandler from '../../application/handlers/create.visitor.handler';


class CreateVisitorAction {
    public async run(req: Request, res: Response) {
        const { ip, nickname, pin} = req.body;

        try {
            const command = new CreateVisitorCommand(
                ip,
                nickname,
                pin
            );

            await createVisitorHandler.execute(command);

            return res.status(201).json(
                {message: 'Visitor created succesfully'}
            )
        } catch (error:any)
        {
            const e = error as Error;
            res.status(400).json(
                { message: e.message }
            );
        
        }
    }
}

export default new CreateVisitorAction();