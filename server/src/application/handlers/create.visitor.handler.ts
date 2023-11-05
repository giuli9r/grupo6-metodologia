import VisitorRepository from '../../infrastructure/repositories/visitor.repository';
import  {Claim} from '../../domain/entities/claim.entity';
import { CreateVisitorCommand } from '../commands/create.visitor.command';
import Visitor from '../../domain/entities/visitor.entity';
import visitorRepository from '../../infrastructure/repositories/visitor.repository';
class CreateVisitorHandler {
    
    async execute (command: CreateVisitorCommand) {
        
        //Check if nickname exist
        const visitorNickname = await visitorRepository.findOneByNickName(command.getNickName());
        const allNicknames =  await visitorRepository.findAll();
        for (let i = 0; i < allNicknames.length; i++) {
            if (allNicknames[i].toString() ==  visitorNickname) {
                throw new Error('Nickname already exist!');
            }
        }
        
       


        
    }
    
    
    
}

export default new CreateVisitorHandler();