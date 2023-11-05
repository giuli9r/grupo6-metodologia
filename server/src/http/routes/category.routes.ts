import { Application } from 'express';
import CommonRoutes from './common.routes';
import createCategoryAction from '../actions/category/create.category.action';
import getCategoryAction from 'http/actions/get.category.action';
import findCategoryAction from '../actions/category/find.category.action';

class CategoryRoutes extends CommonRoutes{
    public constructor(app: Application){
        super(app, 'Category');
    }
    public setUpRoutes(): Application {
        this.app.post('/category', createCategoryAction.run);
        this.app.get('/category',findCategoryAction.run);
        this.app.put('/category',getCategoryAction.run);

        return this.app;
    }
}
export default CategoryRoutes;
