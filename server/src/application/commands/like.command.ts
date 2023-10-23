export class likeCommand {
    private readonly userId: string;
    private readonly claimId: string;
  
    constructor(userId: string, claimId: string) {
        this.userId = userId;
        this.claimId = claimId;
      }
      
      getUserId(): string {
        return this.userId;
      }
  
      getClaimId(): string {
        return this.claimId;
      }
  
      toPrimitives() {
        return {
          userId: this.userId,
          claimId: this.claimId,
        };
      }
  }
  
  export default likeCommand;