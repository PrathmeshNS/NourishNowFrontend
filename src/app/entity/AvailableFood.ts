import { MapType } from "@angular/compiler";
import { Users } from "./Users";

export interface AvailableFood{
    aId: number,
    dateTime: string,
    foodItem: string[],
    approxPersonCanEat: number,
    typeOfProviding: string
    
    hotelUsers:Users
}