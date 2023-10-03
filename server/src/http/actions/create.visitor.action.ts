import { Request, Response } from 'express';
import CreateVisitorCommand from '../../../application/commands/create.visitor.command';
import createVisitorHandler from '../../../application/handlers/create.visitor.handler';


class CreateVisitorAction {
    public async run(req: Request, res: Response) {
        const { id, ip, nickname } = req.body;

        try {
            const command = new CreateVisitorCommand(
                id,
                ip,
                nickname
            );

            await createVisitorHandler.execute(command);

            return res.status(201).json(
                {message: 'Visitor created succesfully'}
            )
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json(
                    { message: error.message }
                );
            }
        }
    }
}

export default new CreateVisitorAction();