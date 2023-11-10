export class CreateVisitorCommand {
    private readonly ip: string ;
    private readonly nickname: string ;
    private readonly pin: string ;
    
    constructor (
        ip: string,
        nickname : string,
        pin : string
        )
        { 
            this.ip = ip;
            this.nickname = nickname;
            this.pin = pin;
        }

        getIp(): string{
            return this.ip
        }
        getNickName(): string{
            return this.nickname
        }

        getPIN(): string{
            return this.pin
        }

    }

    export default CreateVisitorCommand;