import { Application } from 'express';
import CommonRoutes from './common.routes';
import getCategoryAction from '../actions/get.category.action';
import CategorySeeder from '../seeders/category.seeder'


class CategoryRoutes extends CommonRoutes{
    public constructor(app: Application){
        super(app, 'Category');
    }
    public setUpRoutes(): Application {
        
        this.app.get('/category',getCategoryAction.run);
        this.app.get('/seed-categories', async (_req, res) => {
            try {
                await CategorySeeder.generate();
                res.status(200).json({ message: 'Category seeding successful' });
            } catch (error) {
                res.status(500).json({ error: 'Category seeding failed' });
            }
        });

        return this.app;
    }
}
export default CategoryRoutes;
