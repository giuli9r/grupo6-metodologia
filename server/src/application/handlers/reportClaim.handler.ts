import claimRepository, {ClaimRepository} from 'infrastructure/repositories/claim.repository';
import {ReportClaimCommand} from '../commands/reportclaim.command';

class ReportClaimHandler{

  private claimRepository: ClaimRepository;

    public constructor(claimRepository: ClaimRepository){
      this.claimRepository = claimRepository;
    }

    public async execute(command: ReportClaimCommand): Promise<void> {
    
        try { 
        // Buscar la claim
        const claimReported = await this.claimRepository.findOneById( command.getCloneOfId() );
        const originalClaim = await this.claimRepository.findOneById( command.getClaimId() );

            
        // si no existe tirar error
        if (!claimReported || !originalClaim) {
          throw new Error('Error al procesar el reclamo.');
        }
    
        // reportarla  por fechas
        let date_reported = claimReported.getCreatedAt().getTime();
        let date_original = originalClaim.getCreatedAt().getTime();
        // let differenceInTime = (date_reported - date_original);
        // console.log("difference in time is : "+Math.abs(differenceInTime));

        if (date_reported > date_original) {
            claimReported.setCloneOf(originalClaim);
        } else {
            originalClaim.setCloneOf(claimReported);
        }
        
      } catch(error){
        console.error('error in report claim', error)
      }
  }
}

export default new ReportClaimHandler(claimRepository);

