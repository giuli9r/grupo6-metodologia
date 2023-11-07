import { Application } from 'express';
import CommonRoutes from './common.routes';
import createClaimAction from '../actions/create.claim.action';
import reportClaimAction from '../actions/report.claim.action';
import getLastClaimByVisitorAction from '../actions/getLastClaimByVisitor.action';
import getLastClaimsAction from '../actions/getLastClaims.action';
import getOnFireClaimAction from '../actions/getOnFireClaimAction';

class ClaimRoutes extends CommonRoutes{
    public constructor(app: Application){
        super(app, 'Claim');
    }
    public setUpRoutes(): Application {
        this.app.post('/claim', createClaimAction.run);
        this.app.post('/claim/report', reportClaimAction.run);
        this.app.get('/claim/last/:visitorId',getLastClaimByVisitorAction.run);
        this.app.get('/claim/last',getLastClaimsAction.run)
        this.app.get('/onfireclaims',getOnFireClaimAction.run)

        return this.app;
    }
}
export default ClaimRoutes;
