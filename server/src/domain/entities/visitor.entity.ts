import { v4 } from 'uuid';

class Visitor {
    private id: string;
    private ip : string;
    private nickname : string;
    private pin: string;

    private constructor(
        id : string,
        ip : string,
        nickname : string,
        pin: string
    ) {
        this.id = id; 
        this.ip=ip ;  
        this.nickname = nickname;
        this.pin= pin;
    }

    public static create(
        ip : string ,
        nickname : string ,
        pin:string,
    ):Visitor {
        return new Visitor(
            v4(),
            ip,
            nickname,
            pin
        );
    }
    
    public validatePin(enteredPin:string): boolean
    {        
      return this.pin === enteredPin;
    }

    public getIp(): string {
        return this.ip;
    }

    public changeNickName(nickname: string): void {
        this.nickname = nickname;
    }

    public getId(){
        return  this.id;
    }

    public getNickName(){
        return   this.nickname;
    }

    public getPin(){
        return this.pin;
    }
}

export default Visitor;