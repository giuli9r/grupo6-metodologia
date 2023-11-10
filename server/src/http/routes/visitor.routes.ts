import { Application } from "express";
import CommonRoutes from "./common.routes"
import createVisitorAction from '../actions/create.visitor.action';
import VisitorSeeder from "../seeders/visitor.seeder";
import visitorRepository from "../../infrastructure/repositories/visitor.repository";

class VisitorRoutes extends CommonRoutes {

    public constructor(app: Application) {
        super(app, 'Visitor');
    }
    public setUpRoutes(): Application {
        this.app.post('/visitor', createVisitorAction.run);
        this.app.get('/seed-visitors', async (_req, res) => {
            try {
                await VisitorSeeder.generate();
                res.status(200).json({ message: 'Visitor seeding successful' });
            } catch (error) {
                res.status(500).json({ error: 'Visitor seeding failed' });
            }
        }); 
        this.app.get('/visitor/all', async (_req, res) => {
            try {
                const visitors = await visitorRepository.findAll();
                res.status(200).json(visitors);
                
            } catch (error) {
                res.status(500).json({ error: 'Error al obtener los visitantes.' });
            }
        } )
        return this.app;
    }
}
export default VisitorRoutes;