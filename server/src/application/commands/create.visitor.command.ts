export class CreateVisitorCommand {
    private readonly id: string ;
    private readonly ip: string ;
    private readonly nickname: string ;

    constructor (
        id: string,
        ip: string,
        nickname : string
    )
{ 
    this.id = id;
    this.ip = ip;
    this.nickname = nickname;
}
getId(): string{
    return this.id
}
getIp(): string{
    return this.ip
}
getNickName(): string{
    return this.nickname
}
}