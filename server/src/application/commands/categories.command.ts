class CategoriesCommand {
  private readonly id: string;
  private readonly name: string; 
  private readonly color: string;
  
  constructor(id: string, name: string, color: string) {
    this.id = id;
    this.name = name;
    this.color = color;
  }
  
  getId(): string {
    return this.id;
  }
  
  getName(): string {
    return this.name;
  }

  getColor(): string {
    return this.color;
  }
}
  
export default CategoriesCommand;