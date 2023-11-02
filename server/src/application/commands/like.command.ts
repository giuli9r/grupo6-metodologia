export class likeCommand {
  private readonly userId: string;
  private readonly claimId: string;
  private readonly visitorPin: string;

  constructor(
    userId: string,
    claimId: string,
    visitorPin: string,
  ) {
    this.userId = userId;
    this.claimId = claimId;
    this.visitorPin = visitorPin;
  }

  getUserId(): string {
    return this.userId;
  }

  getClaimId(): string {
    return this.claimId;
  }

  getVisitorPin(): string {
    return this.visitorPin;
  }

  toPrimitives() {
    return {
      userId: this.userId,
      claimId: this.claimId,
    };
  }
}

export default likeCommand;