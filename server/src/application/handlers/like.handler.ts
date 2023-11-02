import {ClaimRepository} from "../../infrastructure/repositories/claim.repository";
import {likeCommand} from "../commands/like.command";
import {VisitorRepository} from "../../infrastructure/repositories/visitor.repository";


export class LikeHandler{
    constructor(
      private readonly claimRepository: ClaimRepository,
      private readonly visitorRepository: VisitorRepository
    ) {}
    async execute(command: likeCommand): Promise<void>{
        try {
            const claim = await this.claimRepository.findOneById(command.getClaimId());
            const visitor = await this.visitorRepository.findOneById(command.getUserId());

            if (!claim || !visitor) {
                throw new Error('Claim or visitor not found.');
            }

            if (!visitor.validatePin(command.getVisitorPin())) {
              throw new Error('visitor pin does not match')
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