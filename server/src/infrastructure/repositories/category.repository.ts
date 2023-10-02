import Category from "../../domain/entities/category.entity";

class CategoryRepository{
    private category: Category[];


    public constructor() {
        this.category = [];
    }

    public async save(category : Category): Promise<void>{
        const saveCategory = this.category.find(a => a.getId() === category.getId());

        if (saveCategory){
            this.category.splice(this.category.indexOf(saveCategory), 1);
        }
        this.category.push(category);
    }

    public async findOneById(id: string): Promise<Category | null> {
        const category = this.category.find(a => a.getId() === id);
        
        return category ? category : null;
    }

    public async findAll(): Promise<Category[]> {
        return this.category;
    }
}

export default new CategoryRepository();

