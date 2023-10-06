import Category from "../../domain/entities/category.entity";
import Claim from "../../domain/entities/claim.entity";
import Visitor from "../../domain/entities/visitor.entity";

export class CreateClaimCommand {
    private readonly id: string;
    private readonly owner: Visitor;
    private readonly title:string;
    private readonly description:string;
    private readonly category: Category;
    private readonly location: string;
    private readonly createdAt: Date;
    private readonly cloneOf?: Claim;
  
    constructor(id: string, owner: Visitor, title: string, description: string, category: Category, location: string, createdAt: Date, cloneOf?: Claim) {
      this.id = id;
      this.owner = owner;
      this.title = title;
      this.description = description;
      this.category = category;
      this.location = location;
      this.createdAt = createdAt;
      this.cloneOf = cloneOf;
    }
    getId(): string {
      return this.id;
    }
  
    getOwner(): Visitor {
      return this.owner;
    }
  
    getTitle(): string {
      return this.title;
    }
  
    getDescription(): string {
      return this.description;
    }
  
    getCategory(): Category {
      return this.category;
    }

    getLocation(): string {
        return this.location;
      }
    
    getCreatedAt(): Date {
        return this.createdAt;
      }

    getCloneOf(): Claim | undefined {
        return this.cloneOf;
    }
  }
  