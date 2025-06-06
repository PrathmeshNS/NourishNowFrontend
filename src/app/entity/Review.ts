import { Users } from "./Users"

export interface Review{
    reviewId: number,
    description: string,
    start: DoubleRange
    
    ngoUser: Users
    
    hotelUsers:Users
}