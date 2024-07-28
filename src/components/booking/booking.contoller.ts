import { Request, Response } from 'express';
import * as service from './booking.service';
import { Bookings } from '../../models/bookings/bookings';

export const addBookings = async (req: Request, res: Response) => {
  try {
    const {
      user_id,
      user_name,
      user_email,
      user_phone,
      retreat_id,
      retreat_title,
      retreat_location,
      retreat_price,
      retreat_duration,
      payment_details,
    } = req.body;
    
    const newBooking = new Bookings({
      user_id,
      user_name,
      user_email,
      user_phone,
      retreat_id,
      retreat_title,
      retreat_location,
      retreat_price,
      retreat_duration,
      payment_details,
    });
    await service.createBooking(newBooking);

    res.status(201).json({ message: 'Booking created successfully' });
  } catch (error) {
    res.status(500).json({ error });
  }
};
