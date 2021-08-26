export const SET_USER_DATA = "SET_USER_DATA";
export const SIGN_IN_USER = "SIGN_IN_USER";

export const signInUser = (userID:number,firstName:string, lastName:string, userName:string) =>{
    return {
        type: "SIGN_IN_USER",
        userID,
        firstName,
        lastName,
        userName,
    }
}