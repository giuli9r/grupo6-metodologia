import { v4 } from 'uuid';

class Category{
    private id: string;
    private name: string;
    private color: string;

    private constructor(id: string, name: string, color: string){
        this.id = id;
        this.name = name;
        this.color = color;
    }
    
    public static create(
      name: string,
      color: string,
    ): Category {
      return new Category(
        v4(),
        name,
        color
      );
    }
    
    public getId(): string {
        return this.id;
      }

    public getName(): string {
        return this.name;
      }

    public getColor(): string {
        return this.color;
      }
}

export default Category;