export interface IUser {
    id:string
    firstName:string
    lastName:string
    status:string
    comments:string[]
    score:number | null
    rank:number | null
    videoUrl?:string
    poster?:string
}