export interface IUser{
    username: string,
    avatar: string,
}
export interface IUserResponse{
    id: number;
    username: string;
    avatar: string;
}
export interface ITweet {
    id: number,
    tweet: string,
    user: {
            id: number,
            avatar: string,
            username: string
        }
}
export interface ITweetPost{
    userId: number,
    tweet: string,
}