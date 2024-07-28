import { NextFunction, Request, Response } from "express";
import axios from 'axios';

export const getRetreats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const RETREATS_API_URL = process.env.RETREATS_API;
    
    const { filter, location, search, page, limit } = req.query;
    let url = `${RETREATS_API_URL}?page=${page || 1}&limit=${limit || 10}`;

    if (filter) {
      url += `&filter=${filter}`;
    }

    if (location) {
      url += `&location=${location}`;
    }

    if (search) {
      url += `&search=${search}`;
    }

    const response = await axios.get(url);
    return res.status(200).json({ success: true, data: response.data });
  } catch (err) {
    console.error(err);
    return next(err);
  }
};
