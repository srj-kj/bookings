import { ClientSession } from "mongoose";
import { NewBooking } from "../@types";
import { Bookings } from "./bookings";
import { HttpException } from "../../utils/apiErrorHandler";


export const addBooking = async (booking: NewBooking, session?: ClientSession | null | undefined) => {
    try {
      let exist = await Bookings.findOne({user_id:booking.user_id, retreat_id:booking.retreat_id})
      if (exist) throw new HttpException(409,"Retreat already Booked")
      const newBooking = new Bookings(booking);
      await newBooking.save({session});
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  };