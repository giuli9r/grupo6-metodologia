import{ v4 } from 'uuid';
import Visitor from './visitor.entity';
import Category from './category.entity';

export class Claim{
    private id:string;
    private owner:Visitor;
    private title:string;
    private description:string;
    private category: Category;
    private location: string;
    private createdAt: Date;
    private cloneOf: Claim | null;
    private likes: string[] = [];
    private dislikes: string[] = [];

    private constructor(
        id:string,
        owner:Visitor,
        title:string,
        description:string,
        category:Category,
        location:string,
        createdAt:Date,
        cloneOf:Claim | null,
    ){
        this.id=id;
        this.owner=owner;
        this.title=title;
        this.description=description;
        this.category=category;
        this.location=location;
        this.createdAt=createdAt;
        this.cloneOf=cloneOf;
    }

    public static create(
        owner:Visitor,
        title:string,
        description:string,
        category:Category,
        location:string

        ):Claim{
            return new Claim(
                v4(),
                owner,
                title,
                description,
                category,
                location,
                new Date(),
                null
            );
    }

    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string {
        return this.description;
    }

    public getCategory(): Category {
        return this.category;
    }

    public getLocation(): string {
        return this.location;
    }

    public getCloneOf(): Claim | null {
        return this.cloneOf;
    }

    public getId(): string {
        return this.id;
    }

    public getOwner(): Visitor {
        return this.owner;
    }

    public getCreatedAt(): Date {
        return this.createdAt
    }

    public getLikes(): string[] {
        return this.likes;
    }

    public hasVisitorLiked(visitorId: string): boolean {
        return this.likes.includes(visitorId);
    }

    public addLike(visitorId: string): void {
        if (!this.likes.includes(visitorId)) {
          this.likes.push(visitorId);
        }
    }

    public getDislikes(): string[] {
        return this.dislikes;
    }

    public hasVisitorDislked(visitorId: string): boolean {
        return this.dislikes.includes(visitorId);
    }

    public addDislike(visitorId: string): void {
        if (!this.dislikes.includes(visitorId)) {
            this.dislikes.push(visitorId);
        }
    }
      
}

export default Claim;