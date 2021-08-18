export interface RoomData {
    RoomID:number;
    Name:string;
}
export interface Message{
    MessageID:number;
    RoomID:number;
    UserName:string;
    UserID:number;
    ToUserID:number | null;
    Text:string;
    TimeStamp:Date;
    Color:string;
}