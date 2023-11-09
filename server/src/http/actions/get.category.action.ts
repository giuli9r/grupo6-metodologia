import { Request, Response } from 'express';
import getCategoryHandler from '../../application/handlers/get.category.handler';

class GetCategoryAction {

  public async run(_req: Request, res: Response) {

    try {
      const categories = await getCategoryHandler.execute();

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