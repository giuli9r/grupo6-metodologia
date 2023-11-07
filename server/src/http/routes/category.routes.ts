import { Application } from 'express';
import CommonRoutes from './common.routes';
import getCategoryAction from '../actions/get.category.action';


class CategoryRoutes extends CommonRoutes{
    public constructor(app: Application){
        super(app, 'Category');
    }
    public setUpRoutes(): Application {
        
        this.app.get('/category',getCategoryAction.run);

        return this.app;
    }
}
export default CategoryRoutes;
