import { Application } from 'express';
import CommonRoutes from './common.routes';
import createClaimAction from '../actions/claim/create.claim.action';
import updateClaimAction from '../actions/claim/update.claim.action';
import findClaimAction from '../actions/claim/find.claim.action';

class ClaimRoutes extends CommonRoutes{
    public constructor(app: Application){
        super(app, 'Claim');
    }
    public setUpRoutes(): Application {
        this.app.post('/claim', createClaimAction.run);
        this.app.get('/category',findClaimAction.run);
        this.app.put('/category',updateClaimAction.run);

        return this.app;
    }
}
export default ClaimRoutes;
