import { Application } from 'express';
import CommonRoutes from './common.routes';
import createClaimAction from '../actions/create.claim.action';
import reportClaimAction from '../actions/report.claim.action';
import getLastClaimByVisitorAction from '../actions/getLastClaimByVisitor.action';
import getLastClaimsAction from '../actions/getLastClaims.action';
import getOnFireClaimAction from '../actions/getOnFireClaimAction';
import likeAction from '../actions/like.action';
import dislikeAction from '../actions/dislike.action';

class ClaimRoutes extends CommonRoutes{
    public constructor(app: Application){
        super(app, 'Claim');
    }
    public setUpRoutes(): Application {
        this.app.post('/claim', createClaimAction.run);
        this.app.put('/claim/:id/report', reportClaimAction.run);
        this.app.get('/claim/last/:visitorId',getLastClaimByVisitorAction.run);
        this.app.get('/claim/last',getLastClaimsAction.run)
        this.app.get('/claim/onfire',getOnFireClaimAction.run)
        this.app.put('/claim/:id/like', likeAction.run);
        this.app.put('/claim/:id/dislike', dislikeAction.run);

        return this.app;
    }
}
export default ClaimRoutes;
