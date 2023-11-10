import Visitor from '../../domain/entities/visitor.entity';
import {CreateVisitorCommand} from '../commands/create.visitor.command';
import visitorRepository, {VisitorRepository} from '../../infrastructure/repositories/visitor.repository';


export class CreateVisitorHandler {
    
    private visitorRepository: VisitorRepository;

    public constructor(visitorRepository: VisitorRepository){
      this.visitorRepository = visitorRepository;
    }

    public async execute(command: CreateVisitorCommand): Promise<void> {
      try { 
        // Buscar el visitante
        const visitorResponse = await this.visitorRepository.findOneByNickName(command.getNickName());

        if (visitorResponse) {
          throw new Error('Ya existe ese nombre de usuario.');
        }
    
        const ip= command.getIp();
        const nickname=command.getNickName();
        const pin=command.getPIN();
        
        const visitor = Visitor.create(
           ip, nickname, pin
        );

        await visitorRepository.save(visitor);
      } catch(error){
        console.error('error in create visitor handler', error)
      }
  }

}

export default new CreateVisitorHandler(visitorRepository);