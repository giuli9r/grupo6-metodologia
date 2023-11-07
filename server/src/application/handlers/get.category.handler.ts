import Category from "../../domain/entities/category.entity";
import categoryRepository, { CategoryRepository }  from "../../infrastructure/repositories/category.repository";
import GetCategoriesCommand from "../../application/commands/get.categories.command";


class GetCategoryHandler{
  private categoryRepository: CategoryRepository;

  public constructor(categoryRepository: CategoryRepository){
    this.categoryRepository = categoryRepository;
  }

  public async execute(command: GetCategoriesCommand): Promise<Category[]> {
    const name = command.getName();
    const color = command.getColor();

    // Fetch all categories
    const categories = await this.categoryRepository.findAll();

    // Filter categories based on name and color
    const filteredCategories = categories.filter(category => {
      return (
        (name === '' || category.getName() === name) &&
        (color === '' || category.getColor() === color)
      );
    });

    return filteredCategories;
  }
}

export default new GetCategoryHandler(
  categoryRepository
);