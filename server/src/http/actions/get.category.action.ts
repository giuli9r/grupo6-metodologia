import { Request, Response } from 'express';
import GetCategoriesCommand from '../../application/commands/get.categories.command';
import getCategoryHandler from '../../application/handlers/get.category.handler';

class GetCategoryAction {

  public async run(req: Request, res: Response) {
    const { name, color } = req.body;

    try {
      const command = new GetCategoriesCommand(name, color);


      const categories = await getCategoryHandler.execute(command);


      console.log("Retrieved Categories:", categories);

      
      return res.status(200).json({ categories });
    } catch (error:any)
    {
      const e = error as Error;
      return res.status(400).json(
      { message: e.message }
      );
        
    }
  }
}

export default new GetCategoryAction();