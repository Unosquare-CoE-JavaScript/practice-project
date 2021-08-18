import {messagesList} from "../dummy-data";
import {Message} from "../models/Room";

export const fetchMessages = async (): Promise<Array<Message>> => {

    //Change to your endpoint url
    const response = await fetch('https://animechan.vercel.app/api/quotes');
    //Uncomment when the API is ready

    // const resData = await response.json();

    if (response.ok) {
        // return resData;
        return messagesList as Array<Message>;
    } else {
        throw new Error("Something went wrong! :(")
    }


}