import { Retreats } from "./retreat";


export const getRetratsWithFilter = async (limit: number, offset?: number) => {
    try {
      const retreats = await Retreats.paginate( { offset, limit });
      return Promise.resolve(retreats);
    } catch (err) {
      return Promise.reject(err);
    }
  };