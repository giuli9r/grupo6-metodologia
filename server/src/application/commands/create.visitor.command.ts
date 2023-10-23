export class CreateVisitorCommand {
    private readonly ip: string ;
    private readonly nickname: string ;
    
    constructor (
        ip: string,
        nickname : string
        )
        { 
            this.ip = ip;
            this.nickname = nickname;
        }

        getIp(): string{
            return this.ip
        }
        getNickName(): string{
            return this.nickname
        }
    }