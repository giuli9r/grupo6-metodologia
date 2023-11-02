import visitorRepository, {VisitorRepository} from '../../infrastructure/repositories/visitor.repository';
import Claim from '../../domain/entities/claim.entity';
import {CreateClaimCommand} from '../commands/create.claim.command';
import Visitor from '../../domain/entities/visitor.entity';
import Category from '../../domain/entities/category.entity';
import { error } from "winston";


class CreateClaimHandler{
    public constructor(
      private readonly visitorRepository: VisitorRepository
    ){}
    public async execute(command: CreateClaimCommand): Promise<void> {
      try { 
        // Buscar el visitante
        const visitor = await this.visitorRepository.findOneById(command.getOwnerId());
            
        if (!visitor) {
          throw new Error('Visitante no encontrado ');
        }
    
        // Validar el formato del PIN ingresado
        if (!visitor.validatePin(command.getOwnerPin())) {
          throw new Error('PIN incorrecto.');
        }
    
        const title= command.getTitle();
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
      } catch(error){
        console.error('error in create claim handler', error)
      }
  }
}

export default CreateClaimHandler;

