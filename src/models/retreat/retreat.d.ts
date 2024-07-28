import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';
import { RetreatDocument } from '../@types';

export const retreatSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Number, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
  condition: { type: String, required: true },
  image: { type: String, required: true },
  tag: { type: [String], required: true },
  duration: { type: Number, required: true },
});

retreatSchema.plugin(paginate);

export const Retreats = mongoose.model<
  RetreatDocument,
  mongoose.PaginateModel<RetreatDocument>
>('Retreats', retreatSchema, 'retreats');
