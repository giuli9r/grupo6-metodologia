import visitorRepository, {VisitorRepository} from '../../infrastructure/repositories/visitor.repository';
import {CreateClaimCommand} from '../commands/create.claim.command';
import claimRepository, {ClaimRepository} from '../../infrastructure/repositories/claim.repository';
import Claim from '../../domain/entities/claim.entity';
import categoryRepository, {CategoryRepository} from "../../infrastructure/repositories/category.repository";

export class CreateClaimHandler {

  public constructor(
    private visitorRepository: VisitorRepository,
    private claimRepository: ClaimRepository,
    private categoryRepository: CategoryRepository
  ) {
  }

  public async execute(command: CreateClaimCommand): Promise<void> {
    const owner = await this.visitorRepository.findOneById(command.getOwner());

    if (!owner) {
      throw new Error('Owner does not exist');
    }

    const category = await this.categoryRepository.findOneById(command.getCategory());

    if (!category) {
      throw new Error("Category not found");
    }

    const claim = Claim.create(
      owner,
      command.getTitle(),
      command.getDescription(),
      category,
      command.getLocation(),
    );

    await this.claimRepository.save(claim);
  }
}

export default new CreateClaimHandler(
  visitorRepository,
  claimRepository,
  categoryRepository
);