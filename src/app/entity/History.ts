import { Users } from "./Users"

export interface History{
    hId: number,
    time: string,
    date: string,
    typeOfProviding: string
    
    hotelUsers: Users
    
    ngoUsers:Users
}