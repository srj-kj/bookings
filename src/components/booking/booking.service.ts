import { NewBooking } from '../../models/@types';
import { addBooking } from '../../models/bookings';
import { Bookings } from '../../models/bookings/bookings';
import {
  badImplementationException,
  HttpException,
} from '../../utils/apiErrorHandler';

export const createBooking = async (newBooking: NewBooking) => {
  let error: Error | HttpException | undefined, data;
  try {
    
    data = await addBooking(newBooking);
    return Promise.resolve(data);
  } catch (err) {
    error = err instanceof Error ? err : badImplementationException(err);
  }
  
  if (error) {
    console.error(error);
    return Promise.reject(error);
  } 
};
