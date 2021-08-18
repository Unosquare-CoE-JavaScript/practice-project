import {Message, RoomData} from "./models/Room";

export const roomList:Array<RoomData> = [
    {
        RoomID:1,
        Name:'General'
    },
    {
        RoomID:2,
        Name:'Class room'
    },
    {
        RoomID:3,
        Name:'Work'
    },
    {
        RoomID:4,
        Name:'Room 4'
    },
    {
        RoomID:5,
        Name:'Room 5'
    }
];

export const messagesList:Array<Message> =[

    {
        MessageID:1,
        RoomID:1,
        UserID:1,
        UserName:"George",
        ToUserID:null,
        Text:"Hello Everyone!!",
        TimeStamp:new Date(),
        Color:'red'
    },
    {
        MessageID:2,
        RoomID:1,
        UserID:2,
        UserName:"Natalie",
        ToUserID:null,
        Text:"Whats up guys!!",
        TimeStamp:new Date(),
        Color:'blue'
    },
    {
        MessageID:3,
        RoomID:1,
        UserID:3,
        UserName:"Hugo", // me
        ToUserID:null,
        Text:"Hi!",
        TimeStamp:new Date(),
        Color:'yellow'
    },
    {
        MessageID:4,
        RoomID:1,
        UserID:3,
        UserName:"Hugo", // me
        ToUserID:null,
        Text:"How are you guys?",
        TimeStamp:new Date(),
        Color:'yellow'
    }
    // ,
    // {
    //     MessageID:4,
    //     RoomID:2,
    //     UserID:3,
    //     UserName:"Hugo", // me
    //     ToUserID:null,
    //     Text:"Hi!",
    //     TimeStamp:new Date(),
    //     Color:'yellow'
    // }

]