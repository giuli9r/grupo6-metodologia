import  Visitor  from '../../domain/entities/visitor.entity';
import visitorRepository from '../../infrastructure/repositories/visitor.repository';

class VisitorSeeder{
    private visitors:Array<Visitor>=[];

    public constructor(){
        this.visitors.push(Visitor.create('120.222.333',"Debora meltrozo", '252235'));
        this.visitors.push(Visitor.create('120.444.758',"Esteban quito", '275250'));
        this.visitors.push(Visitor.create('120.654.983',"Rosa melano", '311200'));
        this.visitors.push(Visitor.create('120.345.565',"Rosa meltrozo" ,'222525'));
        this.visitors.push(Visitor.create('120.463.763',"Dolores delano", '120233'));
    }

    public async generate(): Promise<void> {
        for (const accomodation of this.visitors) {
          await visitorRepository.save(accomodation);
        }
    }
}
export default new VisitorSeeder()