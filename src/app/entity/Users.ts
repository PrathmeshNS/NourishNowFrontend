import { ReviewStatus } from "../enums/ReviewStatus";
import { UserRole } from "../enums/UserRole";

export interface Users{
    id:number,
	name:string,
	email:string,
	password:string,
	address:string,
	registrationNo:string,
    dateOfJoining:string,
	contactNo:string,
	website:string,
	role:UserRole,
	status:ReviewStatus
}