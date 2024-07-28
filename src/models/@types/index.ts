import mongoose from 'mongoose';
export type NewRetreat  = {
    title: string;
  description: string;
  date: number;
  location: string;
  price: number;
  type: string;
  condition: string;
  image: string;
  tag: string[];
  duration: number;
  };
export type RetreatDocument = mongoose.Document & NewRetreat;

export type NewBooking  = {
  user_id: number;
  user_name: string;
  user_email: string;
  user_phone: string;
  retreat_id: mongoose.Schema.Types.ObjectId;
  retreat_title: string;
  retreat_location: string;
  retreat_price: number;
  retreat_duration: number;
  payment_details: string;
  booking_date?: Date;
  };
export type BookingDocument = mongoose.Document & NewBooking;