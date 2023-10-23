import Category from "../../domain/entities/category.entity";
import categoryRepository, { CategoryRepository }  from "../../infrastructure/repositories/category.repository";



class GetCategoryHandler{
  private categoryRespository: CategoryRepository;

  public constructor(categoryRepository: CategoryRepository){
    this.categoryRespository = categoryRepository;
  }

  public async execute(): Promise<void> {

  }
}

export default new GetCategoryHandler(
  categoryRepository
);