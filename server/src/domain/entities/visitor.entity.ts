import { v4 } from 'uuid';

class Visitor {
    private id: string;
    private ip : string;
    private nickname : string;

    private constructor(
        id : string,
        ip : string,
        nickname : string
    )
        
    {
        this.id = id; 
        this.ip=ip ;  
        this.nickname = nickname;
    }
    
    public static create(
    ip  :string ,
        nickname :string ,
    ):Visitor {
        return new Visitor(
            v4(),
            ip,
            nickname
        );
    }
    

    public chageNickName(nickname: string): void {
        this.nickname = nickname;
    }

    public getId(){
        return  this.id;
    }

    public getNickName(){
        return   this.nickname;
    }
}

export default Visitor;