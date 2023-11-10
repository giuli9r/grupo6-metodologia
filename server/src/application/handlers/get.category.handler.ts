import Category from "../../domain/entities/category.entity";
import categoryRepository, { CategoryRepository }  from "../../infrastructure/repositories/category.repository";



class GetCategoryHandler{
  private categoryRepository: CategoryRepository;

  public constructor(categoryRepository: CategoryRepository){
    this.categoryRepository = categoryRepository;
  }

  public async execute(): Promise<Category[]> {

    const categories = await this.categoryRepository.findAll();

    return categories;
  }
}

export default new GetCategoryHandler(
  categoryRepository
);