import { Application, application } from "express";
import CommonRoutes from "./common.routes"
import createVisitorAction from '../actions/create.visitor.action';

class VisitorRoutes extends CommonRoutes {

    public constructor(app: Application) {
        super(app, 'Visitor');
    }
    public setUpRoutes(): Application {
        this.app.post('/visitor', createVisitorAction.run);
        return this.app;
    }
}
export default VisitorRoutes;