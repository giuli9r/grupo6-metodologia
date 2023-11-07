import Claim from "../../domain/entities/claim.entity";
import claimRepository, {ClaimRepository} from "../../infrastructure/repositories/claim.repository";
import Visitor from "../../domain/entities/visitor.entity";
import visitorRepository, {VisitorRepository}  from "../../infrastructure/repositories/visitor.repository";
import {dislikeCommand} from "../../application/commands/dislike.command";


class DislikeHandler{
    constructor(private readonly claimRepository: ClaimRepository, private readonly visitorRepository: VisitorRepository) {}
    async execute(command: dislikeCommand): Promise<void>{
        try {
            const claim = await this.claimRepository.findOneById(command.getClaimId());
            const visitor = await this.visitorRepository.findOneById(command.getUserId());

            if (!claim || !visitor) {
                throw new Error('Claim or visitor not found.');
            }


            if (claim.hasVisitorDislked(command.getUserId())) {
                throw new Error('Visitor has already disliked this claim.');
            }

            claim.addDislike(command.getUserId());

            await this.claimRepository.save(claim);       
        } catch(error) { 
            console.error('Error in DislikeHandler:', error);
        throw error;
        }

    }

}

export default new DislikeHandler(claimRepository, visitorRepository);