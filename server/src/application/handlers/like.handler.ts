import Claim from "../../domain/entities/claim.entity";
import claimRepository, {ClaimRepository} from "../../infrastructure/repositories/claim.repository";
import Visitor from "../../domain/entities/visitor.entity";
import visitorRepository, {VisitorRepository}  from "../../infrastructure/repositories/visitor.repository";
import { LikeCommand } from '../../commands/booking/like.command';
import { error } from "winston";

class LikeHandler{
    async execute(command: LikeCommand){

        //Check if visitor already liked the claim
        if (command.checkLike()) {
            throw new Error('Visitor already liked the claim')
        }

        //Check if visitor already disliked the claim
        if (command.checkDislike()) {
            throw new Error('Visitor already disliked the claim')
        }

        


    }
}