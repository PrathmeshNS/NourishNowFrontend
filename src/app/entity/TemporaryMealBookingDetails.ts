import { MealBookingStatus } from "../enums/MealBookingStatus";
import { AvailableFood } from "./AvailableFood";
import { Users } from "./Users";

export interface TemporaryMealBookingDetails{
    tmdId: number,
    mealBookingStatus: MealBookingStatus,
    
    food: AvailableFood,
    
    ngoUsers:Users
}