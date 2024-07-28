import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';
import { BookingDocument } from '../@types';

export const bookingSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  user_name: { type: String, required: true },
  user_email: { type: String, required: true },
  user_phone: { type: String, required: true },
  retreat_id: { type: String, required: true },
  retreat_title: { type: String, required: true },
  retreat_location: { type: String, required: true },
  retreat_price: { type: Number, required: true },
  retreat_duration: { type: Number, required: true },
  payment_details: { type: String, required: true },
  booking_date: { type: Date, default: Date.now }
});

bookingSchema.plugin(paginate);

export const Bookings = mongoose.model<
  BookingDocument,
  mongoose.PaginateModel<BookingDocument>
>('Bookings', bookingSchema, 'bookings');
