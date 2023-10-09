import {VisitorRepository} from '../../infrastructure/repositories/visitor.repository';
import Claim from '../../domain/entities/claim.entity';
import {CreateClaimCommand} from '../commands/claim/create.claim.command';
import Visitor from '../../domain/entities/visitor.entity';
import Category from '../../domain/entities/category.entity';


class CreateClaimHandler{
    private visitorRepository: VisitorRepository;


    public constructor(
        visitorRepository: VisitorRepository
    ){
        this.visitorRepository;
    }


    
    
    
    public async execute(command: CreateClaimCommand): Promise<void> {
    // Buscar el visitante
    const visitor = this.visitorRepository.findOneById(command.getOwnerId());
        
    if (!visitor) {
    throw new Error('Visitante no encontrado ');
    }

    // Validar el formato del PIN ingresado
    if (!visitor.isValidPin(command.getPin())) {
      throw new Error('PIN incorrecto.');
    }

    const title= command.getTittle();
    const description=command.getDescription();
    const category=command.getCategory();
    const location= command.getLocation();
    
    const claim = Claim.create(
        visitor,
        title,
        description,
        category,
        location,
    );
  }
}
export default new CreateClaimHandler(
  VisitorRepository,
);
