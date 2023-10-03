import Category from '../../domain/entities/category.entity';
import categoryRepository from '../../infrastructure/repositories/category.repository';

export class CategorySeeder {
  private categories: Array<Category> = [];

  public constructor() {
    this.categories.push(Category.create('transito', 'rojo'));
    this.categories.push(Category.create('', ''));
    this.categories.push(Category.create('', ''));
  }

  public async generate(): Promise<void> {
    for (const category of this.categories) {
      await categoryRepository.save(category);
    }
  }
}

export default new CategorySeeder();