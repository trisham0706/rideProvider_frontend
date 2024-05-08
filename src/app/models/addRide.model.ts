import { Time } from "@angular/common";

export interface AddRide{

    tripId: string;
    creatorUserId: string;
    vehicleId: string;
    rideDate: Date;
    rideTime: Time;
    rideStatus: string;
    noOfSeat: number;
    seatsFilled: number;
    fromLoc: string;
    toLoc: string;

}