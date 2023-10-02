import Visitor from "../../domain/entities/visitor.entity";

export class VisitorRepository {

    private visitors : Visitor[];

    public constructor(){
        this.visitors = [];
    }

    public async save(visitor : Visitor): Promise<void>{
        const saveVisitor = this.visitors.find(a => a.getId() == visitor.getId());

        if (saveVisitor){
            this.visitors.splice(this.visitors.indexOf(saveVisitor),1);
        }
        this.visitors.push(visitor);
    }

    public async findOneById(id : string): Promise<Visitor | null>{
        const visitor = this.visitors.find(a => a.getId() == id);
        return visitor ? visitor : null;
    }

}

