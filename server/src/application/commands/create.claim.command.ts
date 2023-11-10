
export class CreateClaimCommand {

    private readonly owner: string;
    private readonly title:string;
    private readonly description:string;
    private readonly category: string;
    private readonly location: string;


  
    constructor( owner: string, title: string, description: string, category: string, location: string) {

      this.owner = owner;
      this.title = title;
      this.description = description;
      this.category = category;
      this.location = location;

    }




    getOwner(): string {
      return this.owner;
    }
  
    getTitle(): string {
      return this.title;
    }
  
    getDescription(): string {
      return this.description;
    }
  
    getCategory(): string {
      return this.category;
    }

    getLocation(): string {
        return this.location;
      }
    
  }
  export default CreateClaimCommand;