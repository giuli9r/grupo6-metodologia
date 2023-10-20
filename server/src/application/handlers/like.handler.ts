import Claim from "../../domain/entities/claim.entity";
import claimRepository, {ClaimRepository} from "../../infrastructure/repositories/claim.repository";
import Visitor from "../../domain/entities/visitor.entity";
import visitorRepository, {VisitorRepository}  from "../../infrastructure/repositories/visitor.repository";
import {likeCommand} from "../commands/like.command";
import { error } from "winston";


class LikeHandler{
    constructor(private readonly claimRepository: ClaimRepository, private readonly visitorRepository: VisitorRepository) {}
    async execute(command: likeCommand): Promise<void>{
        try {
            const claim = await this.claimRepository.findOneById(command.getClaimId());
            const visitor = await this.visitorRepository.findOneById(command.getUserId());

            if (!claim || !visitor) {
                throw new Error('Claim or visitor not found.');
            }


            if (claim.hasVisitorLiked(command.getUserId())) {
                throw new Error('Visitor has already liked this claim.');
            }

            claim.addLike(command.getUserId());

            await this.claimRepository.save(claim);       
        } catch(error) { 
            console.error('Error in LikeHandler:', error);
        throw error;
        }

    }

}