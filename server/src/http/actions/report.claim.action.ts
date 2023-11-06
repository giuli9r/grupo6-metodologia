import { Request, Response } from 'express';
import ReportClaimCommand from '../../application/commands/reportclaim.command';
import ReportClaimHandler from '../../application/handlers/report.claim.handler'; //esperar handler

class ReportClaimAction {
    public async run(req: Request, res: Response) {
        const { id, descripcion, visitorId, claimId } = req.body;
        
        try {
            const command = new ReportClaimCommand(
              id,
              descripcion,
              visitorId,
              claimId
            );
            await ReportClaimHandler.execute(command);

            return res.status(201).json(
                { message: 'Claim reported successfully' }
            );
        } catch (error:any) {
            const e = error as Error;
            res.status(400).json(
                { message: e.message }
            );
        }
    }
}

export default new ReportClaimAction();