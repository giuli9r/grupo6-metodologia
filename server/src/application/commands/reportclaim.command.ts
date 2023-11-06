export class ReportClaimCommand {
  private readonly id: string;
  private readonly descripcion: string;
  private readonly visitorId: string;
  private readonly claimId: string;
  private readonly cloneOfId: string;

  constructor(id: string, descripcion: string, visitorId: string, claimId: string, cloneOfId: string, ) {
    this.id = id;
    this.descripcion = descripcion;
    this.visitorId = visitorId;
    this.cloneOfId = cloneOfId;
    this.claimId = claimId;
  }

  getId(): string {
    return this.id;
  }

  getDescripcion(): string {
    return this.descripcion;
  }

  getVisitorId(): string {
    return this.visitorId;
  }

  getClaimId(): string {
    return this.claimId;
  }

  getCloneOfId(): string {
    return this.cloneOfId;
  }
}

export default ReportClaimCommand;