import Claim from "../../domain/entities/claim.entity";

class ClaimRepository{
    private claim: Claim[];


    public constructor() {
        this.claim = [];
    }

    public async save(claim : Claim): Promise<void>{
        const saveClaim = this.claim.find(a => a.getId() == claim.getId());

        if (saveClaim){
            this.claim.splice(this.claim.indexOf(saveClaim),1);
        }
        this.claim.push(claim);
    }

    public async findOneById(id: string): Promise<Claim | null> {
        const claim = this.claim.find(a => a.getId() === id);
        
        return claim ? claim : null;
    }

    public async findAll(): Promise<Claim[]> {
        return this.claim
    }

   
    public async findLastClaimsByVisitor(visitorId: string ): Promise<Claim[] | null> {
        return new Promise<Claim[] | null>((resolve, reject) => {
            try {
                const visitorClaims = this.claim.filter((claim) => claim.getOwner().getId() === visitorId);
            
                let orderedVisitorClaims = visitorClaims.sort((a, b) => b.getCreatedAt().getTime() - a.getCreatedAt().getTime());
            
                const result = orderedVisitorClaims.slice(0, 5);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        })
    }


    public async findLast5Claims(): Promise<Claim[] | null> {
        return new Promise<Claim[] | null>((resolve, reject) => {
            try {

                const allClaims = this.claim.sort((a, b) => b.getCreatedAt().getTime() - a.getCreatedAt().getTime());
    
                const result = allClaims.slice(0, 5);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        })
    }


}

export {ClaimRepository};
export default new ClaimRepository();