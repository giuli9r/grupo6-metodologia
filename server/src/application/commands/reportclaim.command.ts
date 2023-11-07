export class ReportClaimCommand {
  private readonly claimId: string;
  private readonly cloneOfId: string;

  constructor(claimId: string, cloneOfId: string, ) {
    this.cloneOfId = cloneOfId;
    this.claimId = claimId;
  }

  getClaimId(): string {
    return this.claimId;
  }

  getCloneOfId(): string {
    return this.cloneOfId;
  }
}

export default ReportClaimCommand;