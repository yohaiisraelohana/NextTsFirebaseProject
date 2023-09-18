interface PostInt {
    id? : string;
    title : string;
    body : string;
    userId? : number;
    tags? : string[];
    reactions? : number;
}

interface ValidPost {
    valid:boolean;
    message:string;
}